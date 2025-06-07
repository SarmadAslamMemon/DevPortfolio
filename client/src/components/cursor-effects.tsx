import { useEffect, useState } from "react";

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; life: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle effect on movement
      if (Math.random() > 0.95) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          life: 100
        };
        setParticles(prev => [...prev.slice(-10), newParticle]);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('button, a, .skill-icon, .project-card, input, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({ ...p, life: p.life - 2 }))
            .filter(p => p.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className={`cursor-dot ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      <div 
        className={`cursor-outline ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />

      {/* Interactive Background Particles */}
      <div className="interactive-bg">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="bg-particle"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.life / 100,
              transform: `scale(${particle.life / 100})`
            }}
          />
        ))}
      </div>
    </>
  );
}