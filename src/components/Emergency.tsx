import type React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaHospital, FaEnvelope } from 'react-icons/fa';

const Emergency: React.FC = () => {
  return (
    <section id='emergency' className='py-20 bg-red-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
          Emergency Contact
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            className='bg-white p-6 rounded-lg shadow-lg text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaPhone className='text-5xl text-red-500 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Call Emergency</h3>
            <p className='text-gray-600 mb-4 text-sm'>
              Immediate assistance available
            </p>
            <a
              href='tel:+2348181600465'
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
            >
              Call Now
            </a>
          </motion.div>
          <motion.div
            className='bg-white p-6 rounded-lg shadow-lg text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHospital className='text-5xl text-red-500 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Hospital Location</h3>
            <p className='text-gray-600 mb-4 text-sm'>
              23 Zaria Bypass, Jos 930105, Plateau
            </p>
            <a
              href='https://www.google.com/maps/search/?api=1&query=23+Zaria+Bypass,+Jos+930105,+Plateau'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
            >
              View Map
            </a>
          </motion.div>
          <motion.div
            className='bg-white p-6 rounded-lg shadow-lg text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaEnvelope className='text-5xl text-red-500 mx-auto mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Email Support</h3>
            <p className='text-gray-600 mb-4 text-sm'>
              Contact us for inquiries
            </p>
            <a
              href='mailto:info@bhuth.org.ng'
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
