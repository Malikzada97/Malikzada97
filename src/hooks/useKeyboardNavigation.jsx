import { useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useKeyboardNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastFocusRef = useRef(null);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

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
    '?': () => showHelp(), // Show help
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
  const showHelp = useCallback(() => {
    // Create help modal
    const helpModal = document.createElement('div');
    helpModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center';
    helpModal.innerHTML = `
      <div class="bg-background border border-border rounded-xl p-6 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold">Keyboard Shortcuts</h2>
          <button class="text-muted-foreground hover:text-foreground" onclick="this.closest('.fixed').remove()">✕</button>
        </div>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold mb-2">Navigation</h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div><kbd class="bg-muted px-2 py-1 rounded">g h</kbd> Go Home</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g a</kbd> Go About</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g p</kbd> Go Projects</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g s</kbd> Go Skills</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g e</kbd> Go Education</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g t</kbd> Go Testimonials</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g c</kbd> Go Contact</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">g $</kbd> Go Pricing</div>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Actions</h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div><kbd class="bg-muted px-2 py-1 rounded">/</kbd> Focus Search</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">m</kbd> Toggle Menu</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">t</kbd> Toggle Theme</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">?</kbd> Show Help</div>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">General</h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div><kbd class="bg-muted px-2 py-1 rounded">Tab</kbd> Navigate Elements</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">Shift+Tab</kbd> Navigate Backward</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">Enter</kbd> Activate Element</div>
              <div><kbd class="bg-muted px-2 py-1 rounded">Escape</kbd> Close/Go Back</div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(helpModal);
    
    // Focus first focusable element
    const firstButton = helpModal.querySelector('button');
    if (firstButton) firstButton.focus();
    
    // Close on escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        helpModal.remove();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }, []);

  const focusSearch = useCallback(() => {
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
  }, []);

  const toggleMobileMenu = useCallback(() => {
    try {
      const mobileMenuButton = document.querySelector('[data-mobile-menu-trigger]');
      if (mobileMenuButton) {
        mobileMenuButton.click();
      }
    } catch (error) {
      console.warn('Failed to toggle mobile menu:', error);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    try {
      const themeToggle = document.querySelector('[data-theme-toggle]');
      if (themeToggle) {
        themeToggle.click();
      }
    } catch (error) {
      console.warn('Failed to toggle theme:', error);
    }
  }, []);

  const handleEscape = useCallback(() => {
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
  }, []);

  const handleTab = useCallback(() => {
    // Store last focused element for better navigation
    if (document.activeElement) {
      lastFocusRef.current = document.activeElement;
    }
  }, []);

  // Focus management
  const focusFirstFocusable = useCallback((container) => {
    try {
      const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    } catch (error) {
      console.warn('Failed to focus first element:', error);
    }
  }, []);

  const focusLastFocusable = useCallback((container) => {
    try {
      const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[focusableElements.length - 1].focus();
      }
    } catch (error) {
      console.warn('Failed to focus last element:', error);
    }
  }, []);

  // Skip to content navigation
  const skipToContent = useCallback((target) => {
    try {
      const element = document.querySelector(target);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (error) {
      console.warn('Failed to skip to content:', error);
    }
  }, []);

  // Announce to screen readers
  const announce = useCallback((message) => {
    try {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    } catch (error) {
      console.warn('Failed to announce message:', error);
    }
  }, []);

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
            announce(`Navigated to ${keySequence}`);
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
          case '?':
            e.preventDefault();
            showHelp();
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
  }, [navigate, location, showHelp, focusSearch, toggleMobileMenu, toggleTheme, handleEscape, handleTab, announce]);

  // Focus indicator enhancement
  useEffect(() => {
    const focusIndicator = document.getElementById('focus-indicator');
    
    const handleFocusChange = (e) => {
      if (focusIndicator && e.target) {
        const rect = e.target.getBoundingClientRect();
        focusIndicator.style.transform = `translateY(${rect.top}px)`;
        focusIndicator.style.opacity = '1';
      }
    };

    const handleFocusOut = () => {
      if (focusIndicator) {
        focusIndicator.style.opacity = '0';
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return {
    focusFirstFocusable,
    focusLastFocusable,
    skipToContent,
    announce,
    lastFocusRef,
  };
};

export default useKeyboardNavigation; 