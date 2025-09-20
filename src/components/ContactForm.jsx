import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({
      name: '',
      email: '',
      destination: '',
      message: ''
    })
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">¿Pronto para sua próxima aventura?</h2>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Nome completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="destination" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Destino desejado</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', resize: 'vertical' }}
            ></textarea>
          </div>
          <button type="submit" className="primary-btn" style={{ width: '100%' }}>Enviar mensagem</button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm