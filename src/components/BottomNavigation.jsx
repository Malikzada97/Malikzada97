import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FiHome, FiUser, FiBriefcase, FiAward, FiBookOpen, 
  FiStar, FiDollarSign, FiMessageSquare, FiSearch, FiMenu,
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter
} from 'react-icons/fi';
import { cn, glassEffect } from '../lib/utils';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';

const BottomNavigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navigation items for bottom nav (limited to most important)
  const navItems = [
    { path: '/', label: t('navigation.home'), icon: FiHome, color: 'text-blue-500', badge: null },
    { path: '/projects', label: t('navigation.projects'), icon: FiBriefcase, color: 'text-green-500', badge: '3' },
    { path: '/skills', label: t('navigation.skills'), icon: FiAward, color: 'text-purple-500', badge: null },
    { path: '/contact', label: t('navigation.contact'), icon: FiMessageSquare, color: 'text-orange-500', badge: 'New' },
  ];

  // Handle scroll to hide/show bottom nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isNearBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;
      
      // Show nav when scrolling up or near bottom, hide when scrolling down
      if (isScrollingDown && !isNearBottom && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  // Prevent body scroll when search or menu is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen || isQuickActionsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, isMobileMenuOpen, isQuickActionsOpen]);

  // Haptic feedback for mobile devices
  const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  // Handle navigation with haptic feedback
  const handleNavigation = (path) => {
    triggerHapticFeedback();
  };

  // Handle button clicks with haptic feedback
  const handleButtonClick = (action) => {
    triggerHapticFeedback();
    action();
  };

  // Long press handler for quick actions
  const handleLongPress = (callback) => {
    let pressTimer;
    let isLongPress = false;

    const startPress = () => {
      pressTimer = setTimeout(() => {
        isLongPress = true;
        triggerHapticFeedback();
        callback();
      }, 500);
    };

    const endPress = () => {
      clearTimeout(pressTimer);
      if (!isLongPress) {
        triggerHapticFeedback();
      }
    };

    return {
      onTouchStart: startPress,
      onTouchEnd: endPress,
      onTouchCancel: endPress,
    };
  };

  // Quick actions data
  const quickActions = [
    { icon: FiMail, label: t('contact.email'), action: () => window.open('mailto:mudassir@example.com'), color: 'bg-blue-500' },
    { icon: FiPhone, label: t('contact.phone'), action: () => window.open('tel:+15551234567'), color: 'bg-green-500' },
    { icon: FiMapPin, label: t('contact.location'), action: () => window.open('https://maps.google.com'), color: 'bg-red-500' },
    { icon: FiGithub, label: t('social.github'), action: () => window.open('https://github.com'), color: 'bg-gray-800' },
    { icon: FiLinkedin, label: t('social.linkedin'), action: () => window.open('https://linkedin.com'), color: 'bg-blue-600' },
    { icon: FiTwitter, label: t('social.twitter'), action: () => window.open('https://twitter.com'), color: 'bg-blue-400' },
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            style={glassEffect}
          >
            {/* Main Navigation Bar */}
            <div className="px-4 pb-4 pt-2">
              <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl p-2 shadow-2xl">
                <div className="flex items-center justify-around">
                  {/* Navigation Items */}
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <Link
                        to={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className={cn(
                          'flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 relative group',
                          isActive(item.path)
                            ? 'text-primary bg-primary-muted'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                        aria-label={`Navigate to ${item.label}`}
                      >
                        {/* Icon with Badge */}
                        <div className="relative">
                          <item.icon className={cn(
                            'w-5 h-5 mb-1 transition-all duration-300',
                            isActive(item.path) && item.color
                          )} />
                          {item.badge && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full min-w-[16px] h-4 flex items-center justify-center"
                            >
                              {item.badge}
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Label */}
                        <span className="text-xs font-medium">
                          {item.label}
                        </span>

                        {/* Active indicator */}
                        {isActive(item.path) && (
                          <motion.div
                            layoutId="bottomActiveTab"
                            className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}

                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Search Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleButtonClick(() => setIsSearchOpen(true))}
                      className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 group relative"
                      aria-label={t('common.search')}
                    >
                      <FiSearch className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium">{t('common.search')}</span>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </motion.div>

                  {/* Menu Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleButtonClick(() => setIsMobileMenuOpen(true))}
                      className="flex flex-col items-center justify-center w-16 h-16 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 group relative"
                      aria-label={t('common.menu')}
                    >
                      <FiMenu className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium">{t('common.menu')}</span>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Safe Area Spacer for devices with home indicators */}
            <div className="h-4 bg-background/80 backdrop-blur-xl" />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 left-4 right-4 z-50"
            >
              <SearchBar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Quick Actions Modal */}
      <AnimatePresence>
        {isQuickActionsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsQuickActionsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 left-4 right-4 z-50"
            >
              <div className="bg-card border border-border rounded-2xl p-4 shadow-2xl">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {t('bottomNav.quickActions')}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        action.action();
                        setIsQuickActionsOpen(false);
                      }}
                      className="flex flex-col items-center p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      aria-label={action.label}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${action.color}`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-center">
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNavigation; 