import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Simplick Viagens</h3>
            <p style={{ marginBottom: '20px' }}>Tornando seus sonhos de viagem realidade desde 2010.</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📱</a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📸</a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📘</a>
              <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>🐦</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Links rápidos</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Início</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Destinos</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Promoções</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sobre nós</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contatos</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Contacto</h4>
            <address style={{ fontStyle: 'normal', marginBottom: '20px' }}>
              <p style={{ marginBottom: '10px' }}>Av. de los Viajeros, 123</p>
              <p style={{ marginBottom: '10px' }}>28001 Madrid, España</p>
              <p style={{ marginBottom: '10px' }}>📞 +34 91 123 45 67</p>
              <p style={{ marginBottom: '10px' }}>✉️ info@simplickviagens.com</p>
            </address>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Notícias</h4>
            <p style={{ marginBottom: '20px' }}>Inscreva-se para receber nossas melhores ofertas</p>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input 
                type="email" 
                placeholder="Email" 
                style={{ padding: '12px', marginBottom: '10px', border: 'none', borderRadius: '5px' }}
              />
              <button 
                type="submit" 
                className="primary-btn" 
                style={{ border: 'none' }}
              >
                  inscrever-se
              </button>
            </form>
          </motion.div>
        </div>
        <div style={{ borderTop: '1px solid #555', paddingTop: '20px', textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} Simplick Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer