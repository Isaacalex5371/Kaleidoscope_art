import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Commission } from './components/Commission';
import { ClientsTestimonials } from './components/ClientsTestimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  // Handle navigation to legal pages
  const handleNavigateToTerms = () => setCurrentPage('terms');
  const handleNavigateToPrivacy = () => setCurrentPage('privacy');
  const handleBackToPortfolio = () => setCurrentPage('home');

  // Render Terms of Service page
  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBackToPortfolio} />;
  }

  // Render Privacy Policy page
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToPortfolio} />;
  }

  // Render main portfolio website
  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500 ease-in-out">
      {/* Import Google Fonts for artistic typography */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" 
        rel="stylesheet" 
      />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          
          .font-sans {
            font-family: 'Inter', sans-serif;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Selection colors */
          ::selection {
            background-color: var(--burnt-orange);
            color: var(--background);
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: var(--background);
          }
          
          ::-webkit-scrollbar-thumb {
            background: var(--burnt-orange);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: var(--earthy-green);
          }
        `
      }} />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio">
        <PortfolioGallery />
      </section>

      {/* Commission Section */}
      <section id="commission">
        <Commission />
      </section>

      {/* Clients & Testimonials */}
      <section id="testimonials">
        <ClientsTestimonials />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer onNavigateToTerms={handleNavigateToTerms} onNavigateToPrivacy={handleNavigateToPrivacy} />
    </div>
  );
}