import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      photo: 'https://randomuser.me/api/portraits/women/32.jpg',
      review: 'Mi viaje a Bali fue increíble. Simplick se encargó de todo y pude disfrutar sin preocupaciones. ¡Volveré a confiar en ellos!',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
      review: 'Excelente servicio al cliente. Respondieron todas mis preguntas y me ayudaron a planificar el viaje perfecto a Japón.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Martínez',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      review: 'Viajé con Simplick a París y todo salió perfecto. Los recomiendo 100%.',
      rating: 4
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', backgroundColor: 'white' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={testimonial.photo} alt={testimonial.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }} />
                <div>
                  <h3 style={{ marginBottom: '5px' }}>{testimonial.name}</h3>
                  <div style={{ color: '#ffc107' }}>
                    {'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
              <p style={{ color: '#555', fontStyle: 'italic' }}>"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials