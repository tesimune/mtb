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
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Pregnancy Tracker
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={calculateDueDate}
        className="max-w-md mx-auto space-y-4"
      >
        <div>
          <label htmlFor="bloodGroup" className="block mb-2">
            Blood Group
          </label>
          <select id="bloodGroup" className="w-full p-2 border rounded">
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div>
          <label htmlFor="genotype" className="block mb-2">
            Genotype
          </label>
          <select id="genotype" className="w-full p-2 border rounded">
            <option value="">Select genotype</option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="SS">SS</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight" className="block mb-2">
            Weight (kg)
          </label>
          <input type="number" id="weight" placeholder="Enter your weight" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="height" className="block mb-2">
            Height (cm)
          </label>
          <input type="number" id="height" placeholder="Enter your height" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="lastPeriod" className="block mb-2">
            Last Menstrual Period
          </label>
          <input type="date" id="lastPeriod" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
          Calculate Due Date
        </button>
      </motion.form>
      {dueDate && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-6 text-lg font-semibold">
          {dueDate}
        </motion.p>
      )}
    </div>
  )
}

export default Tracker

