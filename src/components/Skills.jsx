import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Management Skills",
    "Creativity",
    "Digital Marketing",
    "Negotiation",
    "Critical Thinking",
    "Leadership"
  ];
  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-300 list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
}
