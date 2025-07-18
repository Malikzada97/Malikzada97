import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAnalytics } from '../hooks/useAnalytics';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiClock, FiMessageSquare, FiGlobe, FiUser, FiCalendar, FiStar } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiFreelancer } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  const { t } = useTranslation();
  const { trackFormSubmission, trackButtonClick, trackFeatureUsage } = useAnalytics();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: FiMail,
      label: t('contact.info.email.label'),
      value: 'Malikmudassir1997@gmail.com',
      href: 'mailto:Malikmudassir1997@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: t('contact.info.email.description'),
      responseTime: 'Within 2 hours'
    },
    {
      icon: FaWhatsapp,
      label: t('contact.info.whatsapp.label'),
      value: '+92 311 277 061',
      href: 'https://wa.me/92311277061',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: t('contact.info.whatsapp.description'),
      responseTime: 'Instant'
    },
    {
      icon: FiMapPin,
      label: t('contact.info.location.label'),
      value: 'Quetta, Balochistan, Pakistan',
      href: 'https://maps.google.com',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      description: t('contact.info.location.description'),
      responseTime: 'Available for meetings'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
        url: 'https://github.com/mudassirjaved',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bgColor: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/malikzada-mudassir',
      color: 'hover:text-blue-600',
      bgColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Freelancer',
      icon: SiFreelancer,
      url: 'https://www.freelancer.pk/u/MudassirJDev',
      color: 'hover:text-green-600',
      bgColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Fiverr',
      icon: FiGlobe,
      url: 'https://www.fiverr.com/users/malikzada97',
      color: 'hover:text-green-500',
      bgColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/haris.prince.14',
      color: 'hover:text-blue-500',
      bgColor: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'seo-optimization', label: 'SEO Optimization' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'performance-audit', label: 'Performance Audit' },
    { value: 'training-session', label: 'Training Session' },
    { value: 'other', label: 'Other' }
  ];

  const stats = [
    { icon: FiUser, value: '100+', label: 'Happy Clients', color: 'text-blue-500' },
    { icon: FiCalendar, value: '5+', label: 'Years Experience', color: 'text-green-500' },
    { icon: FiStar, value: '98%', label: 'Success Rate', color: 'text-yellow-500' },
    { icon: FiMessageSquare, value: '< 2h', label: 'Response Time', color: 'text-purple-500' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Track form submission with analytics service
    if (window.analyticsService) {
      window.analyticsService.trackContactSubmission(formData);
      window.analyticsService.trackEvent('contact_form_submit', {
        project_type: formData.projectType,
        form_completion_time: Date.now(),
        has_name: !!formData.firstName && !!formData.lastName,
        has_email: !!formData.email,
        has_message: !!formData.message
      });
    }
    
    // Track with existing analytics hook
    trackFormSubmission('contact_form', {
      project_type: formData.projectType,
      form_completion_time: Date.now()
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', projectType: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
        <meta name="keywords" content={t('contact.meta.keywords')} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        {/* Header */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                  <FiMessageSquare className="w-4 h-4 mr-2" />
                  Let's Connect
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Ready to Start
                </span>
                <br />
                Your Next Project?
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                I'm here to help bring your ideas to life. Whether you need a new website, 
                data analysis, or technical consultation, let's discuss how we can work together.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm group-hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-xl ${stat.color.replace('text-', 'bg-').replace('-500', '-500/10')} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm always excited to hear about new projects and opportunities. 
                    Choose your preferred method of contact below.
                  </p>
                </motion.div>

                {/* Contact Methods */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <info.icon className={`w-6 h-6 ${info.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">{info.label}</h3>
                                <Badge variant="secondary" className="text-xs">
                                  {info.responseTime}
                                </Badge>
                      </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="text-primary font-medium hover:text-primary/80 transition-colors block mb-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                                <div className="text-foreground font-medium mb-1">{info.value}</div>
                        )}
                              <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl ${social.bgColor} flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:sticky lg:top-8"
              >
                <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <FiSend className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Send Message</h3>
                          <p className="text-sm text-muted-foreground">I'll get back to you within 2 hours</p>
                        </div>
                      </div>
                    </motion.div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium text-foreground/80">First Name *</Label>
                          <div className="relative group">
                      <Input
                        type="text"
                              id="firstName"
                        name="firstName"
                              placeholder="John"
                              className="h-12 pl-4 pr-4 bg-background/50 border-2 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder:text-muted-foreground/60 hover:border-border/60"
                        required
                              value={formData.firstName}
                        onChange={handleChange}
                              autoComplete="given-name"
                      />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                      {errors.firstName && (
                            <p className="text-xs text-destructive flex items-center mt-1">
                              <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                              {errors.firstName}
                            </p>
                      )}
                      </div>
                    <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium text-foreground/80">Last Name *</Label>
                          <div className="relative group">
                      <Input
                              type="text"
                              id="lastName"
                        name="lastName"
                              placeholder="Doe"
                              className="h-12 pl-4 pr-4 bg-background/50 border-2 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder:text-muted-foreground/60 hover:border-border/60"
                        required
                              value={formData.lastName}
                        onChange={handleChange}
                              autoComplete="family-name"
                      />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                          {errors.lastName && (
                            <p className="text-xs text-destructive flex items-center mt-1">
                              <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </motion.div>
                          
                                             <motion.div variants={itemVariants} className="space-y-2">
                         <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</Label>
                         <div className="relative group">
                    <Input
                              type="email"
                             id="email"
                      name="email"
                             placeholder="john@example.com"
                             className="h-12 pl-4 pr-4 bg-background/50 border-2 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder:text-muted-foreground/60 hover:border-border/60"
                      required
                      value={formData.email}
                      onChange={handleChange}
                             autoComplete="email"
                            />
                           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                         </div>
                    {errors.email && (
                           <p className="text-xs text-destructive flex items-center mt-1">
                             <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                             {errors.email}
                           </p>
                    )}
                       </motion.div>

                                             <motion.div variants={itemVariants} className="space-y-2">
                         <Label htmlFor="projectType" className="text-sm font-medium text-foreground/80">Project Type *</Label>
                         <div className="relative group">
                    <select 
                             id="projectType"
                      name="projectType"
                             className="w-full h-12 pl-4 pr-10 rounded-xl border-2 border-border/30 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer hover:border-border/60"
                             value={formData.projectType}
                      onChange={handleChange}
                             autoComplete="off"
                    >
                      {projectTypes.map((type, index) => (
                               <option key={index} value={type.value} className="py-2">{type.label}</option>
                      ))}
                    </select>
                           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                           <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                             <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
                           </div>
                        </div>
                         {errors.projectType && (
                           <p className="text-xs text-destructive flex items-center mt-1">
                             <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                             {errors.projectType}
                           </p>
                         )}
                       </motion.div>

                                             <motion.div variants={itemVariants} className="space-y-2">
                         <Label htmlFor="message" className="text-sm font-medium text-foreground/80">Message *</Label>
                         <div className="relative group">
                          <textarea
                             id="message"
                      name="message"
                            rows={6}
                             className="w-full px-4 py-3 rounded-xl border-2 border-border/30 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none placeholder:text-muted-foreground/60 hover:border-border/60"
                             placeholder="Tell me about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                             autoComplete="off"
                    />
                           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                         </div>
                    {errors.message && (
                           <p className="text-xs text-destructive flex items-center mt-1">
                             <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                             {errors.message}
                           </p>
                    )}
                       </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                      type="submit"
                      disabled={isSubmitting}
                          className="w-full h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending Message...
                        </>
                      ) : (
                        <>
                              <FiSend className="w-4 h-4 mr-2" />
                              Send Message
                        </>
                      )}
                        </Button>
                      </motion.div>

                  {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-700 dark:text-green-300 text-center"
                        >
                      <FiCheck className="w-5 h-5 mx-auto mb-2" />
                          <p className="font-medium">Message sent successfully!</p>
                          <p className="text-sm">I'll get back to you within 2 hours.</p>
                        </motion.div>
                  )}
                      </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;