import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {
  const skillData = {
    labels: ['Management', 'Creativity', 'Digital Marketing', 'Negotiation', 'Critical Thinking', 'Leadership'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 75, 80, 88, 87],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderRadius: 5
    }]
  };

  const skillOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Muhammad Mudasir</h1>
          <p className="text-xl text-gray-300">Executive Officer | Backend Ops Specialist</p>
          <a
            href="/Mudasir-Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full text-lg font-medium"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg">
            I'm a motivated Executive Officer with strong backend operational skills and over 2 years of experience in claims, evaluations, and support services. Known for my leadership, critical thinking, and digital mindset, I aim to create impact in high-performing teams.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="w-full max-w-2xl mx-auto">
            <Bar data={skillData} options={skillOptions} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-gray-800 p-6 rounded shadow-lg text-left">
            <h3 className="text-2xl font-semibold text-blue-400">Executive Officer - Crescent Care Pvt Ltd</h3>
            <p className="text-sm text-gray-400 mb-4">Karachi, 2022 – Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Claims processing for IPD/OPD (Panel & Non-Panel hospitals)</li>
              <li>Email and phone query resolution nationwide</li>
              <li>Client report creation and performance tracking</li>
              <li>Claims validation and recovery management</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex flex-col items-center gap-3 text-gray-300 text-lg mb-8">
            <div className="flex items-center gap-2"><FaPhone /> 0312-2897559</div>
            <div className="flex items-center gap-2"><FaEnvelope /> muhammadmudasir051@gmail.com</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt /> H#C-81, M.T Khan Road, Sultanabad, Karachi</div>
          </div>

          <form className="max-w-md mx-auto text-left space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" required />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" required />
            <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-700 text-white" rows="5" required></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500">© 2025 Muhammad Mudasir. All rights reserved.</footer>
    </div>
  );
}
