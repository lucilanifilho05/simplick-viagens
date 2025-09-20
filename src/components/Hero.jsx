import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" style={{ 
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Descubra o mundo com a Simplick Viagens</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>Sua próxima aventura está a um click de distância</p>
          <button className="primary-btn">Reservar Agora</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero