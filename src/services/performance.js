import { isPerformanceMonitoringEnabled, ANALYTICS_CONFIG } from '../config/analytics';

// Performance metric thresholds
const THRESHOLDS = ANALYTICS_CONFIG.PERFORMANCE.THRESHOLDS;

// Helper function to determine metric rating
const getMetricRating = (metricName, value) => {
  const threshold = THRESHOLDS[metricName];
  if (!threshold) return 'unknown';
  
  if (value <= threshold) return 'good';
  if (value <= threshold * 1.5) return 'needs-improvement';
  return 'poor';
};

// Send performance metric to GA4
const sendToGA4 = (metricName, value, rating) => {
  if (!window.gtag) return;

  window.gtag('event', 'web_vitals', {
    event_category: 'Web Vitals',
    event_label: metricName,
    value: Math.round(value),
    custom_metric_1: value,
    custom_metric_2: rating === 'good' ? 1 : 0,
    custom_metric_3: rating === 'needs-improvement' ? 1 : 0,
    custom_metric_4: rating === 'poor' ? 1 : 0,
    non_interaction: true
  });
};

// Send performance metric to console (for debugging)
const logToConsole = (metricName, value, rating) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 ${metricName}:`, {
      value: Math.round(value),
      rating,
      threshold: THRESHOLDS[metricName]
    });
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = async () => {
  if (!isPerformanceMonitoringEnabled()) {
    console.log('Performance monitoring disabled');
    return;
  }

  try {
    // Dynamic import to avoid issues with web-vitals
    const webVitals = await import('web-vitals');
    
    // Check if functions exist before calling them
    if (typeof webVitals.getCLS === 'function') {
      webVitals.getCLS((metric) => {
        const rating = getMetricRating('CLS', metric.value);
        sendToGA4('CLS', metric.value, rating);
        logToConsole('CLS', metric.value, rating);
      });
    }

    if (typeof webVitals.getFID === 'function') {
      webVitals.getFID((metric) => {
        const rating = getMetricRating('FID', metric.value);
        sendToGA4('FID', metric.value, rating);
        logToConsole('FID', metric.value, rating);
      });
    }

    if (typeof webVitals.getFCP === 'function') {
      webVitals.getFCP((metric) => {
        const rating = getMetricRating('FCP', metric.value);
        sendToGA4('FCP', metric.value, rating);
        logToConsole('FCP', metric.value, rating);
      });
    }

    if (typeof webVitals.getLCP === 'function') {
      webVitals.getLCP((metric) => {
        const rating = getMetricRating('LCP', metric.value);
        sendToGA4('LCP', metric.value, rating);
        logToConsole('LCP', metric.value, rating);
      });
    }

    if (typeof webVitals.getTTFB === 'function') {
      webVitals.getTTFB((metric) => {
        const rating = getMetricRating('TTFB', metric.value);
        sendToGA4('TTFB', metric.value, rating);
        logToConsole('TTFB', metric.value, rating);
      });
    }
  } catch (error) {
    console.warn('Failed to initialize web-vitals:', error);
  }
};

// Track custom performance metrics
export const trackCustomMetric = (metricName, value, category = 'Custom') => {
  if (!isPerformanceMonitoringEnabled()) return;

  window.gtag?.('event', 'custom_performance_metric', {
    event_category: category,
    event_label: metricName,
    value: Math.round(value),
    custom_metric_5: value,
    non_interaction: true
  });

  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 Custom ${metricName}:`, value);
  }
};

// Track page load time
export const trackPageLoadTime = () => {
  if (!isPerformanceMonitoringEnabled()) return;

  // Use Navigation Timing API
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    
    trackCustomMetric('Page Load Time', loadTime, 'Page Performance');
  }

  // Use Performance Observer for more modern browsers
  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          trackCustomMetric('Navigation Load Time', entry.loadEventEnd - entry.loadEventStart, 'Page Performance');
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation'] });
  }
};

// Track resource loading performance
export const trackResourcePerformance = () => {
  if (!isPerformanceMonitoringEnabled()) return;

  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceName = entry.name.split('/').pop() || 'unknown';
          trackCustomMetric(`Resource Load: ${resourceName}`, entry.duration, 'Resource Performance');
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }
};

// Track memory usage (if available)
export const trackMemoryUsage = () => {
  if (!isPerformanceMonitoringEnabled()) return;

  if (window.performance && window.performance.memory) {
    const memory = window.performance.memory;
    trackCustomMetric('Memory Used', memory.usedJSHeapSize, 'Memory');
    trackCustomMetric('Memory Total', memory.totalJSHeapSize, 'Memory');
  }
};

// Initialize all performance tracking
export const initializeAllPerformanceTracking = async () => {
  await initializePerformanceMonitoring();
  trackPageLoadTime();
  trackResourcePerformance();
  trackMemoryUsage();
}; 