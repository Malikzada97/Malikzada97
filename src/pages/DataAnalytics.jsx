import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FiDatabase, FiTrendingUp, FiBarChart, FiPieChart, FiActivity, FiShield, FiZap, FiUsers, FiAward, FiCheck, FiArrowRight, FiStar, FiBarChart2, FiFolder } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import useScrollAnimation from '../hooks/useScrollAnimation';
import MagneticCard from '../components/MagneticCard';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
  const { t } = useTranslation();
  
  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 });
  const [technologiesRef, technologiesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [pricingRef, pricingVisible] = useScrollAnimation({ threshold: 0.1 });
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
    { icon: FiDatabase, value: '120+', label: t('dataAnalytics.stats.datasets'), color: 'text-green-500' },
    { icon: FiTrendingUp, value: '98%', label: t('dataAnalytics.stats.accuracy'), color: 'text-blue-500' },
    { icon: FiUsers, value: '30+', label: t('dataAnalytics.stats.clients'), color: 'text-purple-500' },
    { icon: FiAward, value: '5+', label: t('dataAnalytics.stats.experience'), color: 'text-orange-500' },
  ];

  const features = [
    {
      icon: FiBarChart,
      title: t('dataAnalytics.features.visualization.title'),
      description: t('dataAnalytics.features.visualization.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiTrendingUp,
      title: t('dataAnalytics.features.predictive.title'),
      description: t('dataAnalytics.features.predictive.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiActivity,
      title: t('dataAnalytics.features.realTime.title'),
      description: t('dataAnalytics.features.realTime.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiShield,
      title: t('dataAnalytics.features.security.title'),
      description: t('dataAnalytics.features.security.description'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiZap,
      title: t('dataAnalytics.features.automation.title'),
      description: t('dataAnalytics.features.automation.description'),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiPieChart,
      title: t('dataAnalytics.features.bi.title'),
      description: t('dataAnalytics.features.bi.description'),
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const technologies = [
    { name: 'Python/R', category: 'Programming', icon: '🐍' },
    { name: 'Tableau/Power BI', category: 'Visualization', icon: '📊' },
    { name: 'SQL/NoSQL', category: 'Database', icon: '🗄️' },
    { name: 'TensorFlow/PyTorch', category: 'Machine Learning', icon: '🤖' },
    { name: 'AWS/Azure', category: 'Cloud', icon: '☁️' },
    { name: 'Apache Spark', category: 'Big Data', icon: '⚡' },
  ];

  const processSteps = [
    {
      step: '01',
      title: t('dataAnalytics.process.assessment.title'),
      description: t('dataAnalytics.process.assessment.description'),
      icon: FiStar
    },
    {
      step: '02',
      title: t('dataAnalytics.process.collection.title'),
      description: t('dataAnalytics.process.collection.description'),
      icon: FiDatabase
    },
    {
      step: '03',
      title: t('dataAnalytics.process.analysis.title'),
      description: t('dataAnalytics.process.analysis.description'),
      icon: FiBarChart
    },
    {
      step: '04',
      title: t('dataAnalytics.process.visualization.title'),
      description: t('dataAnalytics.process.visualization.description'),
      icon: FiPieChart
    },
    {
      step: '05',
      title: t('dataAnalytics.process.insights.title'),
      description: t('dataAnalytics.process.insights.description'),
      icon: FiTrendingUp
    },
    {
      step: '06',
      title: t('dataAnalytics.process.implementation.title'),
      description: t('dataAnalytics.process.implementation.description'),
      icon: FiZap
    },
  ];

  const benefits = [
    t('dataAnalytics.benefits.insights'),
    t('dataAnalytics.benefits.efficiency'),
    t('dataAnalytics.benefits.predictions'),
    t('dataAnalytics.benefits.visualization'),
    t('dataAnalytics.benefits.automation'),
    t('dataAnalytics.benefits.scalability'),
  ];

  const pricingPlans = [
    {
      name: t('dataAnalytics.pricing.basic.name'),
      price: t('dataAnalytics.pricing.basic.price'),
      description: t('dataAnalytics.pricing.basic.description'),
      features: [
        t('dataAnalytics.pricing.basic.features.reports'),
        t('dataAnalytics.pricing.basic.features.dashboard'),
        t('dataAnalytics.pricing.basic.features.export'),
        t('dataAnalytics.pricing.basic.features.support'),
      ],
      popular: false
    },
    {
      name: t('dataAnalytics.pricing.professional.name'),
      price: t('dataAnalytics.pricing.professional.price'),
      description: t('dataAnalytics.pricing.professional.description'),
      features: [
        t('dataAnalytics.pricing.professional.features.advanced'),
        t('dataAnalytics.pricing.professional.features.predictive'),
        t('dataAnalytics.pricing.professional.features.realTime'),
        t('dataAnalytics.pricing.professional.features.integration'),
        t('dataAnalytics.pricing.professional.features.support'),
      ],
      popular: true
    },
    {
      name: t('dataAnalytics.pricing.enterprise.name'),
      price: t('dataAnalytics.pricing.enterprise.price'),
      description: t('dataAnalytics.pricing.enterprise.description'),
      features: [
        t('dataAnalytics.pricing.enterprise.features.custom'),
        t('dataAnalytics.pricing.enterprise.features.ml'),
        t('dataAnalytics.pricing.enterprise.features.automation'),
        t('dataAnalytics.pricing.enterprise.features.security'),
        t('dataAnalytics.pricing.enterprise.features.scalability'),
        t('dataAnalytics.pricing.enterprise.features.support'),
      ],
      popular: false
    },
  ];

  const faqs = [
    {
      question: t('dataAnalytics.faq.timeline.question'),
      answer: t('dataAnalytics.faq.timeline.answer')
    },
    {
      question: t('dataAnalytics.faq.cost.question'),
      answer: t('dataAnalytics.faq.cost.answer')
    },
    {
      question: t('dataAnalytics.faq.data.question'),
      answer: t('dataAnalytics.faq.data.answer')
    },
    {
      question: t('dataAnalytics.faq.updates.question'),
      answer: t('dataAnalytics.faq.updates.answer')
    },
    {
      question: t('dataAnalytics.faq.security.question'),
      answer: t('dataAnalytics.faq.security.answer')
    },
    {
      question: t('dataAnalytics.faq.support.question'),
      answer: t('dataAnalytics.faq.support.answer')
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('dataAnalytics.meta.title')}</title>
        <meta name="description" content={t('dataAnalytics.meta.description')} />
        <meta name="keywords" content={t('dataAnalytics.meta.keywords')} />
        <meta property="og:title" content={t('dataAnalytics.meta.ogTitle')} />
        <meta property="og:description" content={t('dataAnalytics.meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mudassirjaved.com/services/data-analytics" />
        <link rel="canonical" href="https://mudassirjaved.com/services/data-analytics" />
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
                  <FiDatabase className="w-4 h-4 mr-2" />
                  {t('dataAnalytics.hero.badge')}
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-h1 font-bold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {t('dataAnalytics.hero.title1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {t('dataAnalytics.hero.title2')}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.hero.description')}
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
                    {t('dataAnalytics.hero.cta')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="group hover-lift text-lg font-semibold px-8 py-4 border-2"
                  asChild
                >
                  <a href="#pricing">
                    {t('dataAnalytics.hero.secondaryCta')}
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

        {/* Features Section */}
        <section 
          ref={featuresRef}
          className="py-24 bg-background"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.features.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.features.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex justify-center"
                >
                  <Card
                    variant="elevated"
                    className="h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                    <CardContent className="p-5 sm:p-6">
                      {/* Feature Icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Feature Title */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      {/* Feature Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
              animate={technologiesVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.technologies.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.technologies.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={technologiesVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="group text-center"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.category}
                    </p>
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
              animate={processVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.process.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.process.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={processVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="group flex justify-center"
                >
                  <Card 
                    variant="elevated"
                    className="h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-5 sm:p-6">
                      {/* Step Number */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-base group-hover:scale-105 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Step Icon */}
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <step.icon className="w-5 h-5 text-green-600" />
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {step.description}
                      </p>
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
              animate={benefitsVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.benefits.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.benefits.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={benefitsVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 bg-background rounded-2xl shadow-lg hover-lift border border-border/50"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base font-semibold text-foreground">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section 
          ref={pricingRef}
          id="pricing"
          className="py-24 bg-background"
        >
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={pricingVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.pricing.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.pricing.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={pricingVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={`relative flex justify-center ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                        {t('common.mostPopular')}
                      </Badge>
                    </div>
                  )}
                  <Card 
                    variant="elevated"
                    className={`h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      plan.popular ? 'border-2 border-green-500/20 shadow-2xl' : ''
                    }`}
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
              animate={faqVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-h2 font-bold mb-6 tracking-tight"
              >
                {t('dataAnalytics.faq.title')}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('dataAnalytics.faq.subtitle')}
              </motion.p>
            </motion.div>

            {/* FAQ Section grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={faqVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex justify-center"
                >
                  <Card
                    variant="elevated"
                    className="h-full w-full max-w-xs hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-5 sm:p-8">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                    {t('dataAnalytics.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('dataAnalytics.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <a href="/contact">
                        <FiBarChart2 className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('dataAnalytics.cta.cta')}
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <a href="/projects">
                        <FiFolder className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('dataAnalytics.cta.secondaryCta')}
                      </a>
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

export default DataAnalytics; 