import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(10, 132, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 132, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Android Mascot */}
          <motion.div 
            className="mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="text-8xl text-android-green mb-6 float-animation"
              style={{ filter: "drop-shadow(0 10px 20px rgba(48, 209, 88, 0.3))" }}
            >
              <svg className="w-32 h-32 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I'm John Doe
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-secondary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Android Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Crafting exceptional mobile experiences with 2+ years of expertise in Kotlin, Firebase, and modern Android architecture
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              size="lg"
              className="px-8 py-4 bg-android-blue hover:bg-blue-600 rounded-full font-semibold glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-android-green text-android-green hover:bg-android-green hover:text-black rounded-full font-semibold"
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-android-blue rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-android-green rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}
