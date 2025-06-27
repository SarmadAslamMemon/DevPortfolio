import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import CursorEffects from "@/components/cursor-effects";
import { SidebarNavigation } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-amoled text-white overflow-x-hidden cursor-none">
      <SidebarNavigation />
      <CursorEffects />
      <div className="md:ml-64">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
