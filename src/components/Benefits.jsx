import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: '✈️',
      title: 'Vuelos Directos',
      description: 'Conexiones directas a los principales destinos del mundo.'
    },
    {
      id: 2,
      icon: '🏨',
      title: 'Alojamiento Premium',
      description: 'Hoteles seleccionados con los mejores servicios y comodidades.'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Seguro de Viaje',
      description: 'Protección completa durante toda tu aventura.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'App Exclusiva',
      description: 'Gestiona tu viaje desde nuestra aplicación móvil.'
    }
  ]

  return (
    <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
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