import { useEffect } from 'react';

const usePageTitle = (section) => {  const sectionTitles = {
    inicio: 'Startron - Elétrica Mineração e Automotiva | Especialistas',
    servicos: 'Serviços Especializados - Startron Elétrica',
    sobre: 'Sobre a Startron - Mineração e Elétrica Automotiva',
    contato: 'Contato - Startron Elétrica Especializada'
  };

  const sectionDescriptions = {
    inicio: 'Especialistas em máquinas de mineração, elétrica automotiva e sistemas eletrônicos. Escavadeiras, tratores, veículos. Atendimento 24h.',
    servicos: 'Serviços especializados para escavadeiras hidráulicas, tratores de esteira, elétrica automotiva e sistemas eletrônicos veiculares.',
    sobre: 'Conheça a Startron, especializada em máquinas de mineração e elétrica automotiva com técnicos certificados e experiência comprovada.',
    contato: 'Entre em contato para manutenção de máquinas de mineração, elétrica automotiva e sistemas eletrônicos. Atendimento emergencial 24h.'
  };

  useEffect(() => {
    // Atualizar título da página
    document.title = sectionTitles[section] || sectionTitles.inicio;
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', sectionDescriptions[section] || sectionDescriptions.inicio);
    }
    
    // Atualizar URL canônica (opcional)
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    const baseUrl = window.location.origin + window.location.pathname;
    const canonicalUrl = section === 'inicio' ? baseUrl : `${baseUrl}#${section}`;
    canonicalLink.href = canonicalUrl;
    
  }, [section]);
};

export default usePageTitle;
