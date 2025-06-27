import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TABS = [
  { label: "Apps", key: "apps" },
  { label: "Web", key: "web" },
  { label: "Scripts", key: "scripts" },
];

const projects = [
  {
    title: "Get Listings (AI Real Estate App)",
    description: "AI-powered Android app for real estate agents. Predicts property sales and generates high-quality leads.",
    tech: ["Kotlin", "Retrofit", "Android Studio", "MVVM", "Firebase", "AI", "REST APIs"],
    playStore: "https://play.google.com/store/apps/details?id=com.propdeals.get_listings&pcampaignid=web_share",
    website: "https://www.getlistings.com.au/",
    screenshots: ["/get-listings-1.jpg", "/get-listings-2.jpg"],
    type: "apps"
  },
  {
    title: "Wasooli (Billing & Invoicing App)",
    description: "Comprehensive native Android app for ISPs and cable operators to manage billing, invoicing, and customer networks.",
    tech: ["Java", "Repository Pattern", "Firebase", "Fintech"],
    playStore: "https://play.google.com/store/apps/details?id=com.ll_user_side_wasooli",
    website: "https://www.wasooli.pk/",
    screenshots: ["/wasooli-1.jpg", "/wasooli-2.jpg"],
    type: "apps"
  },
  // Add more projects for 'web' and 'scripts' as needed
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("apps");
  const filteredProjects = projects.filter(p => p.type === activeTab);

  return (
    <section id="projects" className="py-24 bg-amoled">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 gradient-text text-center">Projects</h2>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-2 text-lg font-semibold rounded-full transition-colors duration-200
                ${activeTab === tab.key ? 'bg-android-green text-deep-blue shadow-lg' : 'bg-soft-blue text-off-white hover:bg-android-green/20'}`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-android-green"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center text-soft-gray text-lg py-12">No projects yet in this category.</div>
            )}
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(48,209,88,0.12)" }}
                className="bg-soft-blue rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all cursor-pointer group"
              >
                <div className="aspect-[4/3] bg-amoled rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                  <img src={project.screenshots[0]} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-off-white mb-2">{project.title}</h3>
                <p className="text-soft-gray mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-android-green/10 text-android-green rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-android-green text-deep-blue rounded-full font-medium text-sm hover:bg-android-green/90 transition">
                      <ExternalLink className="w-4 h-4 mr-1" /> Play Store
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-white/10 text-off-white rounded-full font-medium text-sm hover:bg-white/20 transition">
                      Website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
