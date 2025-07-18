import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiTrendingUp, FiUsers, FiAward, FiCode, FiDatabase, FiSearch, FiShield, FiClock, FiZap, FiMessageSquare, FiCpu } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import TestimonialsSlider from '../components/TestimonialsSlider';
import MagneticCard from '../components/MagneticCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useMagneticEffect from '../hooks/useMagneticEffect';
import LazyImage from '../components/LazyImage';

const Home = () => {
  const { t } = useTranslation();
  
  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation({ threshold: 0.1 });

  // Magnetic effects
  const magneticRef1 = useMagneticEffect(0.2);
  const magneticRef2 = useMagneticEffect(0.2);
  const magneticRef3 = useMagneticEffect(0.2);

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

  const stats = [
    { icon: FiUsers, value: '100+', label: t('home.stats.clients'), color: 'text-blue-500' },
    { icon: FiCode, value: '120+', label: t('home.stats.projects'), color: 'text-green-500' },
    { icon: FiTrendingUp, value: '98%', label: t('home.stats.successRate'), color: 'text-purple-500' },
    { icon: FiAward, value: '5+', label: t('home.stats.experience'), color: 'text-orange-500' },
  ];

  const services = [
    {
      icon: FiCode,
      title: t('home.services.webDevelopment.title'),
      description: t('home.services.webDevelopment.description'),
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/web-development'
    },
    {
      icon: FiDatabase,
      title: t('home.services.dataAnalytics.title'),
      description: t('home.services.dataAnalytics.description'),
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/data-analytics'
    },
    {
      icon: FiSearch,
      title: t('home.services.seoOptimization.title'),
      description: t('home.services.seoOptimization.description'),
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/seo-optimization'
    },
    {
      icon: FiShield,
      title: t('home.services.websiteMaintenance.title'),
      description: t('home.services.websiteMaintenance.description'),
      features: ['Security Updates', 'Performance Monitoring', 'Backup Management', '24/7 Support'],
      color: 'from-orange-500 to-red-500',
      href: '/services/website-maintenance'
    },
    {
      icon: FiClock,
      title: t('home.services.trainingSessions.title'),
      description: t('home.services.trainingSessions.description'),
      features: ['Custom Training', 'Documentation', 'Ongoing Support', 'Best Practices'],
      color: 'from-indigo-500 to-blue-500',
      href: '/services/training-session'
    },
    {
      icon: FiZap,
      title: t('home.services.performanceAudit.title'),
      description: t('home.services.performanceAudit.description'),
      features: ['Speed Analysis', 'Optimization Recommendations', 'Implementation Support', 'Monitoring'],
      color: 'from-yellow-500 to-orange-500',
      href: '/services/performance-audit'
    },
    {
      icon: FiMessageSquare,
      title: t('home.services.aiChatBots.title'),
      description: t('home.services.aiChatBots.description'),
      features: ['Conversational AI', '24/7 Support', 'Multi-Channel', 'Custom Integrations'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-chat-bots'
    },
    {
      icon: FiCpu,
      title: t('home.services.aiAgents.title'),
      description: t('home.services.aiAgents.description'),
      features: ['Autonomous Agents', 'Task Automation', 'LLM Integration', 'Custom Workflows'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-agents'
    },
    {
      icon: FiZap,
      title: t('home.services.aiAutomation.title'),
      description: t('home.services.aiAutomation.description'),
      features: ['Process Automation', 'RPA', 'API Integration', 'Workflow Orchestration'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-automation'
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
        <meta name="keywords" content={t('home.meta.keywords')} />
        <meta property="og:title" content={t('home.meta.ogTitle')} />
        <meta property="og:description" content={t('home.meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mudassirjaved.com" />
        <link rel="canonical" href="https://mudassirjaved.com" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="container-custom relative z-10">
              <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroVisible ? "visible" : "hidden"}
              className="text-center space-y-10"
              >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium bg-primary-muted text-primary border-primary/20">
                  <FiStar className="w-4 h-4 mr-2" />
                  {t('home.hero.badge')}
                </Badge>
                  </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-h1 font-bold leading-tight tracking-tight"
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent">{t('home.hero.title1')}</span> {t('home.hero.title2')}
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">{t('home.hero.title3')}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
              >
                {t('home.hero.description')}
              </motion.p>

                {/* CTA Buttons */}
                <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
                >
                <Button 
                  ref={magneticRef1}
                  size="xl" 
                  variant="gradient"
                  className="group hover-lift text-lg font-semibold px-8 py-4"
                  asChild
                >
                  <Link to="/contact">
                    {t('home.hero.cta')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  ref={magneticRef2}
                  variant="outline" 
                  size="xl" 
                  className="group hover-lift text-lg font-semibold px-8 py-4 border-2"
                  asChild
                >
                  <Link to="/projects">
                    {t('home.hero.secondaryCta')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground pt-8"
              >
                <div className="flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('home.hero.trust.experience')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('home.hero.trust.clients')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('home.hero.trust.successRate')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          ref={statsRef}
          className="py-24 bg-gradient-surface"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={statsVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center"
                  >
                    <CardContent className="p-8">
                      {/* Stat Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500').replace('text-blue-500', 'from-blue-500').replace('text-green-500', 'from-green-500').replace('text-purple-500', 'from-purple-500').replace('text-orange-500', 'from-orange-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Stat Value */}
                      <div className={`text-h2 font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>

                      {/* Stat Label */}
                      <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>

                      {/* Decorative Element */}
                      <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500').replace('text-blue-500', 'from-blue-500').replace('text-green-500', 'from-green-500').replace('text-purple-500', 'from-purple-500').replace('text-orange-500', 'from-orange-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          ref={servicesRef}
          className="py-24 bg-background"
        >
          <div className="container-custom">
              <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={servicesVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('home.services.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('home.services.subtitle')}
              </motion.p>
              </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={servicesVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group flex justify-center"
                >
                  <Card 
                    ref={magneticRef3}
                    variant="elevated"
                    className="h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                    <CardContent className="p-5 sm:p-6">
                      {/* Service Icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Service Title */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      {/* Service Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      {/* Service Features */}
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2 flex-shrink-0`} />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* CTA Button */}
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold text-sm py-2"
                        asChild
                      >
                        <a href={service.href}>
                          {t('common.learnMore')}
                          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          ref={testimonialsRef}
          className="py-24 bg-surface"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={testimonialsVisible ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-4"
              >
                {t('home.testimonials.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {t('home.testimonials.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={testimonialsVisible ? "visible" : "hidden"}
            >
              <TestimonialsSlider />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <MagneticCard className="p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-h2 font-bold">
                    {t('home.cta.title')}
                  </h2>
                  
                  <p className="text-body-lg text-muted-foreground">
                    {t('home.cta.description')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        {t('home.cta.button')}
                        <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <Link to="/pricing">
                        <FiTrendingUp className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('home.cta.secondaryButton')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;