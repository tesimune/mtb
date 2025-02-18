"use client"

import React from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
  onFinish: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  React.useEffect(() => {
    const timer = setTimeout(onFinish, 2000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src="/images/mtb-white.png"
          alt="Mommy to Be"
          className="w-32 h-32 mx-auto mb-4"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-white rounded-full mx-auto"
        />
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen

