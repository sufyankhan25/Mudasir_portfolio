import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-300">
        📞 <strong>0312-2897559</strong><br />
        📧 muhammadmudasir051@gmail.com<br />
        📍 H#C-81, M.T Khan road, Sultanabad, Karachi
      </p>
    </motion.section>
  );
}
