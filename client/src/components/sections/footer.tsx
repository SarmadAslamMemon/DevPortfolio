import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-surface border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © 2024 John Doe - Android Developer. Built with passion for mobile innovation.
        </motion.p>
      </div>
    </footer>
  );
}
