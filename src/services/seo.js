// SEO Service - Dynamic meta tag management and SEO optimization

class SEOService {
  constructor() {
    this.defaultMeta = {
      title: 'Mudassir Javed - Full Stack Developer & Data Analyst',
      description: 'Professional website of Mudassir Javed - Full Stack Web Developer and Data Analyst specializing in React, Python, AI solutions, data visualization, and modern web technologies.',
      keywords: 'full stack developer, data analyst, React developer, Python developer, web development, data visualization, AI solutions, mudassir javed, frontend developer, backend developer',
      image: '/og-image.png',
      url: 'https://yourdomain.com',
      type: 'website',
      siteName: 'Mudassir Javed'
    };
    
    this.init();
  }

  init() {
    // Set up default meta tags
    this.updateMetaTags(this.defaultMeta);
  }

  // Update meta tags dynamically
  updateMetaTags(meta = {}) {
    const mergedMeta = { ...this.defaultMeta, ...meta };
    
    // Update title
    if (mergedMeta.title) {
      document.title = mergedMeta.title;
      this.setMetaTag('title', mergedMeta.title);
      this.setMetaTag('og:title', mergedMeta.title);
      this.setMetaTag('twitter:title', mergedMeta.title);
    }

    // Update description
    if (mergedMeta.description) {
      this.setMetaTag('description', mergedMeta.description);
      this.setMetaTag('og:description', mergedMeta.description);
      this.setMetaTag('twitter:description', mergedMeta.description);
    }

    // Update keywords
    if (mergedMeta.keywords) {
      this.setMetaTag('keywords', mergedMeta.keywords);
    }

    // Update image
    if (mergedMeta.image) {
      const fullImageUrl = mergedMeta.image.startsWith('http') 
        ? mergedMeta.image 
        : `${mergedMeta.url}${mergedMeta.image}`;
      
      this.setMetaTag('og:image', fullImageUrl);
      this.setMetaTag('twitter:image', fullImageUrl);
      this.setMetaTag('og:image:alt', mergedMeta.title || this.defaultMeta.title);
      this.setMetaTag('twitter:image:alt', mergedMeta.title || this.defaultMeta.title);
    }

    // Update URL
    if (mergedMeta.url) {
      const fullUrl = mergedMeta.url.startsWith('http') 
        ? mergedMeta.url 
        : `${this.defaultMeta.url}${mergedMeta.url}`;
      
      this.setMetaTag('og:url', fullUrl);
      this.setMetaTag('twitter:url', fullUrl);
      this.setCanonicalUrl(fullUrl);
    }

    // Update type
    if (mergedMeta.type) {
      this.setMetaTag('og:type', mergedMeta.type);
    }

    // Update site name
    if (mergedMeta.siteName) {
      this.setMetaTag('og:site_name', mergedMeta.siteName);
    }

    // Update structured data
    if (mergedMeta.structuredData) {
      this.updateStructuredData(mergedMeta.structuredData);
    }
  }

  // Set meta tag by name or property
  setMetaTag(name, content) {
    // Try to find existing meta tag
    let metaTag = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);

    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      // Create new meta tag
      metaTag = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:') || name.startsWith('fb:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  }

  // Set canonical URL
  setCanonicalUrl(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }

  // Update structured data
  updateStructuredData(data) {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.dataset.seo === 'dynamic') {
        script.remove();
      }
    });

    // Add new structured data
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'dynamic');
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  // Page-specific SEO configurations
  getPageSEO(page) {
    const seoConfigs = {
      home: {
        title: 'Mudassir Javed - Full Stack Developer & Data Analyst | React, Python, AI Solutions',
        description: 'Professional website of Mudassir Javed - Full Stack Web Developer and Data Analyst specializing in React, Python, AI solutions, data visualization, and modern web technologies.',
        keywords: 'full stack developer, data analyst, React developer, Python developer, web development, data visualization, AI solutions, mudassir javed',
        structuredData: this.getPersonSchema()
      },
      about: {
        title: 'About Mudassir Javed - Full Stack Developer & Data Analyst | Professional Background',
        description: 'Learn about Mudassir Javed\'s professional background, experience, and expertise in full-stack development, data analytics, and AI solutions.',
        keywords: 'about mudassir javed, full stack developer background, data analyst experience, React developer, Python developer, professional experience',
        structuredData: this.getPersonSchema()
      },
      projects: {
        title: 'Projects - Mudassir Javed | Web Development & Data Analytics Projects',
        description: 'Explore Mudassir Javed\'s web development, data analytics, and AI projects. View case studies and technical implementations.',
        keywords: 'web development projects, data analytics projects, React projects, Python projects, mudassir javed projects, case studies',
        structuredData: this.getPortfolioSchema()
      },
      skills: {
        title: 'Skills - Mudassir Javed | Technical Skills & Expertise',
        description: 'Comprehensive overview of Mudassir Javed\'s technical skills including React, Python, AI, data analysis, and modern web technologies.',
        keywords: 'technical skills, React skills, Python skills, AI skills, data analysis skills, web development skills',
        structuredData: this.getSkillsSchema()
      },
      contact: {
        title: 'Contact Mudassir Javed - Full Stack Developer & Data Analyst | Get In Touch',
        description: 'Get in touch with Mudassir Javed for collaborations, project inquiries, and professional opportunities. Fast response guaranteed.',
        keywords: 'contact mudassir javed, hire full stack developer, data analyst contact, React developer contact, project collaboration',
        structuredData: this.getContactSchema()
      },
      testimonials: {
        title: 'Testimonials - Mudassir Javed | Client Reviews & Feedback',
        description: 'Read client testimonials and reviews about Mudassir Javed\'s work. Real feedback from satisfied clients and project partners.',
        keywords: 'client testimonials, reviews, feedback, satisfied clients, project reviews, professional feedback',
        structuredData: this.getTestimonialsSchema()
      }
    };

    return seoConfigs[page] || this.defaultMeta;
  }

  // Update SEO for specific page
  updatePageSEO(page) {
    const pageSEO = this.getPageSEO(page);
    this.updateMetaTags(pageSEO);
  }

  // Schema.org structured data generators
  getPersonSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mudassir Javed",
      "alternateName": "Malikzada Mudassir",
      "jobTitle": "Full Stack Developer & Data Analyst",
      "description": "Professional full stack developer and data analyst specializing in React, Python, AI solutions, and data visualization.",
      "url": "https://yourdomain.com",
      "image": "https://yourdomain.com/avatar.jpg",
      "sameAs": [
        "https://github.com/mudassirjaved",
        "https://www.linkedin.com/in/malikzada-mudassir",
        "https://www.freelancer.pk/u/MudassirJDev",
        "https://www.fiverr.com/users/malikzada97"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "knowsAbout": [
        "React",
        "Python",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Data Analysis",
        "Data Visualization",
        "AI Solutions",
        "Web Development",
        "Full Stack Development"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Quetta",
        "addressRegion": "Balochistan",
        "addressCountry": "Pakistan"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "Malikmudassir1997@gmail.com",
        "telephone": "+92-311-277-061"
      }
    };
  }

  getPortfolioSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Mudassir Javed Projects",
      "description": "Collection of web development, data analytics, and AI projects by Mudassir Javed",
      "author": {
        "@type": "Person",
        "name": "Mudassir Javed"
      },
      "creator": {
        "@type": "Person",
        "name": "Mudassir Javed"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15",
      "url": "https://yourdomain.com/projects"
    };
  }

  getSkillsSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Technical Skills",
      "description": "Technical skills and expertise of Mudassir Javed",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "React Development"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Python Programming"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Data Analysis"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "AI Solutions"
        }
      ]
    };
  }

  getContactSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Mudassir Javed",
      "description": "Contact information and form for getting in touch with Mudassir Javed",
      "url": "https://yourdomain.com/contact",
      "mainEntity": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "Malikmudassir1997@gmail.com",
        "telephone": "+92-311-277-061"
      }
    };
  }

  getTestimonialsSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Client Testimonials",
      "description": "Client reviews and testimonials about Mudassir Javed's work",
      "itemListElement": [
        {
          "@type": "Review",
          "reviewBody": "Excellent work on our web development project",
          "author": {
            "@type": "Person",
            "name": "Client Name"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ]
    };
  }

  // Generate breadcrumb schema
  generateBreadcrumbSchema(breadcrumbs) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  // Add breadcrumbs
  addBreadcrumbs(breadcrumbs) {
    const breadcrumbSchema = this.generateBreadcrumbSchema(breadcrumbs);
    this.updateStructuredData(breadcrumbSchema);
  }

  // SEO performance tracking
  trackSEOPerformance() {
    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Track page load performance
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log('Page Load Time:', loadTime + 'ms');
    }
  }

  // Generate meta description from content
  generateMetaDescription(content, maxLength = 160) {
    // Remove HTML tags and extra whitespace
    const text = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    
    if (text.length <= maxLength) {
      return text;
    }
    
    // Truncate at word boundary
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  }

  // Update meta description from page content
  updateMetaDescriptionFromContent() {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      const content = mainContent.textContent;
      const description = this.generateMetaDescription(content);
      this.setMetaTag('description', description);
      this.setMetaTag('og:description', description);
      this.setMetaTag('twitter:description', description);
    }
  }

  // Initialize SEO for the current page
  initPageSEO() {
    const path = window.location.pathname;
    const page = this.getPageFromPath(path);
    
    if (page) {
      this.updatePageSEO(page);
    }
    
    // Track SEO performance
    this.trackSEOPerformance();
  }

  // Get page name from path
  getPageFromPath(path) {
    const pathMap = {
      '/': 'home',
      '/about': 'about',
      '/projects': 'projects',
      '/skills': 'skills',
      '/contact': 'contact',
      '/testimonials': 'testimonials',
      '/pricing': 'pricing',
      '/education': 'education'
    };
    
    return pathMap[path] || null;
  }
}

// Create and export SEO service instance
const seoService = new SEOService();

// Make it available globally
if (typeof window !== 'undefined') {
  window.seoService = seoService;
}

export default seoService; 