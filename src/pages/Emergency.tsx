import type React from "react"
import { motion } from "framer-motion"

const Emergency: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Emergency Contact
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto bg-red-100 p-6 rounded-lg shadow-lg text-center"
      >
        <p className="mb-4">
          If you're experiencing a medical emergency, please call your local emergency number immediately.
        </p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "tel:911")}
        >
          Call Emergency Services
        </button>
      </motion.div>
    </div>
  )
}

export default Emergency

