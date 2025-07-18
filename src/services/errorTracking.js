import { isErrorTrackingEnabled, ANALYTICS_CONFIG } from '../config/analytics';

// Error tracking configuration
const ERROR_CONFIG = ANALYTICS_CONFIG.ERROR_TRACKING;

// Check if error should be ignored
const shouldIgnoreError = (error) => {
  return ERROR_CONFIG.IGNORE_ERRORS.some(ignoredError => 
    error.message?.includes(ignoredError) || error.name?.includes(ignoredError)
  );
};

// Send error to GA4
const sendErrorToGA4 = (error, errorInfo = {}) => {
  if (!window.gtag) return;

  const errorData = {
    event_category: 'Error',
    event_label: error.name || 'Unknown Error',
    value: 1,
    custom_metric_6: 1,
    error_message: error.message,
    error_stack: error.stack,
    error_file: errorInfo.fileName,
    error_line: errorInfo.lineNumber,
    error_column: errorInfo.columnNumber,
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    timestamp: Date.now()
  };

  window.gtag('event', 'javascript_error', errorData);
};

// Log error to console (for debugging)
const logErrorToConsole = (error, errorInfo = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.group('🚨 JavaScript Error');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('URL:', window.location.href);
    console.error('User Agent:', navigator.userAgent);
    console.groupEnd();
  }
};

// Global error handler
const handleGlobalError = (event) => {
  if (!isErrorTrackingEnabled()) return;

  const error = event.error || event.reason;
  
  if (!error || shouldIgnoreError(error)) return;

  sendErrorToGA4(error, {
    fileName: event.filename,
    lineNumber: event.lineno,
    columnNumber: event.colno
  });

  logErrorToConsole(error, {
    fileName: event.filename,
    lineNumber: event.lineno,
    columnNumber: event.colno
  });
};

// Unhandled promise rejection handler
const handleUnhandledRejection = (event) => {
  if (!isErrorTrackingEnabled()) return;

  const error = event.reason;
  
  if (!error || shouldIgnoreError(error)) return;

  sendErrorToGA4(error, {
    type: 'unhandled_promise_rejection'
  });

  logErrorToConsole(error, {
    type: 'unhandled_promise_rejection'
  });
};

// Initialize error tracking
export const initializeErrorTracking = () => {
  if (!isErrorTrackingEnabled()) {
    console.log('Error tracking disabled');
    return;
  }

  // Add global error listeners
  window.addEventListener('error', handleGlobalError);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);

  // Track React errors (if using Error Boundary)
  if (window.React && window.React.Component) {
    const originalComponentDidCatch = window.React.Component.prototype.componentDidCatch;
    
    window.React.Component.prototype.componentDidCatch = function(error, errorInfo) {
      if (isErrorTrackingEnabled() && !shouldIgnoreError(error)) {
        sendErrorToGA4(error, {
          componentStack: errorInfo.componentStack,
          type: 'react_error_boundary'
        });
        
        logErrorToConsole(error, {
          componentStack: errorInfo.componentStack,
          type: 'react_error_boundary'
        });
      }
      
      // Call original method if it exists
      if (originalComponentDidCatch) {
        originalComponentDidCatch.call(this, error, errorInfo);
      }
    };
  }
};

// Manual error tracking function
export const trackError = (error, context = {}) => {
  if (!isErrorTrackingEnabled() || shouldIgnoreError(error)) return;

  sendErrorToGA4(error, {
    ...context,
    type: 'manual_tracking'
  });

  logErrorToConsole(error, {
    ...context,
    type: 'manual_tracking'
  });
};

// Track specific error types
export const trackNetworkError = (url, status, error) => {
  if (!isErrorTrackingEnabled()) return;

  const networkError = new Error(`Network Error: ${status} - ${url}`);
  networkError.name = 'NetworkError';
  
  trackError(networkError, {
    url,
    status,
    originalError: error,
    type: 'network_error'
  });
};

export const trackValidationError = (field, value, rule) => {
  if (!isErrorTrackingEnabled()) return;

  const validationError = new Error(`Validation Error: ${field} - ${rule}`);
  validationError.name = 'ValidationError';
  
  trackError(validationError, {
    field,
    value,
    rule,
    type: 'validation_error'
  });
};

// Cleanup function
export const cleanupErrorTracking = () => {
  window.removeEventListener('error', handleGlobalError);
  window.removeEventListener('unhandledrejection', handleUnhandledRejection);
}; 