import { motion } from 'framer-motion'
import Navbar  from './components/NavBar'
import Hero from './components/Hero'
import FeaturedDestinations from './components/FeaturedDestinations'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import About from './components/About'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <Benefits />
      <Testimonials />
      <About />
      <ContactForm />
      <FAQ />
      <Footer />
    </motion.div>
  )
}

export default App