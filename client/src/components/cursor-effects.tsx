import { useEffect, useState } from "react";

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; life: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      try {
        if (target && (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          (target.classList && target.classList.contains('skill-icon')) ||
          (target.classList && target.classList.contains('project-card'))
        )) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      } catch (e) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
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