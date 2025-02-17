import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 transition duration-300"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

