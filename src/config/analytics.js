// Analytics and Performance Monitoring Configuration
// Replace these placeholder values with your actual IDs

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Configuration
  GA4: {
    // Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
    // Get this from: https://analytics.google.com/ → Admin → Data Streams → Web Stream → Measurement ID
    MEASUREMENT_ID: 'G-XXXXXXXXXX', // PLACEHOLDER: Replace with your GA4 Measurement ID
    
    // Enable/disable analytics
    ENABLED: process.env.NODE_ENV === 'production',
    
    // Debug mode for development
    DEBUG: process.env.NODE_ENV === 'development',
    
    // Custom dimensions and metrics
    CUSTOM_DIMENSIONS: {
      USER_TYPE: 'user_type',
      PAGE_SECTION: 'page_section',
      FEATURE_USAGE: 'feature_usage'
    }
  },
  
  // Performance Monitoring Configuration
  PERFORMANCE: {
    // Core Web Vitals thresholds
    THRESHOLDS: {
      LCP: 2500, // Largest Contentful Paint (ms)
      FID: 100,  // First Input Delay (ms)
      CLS: 0.1,  // Cumulative Layout Shift
      FCP: 1800, // First Contentful Paint (ms)
      TTFB: 800  // Time to First Byte (ms)
    },
    
    // Enable performance monitoring
    ENABLED: true,
    
    // Sample rate for performance metrics (0-1)
    SAMPLE_RATE: 1.0
  },
  
  // Error Tracking Configuration
  ERROR_TRACKING: {
    // Enable error tracking
    ENABLED: process.env.NODE_ENV === 'production',
    
    // Error sampling rate (0-1)
    SAMPLE_RATE: 1.0,
    
    // Ignore certain error types
    IGNORE_ERRORS: [
      'ResizeObserver loop limit exceeded',
      'Script error.',
      'Network Error'
    ]
  }
};

// Helper function to check if analytics is enabled
export const isAnalyticsEnabled = () => {
  return ANALYTICS_CONFIG.GA4.ENABLED && ANALYTICS_CONFIG.GA4.MEASUREMENT_ID !== 'G-XXXXXXXXXX';
};

// Helper function to get GA4 Measurement ID
export const getGA4MeasurementId = () => {
  return ANALYTICS_CONFIG.GA4.MEASUREMENT_ID;
};

// Helper function to check if performance monitoring is enabled
export const isPerformanceMonitoringEnabled = () => {
  return ANALYTICS_CONFIG.PERFORMANCE.ENABLED;
};

// Helper function to check if error tracking is enabled
export const isErrorTrackingEnabled = () => {
  return ANALYTICS_CONFIG.ERROR_TRACKING.ENABLED;
}; 