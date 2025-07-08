import React from 'react';

const About = () => {  const stats = [
    { number: '10+', label: 'Modelos de máquinas' },
    { number: '20+', label: 'Modelos de alternadores e motores de partida' },
    { number: '8+', label: 'Anos de Experiência' },
    { number: '24h', label: 'Suporte de Emergência' }
  ];
  const features = [
    {
      icon: 'fas fa-clock',
      title: 'Emergência 24h',
      description: 'Atendimento emergencial para máquinas de mineração que não podem parar a produção.'
    },
    {
      icon: 'fas fa-cog',
      title: 'Alternadores e Motores',
      description: 'Reforma e reparo especializado de alternadores e motores de partida de todos os tipos.'
    },
    {
      icon: 'fas fa-hard-hat',
      title: 'Expertise em Mineração',
      description: 'Técnicos especializados com certificação em equipamentos de mineração pesada.'
    }
  ];

  return (
    <section className="about">
      <div className="container">        <div className="section-header">
          <h2 className="section-title">Sobre a Startron</h2>
          <p className="section-subtitle">
            Especialistas em máquinas de mineração, elétrica automotiva e sistemas eletrônicos
          </p>
        </div>
        
        <div className="about-content">          <div className="about-text">
            <p>
              A <strong>StarTron</strong> é uma empresa especializada em manutenção elétrica 
              para máquinas de mineração. 
              Nossa expertise inclui <strong>reforma e reparo de alternadores e motores de partida </strong> 
              para todos os tipos de veículos e equipamentos, além de elétrica automotiva completa.
            </p>
            <p>
              Utilizamos equipamentos de última geração para diagnóstico e bancada de testes para 
              alternadores e motores de partida. Nosso compromisso é minimizar o tempo de parada das 
              máquinas de mineração e garantir a confiabilidade dos sistemas elétricos com 
              <strong> reforma completa e garantia</strong> em todos os serviços.
            </p>
            <p>
              Com anos de experiência, reformamos alternadores e motores desde carros de passeio 
              até grandes máquinas de mineração como escavadeiras, caminhões, CAT, Komatsu, Volvo e outras 
              marcas, sempre com excelência, rapidez e <strong>garantia de qualidade</strong>.
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
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

export default About;
