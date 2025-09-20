import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Simplick Viagens</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Simplick Viagens nació de la pasión por descubrir el mundo y hacer que los viajes sean accesibles para todos. Con más de 10 años de experiencia en el sector, nos hemos convertido en referentes en la creación de experiencias únicas e inolvidables.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Nuestro equipo de expertos en viajes trabaja incansablemente para encontrar las mejores opciones y ofrecerte un servicio personalizado que se adapte a tus necesidades y sueños.
            </p>
            <button className="primary-btn">Conoce más</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Sobre Simplick Viagens" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About