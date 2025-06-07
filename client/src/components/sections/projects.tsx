import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ShopEasy Android",
    description: "Modern e-commerce app with advanced features like real-time inventory, secure payments, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    tags: ["Kotlin", "Firebase", "Room DB", "MVVM"],
    playStore: "#",
    github: "#"
  },
  {
    title: "SocialConnect",
    description: "Feature-rich social networking app with real-time messaging, stories, and advanced privacy controls.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    tags: ["Kotlin", "Firebase", "Dagger", "XML"],
    playStore: "#",
    github: "#"
  },
  {
    title: "FitTracker Pro",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    tags: ["Kotlin", "Room DB", "AWS", "CI/CD"],
    playStore: "#",
    github: "#"
  }
];

const tagColors: Record<string, string> = {
  "Kotlin": "bg-android-blue/20 text-android-blue",
  "Firebase": "bg-android-green/20 text-android-green",
  "Room DB": "bg-purple-500/20 text-purple-400",
  "MVVM": "bg-orange-500/20 text-orange-400",
  "Dagger": "bg-red-500/20 text-red-400",
  "XML": "bg-yellow-500/20 text-yellow-400",
  "AWS": "bg-blue-500/20 text-blue-400",
  "CI/CD": "bg-pink-500/20 text-pink-400"
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-amoled" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-surface rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                rotateX: 5,
                rotateY: 5,
                z: 20
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-android-blue">
                  {project.title}
                </h3>
                
                <p className="text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary"
                      className={`${tagColors[tag]} border-0`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-android-blue hover:text-blue-400"
                    asChild
                  >
                    <a href={project.playStore} className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Play Store</span>
                    </a>
                  </Button>
                  
                  <Button
                    variant="link"
                    className="p-0 h-auto text-android-green hover:text-green-400"
                    asChild
                  >
                    <a href={project.github} className="flex items-center space-x-2">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
