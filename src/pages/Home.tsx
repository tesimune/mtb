import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Mommy to Be</h1>
        <p className="text-xl mb-8 text-white">Your ultimate pregnancy companion</p>
        <div className="space-x-4">
          <Link to="/tracker" className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100">
            Pregnancy Tracker
          </Link>
          <Link to="/faq" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            FAQ
          </Link>
        </div>
      </motion.div>
    </main>
  )
}

export default Home

