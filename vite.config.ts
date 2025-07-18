import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ← babel plugin
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './public/manifest.json';

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
      manifest,
      srcDir: 'public',
      // Service worker source and destination for injectManifest
      swSrc: 'public/sw.js',
      swDest: 'dist/sw.js',
      // NOTE: public/sw.js must contain self.__WB_MANIFEST for injectManifest
      strategies: 'injectManifest',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: '/offline.html',
      },
      workbox: {
        navigateFallback: '/offline.html',
      },
    }),
    mode === "development" && componentTagger(),
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
