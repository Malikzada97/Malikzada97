import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiStar, FiMessageSquare, FiUser, FiTrendingUp, FiCheck } from 'react-icons/fi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const TestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');



  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Solutions',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'web',
      project: 'E-commerce Platform',
      testimonial: 'Mudassir delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, performance optimization, and user experience were outstanding. Our sales increased by 40% within the first month!',
      results: ['40% increase in sales', '60% faster loading times', '95% user satisfaction'],
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Data Analyst',
      company: 'Global Analytics Corp',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'data',
      project: 'Business Intelligence Dashboard',
      testimonial: 'The data analytics solution Mudassir built transformed how we make business decisions. The insights are clear, actionable, and delivered exactly when we need them. Highly recommend for any data-driven organization.',
      results: ['Real-time insights', 'Automated reporting', '50% faster decision making'],
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Creative Agency Pro',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'seo',
      project: 'SEO Optimization',
      testimonial: 'Working with Mudassir on our SEO strategy was a game-changer. Our organic traffic increased by 120% and we\'re now ranking on the first page for our target keywords. The results speak for themselves!',
      results: ['120% traffic increase', 'First page rankings', '35% conversion boost'],
      featured: false
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CTO',
      company: 'InnovateTech',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'maintenance',
      project: 'Website Maintenance',
      testimonial: 'Mudassir\'s maintenance service keeps our website running smoothly 24/7. The security updates, performance monitoring, and quick response times give us peace of mind. Worth every penny!',
      results: ['99.9% uptime', '24/7 monitoring', '4-hour response time'],
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Product Manager',
      company: 'StartupXYZ',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'training',
      project: 'Team Training Session',
      testimonial: 'The training session was incredibly valuable for our team. Mudassir explained complex concepts in simple terms and provided hands-on practice. Our team is now confident in managing our website independently.',
      results: ['Team confidence boost', 'Reduced dependencies', 'Improved efficiency'],
      featured: false
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Operations Manager',
      company: 'E-commerce Plus',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      category: 'performance',
      project: 'Performance Audit',
      testimonial: 'The performance audit revealed critical issues we didn\'t know existed. Mudassir\'s recommendations improved our page speed by 70% and significantly enhanced user experience. Excellent work!',
      results: ['70% speed improvement', 'Better user experience', 'Higher conversions'],
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: 'web', label: 'Web Development', count: testimonials.filter(t => t.category === 'web').length },
    { id: 'data', label: 'Data Analysis', count: testimonials.filter(t => t.category === 'data').length },
    { id: 'seo', label: 'SEO Services', count: testimonials.filter(t => t.category === 'seo').length },
    { id: 'maintenance', label: 'Maintenance', count: testimonials.filter(t => t.category === 'maintenance').length },
    { id: 'training', label: 'Training', count: testimonials.filter(t => t.category === 'training').length },
    { id: 'performance', label: 'Performance', count: testimonials.filter(t => t.category === 'performance').length }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeFilter);

  const stats = {
    totalReviews: testimonials.length,
    averageRating: 5.0,
    satisfactionRate: '100%',
    repeatClients: '85%'
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
    <section className="section-padding bg-surface">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <FiTrendingUp className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-display mb-4">What Clients Say</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Reviews', value: stats.totalReviews },
            { label: 'Average Rating', value: `${stats.averageRating}/5` },
            { label: 'Satisfaction Rate', value: stats.satisfactionRate },
            { label: 'Repeat Clients', value: stats.repeatClients }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="mb-2"
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
                testimonial.featured ? 'border-primary/50 shadow-lg scale-105' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      <FiStar className="w-3 h-3 mr-1" />
                      Featured Review
                    </Badge>
                  )}

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FiMessageSquare className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                    <div className="space-y-1">
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                          <FiCheck className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      {testimonial.rating}.0/5
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                      <FiUser className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let's work together to bring your vision to life and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              View More Reviews
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 