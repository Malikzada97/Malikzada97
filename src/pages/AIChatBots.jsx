import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FiMessageSquare, FiZap, FiUsers, FiSettings, FiCheck, FiArrowRight, FiCpu, FiStar, FiFolder, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import useScrollAnimation from '../hooks/useScrollAnimation';
import MagneticCard from '../components/MagneticCard';
import { Link } from 'react-router-dom';

const AIChatBots = () => {
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
    { icon: FiMessageSquare, value: '50+', label: t('aiChatBots.stats.projects'), color: 'text-blue-500' },
    { icon: FiUsers, value: '40+', label: t('aiChatBots.stats.clients'), color: 'text-green-500' },
    { icon: FiZap, value: '99%', label: t('aiChatBots.stats.uptime'), color: 'text-purple-500' },
    { icon: FiStar, value: '4+', label: t('aiChatBots.stats.experience'), color: 'text-orange-500' },
  ];
  const features = [
    {
      icon: FiMessageSquare,
      title: t('aiChatBots.features.conversational.title'),
      description: t('aiChatBots.features.conversational.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiCpu,
      title: t('aiChatBots.features.nlp.title'),
      description: t('aiChatBots.features.nlp.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiSettings,
      title: t('aiChatBots.features.integration.title'),
      description: t('aiChatBots.features.integration.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiZap,
      title: t('aiChatBots.features.automation.title'),
      description: t('aiChatBots.features.automation.description'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiCheck,
      title: t('aiChatBots.features.support.title'),
      description: t('aiChatBots.features.support.description'),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiUsers,
      title: t('aiChatBots.features.scalable.title'),
      description: t('aiChatBots.features.scalable.description'),
      color: 'from-yellow-500 to-orange-500'
    },
  ];
  const technologies = [
    { name: 'OpenAI GPT', category: 'NLP Engine', icon: '🤖' },
    { name: 'Dialogflow', category: 'Conversational AI', icon: '💬' },
    { name: 'Rasa', category: 'Open Source', icon: '🛠️' },
    { name: 'Microsoft Bot Framework', category: 'Enterprise', icon: '🏢' },
    { name: 'Twilio', category: 'Messaging', icon: '📱' },
    { name: 'Slack/Teams', category: 'Integrations', icon: '🔗' },
  ];
  const processSteps = [
    {
      step: '01',
      title: t('aiChatBots.process.discovery.title'),
      description: t('aiChatBots.process.discovery.description'),
      icon: FiStar
    },
    {
      step: '02',
      title: t('aiChatBots.process.design.title'),
      description: t('aiChatBots.process.design.description'),
      icon: FiSettings
    },
    {
      step: '03',
      title: t('aiChatBots.process.development.title'),
      description: t('aiChatBots.process.development.description'),
      icon: FiZap
    },
    {
      step: '04',
      title: t('aiChatBots.process.testing.title'),
      description: t('aiChatBots.process.testing.description'),
      icon: FiCheck
    },
    {
      step: '05',
      title: t('aiChatBots.process.deployment.title'),
      description: t('aiChatBots.process.deployment.description'),
      icon: FiGlobe
    },
    {
      step: '06',
      title: t('aiChatBots.process.support.title'),
      description: t('aiChatBots.process.support.description'),
      icon: FiUsers
    },
  ];
  const benefits = [
    t('aiChatBots.benefits.24_7'),
    t('aiChatBots.benefits.instant'),
    t('aiChatBots.benefits.scalable'),
    t('aiChatBots.benefits.customizable'),
    t('aiChatBots.benefits.integration'),
    t('aiChatBots.benefits.analytics'),
  ];
  const pricingPlans = [
    {
      name: t('aiChatBots.pricing.basic.name'),
      price: t('aiChatBots.pricing.basic.price'),
      description: t('aiChatBots.pricing.basic.description'),
      features: [
        t('aiChatBots.pricing.basic.features.single'),
        t('aiChatBots.pricing.basic.features.integration'),
        t('aiChatBots.pricing.basic.features.analytics'),
        t('aiChatBots.pricing.basic.features.support'),
      ],
      popular: false
    },
    {
      name: t('aiChatBots.pricing.professional.name'),
      price: t('aiChatBots.pricing.professional.price'),
      description: t('aiChatBots.pricing.professional.description'),
      features: [
        t('aiChatBots.pricing.professional.features.multichannel'),
        t('aiChatBots.pricing.professional.features.nlp'),
        t('aiChatBots.pricing.professional.features.automation'),
        t('aiChatBots.pricing.professional.features.integration'),
        t('aiChatBots.pricing.professional.features.support'),
      ],
      popular: true
    },
    {
      name: t('aiChatBots.pricing.enterprise.name'),
      price: t('aiChatBots.pricing.enterprise.price'),
      description: t('aiChatBots.pricing.enterprise.description'),
      features: [
        t('aiChatBots.pricing.enterprise.features.custom'),
        t('aiChatBots.pricing.enterprise.features.enterprise'),
        t('aiChatBots.pricing.enterprise.features.security'),
        t('aiChatBots.pricing.enterprise.features.analytics'),
        t('aiChatBots.pricing.enterprise.features.integration'),
        t('aiChatBots.pricing.enterprise.features.support'),
      ],
      popular: false
    },
  ];
  const faqs = [
    {
      question: t('aiChatBots.faq.timeline.question'),
      answer: t('aiChatBots.faq.timeline.answer')
    },
    {
      question: t('aiChatBots.faq.integration.question'),
      answer: t('aiChatBots.faq.integration.answer')
    },
    {
      question: t('aiChatBots.faq.security.question'),
      answer: t('aiChatBots.faq.security.answer')
    },
    {
      question: t('aiChatBots.faq.support.question'),
      answer: t('aiChatBots.faq.support.answer')
    },
    {
      question: t('aiChatBots.faq.customization.question'),
      answer: t('aiChatBots.faq.customization.answer')
    },
    {
      question: t('aiChatBots.faq.cost.question'),
      answer: t('aiChatBots.faq.cost.answer')
    },
  ];
  return (
    <>
      <Helmet>
        <title>{t('aiChatBots.meta.title')}</title>
        <meta name="description" content={t('aiChatBots.meta.description')} />
        <meta name="keywords" content={t('aiChatBots.meta.keywords')} />
        <meta property="og:title" content={t('aiChatBots.meta.ogTitle')} />
        <meta property="og:description" content={t('aiChatBots.meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mudassirjaved.com/services/ai-chat-bots" />
        <link rel="canonical" href="https://mudassirjaved.com/services/ai-chat-bots" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div variants={containerVariants} initial="hidden" animate={heroVisible ? "visible" : "hidden"} className="text-center space-y-10">
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20">
                  <FiMessageSquare className="w-4 h-4 mr-2" />
                  {t('aiChatBots.hero.badge')}
                </Badge>
              </motion.div>
              {/* Main Heading */}
              <motion.h1 variants={itemVariants} className="text-h1 font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {t('aiChatBots.hero.title1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {t('aiChatBots.hero.title2')}
                </span>
              </motion.h1>
              {/* Subtitle */}
              <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                {t('aiChatBots.hero.description')}
              </motion.p>
              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <Button size="xl" variant="gradient" className="group hover-lift text-lg font-semibold px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500" asChild>
                  <Link to="/contact">
                    {t('aiChatBots.hero.cta')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="group hover-lift text-lg font-semibold px-8 py-4 border-2" asChild>
                  <a href="#pricing">
                    {t('aiChatBots.hero.secondaryCta')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={statsVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
              {stats.map((stat, index) => (
                <motion.div variants={itemVariants} key={index} className="group">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center">
                    <CardContent className="p-4 sm:p-8">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className={`text-xl sm:text-h2 font-bold mb-2 sm:mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                      <div className={`mt-4 sm:mt-6 w-8 sm:w-12 h-1 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-500', '-500')} to-${stat.color.replace('text-', '').replace('-500', '-400')} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={featuresVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
              {features.map((feature, index) => (
                <motion.div variants={itemVariants} key={index} className="group">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-4 sm:p-8">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
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
        <section ref={technologiesRef} className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={technologiesVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
              {technologies.map((tech, index) => (
                <motion.div variants={itemVariants} key={index} className="group text-center">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
                    <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span>{tech.icon}</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {tech.category}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-20 bg-white">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={processVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {processSteps.map((step, index) => (
                <motion.div variants={itemVariants} key={index} className="group relative">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-4 sm:p-8">
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
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
        <section ref={benefitsRef} className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={benefitsVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
              {benefits.map((benefit, index) => (
                <motion.div variants={itemVariants} key={index} className="group">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-4 sm:p-8 flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                        <FiCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-foreground">
                        {benefit}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} id="pricing" className="py-20 bg-white">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={pricingVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10">
              {pricingPlans.map((plan, index) => (
                <motion.div variants={itemVariants} key={index} className={`relative ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}> 
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                        {t('common.mostPopular')}
                      </Badge>
                    </div>
                  )}
                  <Card variant="elevated" className={`h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.popular ? 'border-2 border-blue-500/20 shadow-2xl' : ''}`}> 
                    <CardHeader className="text-center pb-4 sm:pb-6">
                      <CardTitle className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                        {plan.price}
                      </div>
                      <p className="text-xs sm:text-base text-muted-foreground">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-4">
                      <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                            <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                            <span className="text-xs sm:text-base text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant={plan.popular ? 'gradient' : 'outline'} size="md" className={`w-full mt-4 sm:mt-6 ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : ''}`}> 
                        {t('aiChatBots.pricing.cta')}
                        <FiArrowRight className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div variants={containerVariants} initial="hidden" animate={faqVisible ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {faqs.map((faq, index) => (
                <motion.div variants={itemVariants} key={index} className="group">
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-8">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-primary transition-colors">
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
        <section ref={ctaRef} className="section-padding">
          <div className="container-custom">
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-20">
              <MagneticCard className="p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-h2 font-bold">
                    {t('aiChatBots.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('aiChatBots.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="gradient" className="group" asChild>
                      <Link to="/contact">
                        {t('aiChatBots.cta.button')}
                        <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="group" asChild>
                      <Link to="/pricing">
                        <FiTrendingUp className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('aiChatBots.cta.secondaryButton')}
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
export default AIChatBots; 