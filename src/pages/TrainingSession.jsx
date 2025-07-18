import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  FiUsers,
  FiBookOpen,
  FiVideo,
  FiCheck,
  FiClock,
  FiGlobe,
  FiAward,
  FiSettings,
  FiMonitor,
  FiTrendingUp,
  FiShield,
  FiDatabase,
  FiCode,
  FiMail,
  FiStar,
  FiRefreshCw,
  FiZap,
  FiSmartphone,
  FiLayers,
  FiHeadphones,
  FiArrowRight
} from 'react-icons/fi';
import MagneticCard from '../components/MagneticCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const TrainingSession = () => {
  const trainingPlans = [
    {
      name: 'Basic Training',
      price: '$149',
      priceDuration: '/hour',
      description: 'Essential skills training for website management',
      popular: false,
      features: [
        '1-on-1 Training Session',
        'Website Management Basics',
        'Content Updates Training',
        'Basic Analytics Overview',
        'Security Best Practices',
        'Mobile Responsiveness',
        'Email Support (1 week)',
        'Training Materials'
      ],
      duration: '1-2 hours',
      support: '1 week'
    },
    {
      name: 'Comprehensive Training',
      price: '$299',
      priceDuration: '/session',
      description: 'Complete training package with hands-on practice',
      popular: true,
      features: [
        'Extended Training Session (3-4 hours)',
        'Advanced Website Management',
        'SEO & Analytics Training',
        'Content Strategy & Creation',
        'Performance Optimization',
        'Security & Backup Procedures',
        'E-commerce Management',
        'Social Media Integration',
        'Email Support (1 month)',
        'Custom Training Materials',
        'Follow-up Session'
      ],
      duration: '3-4 hours',
      support: '1 month'
    },
    {
      name: 'Team Training',
      price: '$599',
      priceDuration: '/session',
      description: 'Group training for multiple team members',
      popular: false,
      features: [
        'Group Training Session (4-6 hours)',
        'Up to 5 Team Members',
        'Customized Training Program',
        'Role-based Training Modules',
        'Advanced Analytics & Reporting',
        'Workflow Optimization',
        'Team Collaboration Tools',
        'Security & Compliance Training',
        'Email Support (3 months)',
        'Training Documentation',
        'Monthly Follow-up Sessions',
        'Certificate of Completion'
      ],
      duration: '4-6 hours',
      support: '3 months'
    }
  ];

  const technologies = [
    {
      category: 'Content Management',
      tools: [
        { name: 'WordPress', description: 'Website content management and updates' },
        { name: 'WooCommerce', description: 'E-commerce platform management' },
        { name: 'Shopify', description: 'Online store administration' },
        { name: 'Content Creation Tools', description: 'Blog and content management' }
      ]
    },
    {
      category: 'Analytics & SEO',
      tools: [
        { name: 'Google Analytics', description: 'Website traffic and user behavior analysis' },
        { name: 'Google Search Console', description: 'SEO performance monitoring' },
        { name: 'Google Tag Manager', description: 'Advanced tracking implementation' },
        { name: 'SEO Tools', description: 'Keyword research and optimization' }
      ]
    },
    {
      category: 'Performance & Security',
      tools: [
        { name: 'Performance Monitoring', description: 'Website speed and optimization' },
        { name: 'Security Tools', description: 'Website security and protection' },
        { name: 'Backup Systems', description: 'Data backup and recovery procedures' },
        { name: 'SSL Management', description: 'Security certificate administration' }
      ]
    },
    {
      category: 'Communication & Support',
      tools: [
        { name: 'Video Conferencing', description: 'Remote training and support sessions' },
        { name: 'Screen Sharing', description: 'Interactive hands-on training' },
        { name: 'Documentation Tools', description: 'Training materials and guides' },
        { name: 'Support Platforms', description: 'Ongoing assistance and help' }
      ]
    }
  ];

  const trainingProcess = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Understanding your current skills and training needs',
      icon: FiMonitor,
      details: [
        'Skill level evaluation',
        'Training goals discussion',
        'Current challenges review',
        'Learning preferences assessment',
        'Custom curriculum planning'
      ]
    },
    {
      step: '02',
      title: 'Customized Training',
      description: 'Personalized training session with hands-on practice',
      icon: FiBookOpen,
      details: [
        'Interactive training session',
        'Real-world examples',
        'Hands-on practice exercises',
        'Step-by-step guidance',
        'Q&A and clarification'
      ]
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Guided practice and real-world application',
      icon: FiSettings,
      details: [
        'Practical exercises',
        'Real project application',
        'Best practices demonstration',
        'Troubleshooting guidance',
        'Confidence building'
      ]
    },
    {
      step: '04',
      title: 'Support & Follow-up',
      description: 'Ongoing support and additional training as needed',
      icon: FiUsers,
      details: [
        'Post-training support',
        'Follow-up sessions',
        'Resource materials',
        'Community access',
        'Continuous learning'
      ]
    }
  ];

  const benefits = [
    {
      icon: FiUsers,
      title: 'Empower Your Team',
      description: 'Give your team the skills and confidence to manage your website effectively.'
    },
    {
      icon: FiTrendingUp,
      title: 'Reduce Dependencies',
      description: 'Minimize reliance on external developers for routine updates and maintenance.'
    },
    {
      icon: FiAward,
      title: 'Professional Skills',
      description: 'Develop professional-level skills in website management and optimization.'
    },
    {
      icon: FiZap,
      title: 'Immediate Application',
      description: 'Apply learned skills immediately to improve your website and business.'
    },
    {
      icon: FiShield,
      title: 'Security Awareness',
      description: 'Learn best practices for website security and data protection.'
    },
    {
      icon: FiGlobe,
      title: 'Future-Proof Knowledge',
      description: 'Stay updated with the latest tools and techniques in web management.'
    }
  ];

  const trainingTopics = [
    {
      category: 'Website Management',
      topics: [
        'Content creation and editing',
        'Page and post management',
        'Media library organization',
        'User management and roles',
        'Plugin and theme management'
      ]
    },
    {
      category: 'E-commerce',
      topics: [
        'Product management',
        'Order processing',
        'Inventory management',
        'Payment gateway setup',
        'Customer service tools'
      ]
    },
    {
      category: 'Analytics & SEO',
      topics: [
        'Google Analytics setup',
        'Traffic analysis and reporting',
        'SEO optimization techniques',
        'Keyword research and targeting',
        'Performance monitoring'
      ]
    },
    {
      category: 'Security & Maintenance',
      topics: [
        'Security best practices',
        'Backup procedures',
        'Update management',
        'Performance optimization',
        'Troubleshooting common issues'
      ]
    }
  ];

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Training Sessions - Mudassir Javed</title>
        <meta name="description" content="Professional training sessions by Mudassir Javed for website management, content creation, analytics, and SEO. Learn to manage your website effectively with personalized training." />
        <meta name="keywords" content="website training, content management training, SEO training, analytics training, WordPress training, e-commerce training" />
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
                <FiUsers className="w-4 h-4 mr-2" />
                Professional Training
              </Badge>
              <h1 className="text-h1 text-gradient">
                Training Sessions
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                Master your website management skills with our personalized training sessions. Learn content creation, analytics, SEO, and more from industry experts in interactive, hands-on sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="gradient" asChild className="group">
                  <Link to="/contact">
                    {t('trainingSession.hero.ctaPrimary')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="#plans">
                    {t('trainingSession.hero.ctaSecondary')}
                    <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {[
                { icon: FiUsers, label: 'Trained Professionals', value: '500+' },
                { icon: FiAward, label: 'Success Rate', value: '98%' },
                { icon: FiClock, label: 'Training Hours', value: '1000+' },
                { icon: FiGlobe, label: 'Topics Covered', value: '25+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center">
                    <CardContent className="p-4 sm:p-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-xl sm:text-h2 font-bold mb-2 sm:mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {stat.label}
                      </div>
                      <div className="mt-4 sm:mt-6 w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              title="What's Included in Training Sessions"
              subtitle="Comprehensive learning experience with hands-on practice"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-h3">Complete Learning Experience</h3>
                <p className="text-body text-muted-foreground">
                  Our training sessions are designed to give you practical, hands-on experience with website management. We cover everything from basic content updates to advanced analytics and SEO techniques.
                </p>
                <div className="space-y-4">
                  {[
                    'Personalized training curriculum',
                    'Hands-on practice sessions',
                    'Real-world examples and scenarios',
                    'Comprehensive training materials',
                    'Ongoing support and follow-up',
                    'Certificate of completion',
                    'Access to training resources',
                    'Post-training consultation'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <FiCheck className="w-5 h-5 text-success flex-shrink-0" />
                      <span>{feature}</span>
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
                <div className="card-3d p-8">
                  <h4 className="text-h3 font-semibold mb-6">Training Progress</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Content Management</span>
                        <span className="text-sm text-success">Advanced</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Analytics & SEO</span>
                        <span className="text-sm text-success">Intermediate</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Security & Maintenance</span>
                        <span className="text-sm text-success">Expert</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">E-commerce Management</span>
                        <span className="text-sm text-success">Advanced</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Topics */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionTitle
              title="Training Topics We Cover"
              subtitle="Comprehensive curriculum designed for real-world application"
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trainingTopics.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <CardContent>
                      <h4 className="text-h3 font-semibold mb-4 text-primary group-hover:text-blue-600 transition-colors">{category.category}</h4>
                      <div className="space-y-3">
                        {category.topics.map((topic, topicIndex) => (
                          <motion.div
                            key={topic}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: topicIndex * 0.05 }}
                            className="flex items-center space-x-2"
                          >
                            <FiCheck className="w-3 h-3 text-success flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Technologies & Tools We Teach"
              subtitle="Industry-standard tools and platforms for effective website management"
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {technologies.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <CardContent>
                      <h4 className="text-h3 font-semibold mb-4 text-primary group-hover:text-blue-600 transition-colors">{category.category}</h4>
                      <div className="space-y-3">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                            className="space-y-1"
                          >
                            <div className="font-medium text-sm group-hover:text-blue-600 transition-colors">{tool.name}</div>
                            <div className="text-xs text-muted-foreground">{tool.description}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionTitle
              title="Our Training Process"
              subtitle="A structured approach to effective learning and skill development"
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {trainingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {process.step}
                      </div>
                      <process.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h4 className="text-h3 font-semibold mb-2 group-hover:text-blue-600 transition-colors">{process.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{process.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        {process.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center justify-center">
                            <FiCheck className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Why Choose Our Training?"
              subtitle="The benefits of professional website management training"
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-h3 font-semibold mb-3 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionTitle
              title="Training Plans"
              subtitle="Choose the right training package for your needs"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
              {trainingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative ${plan.popular ? 'border-primary/50 shadow-2xl scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <FiStar className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-h3 font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground mb-4">{plan.description}</p>
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-muted-foreground ml-2">{plan.priceDuration}</span>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center justify-center">
                            <FiClock className="w-4 h-4 mr-2" />
                            Duration: {plan.duration}
                          </div>
                          <div className="flex items-center justify-center">
                            <FiRefreshCw className="w-4 h-4 mr-2" />
                            Support: {plan.support}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 mb-8">
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
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                        size="lg"
                      >
                        Book Session
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Training FAQ"
              subtitle="Everything you need to know about our training sessions"
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {[
                {
                  question: "What topics do you cover in training?",
                  answer: "We cover website management, content creation, analytics, SEO, security, e-commerce, and more. Training is customized to your specific needs and skill level."
                },
                {
                  question: "How long are the training sessions?",
                  answer: "Session duration varies by plan: Basic (1-2 hours), Comprehensive (3-4 hours), and Team Training (4-6 hours). We can also arrange custom durations."
                },
                {
                  question: "Do you provide training materials?",
                  answer: "Yes, all training sessions include comprehensive materials, guides, and resources for ongoing reference and practice."
                },
                {
                  question: "Can training be done remotely?",
                  answer: "Absolutely! We offer both in-person and remote training sessions using video conferencing and screen sharing tools."
                },
                {
                  question: "What if I need help after training?",
                  answer: "All plans include post-training support. Comprehensive and Team plans include extended support periods and follow-up sessions."
                },
                {
                  question: "Do you offer group training for teams?",
                  answer: "Yes, we offer team training packages for up to 5 team members, with customized curriculum and role-based training modules."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card variant="elevated" className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      <h4 className="text-h3 font-semibold mb-3 group-hover:text-blue-600 transition-colors">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <MagneticCard className="p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-h2 font-bold">
                    Ready to Master Your Website?
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    Take control of your website with professional training. Learn the skills you need to manage, optimize, and grow your online presence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        {t('trainingSession.cta.bookTraining')}
                        <FiUsers className="ml-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group"
                      asChild
                    >
                      <Link to="/contact">
                        {t('trainingSession.cta.scheduleConsultation')}
                        <FiMail className="mr-2 group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('trainingSession.cta.freeConsultation')}
                  </p>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>

        {/* Testimonials Slider */}
        {/* Removed Testimonials Slider */}
      </main>
    </>
  );
};

export default TrainingSession; 