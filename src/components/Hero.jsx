import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-2">Muhammad Mudasir</h1>
        <p className="text-xl text-gray-300 mb-6">Executive Officer</p>
        <a href="/Mudasir-Resume.pdf" download className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
