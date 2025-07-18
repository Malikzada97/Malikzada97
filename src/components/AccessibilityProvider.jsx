import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';

const AccessibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState('main');
  const { announce } = useKeyboardNavigation();

  useEffect(() => {
    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          setCurrentFocus('main');
          announce('Skipped to main content');
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          setCurrentFocus('nav');
          announce('Skipped to navigation');
        }
      }
    };

    // Handle focus management
    const handleFocusIn = (e) => {
      const target = e.target;
      if (target.closest('nav')) {
        setCurrentFocus('nav');
      } else if (target.closest('main')) {
        setCurrentFocus('main');
      } else if (target.closest('footer')) {
        setCurrentFocus('footer');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  // Skip links component
  const SkipLinks = () => {
    if (typeof window === 'undefined') return null;

    return createPortal(
      <div className="skip-links" role="navigation" aria-label="Skip links">
        <a
          href="#main-content"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const mainContent = document.querySelector('main');
            if (mainContent) {
              mainContent.focus();
              setCurrentFocus('main');
            }
          }}
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const nav = document.querySelector('nav');
            if (nav) {
              nav.focus();
              setCurrentFocus('nav');
            }
          }}
        >
          Skip to navigation
        </a>
        <a
          href="#footer"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) {
              footer.focus();
              setCurrentFocus('footer');
            }
          }}
        >
          Skip to footer
        </a>
      </div>,
      document.body
    );
  };

  // Live region for announcements
  const LiveRegion = () => {
    if (typeof window === 'undefined') return null;

    return createPortal(
      <div
        id="live-region"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      />
    , document.body);
  };

  // Focus indicator
  const FocusIndicator = () => {
    if (typeof window === 'undefined') return null;

    return createPortal(
      <div
        id="focus-indicator"
        className="fixed top-0 left-0 w-full h-1 bg-primary z-[9999] pointer-events-none opacity-0 transition-opacity duration-200"
        style={{
          transform: 'translateY(-100%)',
        }}
      />
    , document.body);
  };

  return (
    <>
      <SkipLinks />
      <LiveRegion />
      <FocusIndicator />
      {children}
    </>
  );
};

export default AccessibilityProvider; 