import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedCard from './components/FeaturedCard';
import LinkButton from './components/LinkButton';
import SocialIcons from './components/SocialIcons';
import ThemeToggle from './components/ThemeToggle';
import configData from './connectcard.config.json';

function App() {
  const [config, setConfig] = useState(configData);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark mode
  });

  // Effect to apply dark mode class to the html element
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-purple flex flex-col items-center px-4 py-8 transition-colors duration-200">
      <div className="w-full max-w-md mx-auto">
        
        {/* Theme Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Header Section */}
        <Header profile={config.profile} />
        
        {/* Featured Cards Section */}
        <section className="my-6">
          {config.featuredCards.map((card, index) => (
            <FeaturedCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              url={card.url}
            />
          ))}
        </section>
        
        {/* Links Section */}
        <section className="my-6">
          {config.links.map((link, index) => (
            <LinkButton
              key={index}
              label={link.label}
              icon={link.icon}
              url={link.url}
            />
          ))}
        </section>
        
        {/* Social Media Heading */}
        <div className="mt-8 mb-4 text-center">
          <h3 className="text-lg font-medium text-gray-800 dark:text-lavender-100 flex items-center justify-center">
            <span className="mr-2">📱</span>
            Follow us on socials
          </h3>
        </div>
        
        {/* Social Media Section */}
        <SocialIcons socialMedia={config.socialMedia} />
        
        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 dark:text-lavender-200 mt-6">
          Built with ❤️ by SkillConnect
        </footer>
      </div>
    </div>
  );
}

export default App; 