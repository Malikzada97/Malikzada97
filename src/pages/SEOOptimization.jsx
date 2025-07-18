import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiGlobe,
  FiCheck,
  FiZap,
  FiUsers,
  FiAward,
  FiSettings,
  FiLink,
  FiActivity,
  FiPieChart,
  FiMail,
  FiStar,
  FiRefreshCw,
  FiClock,
  FiDatabase,
  FiArrowRight
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useScrollAnimation from '../hooks/useScrollAnimation';
import MagneticCard from '@/components/MagneticCard';
import { Link } from 'react-router-dom';

const SEOOptimization = () => {
  const { t } = useTranslation();
  
  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [includedRef, includedVisible] = useScrollAnimation({ threshold: 0.1 });
  const [technologiesRef, technologiesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [plansRef, plansVisible] = useScrollAnimation({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.1 });

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
    { icon: FiTrendingUp, value: '+35%', label: t('seo.stats.rankings.label'), color: 'text-green-500' },
    { icon: FiUsers, value: '+120%', label: t('seo.stats.traffic.label'), color: 'text-blue-500' },
    { icon: FiAward, value: '98%', label: t('seo.stats.retention.label'), color: 'text-purple-500' },
    { icon: FiSearch, value: '10,000+', label: t('seo.stats.keywords.label'), color: 'text-orange-500' },
  ];

  const seoPlans = [
    {
      name: t('seo.plans.starter.name'),
      price: t('seo.plans.starter.price'),
      duration: t('seo.plans.starter.duration'),
      description: t('seo.plans.starter.description'),
      popular: false,
      features: [
        t('seo.plans.starter.features.audit'),
        t('seo.plans.starter.features.optimization'),
        t('seo.plans.starter.features.meta'),
        t('seo.plans.starter.features.sitemap'),
        t('seo.plans.starter.features.analytics'),
        t('seo.plans.starter.features.console'),
        t('seo.plans.starter.features.keywords'),
        t('seo.plans.starter.features.mobile'),
        t('seo.plans.starter.features.support')
      ],
      delivery: t('seo.plans.starter.delivery'),
      support: t('seo.plans.starter.support')
    },
    {
      name: t('seo.plans.growth.name'),
      price: t('seo.plans.growth.price'),
      duration: t('seo.plans.growth.duration'),
      description: t('seo.plans.growth.description'),
      popular: true,
      features: [
        t('seo.plans.growth.features.audit'),
        t('seo.plans.growth.features.technical'),
        t('seo.plans.growth.features.content'),
        t('seo.plans.growth.features.keywords'),
        t('seo.plans.growth.features.competitor'),
        t('seo.plans.growth.features.backlinks'),
        t('seo.plans.growth.features.schema'),
        t('seo.plans.growth.features.speed'),
        t('seo.plans.growth.features.mobile'),
        t('seo.plans.growth.features.support'),
        t('seo.plans.growth.features.reports')
      ],
      delivery: t('seo.plans.growth.delivery'),
      support: t('seo.plans.growth.support')
    },
    {
      name: t('seo.plans.enterprise.name'),
      price: t('seo.plans.enterprise.price'),
      duration: t('seo.plans.enterprise.duration'),
      description: t('seo.plans.enterprise.description'),
      popular: false,
      features: [
        t('seo.plans.enterprise.features.audit'),
        t('seo.plans.enterprise.features.strategy'),
        t('seo.plans.enterprise.features.content'),
        t('seo.plans.enterprise.features.linkbuilding'),
        t('seo.plans.enterprise.features.international'),
        t('seo.plans.enterprise.features.ecommerce'),
        t('seo.plans.enterprise.features.conversion'),
        t('seo.plans.enterprise.features.monitoring'),
        t('seo.plans.enterprise.features.manager'),
        t('seo.plans.enterprise.features.support'),
        t('seo.plans.enterprise.features.reports'),
        t('seo.plans.enterprise.features.tracking')
      ],
      delivery: t('seo.plans.enterprise.delivery'),
      support: t('seo.plans.enterprise.support')
    }
  ];

  const technologies = [
    {
      category: t('seo.technologies.seoTools.category'),
      tools: [
        { name: t('seo.technologies.seoTools.googleAnalytics.name'), description: t('seo.technologies.seoTools.googleAnalytics.description') },
        { name: t('seo.technologies.seoTools.searchConsole.name'), description: t('seo.technologies.seoTools.searchConsole.description') },
        { name: t('seo.technologies.seoTools.ahrefs.name'), description: t('seo.technologies.seoTools.ahrefs.description') },
        { name: t('seo.technologies.seoTools.semrush.name'), description: t('seo.technologies.seoTools.semrush.description') }
      ]
    },
    {
      category: t('seo.technologies.optimization.category'),
      tools: [
        { name: t('seo.technologies.optimization.pageSpeed.name'), description: t('seo.technologies.optimization.pageSpeed.description') },
        { name: t('seo.technologies.optimization.screamingFrog.name'), description: t('seo.technologies.optimization.screamingFrog.description') },
        { name: t('seo.technologies.optimization.yoast.name'), description: t('seo.technologies.optimization.yoast.description') },
        { name: t('seo.technologies.optimization.schema.name'), description: t('seo.technologies.optimization.schema.description') }
      ]
    },
    {
      category: t('seo.technologies.content.category'),
      tools: [
        { name: t('seo.technologies.content.surfer.name'), description: t('seo.technologies.content.surfer.description') },
        { name: t('seo.technologies.content.keywordPlanner.name'), description: t('seo.technologies.content.keywordPlanner.description') },
        { name: t('seo.technologies.content.grammarly.name'), description: t('seo.technologies.content.grammarly.description') },
        { name: t('seo.technologies.content.buzzSumo.name'), description: t('seo.technologies.content.buzzSumo.description') }
      ]
    },
    {
      category: t('seo.technologies.reporting.category'),
      tools: [
        { name: t('seo.technologies.reporting.dataStudio.name'), description: t('seo.technologies.reporting.dataStudio.description') },
        { name: t('seo.technologies.reporting.lookerStudio.name'), description: t('seo.technologies.reporting.lookerStudio.description') },
        { name: t('seo.technologies.reporting.customReporting.name'), description: t('seo.technologies.reporting.customReporting.description') },
        { name: t('seo.technologies.reporting.rankMath.name'), description: t('seo.technologies.reporting.rankMath.description') }
      ]
    }
  ];

  const seoProcess = [
    {
      step: '01',
      title: t('seo.process.audit.title'),
      description: t('seo.process.audit.description'),
      icon: FiSearch,
      details: [
        t('seo.process.audit.details.technical'),
        t('seo.process.audit.details.onpage'),
        t('seo.process.audit.details.backlinks'),
        t('seo.process.audit.details.competitor'),
        t('seo.process.audit.details.keywords')
      ]
    },
    {
      step: '02',
      title: t('seo.process.optimization.title'),
      description: t('seo.process.optimization.description'),
      icon: FiSettings,
      details: [
        t('seo.process.optimization.details.meta'),
        t('seo.process.optimization.details.schema'),
        t('seo.process.optimization.details.speed'),
        t('seo.process.optimization.details.content'),
        t('seo.process.optimization.details.linking')
      ]
    },
    {
      step: '03',
      title: t('seo.process.content.title'),
      description: t('seo.process.content.description'),
      icon: FiPieChart,
      details: [
        t('seo.process.content.details.keywords'),
        t('seo.process.content.details.optimization'),
        t('seo.process.content.details.strategy'),
        t('seo.process.content.details.analysis'),
        t('seo.process.content.details.calendar')
      ]
    },
    {
      step: '04',
      title: t('seo.process.reporting.title'),
      description: t('seo.process.reporting.description'),
      icon: FiBarChart,
      details: [
        t('seo.process.reporting.details.reports'),
        t('seo.process.reporting.details.tracking'),
        t('seo.process.reporting.details.conversion'),
        t('seo.process.reporting.details.optimization'),
        t('seo.process.reporting.details.refinement')
      ]
    }
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: t('seo.benefits.rankings.title'),
      description: t('seo.benefits.rankings.description')
    },
    {
      icon: FiUsers,
      title: t('seo.benefits.traffic.title'),
      description: t('seo.benefits.traffic.description')
    },
    {
      icon: FiAward,
      title: t('seo.benefits.authority.title'),
      description: t('seo.benefits.authority.description')
    },
    {
      icon: FiZap,
      title: t('seo.benefits.results.title'),
      description: t('seo.benefits.results.description')
    },
    {
      icon: FiGlobe,
      title: t('seo.benefits.reach.title'),
      description: t('seo.benefits.reach.description')
    },
    {
      icon: FiStar,
      title: t('seo.benefits.success.title'),
      description: t('seo.benefits.success.description')
    }
  ];

  const faqs = [
    {
      question: t('seo.faq.items.what.question'),
      answer: t('seo.faq.items.what.answer')
    },
    {
      question: t('seo.faq.items.timing.question'),
      answer: t('seo.faq.items.timing.answer')
    },
    {
      question: t('seo.faq.items.guarantee.question'),
      answer: t('seo.faq.items.guarantee.answer')
    },
    {
      question: t('seo.faq.items.existing.question'),
      answer: t('seo.faq.items.existing.answer')
    },
    {
      question: t('seo.faq.items.service.question'),
      answer: t('seo.faq.items.service.answer')
    },
    {
      question: t('seo.faq.items.different.question'),
      answer: t('seo.faq.items.different.answer')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.meta.title')}</title>
        <meta name="description" content={t('seo.meta.description')} />
        <meta name="keywords" content={t('seo.meta.keywords')} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
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
                <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium bg-green-500/10 text-green-600 border-green-500/20">
                  <FiSearch className="w-4 h-4 mr-2" />
                  {t('seo.hero.badge')}
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-h1 font-bold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {t('seo.hero.title')}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
              >
                {t('seo.hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
              >
                <Button 
                  size="xl" 
                  variant="gradient"
                  className="group hover-lift text-lg font-semibold px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500"
                  asChild
                >
                  <Link to="/contact">
                    {t('seo.hero.cta.audit')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="group hover-lift text-lg font-semibold px-8 py-4 border-2"
                  asChild
                >
                  <a href="#plans">
                    {t('seo.hero.cta.plans')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
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
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
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
                      <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section 
          ref={includedRef}
          className="py-24 bg-background"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={includedVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.included.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.included.subtitle')}
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={includedVisible ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.h3 variants={itemVariants} className="text-h3">{t('seo.included.analysisTitle')}</motion.h3>
                <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground">
                  {t('seo.included.analysisDescription')}
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-4">
                  {[
                    t('seo.included.features.audit'),
                    t('seo.included.features.optimization'),
                    t('seo.included.features.keywords'),
                    t('seo.included.features.content'),
                    t('seo.included.features.backlinks'),
                    t('seo.included.features.mobile'),
                    t('seo.included.features.schema'),
                    t('seo.included.features.reporting')
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={includedVisible ? "visible" : "hidden"}
                className="relative"
              >
                <Card 
                  variant="elevated"
                  className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-h3 font-semibold mb-6">{t('seo.included.dashboardTitle')}</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t('seo.included.dashboard.health')}</span>
                        <span className="text-sm text-green-500">{t('seo.included.dashboard.health')}</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t('seo.included.dashboard.rankings')}</span>
                        <span className="text-sm text-green-500">{t('seo.included.dashboard.rankings')}</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t('seo.included.dashboard.traffic')}</span>
                        <span className="text-sm text-green-500">{t('seo.included.dashboard.traffic')}</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t('seo.included.dashboard.speed')}</span>
                        <span className="text-sm text-green-500">{t('seo.included.dashboard.speed')}</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section 
          ref={technologiesRef}
          className="py-24 bg-gradient-surface"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={technologiesVisible ? 'visible' : 'hidden'}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.technologies.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.technologies.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={technologiesVisible ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {technologies.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="group"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-h3 font-semibold mb-2 sm:mb-4 text-green-600 group-hover:text-green-700 transition-colors">{category.category}</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                            className="space-y-0.5 sm:space-y-1 group-hover:translate-x-1 transition-transform duration-200"
                          >
                            <div className="font-medium text-xs sm:text-sm group-hover:text-green-600 transition-colors">{tool.name}</div>
                            <div className="text-xs text-muted-foreground">{tool.description}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          ref={processRef}
          className="py-24 bg-background"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={processVisible ? 'visible' : 'hidden'}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.process.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.process.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={processVisible ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
            >
              {seoProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-4 sm:p-8">
                      {/* Step Number */}
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Step Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-green-600 transition-colors">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-4">
                        {step.description}
                      </p>

                      {/* Step Details */}
                      <div className="space-y-1 sm:space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <FiCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          ref={benefitsRef}
          className="py-24 bg-gradient-surface"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={benefitsVisible ? 'visible' : 'hidden'}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.benefits.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.benefits.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={benefitsVisible ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                    <CardContent className="p-4 sm:p-8">
                      {/* Benefit Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>

                      {/* Benefit Title */}
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-green-600 transition-colors">
                        {benefit.title}
                      </h3>

                      {/* Benefit Description */}
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Plans Section */}
        <section 
          ref={plansRef}
          id="plans"
          className="py-24 bg-background"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={plansVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.plans.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.plans.subtitle')}
              </motion.p>
            </motion.div>

            {/* Plans Section grid (pricing) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={plansVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {seoPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={`relative flex justify-center ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
                >
                  <Card
                    variant="elevated"
                    className={`h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.popular ? 'border-2 border-green-500/20 shadow-2xl' : ''}`}
                  >
                    <CardHeader className="text-center pb-4 sm:pb-6">
                      <CardTitle className="text-lg sm:text-2xl font-bold mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="text-2xl sm:text-4xl font-bold text-green-600 mb-2">
                        {plan.price}
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                            <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                            <span className="text-foreground text-xs sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={plan.popular ? "gradient" : "outline"}
                        size="md"
                        className={`w-full mt-4 sm:mt-6 ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                        asChild
                      >
                        <a href="/contact">
                          {t('common.getStarted')}
                          <FiArrowRight className="ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          ref={faqRef}
          className="py-24 bg-gradient-surface"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={faqVisible ? 'visible' : 'hidden'}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('seo.faq.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('seo.faq.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={faqVisible ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-8">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-green-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                    {t('seo.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('seo.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <a href="/contact">
                        <FiTrendingUp className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('seo.cta.campaign')}
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <a href="/contact">
                        <FiSearch className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('seo.cta.audit')}
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('seo.cta.included')}
                  </p>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>
      </div>
    </>
  );
};

export default SEOOptimization; 