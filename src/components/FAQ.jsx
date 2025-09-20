import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: '¿Cómo puedo reservar un viaje?',
      answer: 'Puedes reservar directamente a través de nuestra página web, contactarnos por teléfono o visitar nuestras oficinas.'
    },
    {
      question: '¿Qué incluyen los paquetes de viaje?',
      answer: 'Nuestros paquetes incluyen vuelos, alojamiento, traslados y seguro de viaje. Algunos también incluyen excursiones y actividades.'
    },
    {
      question: '¿Ofrecen opciones de pago flexibles?',
      answer: 'Sí, ofrecemos diferentes planes de pago y opciones de financiación para adaptarnos a tus necesidades.'
    },
    {
      question: '¿Qué pasa si necesito cancelar mi viaje?',
      answer: 'Dependiendo del tipo de reserva y la antelación de la cancelación, aplicarán nuestras condiciones de cancelación. Te recomendamos contratar un seguro de cancelación.'
    },
    {
      question: '¿Pueden ayudarme con los visados?',
      answer: 'Sí, te asesoramos sobre los requisitos de visado para tu destino y te ayudamos con la documentación necesaria.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              style={{ 
                marginBottom: '15px', 
                borderRadius: '10px', 
                overflow: 'hidden', 
                backgroundColor: 'white',
                boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  textAlign: 'left',
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {faq.question}
                <span style={{ color: '#b431fd', fontSize: '1.5rem' }}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '20px', borderTop: '1px solid #eee', color: '#555' }}>
                      {faq.answer}
                    </div>
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