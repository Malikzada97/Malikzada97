import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FiX, FiHome, FiUser, FiBriefcase, FiBookOpen, FiAward, 
  FiMessageSquare, FiDollarSign, FiStar, FiGithub, FiLinkedin, 
  FiTwitter, FiMail, FiPhone, FiMapPin 
} from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import { cn, glassEffect } from '../lib/utils';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t } = useTranslation();



  const navItems = [
    { path: '/', label: t('navigation.home'), icon: FiHome, description: t('mobileMenu.homeDescription') },
    { path: '/about', label: t('navigation.about'), icon: FiUser, description: t('mobileMenu.aboutDescription') },
    { path: '/projects', label: t('navigation.projects'), icon: FiBriefcase, description: t('mobileMenu.projectsDescription') },
    { path: '/skills', label: t('navigation.skills'), icon: FiAward, description: t('mobileMenu.skillsDescription') },
    { path: '/education', label: t('navigation.education'), icon: FiBookOpen, description: t('mobileMenu.educationDescription') },
    { path: '/testimonials', label: t('navigation.testimonials'), icon: FiStar, description: t('mobileMenu.testimonialsDescription') },
    { path: '/pricing', label: t('navigation.pricing'), icon: FiDollarSign, description: t('mobileMenu.pricingDescription') },
    { path: '/contact', label: t('navigation.contact'), icon: FiMessageSquare, description: t('mobileMenu.contactDescription') }
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: FiGithub, label: t('social.github') },
    { href: 'https://linkedin.com', icon: FiLinkedin, label: t('social.linkedin') },
    { href: 'https://twitter.com', icon: FiTwitter, label: t('social.twitter') },
  ];

  const contactInfo = [
    { icon: FiMail, label: t('contact.email'), value: 'mudassir@example.com' },
    { icon: FiPhone, label: t('contact.phone'), value: '+1 (555) 123-4567' },
    { icon: FiMapPin, label: t('contact.location'), value: 'Quetta, Balochistan Pakistan' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close menu when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close menu on escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Focus trap for accessibility
  useEffect(() => {
    if (isOpen) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.4 
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[9999] overflow-hidden custom-scrollbar bg-background border-l border-border/50 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              if (info.offset.x > 100) {
                onClose();
              }
            }}
          >
            {/* Swipe Indicator */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-muted-foreground/50 rounded-full" />
            
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border mt-4 bg-background">
              <motion.div
                id="mobile-menu-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
              >
                {t('common.menu')}
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                aria-label={t('common.close')}
              >
                <FiX className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Menu Content */}
            <div className="h-full overflow-y-auto bg-background">
              <div className="p-6 space-y-8">
                {/* Search Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {t('common.search')}
                  </h3>
                  <SearchBar />
                </motion.div>

                {/* Language Selector */}
                <LanguageSelector className="flex lg:hidden mb-4" />

                {/* Navigation Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {t('mobileMenu.navigation')}
                  </h3>
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className={cn(
                            'flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden',
                            isActive(item.path)
                              ? 'text-primary bg-primary-muted border border-primary/20 shadow-sm'
                              : 'text-foreground hover:text-primary hover:bg-muted'
                          )}
                        >
                          {/* Icon */}
                          <div className={cn(
                            'p-2 rounded-lg transition-all duration-300',
                            isActive(item.path)
                              ? 'bg-primary/20 text-primary'
                              : 'bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary'
                          )}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-xs text-muted-foreground/80 mt-1">
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Active indicator */}
                          {isActive(item.path) && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Info Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {t('mobileMenu.contactInfo')}
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <info.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-foreground">
                            {info.label}
                          </p>
                          <p className="text-sm truncate text-foreground">
                            {info.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {t('mobileMenu.socialLinks')}
                  </h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="pt-4 border-t border-border"
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 