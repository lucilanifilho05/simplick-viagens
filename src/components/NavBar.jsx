import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'destinos', label: 'Destinos' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="navbar-content">
            <motion.div 
                className="navbar-brand"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('hero')}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }} 
                >
                <img 
                    src='images/logo.png' 
                    alt="Logo Simplick Viagens"
                    style={{ 
                    height: '50px',  
                    width: 'auto', 
                    objectFit: 'contain' 
                    }} 
                />
                Simplick Viagens
            </motion.div>
          
          {/* Menu para desktop */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                className="nav-link"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          {/* Botão menu hamburguer (mobile) */}
          <motion.div 
            className="mobile-menu-btn"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
        
        {/* Menu mobile (expandido) */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              className="mobile-nav-link"
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
