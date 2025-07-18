import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemPreference;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-muted/60 hover:bg-muted backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:shadow-medium"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      data-theme-toggle
    >
      <div className="relative w-5 h-5">
        <FiSun 
          className={`absolute inset-0 transform transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-180 scale-0 opacity-0'
          }`}
        />
        <FiMoon 
          className={`absolute inset-0 transform transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
    </button>
  );
};

export default ThemeToggle;