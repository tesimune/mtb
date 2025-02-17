import type React from "react"
import { motion } from "framer-motion"
import { FaBabyCarriage, FaComments, FaHeartbeat, FaBook } from "react-icons/fa"

const features = [
  {
    icon: <FaBabyCarriage />,
    title: "Pregnancy Tracker",
    description: "Track your pregnancy week by week with personalized insights.",
  },
  {
    icon: <FaComments />,
    title: "AI Chat Support",
    description: "Get instant answers to your pregnancy-related questions.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Monitoring",
    description: "Monitor your health and get timely reminders for check-ups.",
  },
  {
    icon: <FaBook />,
    title: "Pregnancy Guide",
    description: "Access a comprehensive guide for each stage of your pregnancy.",
  },
]

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-50 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

