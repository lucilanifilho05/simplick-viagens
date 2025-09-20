import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: '✈️',
      title: 'Voos Diretos',
      description: 'COnexões diretas com os principais destinos do mundo.'
    },
    {
      id: 2,
      icon: '🏨',
      title: 'Acomodações Premium',
      description: 'Hotéis selecionados com os melhores serviços e comodidades.'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Seguro de Viagem',
      description: 'Proteção completa durante sua aventura.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Sempre ao seu lado',
      description: 'Viagem segura com suporte 24 horas por dia'
    }
  ]

  return (
    <section id='beneficios' className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title">¿Por que nos escolher?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: 'center', padding: '30px', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
              whileHover={{ y: -5 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{benefit.icon}</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>{benefit.title}</h3>
              <p style={{ color: '#666' }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits