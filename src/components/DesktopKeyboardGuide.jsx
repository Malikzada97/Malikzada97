import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSettings, FiMousePointer, FiArrowRight, FiArrowLeft, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

const DesktopKeyboardGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('navigation');

  const tabs = [
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'actions', label: 'Actions', icon: '⚡' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'tips', label: 'Tips', icon: '💡' },
  ];

  const navigationShortcuts = [
    { key: 'g h', description: 'Go to Home page', category: 'Quick Navigation' },
    { key: 'g a', description: 'Go to About page', category: 'Quick Navigation' },
    { key: 'g p', description: 'Go to Projects page', category: 'Quick Navigation' },
    { key: 'g s', description: 'Go to Skills page', category: 'Quick Navigation' },
    { key: 'g e', description: 'Go to Education page', category: 'Quick Navigation' },
    { key: 'g t', description: 'Go to Testimonials page', category: 'Quick Navigation' },
    { key: 'g c', description: 'Go to Contact page', category: 'Quick Navigation' },
    { key: 'g $', description: 'Go to Pricing page', category: 'Quick Navigation' },
    { key: 'Tab', description: 'Navigate to next focusable element', category: 'General' },
    { key: 'Shift + Tab', description: 'Navigate to previous focusable element', category: 'General' },
    { key: 'Enter', description: 'Activate focused element', category: 'General' },
    { key: 'Space', description: 'Activate button or toggle', category: 'General' },
  ];

  const actionShortcuts = [
    { key: '/', description: 'Focus search bar', category: 'Search' },
    { key: 'Ctrl/Cmd + K', description: 'Quick search', category: 'Search' },
    { key: 'm', description: 'Toggle mobile menu', category: 'Menu' },
    { key: 't', description: 'Toggle theme (light/dark)', category: 'Appearance' },
    { key: '?', description: 'Show this help guide', category: 'Help' },
    { key: 'Escape', description: 'Close modals, menus, or go back', category: 'General' },
    { key: 'Ctrl/Cmd + M', description: 'Toggle mobile menu', category: 'Menu' },
    { key: 'Ctrl/Cmd + T', description: 'Toggle theme', category: 'Appearance' },
  ];

  const accessibilityFeatures = [
    { feature: 'Skip Links', description: 'Press Tab to access skip links for quick navigation', icon: '🔗' },
    { feature: 'Focus Indicators', description: 'Clear visual indicators show which element is focused', icon: '👁️' },
    { feature: 'Screen Reader Support', description: 'Full ARIA labels and semantic HTML structure', icon: '📢' },
    { feature: 'Keyboard Only Navigation', description: 'Complete functionality without mouse required', icon: '⌨️' },
    { feature: 'High Contrast Mode', description: 'Enhanced focus indicators for better visibility', icon: '🎨' },
    { feature: 'Reduced Motion', description: 'Respects user\'s motion preferences', icon: '🎬' },
  ];

  const tips = [
    { tip: 'Key Sequences', description: 'Type "g" then another key for quick navigation (e.g., "g h" for home)', icon: '🎯' },
    { tip: 'Visual Feedback', description: 'Watch for visual indicators when pressing keys', icon: '👀' },
    { tip: 'Escape Key', description: 'Use Escape to close any open dialog or menu', icon: '🚪' },
    { tip: 'Tab Navigation', description: 'Use Tab to explore all interactive elements', icon: '🔍' },
    { tip: 'Search Shortcuts', description: 'Press "/" or Ctrl+K to quickly search content', icon: '🔎' },
    { tip: 'Theme Toggle', description: 'Press "t" to switch between light and dark themes', icon: '🌓' },
  ];

  // Listen for ? key to open guide
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '?' && !e.target.matches('input, textarea, [contenteditable]')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const renderShortcuts = (shortcuts) => {
    const grouped = shortcuts.reduce((acc, shortcut) => {
      if (!acc[shortcut.category]) {
        acc[shortcut.category] = [];
      }
      acc[shortcut.category].push(shortcut);
      return acc;
    }, {});

    return Object.entries(grouped).map(([category, items]) => (
      <div key={category} className="space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
          {category}
        </h4>
        <div className="space-y-2">
          {items.map((shortcut, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="text-sm">{shortcut.description}</span>
              <Badge variant="secondary" className="font-mono text-xs">
                {shortcut.key}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const renderFeatures = (features) => (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
          <span className="text-lg">{feature.icon}</span>
          <div className="flex-1">
            <h4 className="font-medium text-sm mb-1">{feature.feature}</h4>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTips = (tips) => (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
          <span className="text-lg">{tip.icon}</span>
          <div className="flex-1">
            <h4 className="font-medium text-sm mb-1">{tip.tip}</h4>
            <p className="text-xs text-muted-foreground">{tip.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] hidden lg:block"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 z-[10000] items-center justify-center hidden lg:flex"
          >
            <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <FiSettings className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold">Keyboard Navigation Guide</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                  aria-label="Close guide"
                >
                  <FiX className="w-4 h-4" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors",
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {activeTab === 'navigation' && renderShortcuts(navigationShortcuts)}
                    {activeTab === 'actions' && renderShortcuts(actionShortcuts)}
                    {activeTab === 'accessibility' && renderFeatures(accessibilityFeatures)}
                    {activeTab === 'tips' && renderTips(tips)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted/20">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>Press <kbd className="bg-background px-2 py-1 rounded text-xs">Escape</kbd> to close</span>
                    <span>Press <kbd className="bg-background px-2 py-1 rounded text-xs">?</kbd> to show this guide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMousePointer className="w-4 h-4" />
                    <span>Desktop only - Keyboard navigation enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DesktopKeyboardGuide; 