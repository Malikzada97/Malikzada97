// Comprehensive Analytics Service
// Supports Google Analytics 4, Google Tag Manager, Facebook Pixel, LinkedIn Insight Tag, and custom events

import { ANALYTICS_CONFIG, isAnalyticsEnabled } from '../config/analytics';

class AnalyticsService {
  constructor() {
    this.isInitialized = false;
    this.userProperties = {};
    this.sessionData = {};
    this.customEvents = [];
    
    this.init();
  }

  async init() {
    if (!isAnalyticsEnabled()) {
      console.log('Analytics disabled');
      return;
    }

    try {
      // Initialize all analytics providers
      await this.initializeGA4();
      await this.initializeGTM();
      await this.initializeFacebookPixel();
      await this.initializeLinkedInInsight();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Track initial page view
      this.trackPageView(window.location.pathname);
      
      this.isInitialized = true;
      console.log('🚀 Analytics service initialized');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  // Google Analytics 4 Initialization
  async initializeGA4() {
    if (!ANALYTICS_CONFIG.GA4.MEASUREMENT_ID || ANALYTICS_CONFIG.GA4.MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('GA4 Measurement ID not configured');
      return;
    }

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4.MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_CONFIG.GA4.MEASUREMENT_ID, {
      debug_mode: ANALYTICS_CONFIG.GA4.DEBUG,
      send_page_view: false, // We'll handle this manually
      custom_map: ANALYTICS_CONFIG.GA4.CUSTOM_DIMENSIONS
    });

    console.log('GA4 initialized');
  }

  // Google Tag Manager Initialization
  async initializeGTM() {
    const gtmId = process.env.VITE_GTM_ID;
    if (!gtmId) {
      console.log('GTM ID not configured');
      return;
    }

    // GTM script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoscript);

    console.log('GTM initialized');
  }

  // Facebook Pixel Initialization
  async initializeFacebookPixel() {
    const pixelId = process.env.VITE_FACEBOOK_PIXEL_ID;
    if (!pixelId) {
      console.log('Facebook Pixel ID not configured');
      return;
    }

    // Facebook Pixel script
    const pixelScript = document.createElement('script');
    pixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(pixelScript);

    // Facebook Pixel noscript
    const pixelNoscript = document.createElement('noscript');
    pixelNoscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>
    `;
    document.body.appendChild(pixelNoscript);

    console.log('Facebook Pixel initialized');
  }

  // LinkedIn Insight Tag Initialization
  async initializeLinkedInInsight() {
    const linkedInId = process.env.VITE_LINKEDIN_INSIGHT_ID;
    if (!linkedInId) {
      console.log('LinkedIn Insight ID not configured');
      return;
    }

    // LinkedIn Insight Tag script
    const linkedInScript = document.createElement('script');
    linkedInScript.innerHTML = `
      _linkedin_partner_id = "${linkedInId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(linkedInScript);

    const linkedInScript2 = document.createElement('script');
    linkedInScript2.async = true;
    linkedInScript2.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(linkedInScript2);

    // LinkedIn noscript
    const linkedInNoscript = document.createElement('noscript');
    linkedInNoscript.innerHTML = `
      <img height="1" width="1" style="display:none;" alt=""
      src="https://px.ads.linkedin.com/collect/?pid=${linkedInId}&fmt=gif" />
    `;
    document.body.appendChild(linkedInNoscript);

    console.log('LinkedIn Insight Tag initialized');
  }

  // Set up event listeners for automatic tracking
  setupEventListeners() {
    // Track page views on route changes
    if (window.history && window.history.pushState) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = (...args) => {
        originalPushState.apply(window.history, args);
        this.trackPageView(window.location.pathname);
      };

      window.history.replaceState = (...args) => {
        originalReplaceState.apply(window.history, args);
        this.trackPageView(window.location.pathname);
      };

      window.addEventListener('popstate', () => {
        this.trackPageView(window.location.pathname);
      });
    }

    // Track clicks on external links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.hostname !== window.location.hostname) {
        this.trackEvent('external_link_click', {
          link_url: link.href,
          link_text: link.textContent,
          page: window.location.pathname
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form.tagName === 'FORM') {
        this.trackEvent('form_submit', {
          form_id: form.id || form.className,
          form_action: form.action,
          page: window.location.pathname
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        this.trackEvent('scroll_depth', {
          scroll_percent: scrollPercent,
          page: window.location.pathname
        });
      }
    });

    // Track time on page
    let startTime = Date.now();
    setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage % 30 === 0) { // Track every 30 seconds
        this.trackEvent('time_on_page', {
          seconds: timeOnPage,
          page: window.location.pathname
        });
      }
    }, 1000);
  }

  // Track page view
  trackPageView(page = window.location.pathname, title = document.title) {
    const pageData = {
      page_title: title,
      page_location: window.location.href,
      page_referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timestamp: new Date().toISOString()
    };

    // GA4
    if (window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.GA4.MEASUREMENT_ID, {
        page_title: pageData.page_title,
        page_location: pageData.page_location,
        page_referrer: pageData.page_referrer
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Custom tracking
    this.trackEvent('page_view', pageData);

    console.log('📊 Page view tracked:', page);
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    const eventData = {
      event_name: eventName,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      user_agent: navigator.userAgent,
      ...parameters
    };

    // GA4
    if (window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        custom_parameter_1: eventName,
        custom_parameter_2: window.location.pathname
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
    }

    // GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      });
    }

    // Store for debugging
    this.customEvents.push(eventData);

    if (ANALYTICS_CONFIG.GA4.DEBUG) {
      console.log('📊 Event tracked:', eventName, parameters);
    }
  }

  // Track user engagement
  trackEngagement(action, details = {}) {
    this.trackEvent('user_engagement', {
      action,
      ...details
    });
  }

  // Track conversion events
  trackConversion(conversionType, value = 0, currency = 'USD') {
    this.trackEvent('conversion', {
      conversion_type: conversionType,
      value,
      currency
    });

    // Facebook Pixel conversion
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: value,
        currency: currency
      });
    }
  }

  // Track form interactions
  trackFormInteraction(formId, action, fieldName = null) {
    this.trackEvent('form_interaction', {
      form_id: formId,
      action,
      field_name: fieldName,
      page: window.location.pathname
    });
  }

  // Track button clicks
  trackButtonClick(buttonId, buttonText, page = window.location.pathname) {
    this.trackEvent('button_click', {
      button_id: buttonId,
      button_text: buttonText,
      page
    });
  }

  // Track social media clicks
  trackSocialClick(platform, action, url) {
    this.trackEvent('social_click', {
      platform,
      action,
      url,
      page: window.location.pathname
    });
  }

  // Track project views
  trackProjectView(projectId, projectName, category) {
    this.trackEvent('project_view', {
      project_id: projectId,
      project_name: projectName,
      category,
      page: window.location.pathname
    });
  }

  // Track skill interactions
  trackSkillInteraction(skillName, action, category) {
    this.trackEvent('skill_interaction', {
      skill_name: skillName,
      action,
      category,
      page: window.location.pathname
    });
  }

  // Track contact form submissions
  trackContactSubmission(formData) {
    this.trackEvent('contact_submission', {
      form_type: 'contact',
      has_name: !!formData.name,
      has_email: !!formData.email,
      has_message: !!formData.message,
      page: window.location.pathname
    });

    // Track as conversion
    this.trackConversion('contact_form', 1);
  }

  // Set user properties
  setUserProperties(properties) {
    this.userProperties = { ...this.userProperties, ...properties };

    // GA4 user properties
    if (window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.GA4.MEASUREMENT_ID, {
        custom_map: {
          user_type: 'user_type',
          user_source: 'user_source',
          user_device: 'user_device'
        },
        user_type: properties.userType,
        user_source: properties.userSource,
        user_device: properties.userDevice
      });
    }
  }

  // Set session data
  setSessionData(data) {
    this.sessionData = { ...this.sessionData, ...data };
  }

  // Get analytics data for debugging
  getAnalyticsData() {
    return {
      isInitialized: this.isInitialized,
      userProperties: this.userProperties,
      sessionData: this.sessionData,
      customEvents: this.customEvents,
      pageViews: this.customEvents.filter(e => e.event_name === 'page_view').length,
      totalEvents: this.customEvents.length
    };
  }

  // Clear analytics data (for privacy)
  clearAnalyticsData() {
    this.userProperties = {};
    this.sessionData = {};
    this.customEvents = [];
  }
}

// Create and export analytics service instance
const analyticsService = new AnalyticsService();

// Make it available globally
if (typeof window !== 'undefined') {
  window.analyticsService = analyticsService;
}

export default analyticsService; 