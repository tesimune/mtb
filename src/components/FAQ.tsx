import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What are the early signs of pregnancy?',
    answer:
      'Early signs include missed periods, nausea (morning sickness), fatigue, breast tenderness, frequent urination, mood swings, and food cravings or aversions.',
  },
  {
    question: 'What foods should I avoid during pregnancy?',
    answer:
      'Avoid raw or undercooked meats, unpasteurized dairy products, raw seafood, high-mercury fish (like shark and swordfish), processed meats (unless heated properly), excessive caffeine, and alcohol.',
  },
  {
    question: 'How much weight should I gain during pregnancy?',
    answer:
      'Weight gain varies based on pre-pregnancy BMI. Generally:\n- Underweight (BMI <18.5): 28–40 lbs (12.5–18 kg)\n- Normal weight (BMI 18.5–24.9): 25–35 lbs (11.5–16 kg)\n- Overweight (BMI 25–29.9): 15–25 lbs (7–11.5 kg)\n- Obese (BMI ≥30): 11–20 lbs (5–9 kg).',
  },
  {
    question: 'Is it safe to exercise while pregnant?',
    answer:
      'Yes! Moderate exercise like walking, swimming, prenatal yoga, and stretching is beneficial. Avoid high-impact sports, heavy lifting, and activities that risk falls. Always consult your doctor before starting an exercise routine.',
  },
  {
    question: 'What prenatal vitamins should I take?',
    answer:
      'Essential prenatal vitamins include:\n- Folic acid (400-800 mcg daily) – Prevents birth defects\n- Iron (27 mg daily) – Supports blood supply\n- Calcium (1,000 mg daily) – Strengthens bones\n- Vitamin D, Omega-3, and Iodine – Support brain and bone development.',
  },
  {
    question: 'How can I manage morning sickness?',
    answer:
      'To manage morning sickness:\n- Eat small, frequent meals\n- Avoid spicy or greasy foods\n- Stay hydrated and drink ginger tea\n- Get fresh air and rest\n- Vitamin B6 supplements may help (consult your doctor).',
  },
  {
    question: 'What are the warning signs of complications during pregnancy?',
    answer:
      'Contact your doctor immediately if you experience:\n- Severe abdominal pain or cramps\n- Heavy bleeding or fluid leakage\n- Persistent vomiting and dehydration\n- Severe headaches or vision changes\n- Sudden swelling in hands/face (sign of preeclampsia)\n- Decreased baby movement.',
  },
  {
    question: 'Can I travel while pregnant?',
    answer:
      'Yes, but the safest time is the second trimester (weeks 14-28). Avoid long trips after 36 weeks. Always wear a seatbelt, stay hydrated, and walk around during long flights to prevent blood clots.',
  },
  {
    question: 'How do I prepare for labor and delivery?',
    answer:
      'To prepare for labor and delivery:\n- Take childbirth education classes\n- Pack a hospital bag with essentials\n- Discuss your birth plan with your doctor\n- Know the signs of labor (contractions, water breaking)\n- Arrange transportation to the hospital\n- Stay calm and practice breathing techniques.',
  },
  {
    question: 'When should I contact my doctor during pregnancy?',
    answer:
      'Contact your doctor if you experience:\n- Severe pain or cramping\n- Heavy bleeding\n- Decreased fetal movement\n- High fever\n- Persistent vomiting\n- Signs of preeclampsia (severe headaches, vision changes, swelling in hands/face).',
  },
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 3);

  return (
    <section id='faq' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto'>
          {visibleFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className='mb-4 rounded-lg shadow-md overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className='w-full text-left p-4 bg-purple-50 hover:bg-purple-100 transition duration-300'
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <h3 className='text-lg font-semibold'>{faq.question}</h3>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='p-4 bg-white'
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <button
            onClick={() => setShowMore(showMore ? false : true)}
            className='mt-4 w-full text-center text-purple-600 font-semibold hover:underline'
          >
            {showMore ? <>Click to see less</> : <>Click to see more</>}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
