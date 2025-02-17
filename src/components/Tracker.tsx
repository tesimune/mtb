"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const Tracker: React.FC = () => {
  const [dueDate, setDueDate] = useState("")

  const calculateDueDate = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement due date calculation logic here
    setDueDate("Your due date is: January 1, 2024")
  }

  return (
    <section id="tracker" className="py-20 bg-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pregnancy Tracker</h2>
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={calculateDueDate} className="space-y-4">
            <div>
              <label htmlFor="lastPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                Last Menstrual Period
              </label>
              <input type="date" id="lastPeriod" className="w-full p-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="cycleLength" className="block text-sm font-medium text-gray-700 mb-1">
                Average Cycle Length (days)
              </label>
              <input
                type="number"
                id="cycleLength"
                className="w-full p-2 border rounded-md"
                placeholder="28"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Calculate Due Date
            </button>
          </form>
          {dueDate && (
            <motion.p
              className="mt-4 text-center text-lg font-semibold text-purple-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {dueDate}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Tracker

