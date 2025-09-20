import { motion } from 'framer-motion'

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris, Francia',
      price: '€899',
      image: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      price: '€1299',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Nueva York, USA',
      price: '€1099',
      image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Tokio, Japón',
      price: '€1499',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Destinos Destacados</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              whileHover={{ y: -10 }}
            >
              <img src={destination.image} alt={destination.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>{destination.name}</h3>
                <p style={{ color: '#b431fd', fontWeight: 'bold', marginBottom: '15px' }}>Desde {destination.price}</p>
                <button className="secondary-btn">Ver Detalles</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDestinations