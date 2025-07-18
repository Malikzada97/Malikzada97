import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getGA4MeasurementId, isAnalyticsEnabled } from '../config/analytics';

// Initialize Google Analytics
const initializeGA4 = () => {
  if (!isAnalyticsEnabled()) {
    console.log('Analytics disabled or GA4 Measurement ID not configured');
    return null;
  }

  const measurementId = getGA4MeasurementId();
  
  // Check if GA4 is already loaded
  if (window.gtag) {
    return window.gtag;
  }

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: false // We'll handle page views manually
  });

  return window.gtag;
};

// Send page view to GA4
const sendPageView = (path, title) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;

  window.gtag('config', getGA4MeasurementId(), {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
};

// Send custom event to GA4
const sendEvent = (eventName, parameters = {}) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;

  window.gtag('event', eventName, {
    ...parameters,
    timestamp: Date.now()
  });
};

// Custom hook for analytics
export const useAnalytics = () => {
  const location = useLocation();

  // Initialize GA4 on mount
  useEffect(() => {
    initializeGA4();
  }, []);

  // Track page views
  useEffect(() => {
    if (isAnalyticsEnabled()) {
      sendPageView(location.pathname, document.title);
    }
  }, [location.pathname]);

  // Track custom events
  const trackEvent = useCallback((eventName, parameters = {}) => {
    sendEvent(eventName, parameters);
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonName, parameters = {}) => {
    trackEvent('button_click', {
      button_name: buttonName,
      ...parameters
    });
  }, [trackEvent]);

  // Track form submissions
  const trackFormSubmission = useCallback((formName, parameters = {}) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...parameters
    });
  }, [trackEvent]);

  // Track navigation
  const trackNavigation = useCallback((from, to, parameters = {}) => {
    trackEvent('navigation', {
      from_page: from,
      to_page: to,
      ...parameters
    });
  }, [trackEvent]);

  // Track feature usage
  const trackFeatureUsage = useCallback((featureName, parameters = {}) => {
    trackEvent('feature_usage', {
      feature_name: featureName,
      ...parameters
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metricName, value, parameters = {}) => {
    trackEvent('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      ...parameters
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackNavigation,
    trackFeatureUsage,
    trackPerformance,
    isEnabled: isAnalyticsEnabled()
  };
}; 