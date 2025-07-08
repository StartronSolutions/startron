import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/5532999999999', label: 'WhatsApp' },
    { icon: 'fab fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' }
  ];  const quickLinks = [
    { label: 'Alternadores e Motores', to: '/servicos' },
    { label: 'Escavadeiras Hidráulicas', to: '/servicos' },
    { label: 'Elétrica Automotiva', to: '/servicos' },
    { label: 'Emergência 24h', to: '/contato' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">            <div className="footer-logo">
              <img src="/images/logo/logoST.svg" alt="StarTron Logo" className="logo-image" />
              <span>StarTron Solutions</span>
            </div>
            <p className="footer-text">
              Especialistas em máquinas de mineração, elétrica automotiva e sistemas eletrônicos. 
              Soluções confiáveis para todos os seus equipamentos.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-link"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
            <div className="footer-section">
            <h3>Serviços</h3>            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(32) 9999-9999</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contato@startronsolutions.com.br</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Juiz de Fora, MG</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Horário de Atendimento</h3>
            <div className="footer-hours">
              <div className="hours-item">
                <strong>Emergências:</strong>
                <span>24 horas</span>
              </div>
              <div className="hours-item">
                <strong>Agendamentos:</strong>
                <span>Seg-Sex: 8h-18h</span>
              </div>
              <div className="hours-item">
                <strong>Sábado:</strong>
                <span>8h-12h</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} StarTron Solutions. Todos os direitos reservados.</p>
            <p className="footer-credits">
              Desenvolvido pela StarTron Solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
