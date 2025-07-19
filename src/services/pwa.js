// PWA Service - Handles service worker registration and PWA features

class PWAService {
  constructor() {
    this.swRegistration = null;
    this.deferredPrompt = null;
    this.isInstalled = false;
    this.isOnline = navigator.onLine;
    
    this.init();
  }

  async init() {
    try {
      // Register service worker
      await this.registerServiceWorker();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Check if app is already installed
      this.checkInstallationStatus();
      
      console.log('🚀 PWA Service initialized');
    } catch (error) {
      console.error('Failed to initialize PWA service:', error);
    }
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        this.swRegistration = await navigator.serviceWorker.register('/sw-v2.js', {
          scope: '/'
        });

        console.log('Service Worker v2 registered successfully:', this.swRegistration);

        // Handle service worker updates
        this.swRegistration.addEventListener('updatefound', () => {
          const newWorker = this.swRegistration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              this.showUpdateNotification();
            }
          });
        });

        // Handle service worker controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('Service Worker controller changed');
          window.location.reload();
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    } else {
      console.warn('Service Worker not supported');
    }
  }

  setupEventListeners() {
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('Install prompt triggered');
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallPrompt();
    });

    // Listen for appinstalled event
    window.addEventListener('appinstalled', (evt) => {
      console.log('App was installed');
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.hideInstallPrompt();
      
      // Track installation
      this.trackInstallation();
    });

    // Listen for online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.onConnectionChange(true);
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.onConnectionChange(false);
    });

    // Listen for visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.onAppVisible();
      }
    });
  }

  checkInstallationStatus() {
    // Check if app is installed using display mode
    if (window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true) {
      this.isInstalled = true;
      console.log('App is running in standalone mode (installed)');
    }
  }

  showInstallPrompt() {
    // Create install prompt element
    const installPrompt = document.createElement('div');
    installPrompt.id = 'pwa-install-prompt';
    installPrompt.innerHTML = `
      <div class="pwa-install-overlay">
        <div class="pwa-install-card">
          <div class="pwa-install-icon">📱</div>
          <h3>Install Mudassir Javed</h3>
          <p>Add this app to your home screen for quick access and offline use.</p>
          <div class="pwa-install-buttons">
            <button class="pwa-install-btn pwa-install-primary" onclick="window.pwaService.installApp()">
              Install App
            </button>
            <button class="pwa-install-btn pwa-install-secondary" onclick="window.pwaService.hideInstallPrompt()">
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .pwa-install-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
      }
      
      .pwa-install-card {
        background: rgba(30, 41, 59, 0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(148, 163, 184, 0.2);
        border-radius: 20px;
        padding: 30px;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        animation: slideUp 0.3s ease;
      }
      
      .pwa-install-icon {
        font-size: 48px;
        margin-bottom: 20px;
      }
      
      .pwa-install-card h3 {
        color: #e2e8f0;
        margin-bottom: 10px;
        font-size: 1.5rem;
      }
      
      .pwa-install-card p {
        color: #94a3b8;
        margin-bottom: 25px;
        line-height: 1.6;
      }
      
      .pwa-install-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
      }
      
      .pwa-install-btn {
        padding: 12px 24px;
        border: none;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .pwa-install-primary {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
      }
      
      .pwa-install-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      }
      
      .pwa-install-secondary {
        background: rgba(148, 163, 184, 0.1);
        color: #94a3b8;
        border: 1px solid rgba(148, 163, 184, 0.2);
      }
      
      .pwa-install-secondary:hover {
        background: rgba(148, 163, 184, 0.2);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(installPrompt);
  }

  hideInstallPrompt() {
    const prompt = document.getElementById('pwa-install-prompt');
    if (prompt) {
      prompt.remove();
    }
  }

  async installApp() {
    if (this.deferredPrompt) {
      try {
        // Show the install prompt
        this.deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await this.deferredPrompt.userChoice;
        
        console.log(`User response to the install prompt: ${outcome}`);
        
        // Clear the deferredPrompt
        this.deferredPrompt = null;
        
        // Hide the custom install prompt
        this.hideInstallPrompt();
        
      } catch (error) {
        console.error('Installation failed:', error);
      }
    }
  }

  showUpdateNotification() {
    // Create update notification
    const updateNotification = document.createElement('div');
    updateNotification.id = 'pwa-update-notification';
    updateNotification.innerHTML = `
      <div class="pwa-update-banner">
        <span>🔄 New version available</span>
        <button onclick="window.pwaService.updateApp()">Update</button>
        <button onclick="window.pwaService.dismissUpdate()">Dismiss</button>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .pwa-update-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 9998;
        font-weight: 600;
      }
      
      .pwa-update-banner button {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        margin-left: 10px;
        transition: all 0.3s ease;
      }
      
      .pwa-update-banner button:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(updateNotification);
  }

  updateApp() {
    if (this.swRegistration && this.swRegistration.waiting) {
      // Send message to service worker to skip waiting
      this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  dismissUpdate() {
    const notification = document.getElementById('pwa-update-notification');
    if (notification) {
      notification.remove();
    }
  }

  onConnectionChange(isOnline) {
    console.log(`Connection changed: ${isOnline ? 'Online' : 'Offline'}`);
    
    // You can add custom logic here for connection changes
    // For example, show/hide offline indicators, sync data, etc.
  }

  onAppVisible() {
    console.log('App became visible');
    
    // Check for updates when app becomes visible
    if (this.swRegistration) {
      this.swRegistration.update();
    }
  }

  trackInstallation() {
    // Track installation in analytics
    if (window.gtag) {
      window.gtag('event', 'pwa_install', {
        event_category: 'PWA',
        event_label: 'App Installation',
        value: 1
      });
    }
  }

  // Public methods
  getInstallationStatus() {
    return this.isInstalled;
  }

  getConnectionStatus() {
    return this.isOnline;
  }

  getServiceWorkerRegistration() {
    return this.swRegistration;
  }

  // Check if PWA is supported
  isSupported() {
    return 'serviceWorker' in navigator && 'PushManager' in window;
  }

  // Request notification permission
  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission;
    }
    return 'denied';
  }

  // Subscribe to push notifications
  async subscribeToPushNotifications() {
    if (!this.swRegistration) {
      console.error('Service Worker not registered');
      return null;
    }

    try {
      const subscription = await this.swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(process.env.VITE_VAPID_PUBLIC_KEY || '')
      });

      console.log('Push notification subscription:', subscription);
      return subscription;
    } catch (error) {
      console.error('Failed to subscribe to push notifications:', error);
      return null;
    }
  }

  // Convert VAPID key
  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

// Create and export PWA service instance
const pwaService = new PWAService();

// Make it available globally
if (typeof window !== 'undefined') {
  window.pwaService = pwaService;
}

export default pwaService; 