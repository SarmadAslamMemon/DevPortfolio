import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { FaJava } from "react-icons/fa";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "Get Listings (AI Real Estate App)",
    description: "Revolutionize your real estate game with Get Listings – the AI-powered app that predicts property sales and generates high-quality leads. Gain a competitive edge, save time, and close more deals with real-time insights delivered straight to your phone.",
    tech: ["Kotlin", "Retrofit", "Android Studio", "MVVM", "Firebase", "AI", "REST APIs"],
    playStore: "https://play.google.com/store/apps/details?id=com.propdeals.get_listings&pcampaignid=web_share",
    website: "https://www.getlistings.com.au/",
    screenshots: [
      "src/assets/get-listings-1.jpg",
      "src/assets/get-listings-2.jpg"
    ]
  },
  {
    title: "Wasooli (Billing & Invoicing App)",
    description: "Wasooli is a comprehensive billing, invoicing, and network management app for ISPs and cable operators. It streamlines monthly collections, automates user and dealer management, handles complaints, and provides real-time analytics—all accessible via mobile and web. The app supports offline and online modes, real-time slip printing, inventory, HRM, and more.",
    tech: ["Java", "Repository Pattern", "Firebase", "Fintech"],
    playStore: "https://play.google.com/store/apps/details?id=com.ll_user_side_wasooli",
    website: "https://www.wasooli.pk/",
    screenshots: [
      "src/assets/wasooli-1.jpg",
      "src/assets/wasooli-2.jpg"
    ]
  }
];

function AdvancedScreenshots({ src1, src2, invert }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for buttery movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 14 });

  // Parallax transforms
  const rotate1 = useTransform(springX, x => invert ? 10 + x / 10 : -10 + x / 10);
  const rotate2 = useTransform(springX, x => invert ? -10 + x / 10 : 10 + x / 10);
  const y1 = useTransform(springY, y => y / 10);
  const y2 = useTransform(springY, y => y / 10);

  const handleMouseMove = e => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      className="relative w-[220px] h-[380px] md:w-[260px] md:h-[460px] cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src1}
        alt="App screenshot 1"
        className="absolute w-4/5 h-[80%] object-cover rounded-xl shadow-2xl border-2 border-white/20 left-0 top-6 z-10"
        style={{
          x: invert ? -24 : -24,
          scale: 1.05,
          rotate: rotate1,
          y: y1
        }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      />
      <motion.img
        src={src2}
        alt="App screenshot 2"
        className="absolute w-4/5 h-[80%] object-cover rounded-xl shadow-2xl border-2 border-white/20 right-0 bottom-6 z-0"
        style={{
          x: invert ? 24 : 24,
          scale: 1.05,
          rotate: rotate2,
          y: y2
        }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      />
    </div>
  );
}

function TechChip({ tech }) {
  return (
    <span className="inline-block px-3 py-1 border border-android-blue text-android-blue bg-white/10 rounded-full text-xs font-semibold mr-2 mb-2 transition-colors duration-200 hover:bg-android-blue hover:text-white cursor-pointer">
      {tech}
    </span>
  );
}

function ProjectShowcase({ project, invert = false }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 mb-24 ${invert ? 'md:flex-row-reverse' : ''}`}>  
      {/* Info Side */}
      <motion.div 
        className="flex-1 glass-effect bg-surface/70 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, x: invert ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
        <p className="mb-4 text-secondary leading-relaxed">{project.description}</p>
       
        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech && project.tech.map(tech => (
            <TechChip key={tech} tech={tech} />
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-android-blue text-white rounded-lg shadow hover:bg-blue-700 transition font-medium">
            <ExternalLink className="w-4 h-4 mr-2" /> Play Store
          </a>
          {project.website && project.website !== "" && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow hover:bg-white transition font-medium">
              Website
            </a>
          )}
        </div>
      </motion.div>
      {/* Screenshots Side */}
      <div className="flex-1 flex justify-center items-center min-h-[320px] relative group">
        <AdvancedScreenshots src1={project.screenshots[0]} src2={project.screenshots[1]} invert={invert} />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-amoled">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
        {projects.map((project, idx) => (
          <ProjectShowcase key={project.title} project={project} invert={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
