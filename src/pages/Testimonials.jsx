import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiStar, FiMessageSquare, FiUser, FiTrendingUp, FiCheck, FiArrowRight, FiCalendar, FiMapPin, FiSearch, FiUsers, FiGlobe } from 'react-icons/fi';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import SectionTitle from '../components/SectionTitle';
import MagneticCard from '../components/MagneticCard';
import { Helmet } from 'react-helmet-async';
import { Dialog, DialogContent } from '../components/ui/dialog';

// Animated counter hook
function useCountUp(target, duration = 1000, isPercent = false) {
  const [count, setCount] = useState(isPercent ? 0 : 0);
  useEffect(() => {
    let start = isPercent ? 0 : 0;
    let end = isPercent ? parseInt(target) : (typeof target === 'number' ? target : parseInt(target));
    if (isNaN(end)) end = 0;
    let startTime;
    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(isPercent ? value : value);
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(animateCount);
    // eslint-disable-next-line
  }, [target]);
  return isPercent ? `${count}%` : count;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0); // State for mobile slider index
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.items.sarah.name'),
      position: t('testimonials.items.sarah.position'),
      company: t('testimonials.items.sarah.company'),
      avatar: '/avatars/sarah-johnson.svg',
      rating: 5,
      category: 'web',
      project: t('testimonials.items.sarah.project'),
      testimonial: t('testimonials.items.sarah.testimonial'),
      results: [
        t('testimonials.items.sarah.results.sales'),
        t('testimonials.items.sarah.results.loading'),
        t('testimonials.items.sarah.results.satisfaction')
      ],
      featured: true,
      date: t('testimonials.items.sarah.date'),
      location: t('testimonials.items.sarah.location'),
      projectDetails: {
        duration: t('testimonials.items.sarah.details.duration'),
        budget: t('testimonials.items.sarah.details.budget'),
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        challenges: [
          t('testimonials.items.sarah.details.challenges.inventory'),
          t('testimonials.items.sarah.details.challenges.orders'),
          t('testimonials.items.sarah.details.challenges.mobile')
        ],
        solutions: [
          t('testimonials.items.sarah.details.solutions.dashboard'),
          t('testimonials.items.sarah.details.solutions.websocket'),
          t('testimonials.items.sarah.details.solutions.pwa')
        ]
      }
    },
    {
      id: 2,
      name: t('testimonials.items.michael.name'),
      position: t('testimonials.items.michael.position'),
      company: t('testimonials.items.michael.company'),
      avatar: '/avatars/michael-chen.svg',
      rating: 5,
      category: 'data',
      project: t('testimonials.items.michael.project'),
      testimonial: t('testimonials.items.michael.testimonial'),
      results: [
        t('testimonials.items.michael.results.insights'),
        t('testimonials.items.michael.results.reporting'),
        t('testimonials.items.michael.results.decisions')
      ],
      featured: true,
      date: t('testimonials.items.michael.date'),
      location: t('testimonials.items.michael.location'),
      projectDetails: {
        duration: t('testimonials.items.michael.details.duration'),
        budget: t('testimonials.items.michael.details.budget'),
        technologies: ['Python', 'Power BI', 'SQL Server', 'Azure'],
        challenges: [
          t('testimonials.items.michael.details.challenges.integration'),
          t('testimonials.items.michael.details.challenges.updates'),
          t('testimonials.items.michael.details.challenges.access')
        ],
        solutions: [
          t('testimonials.items.michael.details.solutions.etl'),
          t('testimonials.items.michael.details.solutions.live'),
          t('testimonials.items.michael.details.solutions.access')
        ]
      }
    },
    {
      id: 3,
      name: t('testimonials.items.emily.name'),
      position: t('testimonials.items.emily.position'),
      company: t('testimonials.items.emily.company'),
      avatar: '/avatars/emily-rodriguez.svg',
      rating: 5,
      category: 'seo',
      project: t('testimonials.items.emily.project'),
      testimonial: t('testimonials.items.emily.testimonial'),
      results: [
        t('testimonials.items.emily.results.traffic'),
        t('testimonials.items.emily.results.rankings'),
        t('testimonials.items.emily.results.conversion')
      ],
      featured: false,
      date: t('testimonials.items.emily.date'),
      location: t('testimonials.items.emily.location'),
      projectDetails: {
        duration: t('testimonials.items.emily.details.duration'),
        budget: t('testimonials.items.emily.details.budget'),
        technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'Yoast SEO'],
        challenges: [
          t('testimonials.items.emily.details.challenges.rankings'),
          t('testimonials.items.emily.details.challenges.structure'),
          t('testimonials.items.emily.details.challenges.speed')
        ],
        solutions: [
          t('testimonials.items.emily.details.solutions.audit'),
          t('testimonials.items.emily.details.solutions.content'),
          t('testimonials.items.emily.details.solutions.performance')
        ]
      }
    },
    {
      id: 4,
      name: t('testimonials.items.david.name'),
      position: t('testimonials.items.david.position'),
      company: t('testimonials.items.david.company'),
      avatar: '/avatars/david-thompson.svg',
      rating: 5,
      category: 'maintenance',
      project: t('testimonials.items.david.project'),
      testimonial: t('testimonials.items.david.testimonial'),
      results: [
        t('testimonials.items.david.results.uptime'),
        t('testimonials.items.david.results.monitoring'),
        t('testimonials.items.david.results.response')
      ],
      featured: false,
      date: t('testimonials.items.david.date'),
      location: t('testimonials.items.david.location'),
      projectDetails: {
        duration: t('testimonials.items.david.details.duration'),
        budget: t('testimonials.items.david.details.budget'),
        technologies: ['WordPress', 'Cloudflare', 'Uptime Robot', 'SSL'],
        challenges: [
          t('testimonials.items.david.details.challenges.downtime'),
          t('testimonials.items.david.details.challenges.security'),
          t('testimonials.items.david.details.challenges.response')
        ],
        solutions: [
          t('testimonials.items.david.details.solutions.monitoring'),
          t('testimonials.items.david.details.solutions.backups'),
          t('testimonials.items.david.details.solutions.support')
        ]
      }
    },
    {
      id: 5,
      name: t('testimonials.items.lisa.name'),
      position: t('testimonials.items.lisa.position'),
      company: t('testimonials.items.lisa.company'),
      avatar: '/avatars/lisa-wang.svg',
      rating: 5,
      category: 'training',
      project: t('testimonials.items.lisa.project'),
      testimonial: t('testimonials.items.lisa.testimonial'),
      results: [
        t('testimonials.items.lisa.results.confidence'),
        t('testimonials.items.lisa.results.dependencies'),
        t('testimonials.items.lisa.results.efficiency')
      ],
      featured: false,
      date: t('testimonials.items.lisa.date'),
      location: t('testimonials.items.lisa.location'),
      projectDetails: {
        duration: t('testimonials.items.lisa.details.duration'),
        budget: t('testimonials.items.lisa.details.budget'),
        technologies: ['WordPress', 'Google Analytics', 'SEO Tools', 'Security'],
        challenges: [
          t('testimonials.items.lisa.details.challenges.skills'),
          t('testimonials.items.lisa.details.challenges.dependency'),
          t('testimonials.items.lisa.details.challenges.costs')
        ],
        solutions: [
          t('testimonials.items.lisa.details.solutions.training'),
          t('testimonials.items.lisa.details.solutions.practice'),
          t('testimonials.items.lisa.details.solutions.support')
        ]
      }
    },
    {
      id: 6,
      name: t('testimonials.items.robert.name'),
      position: t('testimonials.items.robert.position'),
      company: t('testimonials.items.robert.company'),
      avatar: '/avatars/robert-kim.svg',
      rating: 5,
      category: 'performance',
      project: t('testimonials.items.robert.project'),
      testimonial: t('testimonials.items.robert.testimonial'),
      results: [
        t('testimonials.items.robert.results.speed'),
        t('testimonials.items.robert.results.experience'),
        t('testimonials.items.robert.results.conversions')
      ],
      featured: false,
      date: t('testimonials.items.robert.date'),
      location: t('testimonials.items.robert.location'),
      projectDetails: {
        duration: t('testimonials.items.robert.details.duration'),
        budget: t('testimonials.items.robert.details.budget'),
        technologies: ['PageSpeed Insights', 'GTmetrix', 'WebPageTest', 'Lighthouse'],
        challenges: [
          t('testimonials.items.robert.details.challenges.speed'),
          t('testimonials.items.robert.details.challenges.vitals'),
          t('testimonials.items.robert.details.challenges.mobile')
        ],
        solutions: [
          t('testimonials.items.robert.details.solutions.images'),
          t('testimonials.items.robert.details.solutions.code'),
          t('testimonials.items.robert.details.solutions.cdn')
        ]
      }
    }
  ];

  const filters = [
    { id: 'all', label: t('testimonials.filters.all'), count: testimonials.length },
    { id: 'web', label: t('testimonials.filters.web'), count: testimonials.filter(t => t.category === 'web').length },
    { id: 'data', label: t('testimonials.filters.data'), count: testimonials.filter(t => t.category === 'data').length },
    { id: 'seo', label: t('testimonials.filters.seo'), count: testimonials.filter(t => t.category === 'seo').length },
    { id: 'maintenance', label: t('testimonials.filters.maintenance'), count: testimonials.filter(t => t.category === 'maintenance').length },
    { id: 'training', label: t('testimonials.filters.training'), count: testimonials.filter(t => t.category === 'training').length },
    { id: 'performance', label: t('testimonials.filters.performance'), count: testimonials.filter(t => t.category === 'performance').length }
  ];

  const filteredTestimonials = testimonials
    .filter(testimonial => activeFilter === 'all' || testimonial.category === activeFilter)
    .filter(testimonial => 
      searchQuery === '' || 
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.testimonial.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const stats = {
    totalReviews: testimonials.length,
    averageRating: 5.0,
    satisfactionRate: '100%',
    repeatClients: '85%',
    totalProjects: '50+',
    countriesServed: '12+'
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>{t('testimonials.meta.title')}</title>
        <meta name="description" content={t('testimonials.meta.description')} />
        <meta name="keywords" content={t('testimonials.meta.keywords')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 mb-16"
            >
              <Badge variant="secondary" className="mb-4">
                <FiTrendingUp className="w-4 h-4 mr-2" />
                {t('testimonials.hero.badge')}
              </Badge>
              <h1 className="text-h1 text-gradient">
                {t('testimonials.hero.title')}
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                {t('testimonials.hero.description')}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16"
            >
              {[
                { label: t('testimonials.stats.reviews'), value: stats.totalReviews, icon: FiMessageSquare, color: 'text-blue-500', animate: true },
                { label: t('testimonials.stats.rating'), value: stats.averageRating, icon: FiStar, color: 'text-green-500', animate: true },
                { label: t('testimonials.stats.satisfaction'), value: stats.satisfactionRate, icon: FiTrendingUp, color: 'text-purple-500', animate: true, isPercent: true },
                { label: t('testimonials.stats.repeat'), value: stats.repeatClients, icon: FiUsers, color: 'text-orange-500', animate: true, isPercent: true },
                { label: t('testimonials.stats.projects'), value: stats.totalProjects, icon: FiCheck, color: 'text-indigo-500', animate: true },
                { label: t('testimonials.stats.countries'), value: stats.countriesServed, icon: FiGlobe, color: 'text-pink-500', animate: true },
              ].map((stat, index) => {
                const animatedValue = stat.animate
                  ? useCountUp(stat.value.toString().replace(/[^\d]/g, ''), 1000, stat.isPercent)
                  : stat.value;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card 
                      variant="elevated"
                      className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center"
                    >
                      <CardContent className="p-8">
                        {/* Stat Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Stat Value */}
                        <div className={`text-h2 font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                          {animatedValue}{stat.label === t('testimonials.stats.rating') ? '/5' : ''}{stat.label === t('testimonials.stats.projects') ? '+' : ''}{stat.label === t('testimonials.stats.countries') ? '+' : ''}
                        </div>

                        {/* Stat Label */}
                        <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {stat.label}
                        </div>

                        {/* Decorative Element */}
                        <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto mb-8"
            >
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder={t('testimonials.search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="testimonials-filters-row flex flex-row flex-nowrap justify-center gap-2 overflow-x-auto mb-12"
            >
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="whitespace-nowrap"
                >
                  {filter.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </motion.div>

            {/* Testimonials Grid */}
            {filteredTestimonials.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <FiSearch className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('testimonials.noResults.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('testimonials.noResults.description')}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                >
                  {t('testimonials.noResults.clear')}
                </Button>
              </motion.div>
            ) : (
              <div className="relative">
                {/* Slider Controls for Mobile */}
                <div className="md:hidden flex justify-between items-center mb-4">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Previous testimonial"
                    onClick={() => setMobileIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1))}
                  >
                    <FiArrowRight className="rotate-180" />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    {mobileIndex + 1} / {filteredTestimonials.length}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Next testimonial"
                    onClick={() => setMobileIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1))}
                  >
                    <FiArrowRight />
                  </Button>
                </div>
                {/* Unified Responsive Grid/Slider */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filteredTestimonials.map((testimonial, index) => {
                    // On mobile, only render the active testimonial
                    if (isMobile && index !== mobileIndex) return null;
                    return (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <MagneticCard
                          className={`h-full p-3 sm:p-4 bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 group relative cursor-pointer rounded-xl`}
                          onClick={() => setSelectedTestimonial(testimonial)}
                          tabIndex={0}
                          role="button"
                          aria-label={`View details for ${testimonial.name}`}
                          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedTestimonial(testimonial); }}
                        >
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <Badge className={`text-2xs px-2 py-0.5 ${
                              testimonial.category === 'web' ? 'bg-blue-100 text-blue-700' :
                              testimonial.category === 'data' ? 'bg-green-100 text-green-700' :
                              testimonial.category === 'seo' ? 'bg-yellow-100 text-yellow-700' :
                              testimonial.category === 'maintenance' ? 'bg-purple-100 text-purple-700' :
                              testimonial.category === 'training' ? 'bg-pink-100 text-pink-700' :
                              testimonial.category === 'performance' ? 'bg-orange-100 text-orange-700' :
                              ''
                            }`}>
                              {t(`testimonials.filters.${testimonial.category}`)}
                            </Badge>
                          </div>
                          {/* Featured Badge */}
                          {testimonial.featured && (
                            <Badge className="mb-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md text-xs px-2 py-1">
                              <FiStar className="w-3 h-3 mr-1" />
                              {t('testimonials.featured.badge')}
                            </Badge>
                          )}
                          {/* Quote Icon */}
                          <div className="mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
                              <FiMessageSquare className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          {/* Testimonial Text */}
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors line-clamp-5">
                            "{testimonial.testimonial}"
                          </p>
                          {/* Project Info */}
                          <div className="mb-4">
                            <Badge variant="outline" className="text-xs mb-1 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary px-2 py-1">
                              {testimonial.project}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground space-x-2">
                              <div className="flex items-center">
                                <FiCalendar className="w-3 h-3 mr-1" />
                                {testimonial.date}
                              </div>
                              <div className="flex items-center">
                                <FiMapPin className="w-3 h-3 mr-1" />
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                          {/* Project Details */}
                          <div className="mb-4 p-2 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border border-border/50 shadow-sm">
                            <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm">{t('testimonials.details.title')}:</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-muted-foreground">{t('testimonials.details.duration')}:</span>
                                <div className="font-medium">{testimonial.projectDetails.duration}</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">{t('testimonials.details.budget')}:</span>
                                <div className="font-medium">{testimonial.projectDetails.budget}</div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="text-muted-foreground text-xs">{t('testimonials.details.technologies')}:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {testimonial.projectDetails.technologies.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="text-2xs bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary px-1 py-0.5">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* Results */}
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm">{t('testimonials.results.title')}:</h4>
                            <div className="space-y-1">
                              {testimonial.results.map((result, resultIndex) => (
                                <div key={resultIndex} className="flex items-center text-xs hover:translate-x-1 transform duration-200">
                                  <FiCheck className="w-3 h-3 text-success mr-1 flex-shrink-0" />
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {renderStars(testimonial.rating)}
                            <span className="text-xs text-muted-foreground ml-1">
                              {testimonial.rating}.0/5
                            </span>
                          </div>
                          {/* Client Info */}
                          <div className="flex items-center">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-8 h-8 rounded-full object-cover mr-2 group-hover:scale-105 transition-transform duration-300 shadow-md border border-border"
                            />
                            <div>
                              <div className="font-semibold group-hover:text-primary transition-colors text-sm">{testimonial.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {testimonial.position} {t('testimonials.client.at')} {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </MagneticCard>
                      </motion.div>
                    );
                  })}
                </div>
                </div>
            )}
          </div>
        </section>

        {/* Testimonial Details Modal */}
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          {selectedTestimonial && (
            <DialogContent className="max-w-2xl w-full p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border border-border shadow-md mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{selectedTestimonial.name}</h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {selectedTestimonial.position} {t('testimonials.client.at')} {selectedTestimonial.company}
                  </div>
                  <div className="flex items-center mb-2">
                    {renderStars(selectedTestimonial.rating)}
                    <span className="text-xs text-muted-foreground ml-1">
                      {selectedTestimonial.rating}.0/5
                    </span>
                  </div>
                  <Badge className="text-xs mb-2">
                    {t(`testimonials.filters.${selectedTestimonial.category}`)}
                  </Badge>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">{t('testimonials.details.title')}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <div>
                    <span className="text-muted-foreground">{t('testimonials.details.duration')}:</span>
                    <div className="font-medium">{selectedTestimonial.projectDetails.duration}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t('testimonials.details.budget')}:</span>
                    <div className="font-medium">{selectedTestimonial.projectDetails.budget}</div>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-xs">{t('testimonials.details.technologies')}:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedTestimonial.projectDetails.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-2xs bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary px-1 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-xs">{t('testimonials.details.challenges')}:</span>
                  <ul className="list-disc list-inside ml-2">
                    {selectedTestimonial.projectDetails.challenges.map((challenge, i) => (
                      <li key={i} className="text-xs">{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-xs">{t('testimonials.details.solutions')}:</span>
                  <ul className="list-disc list-inside ml-2">
                    {selectedTestimonial.projectDetails.solutions.map((solution, i) => (
                      <li key={i} className="text-xs">{solution}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-xs">{t('testimonials.results.title')}:</span>
                  <ul className="list-disc list-inside ml-2">
                    {selectedTestimonial.results.map((result, i) => (
                      <li key={i} className="text-xs">{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground text-xs">{t('testimonials.testimonial')}:</span>
                  <p className="text-sm italic mt-1">"{selectedTestimonial.testimonial}"</p>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button variant="outline" onClick={() => setSelectedTestimonial(null)}>{t('common.close')}</Button>
              </div>
            </DialogContent>
          )}
        </Dialog>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <MagneticCard className="p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-h2 font-bold">
                    {t('testimonials.cta.title')}
                  </h2>
                  
                  <p className="text-body-lg text-muted-foreground">
                    {t('testimonials.cta.description')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        {t('testimonials.cta.startProject')}
                        <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        <FiMessageSquare className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('testimonials.cta.consultation')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials; 