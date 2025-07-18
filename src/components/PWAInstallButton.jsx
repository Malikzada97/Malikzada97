import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Smartphone, Check } from 'lucide-react';

const PWAInstallButton = ({ className = '', variant = 'default', size = 'default' }) => {
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Check if app can be installed
    const checkInstallability = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                          window.navigator.standalone === true;
      
      setIsInstalled(isStandalone);
      
      // Check if install prompt is available
      if (window.pwaService && window.pwaService.deferredPrompt) {
        setCanInstall(true);
      }
    };

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setCanInstall(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setCanInstall(false);
      setIsInstalling(false);
    };

    // Initial check
    checkInstallability();

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check periodically for installability
    const interval = setInterval(checkInstallability, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearInterval(interval);
    };
  }, []);

  const handleInstall = async () => {
    if (!window.pwaService) {
      console.error('PWA service not available');
      return;
    }

    setIsInstalling(true);
    
    try {
      await window.pwaService.installApp();
    } catch (error) {
      console.error('Installation failed:', error);
    } finally {
      setIsInstalling(false);
    }
  };

  // Don't render if app is already installed or can't be installed
  if (isInstalled || !canInstall) {
    return null;
  }

  return (
    <Button
      onClick={handleInstall}
      disabled={isInstalling}
      className={`pwa-install-btn ${className}`}
      variant={variant}
      size={size}
    >
      {isInstalling ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          Installing...
        </>
      ) : (
        <>
          <Smartphone className="h-4 w-4 mr-2" />
          Install App
        </>
      )}
    </Button>
  );
};

export default PWAInstallButton; 