import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {const features = [
    {
      icon: 'fas fa-clock',
      title: 'Atendimento 24h',
      description: 'Emergências em máquinas de mineração não podem parar. Atendimento emergencial.'
    },
    {
      icon: 'fas fa-cog',
      title: 'Alternadores e Motores',
      description: 'Reforma e reparo especializado de alternadores e motores de partida.'
    },
    {
      icon: 'fas fa-hard-hat',
      title: 'Expertise em Mineração',
      description: 'Especialistas em sistemas elétricos de escavadeiras, tratores e britadores.'
    }
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">          <div className="hero-icon">
            <i className="fas fa-car-battery"></i>
          </div>
          <h1 className="hero-title">
            Elétrica para <span className="highlight">Máquinas de Mineração</span>
          </h1>
          <p className="hero-subtitle">
            Especialistas em sistemas elétricos e componentes eletrônicos para mineração. 
            Também atendemos elétrica automotiva e sistemas eletrônicos veiculares.
          </p>          <div className="cta-buttons">
            <Link 
              to="/contato"
              className="btn btn-primary"
            >
              <i className="fas fa-phone"></i>
              Solicitar Orçamento
            </Link>
            <Link 
              to="/servicos"
              className="btn btn-secondary"
            >
              <i className="fas fa-tools"></i>
              Nossos Serviços
            </Link>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
