import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ← babel plugin
import path from "path";

import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Mudassir Javed - Full Stack Developer & Data Analyst",
        short_name: "Mudassir Javed",
        description: "Professional website showcasing full-stack development, data analytics, and AI solutions by Mudassir Javed. View projects, skills, and get in touch for collaborations.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#0f172a",
        theme_color: "#3B82F6",
        categories: ["business", "productivity", "utilities"],
        lang: "en",
        dir: "ltr",
        icons: [
          { src: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-128x128.png", sizes: "128x128", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png", purpose: "maskable any" },
          { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable any" }
        ],
        shortcuts: [
          {
            name: "View Projects",
            short_name: "Projects",
            description: "View my latest projects and work",
            url: "/projects",
            icons: [{ src: "/icons/icon-96x96.png", sizes: "96x96" }]
          },
          {
            name: "Contact Me",
            short_name: "Contact",
            description: "Get in touch for collaborations",
            url: "/contact",
            icons: [{ src: "/icons/icon-96x96.png", sizes: "96x96" }]
          },
          {
            name: "About Me",
            short_name: "About",
            description: "Learn more about my background",
            url: "/about",
            icons: [{ src: "/icons/icon-96x96.png", sizes: "96x96" }]
          }
        ],
        related_applications: [],
        prefer_related_applications: false,
        edge_side_panel: {
          preferred_width: 400
        }
      },
      srcDir: 'public',
      strategies: 'generateSW',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: '/offline.html',
      },
      workbox: {
        navigateFallback: '/offline.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          }
        ]
      },
    }),
    // Bundle analyzer for production builds
    mode === "production" && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle size
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    // Manual chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@radix-ui/react-tooltip'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons-vendor': ['react-icons'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
          'query-vendor': ['@tanstack/react-query'],
          'theme-vendor': ['next-themes'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'chart-vendor': ['recharts'],
          '3d-vendor': ['@react-three/fiber', '@react-spring/web', 'three'],
          // Page chunks
          'pages-main': [
            './src/pages/Home',
            './src/pages/About',
            './src/pages/Projects',
            './src/pages/Skills',
            './src/pages/Education',
            './src/pages/Contact',
            './src/pages/Pricing',
            './src/pages/Testimonials',
            './src/pages/NotFound'
          ],
          'pages-services': [
            './src/pages/SEOOptimization',
            './src/pages/WebsiteMaintenance',
            './src/pages/TrainingSession',
            './src/pages/PerformanceAudit',
            './src/pages/WebDevelopment',
            './src/pages/DataAnalytics',
            './src/pages/AIChatBots',
            './src/pages/AIAgents',
            './src/pages/AIAutomation'
          ],
          // Component chunks
          'components-ui': [
            './src/components/ui/button',
            './src/components/ui/card',
            './src/components/ui/badge',
            './src/components/ui/dialog',
            './src/components/ui/input',
            './src/components/ui/select',
            './src/components/ui/textarea',
            './src/components/ui/progress',
            './src/components/ui/toast',
            './src/components/ui/sonner'
          ],
          'components-core': [
            './src/components/Navbar',
            './src/components/Footer',
            './src/components/MobileMenu',
            './src/components/BottomNavigation',
            './src/components/SearchBar',
            './src/components/ThemeToggle',
            './src/components/LanguageSelector'
          ],
          'components-features': [
            './src/components/TestimonialsSlider',
            './src/components/ProjectCard',
            './src/components/ProjectDetailModal',
            './src/components/AvatarCard',
            './src/components/MagneticCard',
            './src/components/LazyImage',
            './src/components/FloatingElements',
            './src/components/Floating3DElement'
          ],
          'components-accessibility': [
            './src/components/AccessibilityProvider',
            './src/components/KeyboardNavigation',
            './src/components/DesktopKeyboardGuide',
            './src/components/ErrorBoundary',
            './src/components/CustomCursor'
          ]
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: mode === 'development',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons/fi',
      'clsx',
      'tailwind-merge',
      'class-variance-authority'
    ],
    exclude: ['@react-three/fiber', 'three']
  },
  // CSS optimization
  css: {
    devSourcemap: mode === 'development',
  },
}));
