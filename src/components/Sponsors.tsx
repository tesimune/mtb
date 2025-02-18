import type React from "react"
import { motion } from "framer-motion"

const sponsors = [
  {
    name: "NYSC Secretariat",
    logo: "/images/1.png",
    description: "Supporting maternal health initiatives",
  },
  {
    name: "Bingham University Teaching Hospital",
    logo: "/images/3.png",
    description: "Expert medical care partner",
  },
  {
    name: "Love & Lactation",
    logo: "/images/mtb-black.png",
    description: "Breastfeeding support and education",
  },
  {
    name: "Digital Health Initiative",
    logo: "/images/2.png",
    description: "Technology partner",
  },
]

const Sponsors: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading healthcare institutions and organizations to provide you with the best pregnancy
            care and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">{sponsor.name}</h3>
              <p className="text-gray-600 text-sm">{sponsor.description}</p> */}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Want to become a partner?</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors

