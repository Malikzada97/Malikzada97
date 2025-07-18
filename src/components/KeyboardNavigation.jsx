import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const KeyboardNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastFocusRef = useRef(null);

  // Navigation shortcuts
  const navigationShortcuts = {
    'g h': () => navigate('/'), // Go Home
    'g a': () => navigate('/about'), // Go About
    'g p': () => navigate('/projects'), // Go Projects
    'g s': () => navigate('/skills'), // Go Skills
    'g e': () => navigate('/education'), // Go Education
    'g t': () => navigate('/testimonials'), // Go Testimonials
    'g c': () => navigate('/contact'), // Go Contact
    'g $': () => navigate('/pricing'), // Go Pricing
  };

  // Action shortcuts
  const actionShortcuts = {
    '/': () => focusSearch(), // Focus search
    'm': () => toggleMobileMenu(), // Toggle mobile menu
    't': () => toggleTheme(), // Toggle theme
    'Escape': () => handleEscape(), // Handle escape key
    'Tab': () => handleTab(), // Handle tab navigation
    'h': () => navigate('/'), // Quick home
    'b': () => window.history.back(), // Go back
    'f': () => window.history.forward(), // Go forward
  };

  // Utility functions
  const focusSearch = () => {
    try {
      const searchButton = document.querySelector('[data-search-trigger]');
      if (searchButton) {
        searchButton.click();
        setTimeout(() => {
          const searchInput = document.querySelector('[data-search-input]');
          if (searchInput) searchInput.focus();
        }, 100);
      }
    } catch (error) {
      console.warn('Failed to focus search:', error);
    }
  };

  const toggleMobileMenu = () => {
    try {
      const mobileMenuButton = document.querySelector('[data-mobile-menu-trigger]');
      if (mobileMenuButton) {
        mobileMenuButton.click();
      }
    } catch (error) {
      console.warn('Failed to toggle mobile menu:', error);
    }
  };

  const toggleTheme = () => {
    try {
      const themeToggle = document.querySelector('[data-theme-toggle]');
      if (themeToggle) {
        themeToggle.click();
      }
    } catch (error) {
      console.warn('Failed to toggle theme:', error);
    }
  };

  const handleEscape = () => {
    // Close any open modals, dropdowns, or menus
    const openModals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
    const openDropdowns = document.querySelectorAll('[data-state="open"]');
    
    if (openModals.length > 0) {
      const lastModal = openModals[openModals.length - 1];
      const closeButton = lastModal.querySelector('[data-close-button]') || 
                         lastModal.querySelector('button[aria-label*="close" i]');
      if (closeButton) closeButton.click();
    } else if (openDropdowns.length > 0) {
      const lastDropdown = openDropdowns[openDropdowns.length - 1];
      const trigger = lastDropdown.querySelector('[data-trigger]');
      if (trigger) trigger.click();
    }
  };

  const handleTab = () => {
    // Store last focused element for better navigation
    if (document.activeElement) {
      lastFocusRef.current = document.activeElement;
    }
  };

  // Main keyboard event handler
  useEffect(() => {
    let keySequence = '';
    let keyTimeout;

    const handleKeyDown = (e) => {
      // Don't interfere with input fields
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.contentEditable === 'true') {
        return;
      }

      const key = e.key.toLowerCase();
      
      // Handle key sequences (like 'g h' for navigation)
      if (key === 'g' || keySequence.startsWith('g')) {
        keySequence += key;
        clearTimeout(keyTimeout);
        keyTimeout = setTimeout(() => {
          if (navigationShortcuts[keySequence]) {
            e.preventDefault();
            navigationShortcuts[keySequence]();
          }
          keySequence = '';
        }, 1000);
        return;
      }

      // Handle single key shortcuts
      if (actionShortcuts[key]) {
        e.preventDefault();
        actionShortcuts[key]();
        return;
      }

      // Handle modifier key combinations
      if (e.ctrlKey || e.metaKey) {
        switch (key) {
          case 'k':
            e.preventDefault();
            focusSearch();
            break;
          case 'm':
            e.preventDefault();
            toggleMobileMenu();
            break;
          case 't':
            e.preventDefault();
            toggleTheme();
            break;
        }
      }

      // Reset key sequence if no match
      keySequence = '';
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(keyTimeout);
    };
  }, [navigate, location, focusSearch, toggleMobileMenu, toggleTheme, handleEscape, handleTab]);

  return null; // This component now only handles keyboard events, no UI
};

export default KeyboardNavigation; 