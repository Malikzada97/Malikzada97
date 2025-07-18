import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiStar, FiZap, FiHeart, FiArrowRight, FiUsers, FiFileText, FiCode, FiPlay } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../components/SectionTitle';
import MagneticCard from '../components/MagneticCard';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      name: t('pricing.plans.basic.name'),
      price: t('pricing.plans.basic.price'),
      duration: t('pricing.plans.basic.duration'),
      description: t('pricing.plans.basic.description'),
      icon: FiStar,
      color: 'text-primary',
      popular: false,
      features: [
        t('pricing.plans.basic.features.responsive'),
        t('pricing.plans.basic.features.pages'),
        t('pricing.plans.basic.features.contact'),
        t('pricing.plans.basic.features.seo'),
        t('pricing.plans.basic.features.mobile'),
        t('pricing.plans.basic.features.support'),
        t('pricing.plans.basic.features.analytics')
      ],
      timeline: t('pricing.plans.basic.timeline'),
      ideal: t('pricing.plans.basic.ideal')
    },
    {
      name: t('pricing.plans.professional.name'),
      price: t('pricing.plans.professional.price'),
      duration: t('pricing.plans.professional.duration'),
      description: t('pricing.plans.professional.description'),
      icon: FiZap,
      color: 'text-accent',
      popular: true,
      features: [
        t('pricing.plans.professional.features.custom'),
        t('pricing.plans.professional.features.auth'),
        t('pricing.plans.professional.features.database'),
        t('pricing.plans.professional.features.dashboard'),
        t('pricing.plans.professional.features.api'),
        t('pricing.plans.professional.features.seo'),
        t('pricing.plans.professional.features.support'),
        t('pricing.plans.professional.features.performance'),
        t('pricing.plans.professional.features.security')
      ],
      timeline: t('pricing.plans.professional.timeline'),
      ideal: t('pricing.plans.professional.ideal')
    },
    {
      name: t('pricing.plans.analytics.name'),
      price: t('pricing.plans.analytics.price'),
      duration: t('pricing.plans.analytics.duration'),
      description: t('pricing.plans.analytics.description'),
      icon: FiHeart,
      color: 'text-success',
      popular: false,
      features: [
        t('pricing.plans.analytics.features.collection'),
        t('pricing.plans.analytics.features.analysis'),
        t('pricing.plans.analytics.features.dashboards'),
        t('pricing.plans.analytics.features.powerbi'),
        t('pricing.plans.analytics.features.reports'),
        t('pricing.plans.analytics.features.visualization'),
        t('pricing.plans.analytics.features.support'),
        t('pricing.plans.analytics.features.training')
      ],
      timeline: t('pricing.plans.analytics.timeline'),
      ideal: t('pricing.plans.analytics.ideal')
    }
  ];

  const additionalServices = [
    {
      name: t('pricing.services.maintenance.name'),
      price: t('pricing.services.maintenance.price'),
      duration: t('pricing.services.maintenance.duration'),
      description: t('pricing.services.maintenance.description')
    },
    {
      name: t('pricing.services.seo.name'),
      price: t('pricing.services.seo.price'),
      duration: t('pricing.services.seo.duration'),
      description: t('pricing.services.seo.description')
    },
    {
      name: t('pricing.services.audit.name'),
      price: t('pricing.services.audit.price'),
      duration: t('pricing.services.audit.duration'),
      description: t('pricing.services.audit.description')
    },
    {
      name: t('pricing.services.training.name'),
      price: t('pricing.services.training.price'),
      duration: t('pricing.services.training.duration'),
      description: t('pricing.services.training.description')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('pricing.meta.title')}</title>
        <meta name="description" content={t('pricing.meta.description')} />
        <meta name="keywords" content={t('pricing.meta.keywords')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('pricing.hero.title')}
              subtitle={t('pricing.hero.subtitle')}
              gradient={true}
              className="mb-8 md:mb-16"
            />

            {/* Main Pricing Plans */}
            <div className="grid lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-20">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card-3d relative max-w-xs w-full mx-auto ${
                    plan.popular ? 'border-primary/50 shadow-2xl scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                        {t('pricing.popular.badge')}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4 md:mb-8">
                    <motion.div 
                      className={`w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <plan.icon className={`w-6 h-6 md:w-8 md:h-8 ${plan.color}`} />
                    </motion.div>
                    
                    <h3 className="text-lg md:text-h3 font-bold mb-1 md:mb-2">{plan.name}</h3>
                    <p className="text-xs md:text-body-base text-muted-foreground mb-2 md:mb-4">{plan.description}</p>
                    
                    <div className="mb-3 md:mb-6">
                      <span className="text-2xl md:text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.duration}</span>
                    </div>

                    <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-6">
                      <p>⏱️ {plan.timeline}</p>
                      <p>🎯 {plan.ideal}</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4 mb-4 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        className="flex items-center space-x-2 md:space-x-3"
                      >
                       <FiCheck className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0" />
                       <span className="text-xs md:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full min-h-[44px] min-w-[44px] ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-hover' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    size="sm"
                  >
                    {t('pricing.cta.getStarted')}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('pricing.services.title')}
              subtitle={t('pricing.services.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group max-w-xs w-full mx-auto"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                   <CardContent className="p-4 md:p-6">
                      {/* Service Icon */}
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                       <FiZap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>

                      {/* Service Title */}
                     <h4 className="text-base md:text-h4 font-semibold mb-1 md:mb-3 group-hover:text-primary transition-colors text-center">
                        {service.name}
                      </h4>

                      {/* Service Price */}
                     <div className="mb-2 md:mb-3 text-center">
                       <span className="text-lg md:text-2xl font-bold text-primary">{service.price}</span>
                       <span className="text-xs md:text-sm text-muted-foreground ml-1">{service.duration}</span>
                      </div>

                      {/* Service Description */}
                     <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6 leading-relaxed text-center">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      {service.name === t('pricing.services.maintenance.name') ? (
                        <Link to="/services/website-maintenance">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full min-h-[44px] min-w-[44px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold"
                          >
                            {t('pricing.cta.learnMore')}
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      ) : service.name === t('pricing.services.seo.name') ? (
                        <Link to="/services/seo-optimization">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full min-h-[44px] min-w-[44px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold"
                          >
                            {t('pricing.cta.learnMore')}
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      ) : service.name === t('pricing.services.audit.name') ? (
                        <Link to="/services/performance-audit">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full min-h-[44px] min-w-[44px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold"
                          >
                            {t('pricing.cta.learnMore')}
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      ) : service.name === t('pricing.services.training.name') ? (
                        <Link to="/services/training-session">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full min-h-[44px] min-w-[44px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold"
                          >
                            {t('pricing.cta.learnMore')}
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full min-h-[44px] min-w-[44px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 font-semibold"
                        >
                          {t('pricing.cta.learnMore')}
                          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('pricing.process.title')}
              subtitle={t('pricing.process.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid md:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  step: '01',
                  title: t('pricing.process.steps.consultation.title'),
                  description: t('pricing.process.steps.consultation.description'),
                  icon: FiUsers
                },
                {
                  step: '02',
                  title: t('pricing.process.steps.proposal.title'),
                  description: t('pricing.process.steps.proposal.description'),
                  icon: FiFileText
                },
                {
                  step: '03',
                  title: t('pricing.process.steps.development.title'),
                  description: t('pricing.process.steps.development.description'),
                  icon: FiCode
                },
                {
                  step: '04',
                  title: t('pricing.process.steps.launch.title'),
                  description: t('pricing.process.steps.launch.description'),
                  icon: FiPlay
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group max-w-xs w-full mx-auto"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center"
                  >
                   <CardContent className="p-4 md:p-8">
                      {/* Step Number with Icon */}
                     <div className="relative mb-3 md:mb-6">
                       <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg md:text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                         {process.step}
                       </div>
                       <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg">
                         <process.icon className="w-3 h-3 md:w-4 md:h-4" />
                       </div>
                     </div>

                      {/* Step Title */}
                     <h4 className="text-base md:text-xl font-semibold mb-2 md:mb-4 group-hover:text-primary transition-colors">
                        {process.title}
                      </h4>

                      {/* Step Description */}
                     <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>

                      {/* Decorative Element */}
                     <div className="mt-3 md:mt-6 w-8 md:w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-10 md:mt-20"
            >
              <MagneticCard className="p-6 md:p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
                  <h2 className="text-h2 font-bold">
                    {t('pricing.cta.title')}
                  </h2>
                  
                  <p className="text-body-lg text-muted-foreground">
                    {t('pricing.cta.description')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Button 
                      size="sm"
                      className="group min-h-[44px] min-w-[44px] h-11 md:h-14 text-sm md:text-lg"
                      variant="gradient"
                      asChild
                    >
                      <Link to="/contact">
                        {t('pricing.cta.getStartedToday')}
                        <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="group min-h-[44px] min-w-[44px] h-11 md:h-14 text-sm md:text-lg"
                      variant="outline"
                      asChild
                    >
                      <Link to="/testimonials">
                        <FiStar className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('pricing.cta.viewTestimonials')}
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {t('pricing.cta.customSolution')} <Link to="/contact" className="text-primary hover:underline">{t('pricing.cta.contactUs')}</Link> {t('pricing.cta.forQuote')}.
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

export default Pricing;