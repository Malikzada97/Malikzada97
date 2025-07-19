const CACHE_NAME = 'mudassir-javed-v1.0.2';
const STATIC_CACHE = 'static-v1.0.2';
const DYNAMIC_CACHE = 'dynamic-v1.0.2';
const IMAGE_CACHE = 'images-v1.0.2';

// Workbox will replace this with the list of files to precache at build time
self.__WB_MANIFEST;

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/vite.svg',
  '/robots.txt'
];

// API routes to cache
const API_ROUTES = [
  '/api/projects',
  '/api/testimonials',
  '/api/skills'
];

// Image patterns to cache
const IMAGE_PATTERNS = [
  /\.(png|jpg|jpeg|gif|svg|webp)$/i,
  /\/avatars\//,
  /\/logos\//,
  /\/icons\//
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker v2: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static files
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Service Worker v2: Caching static files');
        return cache.addAll(STATIC_FILES);
      }),
      
      // Cache PWA icons
      caches.open(IMAGE_CACHE).then((cache) => {
        const iconPromises = [
          '/icons/icon-72x72.png',
          '/icons/icon-96x96.png',
          '/icons/icon-128x128.png',
          '/icons/icon-144x144.png',
          '/icons/icon-152x152.png',
          '/icons/icon-192x192.png',
          '/icons/icon-384x384.png',
          '/icons/icon-512x512.png'
        ].map(icon => cache.add(icon).catch(() => console.log(`Failed to cache ${icon}`)));
        
        return Promise.all(iconPromises);
      })
    ]).then(() => {
      console.log('Service Worker v2: Installation complete');
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker v2: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete ALL old caches to force fresh start
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE &&
              cacheName !== CACHE_NAME) {
            console.log('Service Worker v2: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker v2: Activation complete - All old caches cleared');
      return self.clients.claim();
    })
  );
});

// Message event - handle skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Service Worker v2: Skipping waiting...');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_ALL_CACHES') {
    console.log('Service Worker v2: Clearing all caches...');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('Service Worker v2: Deleting cache', cacheName);
            return caches.delete(cacheName);
          })
        );
      })
    );
  }
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (isStaticFile(request)) {
    event.respondWith(handleStaticFile(request));
  } else if (isImage(request)) {
    event.respondWith(handleImage(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// Check if request is for a static file
function isStaticFile(request) {
  const url = new URL(request.url);
  return STATIC_FILES.includes(url.pathname) || 
         url.pathname.startsWith('/static/') ||
         url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.js');
}

// Check if request is for an image
function isImage(request) {
  const url = new URL(request.url);
  return IMAGE_PATTERNS.some(pattern => 
    typeof pattern === 'string' ? url.pathname.includes(pattern) : pattern.test(url.pathname)
  );
}

// Check if request is for API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return API_ROUTES.some(route => url.pathname.startsWith(route));
}

// Handle static file requests
async function handleStaticFile(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Static file fetch failed:', error);
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Handle image requests
async function handleImage(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(IMAGE_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    
    // Return placeholder image
    return caches.match('/placeholder.svg');
  }
}

// Handle API requests
async function handleAPIRequest(request) {
  try {
    // Try network first for API requests
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('API fetch failed:', error);
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Handle dynamic requests (HTML pages, etc.)
async function handleDynamicRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Dynamic request fetch failed:', error);
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker v2: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background sync operations
    console.log('Service Worker v2: Performing background sync');
    
    // Example: Sync any pending data
    const pendingData = await getPendingData();
    if (pendingData.length > 0) {
      await syncPendingData(pendingData);
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Helper functions for background sync
async function getPendingData() {
  // Implementation for getting pending data
  return [];
}

async function syncPendingData(data) {
  // Implementation for syncing pending data
  console.log('Service Worker v2: Syncing pending data', data);
} 