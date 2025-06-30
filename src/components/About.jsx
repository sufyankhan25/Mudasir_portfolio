import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300">
        To enhance my skills in a work-related environment and learn new things
        that will make me a better professional. I want to use my talents for
        the benefit of the organization and take on challenging backend support roles.
      </p>
    </motion.section>
  );
}
