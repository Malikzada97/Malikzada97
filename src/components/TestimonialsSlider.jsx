import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiCheck, FiTrendingUp, FiCalendar, FiLinkedin, FiGlobe, FiStar, FiMessageSquare, FiUser, FiThumbsUp, FiShare2, FiHeart } from 'react-icons/fi';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [likedTestimonials, setLikedTestimonials] = useState({});
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      company: 'TechStart Solutions',
      companyLogo: '/logos/techstart-logo.svg',
      avatar: '/avatars/sarah-johnson.svg',
      rating: 5,
      project: 'E-commerce Platform',
      category: 'web-development',
      industry: 'E-commerce',
      testimonial: 'Mudassir delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, performance optimization, and user experience were outstanding. Our sales increased by 40% within the first month!',
      results: ['40% increase in sales', '60% faster loading times', '95% user satisfaction'],
      featured: true,
      date: 'March 2024',
      location: 'Quetta, Balochistan Pakistan',
      verified: true,
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      website: 'https://techstartsolutions.com',
      projectMetrics: {
        duration: '6 weeks',
        budget: '$15,000',
        roi: '300%',
        timeline: 'On-time delivery'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Senior Data Analyst',
      company: 'Global Analytics Corp',
      companyLogo: '/logos/global-analytics-logo.svg',
      avatar: '/avatars/michael-chen.svg',
      rating: 5,
      project: 'Business Intelligence Dashboard',
      category: 'data-analytics',
      industry: 'Finance',
      testimonial: 'The data analytics solution Mudassir built transformed how we make business decisions. The insights are clear, actionable, and delivered exactly when we need them. Highly recommend for any data-driven organization.',
      results: ['Real-time insights', 'Automated reporting', '50% faster decision making'],
      featured: true,
      date: 'February 2024',
      location: 'San Francisco, CA',
      verified: true,
      linkedin: 'https://linkedin.com/in/michaelchen',
      website: 'https://globalanalytics.com',
      projectMetrics: {
        duration: '4 weeks',
        budget: '$12,000',
        roi: '250%',
        timeline: 'Early delivery'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Creative Agency Pro',
      companyLogo: '/logos/creative-agency-logo.svg',
      avatar: '/avatars/emily-rodriguez.svg',
      rating: 5,
      project: 'SEO Optimization',
      category: 'seo-services',
      industry: 'Marketing',
      testimonial: 'Working with Mudassir on our SEO strategy was a game-changer. Our organic traffic increased by 120% and we\'re now ranking on the first page for our target keywords. The results speak for themselves!',
      results: ['120% traffic increase', 'First page rankings', '35% conversion boost'],
      featured: false,
      date: 'January 2024',
      location: 'Los Angeles, CA',
      verified: true,
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      website: 'https://creativeagencypro.com',
      projectMetrics: {
        duration: '3 months',
        budget: '$8,000',
        roi: '400%',
        timeline: 'On-time delivery'
      }
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Chief Technology Officer',
      company: 'InnovateTech',
      companyLogo: '/logos/innovatetech-logo.svg',
      avatar: '/avatars/david-thompson.svg',
      rating: 5,
      project: 'Website Maintenance',
      category: 'maintenance',
      industry: 'Technology',
      testimonial: 'Mudassir\'s maintenance service keeps our website running smoothly 24/7. The security updates, performance monitoring, and quick response times give us peace of mind. Worth every penny!',
      results: ['99.9% uptime', '24/7 monitoring', '4-hour response time'],
      featured: false,
      date: 'Ongoing',
      location: 'Austin, TX',
      verified: true,
      linkedin: 'https://linkedin.com/in/davidthompson',
      website: 'https://innovatetech.com',
      projectMetrics: {
        duration: 'Ongoing',
        budget: '$599/month',
        roi: 'Continuous',
        timeline: '24/7 support'
      }
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Product Manager',
      company: 'StartupXYZ',
      companyLogo: '/logos/startupxyz-logo.svg',
      avatar: '/avatars/lisa-wang.svg',
      rating: 5,
      project: 'Team Training Session',
      category: 'training',
      industry: 'Startup',
      testimonial: 'The training session was incredibly valuable for our team. Mudassir explained complex concepts in simple terms and provided hands-on practice. Our team is now confident in managing our website independently.',
      results: ['Team confidence boost', 'Reduced dependencies', 'Improved efficiency'],
      featured: false,
      date: 'December 2023',
      location: 'Seattle, WA',
      verified: true,
      linkedin: 'https://linkedin.com/in/lisawang',
      website: 'https://startupxyz.com',
      projectMetrics: {
        duration: '1 day',
        budget: '$2,500',
        roi: '200%',
        timeline: 'On-time delivery'
      }
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Operations Manager',
      company: 'E-commerce Plus',
      companyLogo: '/logos/ecommerce-plus-logo.svg',
      avatar: '/avatars/robert-kim.svg',
      rating: 5,
      project: 'Performance Audit',
      category: 'performance',
      industry: 'E-commerce',
      testimonial: 'The performance audit revealed critical issues we didn\'t know existed. Mudassir\'s recommendations improved our page speed by 70% and significantly enhanced user experience. Excellent work!',
      results: ['70% speed improvement', 'Better user experience', 'Higher conversions'],
      featured: false,
      date: 'November 2023',
      location: 'Chicago, IL',
      verified: true,
      linkedin: 'https://linkedin.com/in/robertkim',
      website: 'https://ecommerceplus.com',
      projectMetrics: {
        duration: '2 weeks',
        budget: '$1,200',
        roi: '350%',
        timeline: 'Early delivery'
      }
    }
  ];

  // Responsive: determine cards per view
  const [cardsPerView, setCardsPerView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the correct index for sliding
  const maxIndex = testimonials.length - cardsPerView;
  const safeIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  // Navigation handlers (update to use safeIndex)
  const nextSlide = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  // Swipe gesture support
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let startX = 0;
    let isDown = false;
    const onTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].clientX;
  };
    const onTouchMove = (e) => {
      if (!isDown) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) prevSlide();
        else nextSlide();
        isDown = false;
      }
    };
    const onTouchEnd = () => { isDown = false; };
    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchmove', onTouchMove);
    slider.addEventListener('touchend', onTouchEnd);
    return () => {
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);
  };
  }, [currentIndex]);

  // Render stars for rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-3 h-3 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Handle helpful votes
  const handleHelpfulVote = (testimonialId) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [testimonialId]: (prev[testimonialId] || 0) + 1
    }));
  };

  // Handle like/unlike
  const handleLike = (testimonialId) => {
    setLikedTestimonials(prev => ({
      ...prev,
      [testimonialId]: !prev[testimonialId]
    }));
  };

  // Handle share
  const handleShare = (testimonial) => {
    const text = `"${testimonial.testimonial}" - ${testimonial.name}, ${testimonial.position} at ${testimonial.company}`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: 'Client Testimonial',
        text: text,
        url: url
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${text}\n\n${url}`);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative overflow-hidden"
        style={{ touchAction: 'pan-y' }}
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-0 pointer-events-none">
          <Button
          onClick={prevSlide}
            variant="outline"
            size="icon"
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex pointer-events-auto bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-xl transition-all duration-200 hover:scale-110"
        >
            <FiChevronLeft className="w-6 h-6" />
          </Button>
          <Button
          onClick={nextSlide}
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex pointer-events-auto bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-xl transition-all duration-200 hover:scale-110"
        >
            <FiChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <motion.div
          className="flex"
          style={{
            width: `${100 * testimonials.length / cardsPerView}%`,
            transform: `translateX(-${(safeIndex * 100) / testimonials.length}%)`,
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
            >
          {testimonials.map((testimonial, i) => (
            <div
                  key={testimonial.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / testimonials.length}%` }}
                >
              <Card className="h-full">
                    <CardContent className="p-5">
                  {/* Featured Badge, Quote, Text, etc. - keep your card content here */}
                        <Badge className="mb-3 bg-primary text-primary-foreground text-xs">
                    {testimonial.featured && 'Featured'}
                        </Badge>
                      <div className="mb-3">
                    <span className="text-primary/30">“</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                        "{testimonial.testimonial}"
                      </p>
                      {/* Project Info */}
                      <div className="mb-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {testimonial.project}
                          </Badge>
                          {testimonial.companyLogo && (
                            <img 
                              src={testimonial.companyLogo} 
                              alt={`${testimonial.company} logo`}
                              className="h-6 opacity-60 hover:opacity-100 transition-opacity"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                            {testimonial.industry}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <FiMapPin className="w-3 h-3 mr-1" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>

                      {/* Key Results */}
                      <div className="mb-4">
                        <div className="space-y-1">
                          {testimonial.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                              <FiCheck className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        {renderStars(testimonial.rating)}
                        <span className="text-xs text-muted-foreground ml-2">
                          {testimonial.rating}.0/5
                        </span>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-border"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-border" style={{display: 'none'}}>
                              <FiUser className="w-4 h-4 text-muted-foreground" />
                            </div>
                            {testimonial.verified && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                <FiCheck className="w-2 h-2 text-primary-foreground" />
                              </div>
                            )}
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-sm">{testimonial.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {testimonial.position}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex items-center space-x-1">
                          {testimonial.linkedin && (
                            <a 
                              href={testimonial.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <FiLinkedin className="w-3 h-3" />
                            </a>
                          )}
                          {testimonial.website && (
                            <a 
                              href={testimonial.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <FiGlobe className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Metrics */}
                      <div className="mt-3 pt-3 border-t border-border">
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="flex items-center">
                            <FiTrendingUp className="w-3 h-3 text-success mr-1" />
                            <span className="text-muted-foreground">ROI:</span>
                            <span className="ml-1 font-medium">{testimonial.projectMetrics.roi}</span>
                          </div>
                          <div className="flex items-center">
                            <FiCalendar className="w-3 h-3 text-primary mr-1" />
                            <span className="text-muted-foreground">Timeline:</span>
                            <span className="ml-1 font-medium">{testimonial.projectMetrics.timeline}</span>
                          </div>
                        </div>
                        
                        {/* Interactive Actions */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleHelpfulVote(testimonial.id)}
                              className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors"
                            >
                              <FiThumbsUp className="w-3 h-3 mr-1" />
                              Helpful ({helpfulVotes[testimonial.id] || 0})
                            </button>
                            <button
                              onClick={() => handleLike(testimonial.id)}
                              className={`flex items-center text-xs transition-colors ${
                                likedTestimonials[testimonial.id] 
                                  ? 'text-red-500' 
                                  : 'text-muted-foreground hover:text-red-500'
                              }`}
                            >
                              <FiHeart className={`w-3 h-3 mr-1 ${likedTestimonials[testimonial.id] ? 'fill-current' : ''}`} />
                              Like
                            </button>
                          </div>
                          <button
                            onClick={() => handleShare(testimonial)}
                            className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            <FiShare2 className="w-3 h-3 mr-1" />
                            Share
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
            </div>
              ))}
            </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ 
              width: testimonials.length > 0 ? `${((currentIndex + 1) / testimonials.length) * 100}%` : '100%'
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} of {testimonials.length}
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <Button variant="outline" size="sm" asChild>
          <a href="/testimonials">
            View All Testimonials
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;