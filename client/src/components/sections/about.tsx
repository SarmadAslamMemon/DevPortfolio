import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto"
        >
          <img 
            src="/main-photo.jpg"
            alt="Sarmad Aslam - Android Developer" 
            className="rounded-2xl shadow-2xl w-64 h-64 object-cover border-4 border-deep-blue"
          />
        </motion.div>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About</h2>
          <p className="text-lg text-soft-gray mb-8 max-w-xl">
            I'm Sarmad, a passionate Android & full-stack developer based in Karachi. I love building accessible, high-performance mobile and web apps that blend thoughtful design with robust engineering. My favorite work lies at the intersection of user experience and technical excellence.
          </p>
          <ul className="space-y-3 text-base text-off-white">
            <li>• Expert in Kotlin, Jetpack Compose, and modern Android architecture</li>
            <li>• Proficient with Room DB, Retrofit, and Firebase</li>
            <li>• Skilled in scalable, maintainable codebases (MVVM, CI/CD)</li>
            <li>• Advocate for clean code, accessibility, and great UX</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
