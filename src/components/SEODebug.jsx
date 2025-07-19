import React, { useState, useEffect } from 'react';
import seoService from '../services/seo';

const SEODebug = () => {
  const [currentMeta, setCurrentMeta] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Minimized by default

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
      updateMetaInfo();
    }
  }, []);

  const updateMetaInfo = () => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const keywords = document.querySelector('meta[name="keywords"]')?.content || '';
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content || '';
    const ogDescription = document.querySelector('meta[property="og:description"]')?.content || '';
    const ogImage = document.querySelector('meta[property="og:image"]')?.content || '';
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')?.content || '';
    const canonical = document.querySelector('link[rel="canonical"]')?.href || '';

    setCurrentMeta({
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      twitterTitle,
      canonical
    });
  };

  const testSEOFunctions = () => {
    // Test SEO service functions
    console.log('🧪 Testing SEO Service Functions...');
    
    // Test page SEO update
    seoService.updatePageSEO('projects');
    console.log('✅ Updated page SEO for projects');
    
    // Test meta tag update
    seoService.updateMetaTags({
      title: 'Test Title - SEO Debug',
      description: 'Test description for SEO debugging',
      keywords: 'test, seo, debug, portfolio'
    });
    console.log('✅ Updated meta tags');
    
    // Test breadcrumbs
    const breadcrumbs = [
      { name: 'Home', url: 'https://yourdomain.com' },
      { name: 'Projects', url: 'https://yourdomain.com/projects' },
      { name: 'Test Project', url: 'https://yourdomain.com/projects/test' }
    ];
    seoService.addBreadcrumbs(breadcrumbs);
    console.log('✅ Added breadcrumbs');
    
    // Update display
    setTimeout(updateMetaInfo, 100);
  };

  const validateStructuredData = () => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    console.log('🔍 Validating Structured Data...');
    
    scripts.forEach((script, index) => {
      try {
        const data = JSON.parse(script.textContent);
        console.log(`✅ Script ${index + 1}:`, data);
      } catch (error) {
        console.error(`❌ Script ${index + 1} has invalid JSON:`, error);
      }
    });
  };

  const checkCoreWebVitals = () => {
    console.log('📊 Checking Core Web Vitals...');
    
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => console.log('CLS:', metric));
        getFID((metric) => console.log('FID:', metric));
        getFCP((metric) => console.log('FCP:', metric));
        getLCP((metric) => console.log('LCP:', metric));
        getTTFB((metric) => console.log('TTFB:', metric));
      });
    } else {
      console.log('⚠️ Web Vitals not available');
    }
  };

  if (!isVisible) return null;

  // Minimized view
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg px-4 py-2 text-xs font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          style={{ minWidth: 100 }}
        >
          🔍 SEO Debug
        </button>
      </div>
    );
  }

  // Expanded view
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 max-w-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          🔍 SEO Debug Panel
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-lg px-2"
            title="Minimize"
          >
            –
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <strong>Title:</strong>
          <div className="text-gray-600 dark:text-gray-300 truncate">
            {currentMeta.title}
          </div>
        </div>
        
        <div>
          <strong>Description:</strong>
          <div className="text-gray-600 dark:text-gray-300 truncate">
            {currentMeta.description}
          </div>
        </div>
        
        <div>
          <strong>Keywords:</strong>
          <div className="text-gray-600 dark:text-gray-300 truncate">
            {currentMeta.keywords}
          </div>
        </div>
        
        <div>
          <strong>OG Title:</strong>
          <div className="text-gray-600 dark:text-gray-300 truncate">
            {currentMeta.ogTitle}
          </div>
        </div>
        
        <div>
          <strong>Canonical:</strong>
          <div className="text-gray-600 dark:text-gray-300 truncate">
            {currentMeta.canonical}
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <button
          onClick={testSEOFunctions}
          className="w-full px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Test SEO Functions
        </button>
        
        <button
          onClick={validateStructuredData}
          className="w-full px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Validate Structured Data
        </button>
        
        <button
          onClick={checkCoreWebVitals}
          className="w-full px-2 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          Check Core Web Vitals
        </button>
        
        <button
          onClick={updateMetaInfo}
          className="w-full px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Refresh Meta Info
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Only visible in development mode
      </div>
    </div>
  );
};

export default SEODebug; 