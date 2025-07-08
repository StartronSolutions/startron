import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);  const services = [
    'Escavadeiras Hidráulicas',
    'Alternadores e Motores de Partida',
    'Tratores de Esteira',
    'Elétrica Automotiva',
    'Sistemas Eletrônicos',
    'Sistemas de Energia',
    'Emergência 24h',
    'Outros Serviços Especializados'
  ];
  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Telefone',
      details: [import.meta.env.VITE_CONTACT_PHONE || '(32) 9999-9998', 'Atendimento 24 horas']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: [import.meta.env.VITE_CONTACT_EMAIL || 'contato@startronsolutions.com.br', 'Resposta em até 2 horas']
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Localização',
      details: ['Juiz de Fora, MG', 'Atendemos toda a região']
    },
    {
      icon: 'fas fa-clock',
      title: 'Horário',
      details: ['24h - Emergências', 'Seg-Sex: 8h-18h - Agendamentos']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Não informado',
        service: formData.service,
        message: formData.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contato@startronsolutions.com.br'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Orçamento para máquinas de mineração, elétrica automotiva e sistemas eletrônicos!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Seu nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Selecione o serviço *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Escolha um serviço</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                placeholder="Descreva sua necessidade ou problema..."
              ></textarea>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="large" 
              loading={isSubmitting}
              disabled={isSubmitting}
              className="btn-full"
            >
              <i className="fas fa-paper-plane"></i>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
            
            {submitStatus === 'success' && (
              <div className="form-message success">
                <i className="fas fa-check-circle"></i>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                <i className="fas fa-exclamation-triangle"></i>
                Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
