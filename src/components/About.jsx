import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='sobre' className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre a Simplick Viagens</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Simplick Viagens nasceu da paixão por descobrir o mundo e tornar as viagens acessíveis a todos. Com mais de 10 anos de experiência no setor, nos tornamos referência na criação de experiências únicas e inesquecíveis.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Nossa equipe de especialistas em viagens trabalha incansavelmente para encontrar as melhores opções e oferecer um serviço personalizado que se adapte às suas necessidades e sonhos.
            </p>
            <button className="primary-btn">Entre em contato</button>
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