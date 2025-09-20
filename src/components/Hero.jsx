import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='hero' className="hero" style={{ 
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/hero.png')",
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
          <button 
            className="primary-btn"
            onClick={() => {
              const contatoSection = document.getElementById('contato');
              if (contatoSection) {
                contatoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Reservar Agora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
