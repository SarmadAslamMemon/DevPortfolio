import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Kotlin", icon: "🤖", color: "from-android-blue to-blue-600" },
  { name: "Firebase", icon: "🔥", color: "from-orange-500 to-red-600" },
  { name: "Room DB", icon: "🗄️", color: "from-purple-500 to-purple-700" },
  { name: "MVVM", icon: "🏗️", color: "from-android-green to-green-600" },
  { name: "XML", icon: "📝", color: "from-yellow-500 to-orange-500" },
  { name: "AWS", icon: "☁️", color: "from-blue-500 to-blue-700" },
  { name: "Dagger", icon: "🗡️", color: "from-red-500 to-pink-600" },
  { name: "Play Console", icon: "📱", color: "from-android-blue to-android-green" },
  { name: "CI/CD", icon: "⚙️", color: "from-gray-600 to-gray-800" }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-surface to-amoled" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-icon text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg`}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(48, 209, 88, 0.4)"
                }}
              >
                <span>{skill.icon}</span>
              </motion.div>
              
              <h3 className={`font-semibold ${
                skill.name === 'Kotlin' ? 'text-android-blue' :
                skill.name === 'Firebase' ? 'text-orange-400' :
                skill.name === 'Room DB' ? 'text-purple-400' :
                skill.name === 'MVVM' ? 'text-android-green' :
                skill.name === 'XML' ? 'text-yellow-400' :
                skill.name === 'AWS' ? 'text-blue-400' :
                skill.name === 'Dagger' ? 'text-red-400' :
                skill.name === 'Play Console' ? 'text-android-blue' :
                'text-gray-400'
              }`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
