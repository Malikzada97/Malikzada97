import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';
import { cn, glassEffect } from '../lib/utils';
import Tilt from 'react-parallax-tilt';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Check if we can go back in history
  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, [location.pathname]);

  // Handle back navigation
  const handleGoBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  // Keyboard event listener for backspace key
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only trigger on backspace key and when not typing in input fields
      if (event.key === 'Backspace' && 
          !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) &&
          canGoBack) {
        event.preventDefault();
        handleGoBack();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [canGoBack]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);



  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-border/50' : 'py-4'
      )}
      style={{
        ...(scrolled && glassEffect),
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Back button and Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Back Button */}
            <AnimatePresence>
              {canGoBack && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.12}
                    scale={1.04}
                    transitionSpeed={180}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    className="inline-block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleGoBack}
                      className="relative p-3 sm:p-3 min-w-[44px] min-h-[44px] rounded-xl text-sm font-medium transition-all duration-300 group bg-muted/60 hover:bg-muted backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={t('common.goBack')}
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="hidden sm:inline text-muted-foreground group-hover:text-foreground transition-colors">
                          {t('common.back')}
                        </span>
                      </motion.div>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Animated Glow */}
                      <span className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-primary/30" />
                    </motion.button>
                  </Tilt>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo */}
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.06}
              transitionSpeed={200}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/" 
                  className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent relative group px-1"
                >
                  MJ
                  {/* Animated Glow */}
                  <span className="absolute inset-0 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-primary/30" />
                </Link>
              </motion.div>
            </Tilt>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {[
              { path: '/', label: t('navigation.home'), icon: '🏠' },
              { path: '/about', label: t('navigation.about'), icon: '👤' },
              { path: '/projects', label: t('navigation.projects'), icon: '💼' },
              { path: '/skills', label: t('navigation.skills'), icon: '🏆' },
              { path: '/education', label: t('navigation.education'), icon: '📚' },
              { path: '/testimonials', label: t('navigation.testimonials'), icon: '⭐' },
              { path: '/pricing', label: t('navigation.pricing'), icon: '💰' },
              { path: '/contact', label: t('navigation.contact'), icon: '💬' }
            ].map((item) => (
              <Tilt
                key={item.path}
                glareEnable={true}
                glareMaxOpacity={0.12}
                scale={1.04}
                transitionSpeed={180}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                className="inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 group',
                      location.pathname === item.path
                        ? 'text-primary bg-primary-muted shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </span>
                    {/* Active indicator */}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Animated Glow */}
                    <span className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-primary/30" />
                  </Link>
                </motion.div>
              </Tilt>
            ))}
          </div>

          {/* Right side - Search, Theme toggle and mobile menu */}
          <div className="flex items-center space-x-3">
            <SearchBar />
            <LanguageSelector className="hidden lg:flex" />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-muted/60 hover:bg-muted transition-colors backdrop-blur-sm"
              aria-label={t('common.menu')}
              data-mobile-menu-trigger
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
    </motion.nav>
  );
};

export default Navbar;