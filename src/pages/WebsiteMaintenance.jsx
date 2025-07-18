import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { 
  FiShield, 
  FiZap, 
  FiDatabase, 
  FiMonitor, 
  FiClock, 
  FiCheck, 
  FiAlertTriangle,
  FiTrendingUp,
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiServer,
  FiBarChart,
  FiUsers,
  FiMail,
  FiPhone,
  FiCalendar,
  FiStar,
  FiAward,
  FiRefreshCw,
  FiArrowRight
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SectionTitle from '../components/SectionTitle';
import MagneticCard from '../components/MagneticCard';
import { Link } from 'react-router-dom';

const WebsiteMaintenance = () => {
  const { t } = useTranslation();

  const maintenancePlans = [
    {
      name: t('maintenance.plans.basic.name'),
      price: t('maintenance.plans.basic.price'),
      duration: t('maintenance.plans.basic.duration'),
      description: t('maintenance.plans.basic.description'),
      popular: false,
      features: [
        t('maintenance.plans.basic.features.security'),
        t('maintenance.plans.basic.features.backups'),
        t('maintenance.plans.basic.features.monitoring'),
        t('maintenance.plans.basic.features.seo'),
        t('maintenance.plans.basic.features.content'),
        t('maintenance.plans.basic.features.support'),
        t('maintenance.plans.basic.features.uptime'),
        t('maintenance.plans.basic.features.ssl')
      ],
      responseTime: t('maintenance.plans.basic.responseTime'),
      updates: t('maintenance.plans.basic.updates'),
      backups: t('maintenance.plans.basic.backups')
    },
    {
      name: t('maintenance.plans.professional.name'),
      price: t('maintenance.plans.professional.price'),
      duration: t('maintenance.plans.professional.duration'),
      description: t('maintenance.plans.professional.description'),
      popular: true,
      features: [
        t('maintenance.plans.professional.features.security'),
        t('maintenance.plans.professional.features.backups'),
        t('maintenance.plans.professional.features.performance'),
        t('maintenance.plans.professional.features.seo'),
        t('maintenance.plans.professional.features.content'),
        t('maintenance.plans.professional.features.support'),
        t('maintenance.plans.professional.features.analytics'),
        t('maintenance.plans.professional.features.updates'),
        t('maintenance.plans.professional.features.database'),
        t('maintenance.plans.professional.features.speed'),
        t('maintenance.plans.professional.features.mobile'),
        t('maintenance.plans.professional.features.firewall')
      ],
      responseTime: t('maintenance.plans.professional.responseTime'),
      updates: t('maintenance.plans.professional.updates'),
      backups: t('maintenance.plans.professional.backups')
    },
    {
      name: t('maintenance.plans.enterprise.name'),
      price: t('maintenance.plans.enterprise.price'),
      duration: t('maintenance.plans.enterprise.duration'),
      description: t('maintenance.plans.enterprise.description'),
      popular: false,
      features: [
        t('maintenance.plans.enterprise.features.security'),
        t('maintenance.plans.enterprise.features.backups'),
        t('maintenance.plans.enterprise.features.performance'),
        t('maintenance.plans.enterprise.features.seo'),
        t('maintenance.plans.enterprise.features.content'),
        t('maintenance.plans.enterprise.features.manager'),
        t('maintenance.plans.enterprise.features.analytics'),
        t('maintenance.plans.enterprise.features.securityMeasures'),
        t('maintenance.plans.enterprise.features.cdn'),
        t('maintenance.plans.enterprise.features.loadBalancing'),
        t('maintenance.plans.enterprise.features.clustering'),
        t('maintenance.plans.enterprise.features.recovery'),
        t('maintenance.plans.enterprise.features.reports'),
        t('maintenance.plans.enterprise.features.audits')
      ],
      responseTime: t('maintenance.plans.enterprise.responseTime'),
      updates: t('maintenance.plans.enterprise.updates'),
      backups: t('maintenance.plans.enterprise.backups')
    }
  ];

  const technologies = [
    {
      category: t('maintenance.technologies.security.category'),
      tools: [
        { name: t('maintenance.technologies.security.wordfence.name'), description: t('maintenance.technologies.security.wordfence.description') },
        { name: t('maintenance.technologies.security.sucuri.name'), description: t('maintenance.technologies.security.sucuri.description') },
        { name: t('maintenance.technologies.security.ssl.name'), description: t('maintenance.technologies.security.ssl.description') },
        { name: t('maintenance.technologies.security.twoFactor.name'), description: t('maintenance.technologies.security.twoFactor.description') }
      ]
    },
    {
      category: t('maintenance.technologies.performance.category'),
      tools: [
        { name: t('maintenance.technologies.performance.cloudflare.name'), description: t('maintenance.technologies.performance.cloudflare.description') },
        { name: t('maintenance.technologies.performance.pageSpeed.name'), description: t('maintenance.technologies.performance.pageSpeed.description') },
        { name: t('maintenance.technologies.performance.gtmetrix.name'), description: t('maintenance.technologies.performance.gtmetrix.description') },
        { name: t('maintenance.technologies.performance.webp.name'), description: t('maintenance.technologies.performance.webp.description') }
      ]
    },
    {
      category: t('maintenance.technologies.monitoring.category'),
      tools: [
        { name: t('maintenance.technologies.monitoring.uptimeRobot.name'), description: t('maintenance.technologies.monitoring.uptimeRobot.description') },
        { name: t('maintenance.technologies.monitoring.analytics.name'), description: t('maintenance.technologies.monitoring.analytics.description') },
        { name: t('maintenance.technologies.monitoring.searchConsole.name'), description: t('maintenance.technologies.monitoring.searchConsole.description') },
        { name: t('maintenance.technologies.monitoring.errorTracking.name'), description: t('maintenance.technologies.monitoring.errorTracking.description') }
      ]
    },
    {
      category: t('maintenance.technologies.backup.category'),
      tools: [
        { name: t('maintenance.technologies.backup.automated.name'), description: t('maintenance.technologies.backup.automated.description') },
        { name: t('maintenance.technologies.backup.cloudStorage.name'), description: t('maintenance.technologies.backup.cloudStorage.description') },
        { name: t('maintenance.technologies.backup.oneClick.name'), description: t('maintenance.technologies.backup.oneClick.description') },
        { name: t('maintenance.technologies.backup.versionControl.name'), description: t('maintenance.technologies.backup.versionControl.description') }
      ]
    }
  ];

  const maintenanceProcess = [
    {
      step: '01',
      title: t('maintenance.process.assessment.title'),
      description: t('maintenance.process.assessment.description'),
      icon: FiMonitor,
      details: [
        t('maintenance.process.assessment.details.performance'),
        t('maintenance.process.assessment.details.security'),
        t('maintenance.process.assessment.details.seo'),
        t('maintenance.process.assessment.details.mobile'),
        t('maintenance.process.assessment.details.backup')
      ]
    },
    {
      step: '02',
      title: t('maintenance.process.implementation.title'),
      description: t('maintenance.process.implementation.description'),
      icon: FiCode,
      details: [
        t('maintenance.process.implementation.details.security'),
        t('maintenance.process.implementation.details.performance'),
        t('maintenance.process.implementation.details.backup'),
        t('maintenance.process.implementation.details.dashboard'),
        t('maintenance.process.implementation.details.ssl')
      ]
    },
    {
      step: '03',
      title: t('maintenance.process.ongoing.title'),
      description: t('maintenance.process.ongoing.description'),
      icon: FiRefreshCw,
      details: [
        t('maintenance.process.ongoing.details.security'),
        t('maintenance.process.ongoing.details.performance'),
        t('maintenance.process.ongoing.details.content'),
        t('maintenance.process.ongoing.details.seo'),
        t('maintenance.process.ongoing.details.backups')
      ]
    },
    {
      step: '04',
      title: t('maintenance.process.reporting.title'),
      description: t('maintenance.process.reporting.description'),
      icon: FiBarChart,
      details: [
        t('maintenance.process.reporting.details.performance'),
        t('maintenance.process.reporting.details.security'),
        t('maintenance.process.reporting.details.seo'),
        t('maintenance.process.reporting.details.recommendations'),
        t('maintenance.process.reporting.details.reviews')
      ]
    }
  ];

  const benefits = [
    {
      icon: FiShield,
      title: t('maintenance.benefits.security.title'),
      description: t('maintenance.benefits.security.description')
    },
    {
      icon: FiZap,
      title: t('maintenance.benefits.performance.title'),
      description: t('maintenance.benefits.performance.description')
    },
    {
      icon: FiTrendingUp,
      title: t('maintenance.benefits.seo.title'),
      description: t('maintenance.benefits.seo.description')
    },
    {
      icon: FiUsers,
      title: t('maintenance.benefits.engagement.title'),
      description: t('maintenance.benefits.engagement.description')
    },
    {
      icon: FiGlobe,
      title: t('maintenance.benefits.accessibility.title'),
      description: t('maintenance.benefits.accessibility.description')
    },
    {
      icon: FiAward,
      title: t('maintenance.benefits.reliability.title'),
      description: t('maintenance.benefits.reliability.description')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('maintenance.meta.title')}</title>
        <meta name="description" content={t('maintenance.meta.description')} />
        <meta name="keywords" content={t('maintenance.meta.keywords')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-20"
            >
              <Badge variant="secondary" className="mb-6">
                <FiShield className="w-4 h-4 mr-2" />
                {t('maintenance.hero.badge')}
              </Badge>
              <h1 className="text-h1 text-gradient">
                {t('maintenance.hero.title')}
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                {t('maintenance.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="gradient" asChild className="group">
                  <Link to="/contact">
                    {t('maintenance.hero.cta.start')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="#plans">
                    {t('maintenance.hero.cta.plans')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: FiShield, label: t('maintenance.stats.security.label'), value: t('maintenance.stats.security.value'), color: 'text-blue-500' },
                { icon: FiZap, label: t('maintenance.stats.performance.label'), value: t('maintenance.stats.performance.value'), color: 'text-green-500' },
                { icon: FiTrendingUp, label: t('maintenance.stats.uptime.label'), value: t('maintenance.stats.uptime.value'), color: 'text-purple-500' },
                { icon: FiUsers, label: t('maintenance.stats.clients.label'), value: '100+', color: 'text-orange-500' },
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
              title={t('maintenance.included.title')}
              subtitle={t('maintenance.included.subtitle')}
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
                <h3 className="text-h3">{t('maintenance.included.package.title')}</h3>
                <p className="text-body text-muted-foreground">
                  {t('maintenance.included.package.description')}
                </p>
                
                <div className="space-y-4">
                  {[
                    t('maintenance.included.package.features.security'),
                    t('maintenance.included.package.features.performance'),
                    t('maintenance.included.package.features.backups'),
                    t('maintenance.included.package.features.seo'),
                    t('maintenance.included.package.features.content'),
                    t('maintenance.included.package.features.mobile'),
                    t('maintenance.included.package.features.analytics'),
                    t('maintenance.included.package.features.uptime')
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
                  <h4 className="text-h3 font-semibold mb-8">{t('maintenance.dashboard.title')}</h4>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('maintenance.dashboard.health.label')}</span>
                        <span className="text-sm text-success">{t('maintenance.dashboard.health.value')}</span>
                      </div>
                      <Progress value={95} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('maintenance.dashboard.security.label')}</span>
                        <span className="text-sm text-success">{t('maintenance.dashboard.security.value')}</span>
                      </div>
                      <Progress value={98} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('maintenance.dashboard.performance.label')}</span>
                        <span className="text-sm text-success">{t('maintenance.dashboard.performance.value')}</span>
                      </div>
                      <Progress value={92} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium">{t('maintenance.dashboard.seo.label')}</span>
                        <span className="text-sm text-success">{t('maintenance.dashboard.seo.value')}</span>
                      </div>
                      <Progress value={89} className="h-3" />
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
              title={t('maintenance.technologies.title')}
              subtitle={t('maintenance.technologies.subtitle')}
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

        {/* Maintenance Process */}
        <section className="section-padding py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('maintenance.process.title')}
              subtitle={t('maintenance.process.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {maintenanceProcess.map((process, index) => (
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
              title={t('maintenance.benefits.title')}
              subtitle={t('maintenance.benefits.subtitle')}
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
              title={t('maintenance.plans.title')}
              subtitle={t('maintenance.plans.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-10">
              {maintenancePlans.map((plan, index) => (
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
                        {t('maintenance.plans.popular')}
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
                          {t('maintenance.plans.response')}: {plan.responseTime}
                        </div>
                        <div className="flex items-center justify-center">
                          <FiRefreshCw className="w-4 h-4 mr-2" />
                          {t('maintenance.plans.updates')}: {plan.updates}
                        </div>
                        <div className="flex items-center justify-center">
                          <FiDatabase className="w-4 h-4 mr-2" />
                          {t('maintenance.plans.backups')}: {plan.backups}
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
                      {t('maintenance.plans.cta')}
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
              title={t('maintenance.faq.title')}
              subtitle={t('maintenance.faq.subtitle')}
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {[
                {
                  question: t('maintenance.faq.items.included.question'),
                  answer: t('maintenance.faq.items.included.answer')
                },
                {
                  question: t('maintenance.faq.items.response.question'),
                  answer: t('maintenance.faq.items.response.answer')
                },
                {
                  question: t('maintenance.faq.items.emergency.question'),
                  answer: t('maintenance.faq.items.emergency.answer')
                },
                {
                  question: t('maintenance.faq.items.cancel.question'),
                  answer: t('maintenance.faq.items.cancel.answer')
                },
                {
                  question: t('maintenance.faq.items.websites.question'),
                  answer: t('maintenance.faq.items.websites.answer')
                },
                {
                  question: t('maintenance.faq.items.downtime.question'),
                  answer: t('maintenance.faq.items.downtime.answer')
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
                    {t('maintenance.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('maintenance.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        <FiShield className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('maintenance.cta.plan')}
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        <FiMail className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('maintenance.cta.consultation')}
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('maintenance.cta.included')}
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

export default WebsiteMaintenance; 