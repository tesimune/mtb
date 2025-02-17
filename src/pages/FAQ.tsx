import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What are common pregnancy symptoms?",
    answer:
      "Common pregnancy symptoms include missed periods, nausea, breast tenderness, fatigue, and frequent urination.",
  },
  {
    question: "How much weight should I gain during pregnancy?",
    answer:
      "The recommended weight gain during pregnancy varies based on your pre-pregnancy BMI. Generally, it's 25-35 pounds for women with a normal BMI.",
  },
  {
    question: "What foods should I avoid during pregnancy?",
    answer:
      "Avoid raw or undercooked meat, fish high in mercury, unpasteurized dairy products, and unwashed fruits and vegetables.",
  },
  // Add more FAQs here
]

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const handleToggle = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index.toString()) ? prev.filter((item) => item !== index.toString()) : [...prev, index.toString()],
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Frequently Asked Questions
      </motion.h1>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-4"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-4 bg-purple-100 hover:bg-purple-200 rounded-t-md"
          >
            {faq.question}
          </button>
          {expandedItems.includes(index.toString()) && (
            <div className="p-4 bg-white border border-purple-100 rounded-b-md">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default FAQ

