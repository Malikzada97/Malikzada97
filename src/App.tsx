import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, Suspense, lazy } from 'react';
import i18n from './i18n/index.js';

// Performance monitoring, analytics, and SEO imports
import { useAnalytics } from './hooks/useAnalytics';
import { initializeAllPerformanceTracking } from './services/performance';
import { initializeErrorTracking } from './services/errorTracking';
import analyticsService from './services/analytics';
import seoService from './services/seo';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Pages - Lazy loaded
const SEOOptimization = lazy(() => import('./pages/SEOOptimization'));
const WebsiteMaintenance = lazy(() => import('./pages/WebsiteMaintenance'));
const TrainingSession = lazy(() => import('./pages/TrainingSession'));
const PerformanceAudit = lazy(() => import('./pages/PerformanceAudit'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const DataAnalytics = lazy(() => import('./pages/DataAnalytics'));
const AIChatBots = lazy(() => import('./pages/AIChatBots'));
const AIAgents = lazy(() => import('./pages/AIAgents'));
const AIAutomation = lazy(() => import('./pages/AIAutomation'));

// Phase 3 Components
import CustomCursor from './components/CustomCursor';
import AccessibilityProvider from './components/AccessibilityProvider';
import KeyboardNavigation from './components/KeyboardNavigation';
import BottomNavigation from './components/BottomNavigation';
import DesktopKeyboardGuide from './components/DesktopKeyboardGuide';
import ErrorBoundary from './components/ErrorBoundary';
import SEODebug from './components/SEODebug';
import AnalyticsDebug from './components/AnalyticsDebug';

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  // Initialize analytics
  const analytics = useAnalytics();

  useEffect(() => {
    const rtlLanguages = ['ar', 'ur', 'he', 'fa'];
    const dir = rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.lang = i18n.language;
    const onLangChanged = (lng: string) => {
      const dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', dir);
      document.documentElement.lang = lng;
    };
    i18n.on('languageChanged', onLangChanged);
    return () => {
      i18n.off('languageChanged', onLangChanged);
    };
  }, []);

  // Initialize performance monitoring, error tracking, analytics, and SEO
  useEffect(() => {
    const initializeMonitoring = async () => {
      try {
        // Initialize performance monitoring
        await initializeAllPerformanceTracking();
        
        // Initialize error tracking
        initializeErrorTracking();
        
        // Initialize analytics service
        await analyticsService.init();
        
        // Initialize SEO service
        seoService.initPageSEO();
        
        console.log('🚀 Performance monitoring, error tracking, analytics, and SEO initialized');
      } catch (error) {
        console.warn('Failed to initialize monitoring:', error);
      }
    };

    initializeMonitoring();
  }, []);

  const location = useLocation();
  
  // Update SEO when location changes
  useEffect(() => {
    seoService.initPageSEO();
  }, [location.pathname]);
  
  return (
    <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <HelmetProvider>
          <TooltipProvider>
            <AccessibilityProvider>
              <div className="min-h-screen bg-background text-foreground">
                {/* Custom Cursor - Only on desktop */}
                <CustomCursor />
                {/* Navigation */}
                <Navbar />
                {/* Main Content */}
                <main id="main-content" tabIndex={-1} className="relative">
                  <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                      <Route path="/" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Home />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/about" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <About />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/projects" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Projects />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/skills" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Skills />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/education" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Education />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/contact" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Contact />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/pricing" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Pricing />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/testimonials" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <Testimonials />
                          </Suspense>
                        </PageTransition>
                      } />
                      {/* Service Routes */}
                      <Route path="/services/web-development" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <WebDevelopment />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/data-analytics" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <DataAnalytics />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/seo-optimization" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <SEOOptimization />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/website-maintenance" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <WebsiteMaintenance />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/training-session" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <TrainingSession />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/performance-audit" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <PerformanceAudit />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/ai-chat-bots" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <AIChatBots />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/ai-agents" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <AIAgents />
                          </Suspense>
                        </PageTransition>
                      } />
                      <Route path="/services/ai-automation" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <AIAutomation />
                          </Suspense>
                        </PageTransition>
                      } />
                      {/* 404 Route */}
                      <Route path="*" element={
                        <PageTransition>
                          <Suspense fallback={<PageLoader />}>
                            <NotFound />
                          </Suspense>
                        </PageTransition>
                      } />
                    </Routes>
                  </AnimatePresence>
                </main>
                {/* Footer */}
                <Footer />
                {/* Toast Notifications */}
                <Toaster 
                  position="top-right"
                  richColors
                  closeButton
                  duration={4000}
                />
                {/* Keyboard Navigation */}
                <KeyboardNavigation />
                {/* Desktop Keyboard Guide */}
                <DesktopKeyboardGuide />
                {/* Bottom Navigation */}
                <BottomNavigation />
                {/* Debug Components - Only in development */}
                {import.meta.env.DEV && <AnalyticsDebug />}
                {import.meta.env.DEV && <SEODebug />}

              </div>
            </AccessibilityProvider>
          </TooltipProvider>
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Visually rich default page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
        rotateY: 8,
        filter: 'blur(8px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        filter: 'blur(0px)'
      }}
      exit={{
        opacity: 0,
        y: -40,
        scale: 0.98,
        rotateY: -8,
        filter: 'blur(8px)'
      }}
      transition={{
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1]
      }}
      style={{ perspective: 1200 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default App;
