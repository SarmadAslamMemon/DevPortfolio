import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center text-center relative">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 gradient-text tracking-tight">
        Sarmad Aslam
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-soft-gray mb-8 min-h-[2.5em]">
        <Typewriter
          words={['Android Developer', 'Full-Stack Engineer', 'AI Enthusiast']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-soft-gray">
        I build accessible, high-performance Android and web applications. Passionate about crafting robust, scalable, and user-centric digital experiences.
      </p>
      <button
        className="px-8 py-4 bg-android-green hover:bg-android-green/80 rounded-full font-semibold text-deep-blue shadow-lg transition-all text-lg"
        onClick={() => {
          const section = document.getElementById('projects');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        View My Work
      </button>
    </section>
  );
}
