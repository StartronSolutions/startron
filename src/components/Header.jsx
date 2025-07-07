import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ currentSection, sections }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const sectionNames = {
    inicio: 'Início',
    servicos: 'Serviços',
    sobre: 'Sobre',
    contato: 'Contato'
  };

  const sectionPaths = {
    inicio: '/',
    servicos: '/servicos',
    sobre: '/sobre',
    contato: '/contato'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };  const handleNavClick = (e) => {
    setMobileMenuOpen(false);
    // Remove focus do elemento clicado para evitar que fique selecionado
    if (e.target && e.target.blur) {
      setTimeout(() => e.target.blur(), 100);
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (section) => {
    return location.pathname === sectionPaths[section];
  };
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleNavClick}>
            <i className="fas fa-car-battery"></i>
            <span>StarTron</span>
          </Link>
          
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {sections.map((section) => (
                <li key={section} className="nav-item">
                  <Link
                    to={sectionPaths[section]}
                    className={`nav-link ${isActive(section) ? 'active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {sectionNames[section]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
