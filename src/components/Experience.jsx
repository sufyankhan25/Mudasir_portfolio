import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <h3 className="text-xl font-semibold text-blue-400">Executive Officer – Crescent Care Pvt Ltd</h3>
      <p className="text-gray-400 text-sm">Karachi, Pakistan | 2022 – Present</p>
      <ul className="list-disc list-inside mt-4 text-gray-300 space-y-1">
        <li>Claims processing for IPD/OPD across Pakistan</li>
        <li>Email and phone query resolution</li>
        <li>Client report preparation</li>
        <li>Claims validation and recovery handling</li>
      </ul>
    </motion.section>
  );
}
