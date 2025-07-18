import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  FiZap,
  FiActivity,
  FiBarChart,
  FiCheck,
  FiClock,
  FiGlobe,
  FiUsers,
  FiAward,
  FiSettings,
  FiMonitor,
  FiTrendingUp,
  FiAlertTriangle,
  FiDatabase,
  FiServer,
  FiMail,
  FiStar,
  FiRefreshCw,
  FiShield,
  FiSmartphone,
  FiLayers,
  FiArrowRight
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SectionTitle from '../components/SectionTitle';
import MagneticCard from '../components/MagneticCard';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PerformanceAudit = () => {
  const { t } = useTranslation();

  const auditPlans = [
    {
      name: t('performanceAudit.plans.basic.name'),
      price: t('performanceAudit.plans.basic.price'),
      duration: t('performanceAudit.plans.basic.duration'),
      description: t('performanceAudit.plans.basic.description'),
      popular: false,
      features: [
        t('performanceAudit.plans.basic.features.pageSpeed'),
        t('performanceAudit.plans.basic.features.coreWebVitals'),
        t('performanceAudit.plans.basic.features.mobilePerformance'),
        t('performanceAudit.plans.basic.features.basicReport'),
        t('performanceAudit.plans.basic.features.performanceScore'),
        t('performanceAudit.plans.basic.features.loadingTime'),
        t('performanceAudit.plans.basic.features.imageOptimization'),
        t('performanceAudit.plans.basic.features.support')
      ],
      delivery: t('performanceAudit.plans.basic.delivery'),
      support: t('performanceAudit.plans.basic.support')
    },
    {
      name: t('performanceAudit.plans.comprehensive.name'),
      price: t('performanceAudit.plans.comprehensive.price'),
      duration: t('performanceAudit.plans.comprehensive.duration'),
      description: t('performanceAudit.plans.comprehensive.description'),
      popular: true,
      features: [
        t('performanceAudit.plans.comprehensive.features.fullAudit'),
        t('performanceAudit.plans.comprehensive.features.coreWebVitals'),
        t('performanceAudit.plans.comprehensive.features.mobileDesktop'),
        t('performanceAudit.plans.comprehensive.features.detailedReport'),
        t('performanceAudit.plans.comprehensive.features.recommendations'),
        t('performanceAudit.plans.comprehensive.features.codeOptimization'),
        t('performanceAudit.plans.comprehensive.features.databaseCheck'),
        t('performanceAudit.plans.comprehensive.features.cdnAnalysis'),
        t('performanceAudit.plans.comprehensive.features.securityReview'),
        t('performanceAudit.plans.comprehensive.features.support'),
        t('performanceAudit.plans.comprehensive.features.implementationGuide')
      ],
      delivery: t('performanceAudit.plans.comprehensive.delivery'),
      support: t('performanceAudit.plans.comprehensive.support')
    },
    {
      name: t('performanceAudit.plans.enterprise.name'),
      price: t('performanceAudit.plans.enterprise.price'),
      duration: t('performanceAudit.plans.enterprise.duration'),
      description: t('performanceAudit.plans.enterprise.description'),
      popular: false,
      features: [
        t('performanceAudit.plans.enterprise.features.comprehensiveAudit'),
        t('performanceAudit.plans.enterprise.features.advancedCoreWebVitals'),
        t('performanceAudit.plans.enterprise.features.multiDevice'),
        t('performanceAudit.plans.enterprise.features.loadTesting'),
        t('performanceAudit.plans.enterprise.features.technicalReport'),
        t('performanceAudit.plans.enterprise.features.customStrategy'),
        t('performanceAudit.plans.enterprise.features.databaseServer'),
        t('performanceAudit.plans.enterprise.features.securityPerformance'),
        t('performanceAudit.plans.enterprise.features.cdnInfrastructure'),
        t('performanceAudit.plans.enterprise.features.monitoringSetup'),
        t('performanceAudit.plans.enterprise.features.support'),
        t('performanceAudit.plans.enterprise.features.consultation')
      ],
      delivery: t('performanceAudit.plans.enterprise.delivery'),
      support: t('performanceAudit.plans.enterprise.support')
    }
  ];

  const technologies = [
    {
      category: t('performanceAudit.technologies.performanceTools.category'),
      tools: [
        { name: t('performanceAudit.technologies.performanceTools.googlePageSpeed.name'), description: t('performanceAudit.technologies.performanceTools.googlePageSpeed.description') },
        { name: t('performanceAudit.technologies.performanceTools.gtmetrix.name'), description: t('performanceAudit.technologies.performanceTools.gtmetrix.description') },
        { name: t('performanceAudit.technologies.performanceTools.webPageTest.name'), description: t('performanceAudit.technologies.performanceTools.webPageTest.description') },
        { name: t('performanceAudit.technologies.performanceTools.lighthouse.name'), description: t('performanceAudit.technologies.performanceTools.lighthouse.description') }
      ]
    },
    {
      category: t('performanceAudit.technologies.monitoring.category'),
      tools: [
        { name: t('performanceAudit.technologies.monitoring.googleAnalytics.name'), description: t('performanceAudit.technologies.monitoring.googleAnalytics.description') },
        { name: t('performanceAudit.technologies.monitoring.newRelic.name'), description: t('performanceAudit.technologies.monitoring.newRelic.description') },
        { name: t('performanceAudit.technologies.monitoring.pingdom.name'), description: t('performanceAudit.technologies.monitoring.pingdom.description') },
        { name: t('performanceAudit.technologies.monitoring.uptimeRobot.name'), description: t('performanceAudit.technologies.monitoring.uptimeRobot.description') }
      ]
    },
    {
      category: t('performanceAudit.technologies.optimization.category'),
      tools: [
        { name: t('performanceAudit.technologies.optimization.webPConverter.name'), description: t('performanceAudit.technologies.optimization.webPConverter.description') },
        { name: t('performanceAudit.technologies.optimization.gzipCompression.name'), description: t('performanceAudit.technologies.optimization.gzipCompression.description') },
        { name: t('performanceAudit.technologies.optimization.cdnAnalysis.name'), description: t('performanceAudit.technologies.optimization.cdnAnalysis.description') },
        { name: t('performanceAudit.technologies.optimization.databaseProfiler.name'), description: t('performanceAudit.technologies.optimization.databaseProfiler.description') }
      ]
    },
    {
      category: t('performanceAudit.technologies.securityTesting.category'),
      tools: [
        { name: t('performanceAudit.technologies.securityTesting.securityHeaders.name'), description: t('performanceAudit.technologies.securityTesting.securityHeaders.description') },
        { name: t('performanceAudit.technologies.securityTesting.sslLabs.name'), description: t('performanceAudit.technologies.securityTesting.sslLabs.description') },
        { name: t('performanceAudit.technologies.securityTesting.loadTesting.name'), description: t('performanceAudit.technologies.securityTesting.loadTesting.description') },
        { name: t('performanceAudit.technologies.securityTesting.crossBrowser.name'), description: t('performanceAudit.technologies.securityTesting.crossBrowser.description') }
      ]
    }
  ];

  const auditProcess = [
    {
      step: '01',
      title: t('performanceAudit.process.initialAssessment.title'),
      description: t('performanceAudit.process.initialAssessment.description'),
      icon: FiMonitor,
      details: [
        t('performanceAudit.process.initialAssessment.details.metrics'),
        t('performanceAudit.process.initialAssessment.details.coreWebVitals'),
        t('performanceAudit.process.initialAssessment.details.mobileDesktop'),
        t('performanceAudit.process.initialAssessment.details.loadTime'),
        t('performanceAudit.process.initialAssessment.details.resourceLoading')
      ]
    },
    {
      step: '02',
      title: t('performanceAudit.process.deepAnalysis.title'),
      description: t('performanceAudit.process.deepAnalysis.description'),
      icon: FiActivity,
      details: [
        t('performanceAudit.process.deepAnalysis.details.codeReview'),
        t('performanceAudit.process.deepAnalysis.details.databaseOptimization'),
        t('performanceAudit.process.deepAnalysis.details.imageOptimization'),
        t('performanceAudit.process.deepAnalysis.details.cachingStrategy'),
        t('performanceAudit.process.deepAnalysis.details.serverResponse')
      ]
    },
    {
      step: '03',
      title: t('performanceAudit.process.optimizationPlanning.title'),
      description: t('performanceAudit.process.optimizationPlanning.description'),
      icon: FiSettings,
      details: [
        t('performanceAudit.process.optimizationPlanning.details.improvementPlan'),
        t('performanceAudit.process.optimizationPlanning.details.recommendations'),
        t('performanceAudit.process.optimizationPlanning.details.timeline'),
        t('performanceAudit.process.optimizationPlanning.details.resources'),
        t('performanceAudit.process.optimizationPlanning.details.roi')
      ]
    },
    {
      step: '04',
      title: t('performanceAudit.process.reportImplementation.title'),
      description: t('performanceAudit.process.reportImplementation.description'),
      icon: FiBarChart,
      details: [
        t('performanceAudit.process.reportImplementation.details.auditReport'),
        t('performanceAudit.process.reportImplementation.details.recommendations'),
        t('performanceAudit.process.reportImplementation.details.guidance'),
        t('performanceAudit.process.reportImplementation.details.monitoring'),
        t('performanceAudit.process.reportImplementation.details.support')
      ]
    }
  ];

  const benefits = [
    {
      icon: FiZap,
      title: t('performanceAudit.benefits.fasterLoading.title'),
      description: t('performanceAudit.benefits.fasterLoading.description')
    },
    {
      icon: FiUsers,
      title: t('performanceAudit.benefits.betterUserExperience.title'),
      description: t('performanceAudit.benefits.betterUserExperience.description')
    },
    {
      icon: FiTrendingUp,
      title: t('performanceAudit.benefits.higherSearchRankings.title'),
      description: t('performanceAudit.benefits.higherSearchRankings.description')
    },
    {
      icon: FiGlobe,
      title: t('performanceAudit.benefits.globalPerformance.title'),
      description: t('performanceAudit.benefits.globalPerformance.description')
    },
    {
      icon: FiAward,
      title: t('performanceAudit.benefits.competitiveAdvantage.title'),
      description: t('performanceAudit.benefits.competitiveAdvantage.description')
    },
    {
      icon: FiShield,
      title: t('performanceAudit.benefits.futureProof.title'),
      description: t('performanceAudit.benefits.futureProof.description')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('performanceAudit.meta.title')}</title>
        <meta name="description" content={t('performanceAudit.meta.description')} />
        <meta name="keywords" content={t('performanceAudit.meta.keywords')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-primary/5 py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-20"
            >
              <Badge variant="secondary" className="mb-6">
                <FiZap className="w-4 h-4 mr-2" />
                {t('performanceAudit.hero.badge')}
              </Badge>
              <h1 className="text-h1 text-gradient">
                {t('performanceAudit.hero.title')}
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                {t('performanceAudit.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="gradient" asChild className="group">
                  <Link to="/contact">
                    {t('performanceAudit.hero.ctaPrimary')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="#plans">
                    {t('performanceAudit.hero.ctaSecondary')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: FiZap, label: t('performanceAudit.stats.speedImprovement.label'), value: t('performanceAudit.stats.speedImprovement.value'), color: 'text-blue-500' },
                { icon: FiUsers, label: t('performanceAudit.stats.userExperience.label'), value: t('performanceAudit.stats.userExperience.value'), color: 'text-green-500' },
                { icon: FiTrendingUp, label: t('performanceAudit.stats.searchRankings.label'), value: t('performanceAudit.stats.searchRankings.value'), color: 'text-purple-500' },
                { icon: FiGlobe, label: t('performanceAudit.stats.globalPerformance.label'), value: t('performanceAudit.stats.globalPerformance.value'), color: 'text-orange-500' },
              ].map((stat, index) => (
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
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="section-padding py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.whatsIncluded.title')}
              subtitle={t('performanceAudit.whatsIncluded.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h3 className="text-h3">{t('performanceAudit.whatsIncluded.analysisTitle')}</h3>
                <p className="text-body-lg text-muted-foreground">
                  {t('performanceAudit.whatsIncluded.analysisDescription')}
                </p>
                <div className="space-y-4">
                  {[
                    t('performanceAudit.whatsIncluded.features.pageSpeed'),
                    t('performanceAudit.whatsIncluded.features.coreWebVitals'),
                    t('performanceAudit.whatsIncluded.features.mobileDesktop'),
                    t('performanceAudit.whatsIncluded.features.imageOptimization'),
                    t('performanceAudit.whatsIncluded.features.databaseServer'),
                    t('performanceAudit.whatsIncluded.features.cdnHosting'),
                    t('performanceAudit.whatsIncluded.features.securityEvaluation'),
                    t('performanceAudit.whatsIncluded.features.implementationRoadmap')
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <FiCheck className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <MagneticCard className="p-10 bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <h4 className="text-h3 font-semibold mb-8">{t('performanceAudit.whatsIncluded.dashboardTitle')}</h4>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('performanceAudit.whatsIncluded.dashboard.pageSpeed')}</span>
                        <span className="text-sm text-success">{t('performanceAudit.whatsIncluded.dashboard.pageSpeedGrade')}</span>
                      </div>
                      <Progress value={95} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('performanceAudit.whatsIncluded.dashboard.coreWebVitals')}</span>
                        <span className="text-sm text-success">{t('performanceAudit.whatsIncluded.dashboard.coreWebVitalsGrade')}</span>
                      </div>
                      <Progress value={88} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('performanceAudit.whatsIncluded.dashboard.mobilePerformance')}</span>
                        <span className="text-sm text-success">{t('performanceAudit.whatsIncluded.dashboard.mobilePerformanceGrade')}</span>
                      </div>
                      <Progress value={92} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('performanceAudit.whatsIncluded.dashboard.userExperience')}</span>
                        <span className="text-sm text-success">{t('performanceAudit.whatsIncluded.dashboard.userExperienceGrade')}</span>
                      </div>
                      <Progress value={96} className="h-3" />
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="section-padding bg-surface py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.technologies.title')}
              subtitle={t('performanceAudit.technologies.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {technologies.map((category, categoryIndex) => (
                <MagneticCard
                  key={category.category}
                  className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <h4 className="text-h4 font-semibold mb-6 text-primary">{category.category}</h4>
                    <div className="space-y-4">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="font-medium text-sm">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="section-padding py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.process.title')}
              subtitle={t('performanceAudit.process.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {auditProcess.map((process, index) => (
                <MagneticCard
                  key={process.step}
                  className="text-center p-8 bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-primary/25">
                      {process.step}
                    </div>
                    <process.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                    <h4 className="text-h4 font-semibold mb-3">{process.title}</h4>
                    <p className="text-muted-foreground text-sm mb-6">{process.description}</p>
                    <div className="space-y-3 text-xs text-muted-foreground">
                      {process.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center">
                          <FiCheck className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-surface py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.benefits.title')}
              subtitle={t('performanceAudit.benefits.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
              {benefits.map((benefit, index) => (
                <MagneticCard
                  key={benefit.title}
                  className="p-8 text-center bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <benefit.icon className="w-14 h-14 text-primary mx-auto mb-6" />
                    <h4 className="text-h4 font-semibold mb-4">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.pricing.title')}
              subtitle={t('performanceAudit.pricing.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {auditPlans.map((plan, index) => (
                <MagneticCard
                  key={plan.name}
                  className={`relative p-10 bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                    plan.popular ? 'scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <FiStar className="w-3 h-3 mr-1" />
                        {t('performanceAudit.pricing.mostPopular')}
                      </Badge>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-center mb-10">
                      <h3 className="text-h3 font-bold mb-3">{plan.name}</h3>
                      <p className="text-muted-foreground mb-6">{plan.description}</p>
                      <div className="mb-8">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">{plan.duration}</span>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center justify-center">
                          <FiClock className="w-4 h-4 mr-2" />
                          {t('performanceAudit.pricing.delivery')}: {plan.delivery}
                        </div>
                        <div className="flex items-center justify-center">
                          <FiRefreshCw className="w-4 h-4 mr-2" />
                          {t('performanceAudit.pricing.support')}: {plan.support}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <FiCheck className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary-hover' 
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                      size="lg"
                    >
                      {t('performanceAudit.pricing.getStarted')}
                    </Button>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-surface py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('performanceAudit.faq.title')}
              subtitle={t('performanceAudit.faq.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {[
                {
                  question: t('performanceAudit.faq.questions.whatIs.question'),
                  answer: t('performanceAudit.faq.questions.whatIs.answer')
                },
                {
                  question: t('performanceAudit.faq.questions.howLong.question'),
                  answer: t('performanceAudit.faq.questions.howLong.answer')
                },
                {
                  question: t('performanceAudit.faq.questions.coreWebVitals.question'),
                  answer: t('performanceAudit.faq.questions.coreWebVitals.answer')
                },
                {
                  question: t('performanceAudit.faq.questions.willAffect.question'),
                  answer: t('performanceAudit.faq.questions.willAffect.answer')
                },
                {
                  question: t('performanceAudit.faq.questions.implementationSupport.question'),
                  answer: t('performanceAudit.faq.questions.implementationSupport.answer')
                },
                {
                  question: t('performanceAudit.faq.questions.howMuchImprove.question'),
                  answer: t('performanceAudit.faq.questions.howMuchImprove.answer')
                }
              ].map((faq, index) => (
                <MagneticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-h4 font-semibold mb-4">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </section>

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
                    {t('performanceAudit.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('performanceAudit.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        <FiZap className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('performanceAudit.cta.primaryButton')}
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <Link to="#plans">
                        <FiActivity className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('performanceAudit.cta.secondaryButton')}
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('performanceAudit.cta.note')}
                  </p>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>
      </main>
    </>
  );
};

export default PerformanceAudit; 