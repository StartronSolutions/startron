import React from 'react';

const Services = () => {  const services = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Escavadeiras e Caminhões',
      description: 'Especialistas em sistemas elétricos de escavadeiras e caminhões para mineração.',
      features: ['Módulos de controle', 'Chicotes de comando', 'Sensores hidráulicos', 'Sistemas de monitoramento']
    },
    {
      icon: 'fas fa-cog',
      title: 'Alternadores e Motores de Partida',
      description: 'Reforma e reparo especializado de alternadores e motores de partida.',
      features: ['Reforma completa', 'Troca de escovas e rolamentos', 'Peças de qualidade', 'Testes rigorosos']
    },
    {
      icon: 'fas fa-industry',
      title: 'Tratores de Esteira',
      description: 'Manutenção elétrica completa para tratores de mineração.',
      features: ['Central eletrônica', 'Sistema de tração', 'Controles remotos', 'Diagnóstico computadorizado']
    },
    {
      icon: 'fas fa-car',
      title: 'Elétrica Automotiva',
      description: 'Serviços completos para veículos de passeio e comerciais.',
      features: ['Diagnóstico eletrônico', 'Sistema de ignição', 'Chicotes elétricos', 'Sensores e atuadores']
    },
    {
      icon: 'fas fa-microchip',
      title: 'Sistemas Eletrônicos',
      description: 'Diagnóstico e reparo de módulos eletrônicos especializados.',
      features: ['ECU de motores', 'Controladores CAN-BUS', 'Displays multifunção', 'Sistemas de telemetria']
    },
    {
      icon: 'fas fa-battery-full',
      title: 'Sistemas de Energia',
      description: 'Manutenção completa de sistemas de energia para todos os equipamentos.',
      features: ['Alternadores industriais', 'Baterias de alta capacidade', 'Inversores de potência', 'Geradores auxiliares']
    },
    {
      icon: 'fas fa-snowflake',
      title: 'Ar Condicionado',
      description: 'Instalação, manutenção e reparo de sistemas de ar condicionado veicular.',
      features: ['Diagnóstico do sistema', 'Recarga de gás refrigerante', 'Troca de compressores', 'Limpeza de evaporadores']
    }
  ];

  return (
    <section className="services">
      <div className="container">        <div className="section-header">
          <h2 className="section-title">Serviços Especializados</h2>
          <p className="section-subtitle">
            Soluções completas para máquinas de mineração, elétrica automotiva, ar condicionado e sistemas eletrônicos
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}        </div>
        
        {/* Seção Especializada em Alternadores e Motores de Partida */}
        <div className="alternadores-section">
          <div className="section-header">
            <h3 className="specialty-title">
              <i className="fas fa-cog"></i>
              Expertise em Alternadores e Motores de Partida
            </h3>
            <p className="specialty-subtitle">
              Reforma e reparo especializado para todos os tipos de veículos e máquinas
            </p>
          </div>
          
          <div className="alternadores-content">
            <div className="alternadores-info">
              <h4>Nossa Especialidade</h4>
              <p>
                Com anos de experiência, somos especialistas na <strong>reforma e reparo</strong> de 
                alternadores e motores de partida para todos os tipos de veículos e máquinas. 
                Desde carros de passeio até grandes equipamentos de mineração.
              </p>
              
              <div className="expertise-features">
                <div className="expertise-item">
                  <i className="fas fa-tools"></i>
                  <div>
                    <h5>Reforma Completa</h5>
                    <p>Desmontagem, limpeza, troca de componentes e remontagem</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <i className="fas fa-microscope"></i>
                  <div>
                    <h5>Teste em Bancada</h5>
                    <p>Equipamentos específicos para teste de funcionamento</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <i className="fas fa-medal"></i>
                  <div>
                    <h5>Garantia de Qualidade</h5>
                    <p>Peças originais e garantia em todos os serviços</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tipos-atendidos">
              <h4>Tipos Atendidos</h4>
              <div className="tipos-grid">
                <div className="tipo-card">
                  <i className="fas fa-car"></i>
                  <h5>Veículos de Passeio</h5>
                  <ul>
                    <li>Carros nacionais e importados</li>
                    <li>Motos e motocicletas</li>
                    <li>Utilitários leves</li>
                  </ul>
                </div>
                <div className="tipo-card">
                  <i className="fas fa-truck"></i>
                  <h5>Veículos Comerciais</h5>
                  <ul>
                    <li>Caminhões e carretas</li>
                    <li>Ônibus e micro-ônibus</li>
                    <li>Vans comerciais</li>
                  </ul>
                </div>
                <div className="tipo-card">
                  <i className="fas fa-industry"></i>
                  <h5>Máquinas Pesadas</h5>
                  <ul>
                    <li>Escavadeiras e tratores</li>
                    <li>Equipamentos de mineração</li>
                    <li>Geradores e compressores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
