import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const skillStacks = [
  {
    title: "Android App Development",
    skills: [
      { name: "Kotlin", icon: "simple-icons:kotlin", color: "from-purple-500 to-purple-700" },
      { name: "XML", icon: "vscode-icons:file-type-xml", color: "from-blue-400 to-blue-600" },
      { name: "Jetpack Compose", icon: "simple-icons:jetpackcompose", color: "from-pink-500 to-pink-700" },
      { name: "MVVM", icon: "mdi:layers-triple", color: "from-android-green to-green-600" },
      { name: "Room DB", icon: "simple-icons:sqlite", color: "from-blue-500 to-blue-700" },
      { name: "MySQL", icon: "simple-icons:mysql", color: "from-blue-500 to-blue-700" },
      { name: "Retrofit", icon: "mdi:api", color: "from-blue-400 to-blue-600" }
    ]
  },
  {
    title: "Cross-Platform App Developement",
    skills: [
      { name: "Flutter", icon: "simple-icons:flutter", color: "from-blue-400 to-blue-600" },
      { name: "Dart", icon: "simple-icons:dart", color: "from-blue-500 to-blue-700" },
      { name: "Firebase", icon: "simple-icons:firebase", color: "from-orange-500 to-yellow-500" },
      { name: "Supabase", icon: "simple-icons:supabase", color: "from-green-400 to-green-700" },
      { name: "iOS", icon: "mdi:apple", color: "from-gray-400 to-gray-700" },
      { name: "Android", icon: "simple-icons:android", color: "from-android-green to-green-500" },
      { name: "Desktop", icon: "mdi:monitor", color: "from-blue-700 to-blue-900" }
    ]
  },
  {
    title: "Backend & Deployment",
    skills: [
      { name: "Node.js", icon: "simple-icons:nodedotjs", color: "from-green-600 to-green-800" },
      { name: "Spring Boot", icon: "simple-icons:springboot", color: "from-green-600 to-green-800" },
      { name: "MongoDB", icon: "simple-icons:mongodb", color: "from-green-700 to-green-900" },
      { name: "AWS", icon: "simple-icons:amazonaws", color: "from-orange-600 to-yellow-600" },
      { name: "GCP", icon: "simple-icons:googlecloud", color: "from-blue-400 to-blue-700" },
      { name: "Oracle", icon: "simple-icons:oracle", color: "from-red-500 to-red-700" },
      { name: "GitHub", icon: "simple-icons:github", color: "from-gray-700 to-gray-900" },
      { name: "Bitbucket", icon: "simple-icons:bitbucket", color: "from-blue-700 to-blue-900" }
    ]
  }
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
        <div className="space-y-16">
          {skillStacks.map((stack, stackIdx) => (
            <div key={stack.title}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-android-blue">{stack.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stack.skills.map((skill, index) => (
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
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(48, 209, 88, 0.4)"
                      }}
                    >
                      <Icon icon={skill.icon} width="2.5em" height="2.5em" />
                    </motion.div>
                    <h4 className={`font-semibold text-gray-300`}>{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
