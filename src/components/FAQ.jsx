import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Como posso reservar uma viagem?',
      answer: 'Você pode reservar diretamente através do nosso site, nos contatar por telefone ou visitar nossas lojas.'
    },
    {
      question: 'O que os pacotes de viagem incluêm?',
      answer: 'Nossos pacotes incluem voos, acomodação, traslados e seguro de viagem. Alguns também incluem excursões e atividades.'
    },
    {
      question: 'Oferecem opções de pagamento flexíveis?',
      answer: 'Sim, oferecemos diferentes planos de pagamento e opções de financiamento para nos adequarmos às suas necessidades.'
    },
    {
      question: 'O que acontece se eu precisar cancelar minha viagem?',
      answer: 'Dependendo do tipo de reserva e da antecedência do cancelamento, nossas condições de cancelamento se aplicarão. Recomendamos contratar um seguro de cancelamento.'
    },
    {
      question: 'Podem me ajudar com os vistos?',
      answer: 'Sim, nós te assessoramos sobre os requisitos de visto para o seu destino e te ajudamos com a documentação necessária..'
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