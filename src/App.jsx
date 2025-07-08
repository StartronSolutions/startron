import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import usePageTitle from './hooks/usePageTitle';
import './App.css';
import './components/DarkModeEnhancements.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  const getPageFromPath = (pathname) => {
    switch (pathname) {
      case '/':
        return 'inicio';
      case '/servicos':
        return 'servicos';
      case '/sobre':
        return 'sobre';
      case '/contato':
        return 'contato';
      default:
        return 'inicio';
    }
  };

  const currentPage = getPageFromPath(location.pathname);
  
  usePageTitle(currentPage);

  const sections = ['inicio', 'servicos', 'sobre', 'contato'];
  
  return (
    <ThemeProvider>
      <div className="App">
        <Header 
          currentSection={currentPage}
          sections={sections}
        />
        
        <main className={`main-content ${isLoading ? 'loading' : ''}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
