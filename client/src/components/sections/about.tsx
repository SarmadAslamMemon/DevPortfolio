import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Expert in Kotlin and modern Android development",
    "Proficient in Room DB, Firebase, MVVM architecture",
    "Experience with XML-based UI design and stored procedures",
    "Skilled in CI/CD, AWS, Google Play Console"
  ];

  return (
    <section id="about" className="py-20 bg-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace setup" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-android-blue">
              Passionate Android Developer
            </h3>
            
            <p className="text-lg text-secondary leading-relaxed">
              With <span className="text-android-green font-semibold">2+ years of experience</span> in Android development, 
              I specialize in creating robust, scalable mobile applications that deliver exceptional user experiences.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-android-blue' : 'bg-android-green'}`} />
                  <span dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button className="px-6 py-3 bg-gradient-to-r from-android-blue to-android-green rounded-full font-semibold hover:shadow-lg transition-all">
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
