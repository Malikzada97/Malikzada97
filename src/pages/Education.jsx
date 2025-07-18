import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiAward, FiBookOpen, FiTrendingUp, FiMapPin, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import CertificateCard from '../components/CertificateCard';
import TechnologyModal from '../components/TechnologyModal';
import MagneticCard from '../components/MagneticCard';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';

const Education = () => {
  const { t } = useTranslation();
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechnologyClick = (techName) => {
    setSelectedTechnology(techName);
    setIsModalOpen(true);
  };

  const degrees = [
    {
      degree: t('education.degrees.masters.degree'),
      institution: t('education.degrees.masters.institution'),
      year: '2020 - 2022',
      cgpa: '3.8/4.0',
      description: t('education.degrees.masters.description'),
      courses: [
        t('education.degrees.masters.courses.algorithms'),
        t('education.degrees.masters.courses.ml'),
        t('education.degrees.masters.courses.database'),
        t('education.degrees.masters.courses.webdev'),
        t('education.degrees.masters.courses.datamining')
      ]
    },
    {
      degree: t('education.degrees.bachelors.degree'),
      institution: t('education.degrees.bachelors.institution'),
      year: '2016 - 2020',
      cgpa: '3.6/4.0',
      description: t('education.degrees.bachelors.description'),
      courses: [
        t('education.degrees.bachelors.courses.datastructures'),
        t('education.degrees.bachelors.courses.oop'),
        t('education.degrees.bachelors.courses.software'),
        t('education.degrees.bachelors.courses.database'),
        t('education.degrees.bachelors.courses.systems')
      ]
    }
  ];

  const certifications = [
    {
      title: t('education.certifications.google.title'),
      organization: t('education.certifications.google.organization'),
      date: t('education.certifications.google.date'),
      image: '/api/placeholder/120/120',
      credentialUrl: 'https://coursera.org/verify/certificate',
      description: t('education.certifications.google.description'),
      skills: [
        t('education.certifications.google.skills.analysis'),
        t('education.certifications.google.skills.sql'),
        t('education.certifications.google.skills.r'),
        t('education.certifications.google.skills.tableau'),
        t('education.certifications.google.skills.visualization')
      ]
    },
    {
      title: t('education.certifications.meta.title'),
      organization: t('education.certifications.meta.organization'),
      date: t('education.certifications.meta.date'),
      image: '/api/placeholder/120/120', 
      credentialUrl: 'https://coursera.org/verify/certificate',
      description: t('education.certifications.meta.description'),
      skills: [
        t('education.certifications.meta.skills.react'),
        t('education.certifications.meta.skills.javascript'),
        t('education.certifications.meta.skills.html'),
        t('education.certifications.meta.skills.responsive'),
        t('education.certifications.meta.skills.version')
      ]
    },
    {
      title: t('education.certifications.ibm.title'),
      organization: t('education.certifications.ibm.organization'),
      date: t('education.certifications.ibm.date'),
      image: '/api/placeholder/120/120',
      credentialUrl: 'https://coursera.org/verify/certificate',
      description: t('education.certifications.ibm.description'),
      skills: [
        t('education.certifications.ibm.skills.python'),
        t('education.certifications.ibm.skills.ml'),
        t('education.certifications.ibm.skills.visualization'),
        t('education.certifications.ibm.skills.statistics'),
        t('education.certifications.ibm.skills.jupyter')
      ]
    },
    {
      title: t('education.certifications.aws.title'),
      organization: t('education.certifications.aws.organization'),
      date: t('education.certifications.aws.date'),
      image: '/api/placeholder/120/120',
      credentialUrl: 'https://aws.amazon.com/verification',
      description: t('education.certifications.aws.description'),
      skills: [
        t('education.certifications.aws.skills.cloud'),
        t('education.certifications.aws.skills.services'),
        t('education.certifications.aws.skills.architecture'),
        t('education.certifications.aws.skills.security'),
        t('education.certifications.aws.skills.cost')
      ]
    },
    {
      title: t('education.certifications.powerbi.title'),
      organization: t('education.certifications.powerbi.organization'),
      date: t('education.certifications.powerbi.date'),
      image: '/api/placeholder/120/120',
      credentialUrl: 'https://docs.microsoft.com/learn',
      description: t('education.certifications.powerbi.description'),
      skills: [
        t('education.certifications.powerbi.skills.powerbi'),
        t('education.certifications.powerbi.skills.dax'),
        t('education.certifications.powerbi.skills.modeling'),
        t('education.certifications.powerbi.skills.bi'),
        t('education.certifications.powerbi.skills.reports')
      ]
    },
    {
      title: t('education.certifications.python.title'),
      organization: t('education.certifications.python.organization'),
      date: t('education.certifications.python.date'),
      image: '/api/placeholder/120/120',
      credentialUrl: 'https://udemy.com/certificate',
      description: t('education.certifications.python.description'),
      skills: [
        t('education.certifications.python.skills.python'),
        t('education.certifications.python.skills.oop'),
        t('education.certifications.python.skills.scraping'),
        t('education.certifications.python.skills.apis'),
        t('education.certifications.python.skills.analysis')
      ]
    }
  ];

  const achievements = [
    {
      title: t('education.achievements.deans.title'),
      description: t('education.achievements.deans.description'),
      year: '2018-2020'
    },
    {
      title: t('education.achievements.research.title'),
      description: t('education.achievements.research.description'),
      year: '2022'
    },
    {
      title: t('education.achievements.hackathon.title'),
      description: t('education.achievements.hackathon.description'),
      year: '2021'
    },
    {
      title: t('education.achievements.scholarship.title'),
      description: t('education.achievements.scholarship.description'),
      year: '2020-2022'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('education.meta.title')}</title>
        <meta name="description" content={t('education.meta.description')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Header */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('education.hero.title')}
              subtitle={t('education.hero.subtitle')}
              gradient={true}
              className="mb-8 md:mb-16"
            />
          </div>
        </section>

        {/* Academic Degrees */}
        <section className="pb-8 md:pb-16 py-10 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-12"
            >
              <h3 className="text-h3 flex items-center mb-4 md:mb-8">
                <FiBookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary mr-2 md:mr-3" />
                {t('education.sections.degrees.title')}
              </h3>
            </motion.div>

            <div className="space-y-4 md:space-y-8">
              {degrees.map((degree, index) => (
                <motion.div
                  key={degree.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <MagneticCard className="p-4 md:p-8 bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 group max-w-xl w-full mx-auto">
                    <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
                      {/* Degree Info */}
                      <div className="lg:col-span-2 space-y-2 md:space-y-4">
                        <div>
                          <h4 className="text-base md:text-h4 font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                            {degree.degree}
                          </h4>
                          <p className="text-primary font-medium mb-1 text-xs md:text-base">{degree.institution}</p>
                          <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <FiCalendar className="w-4 h-4 mr-1 md:mr-2" />
                              {degree.year}
                            </div>
                            <div className="flex items-center">
                              <FiTrendingUp className="w-4 h-4 mr-1 md:mr-2" />
                              {t('education.sections.degrees.cgpa')}: {degree.cgpa}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                          {degree.description}
                        </p>
                      </div>

                      {/* Key Courses */}
                      <div>
                        <h5 className="text-xs md:text-h5 font-semibold text-foreground mb-2 md:mb-4">{t('education.sections.degrees.courses')}</h5>
                        <div className="space-y-1 md:space-y-2">
                          {degree.courses.map((course, courseIndex) => (
                            <div
                              key={courseIndex}
                              className="text-xs md:text-sm text-muted-foreground transition-colors cursor-pointer hover:text-primary hover:translate-x-1 transform duration-200 min-h-[44px] flex items-center"
                              onClick={() => handleTechnologyClick(course)}
                            >
                              • {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MagneticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-12"
            >
              <h3 className="text-h3 flex items-center mb-4">
                <FiAward className="w-6 h-6 md:w-8 md:h-8 text-primary mr-2 md:mr-3" />
                {t('education.sections.certifications.title')}
              </h3>
              <p className="text-xs md:text-base text-muted-foreground">
                {t('education.sections.certifications.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                  <div className="max-w-xs w-full mx-auto">
                    <CertificateCard {...cert} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-12"
            >
              <h3 className="text-h3 flex items-center mb-4">
                <FiAward className="w-6 h-6 md:w-8 md:h-8 text-primary mr-2 md:mr-3" />
                {t('education.sections.achievements.title')}
              </h3>
              <p className="text-xs md:text-base text-muted-foreground">
                {t('education.sections.achievements.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MagneticCard className="p-4 md:p-6 bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 group max-w-xs w-full mx-auto">
                    <div className="flex items-start space-x-2 md:space-x-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md min-w-[44px] min-h-[44px]">
                        <FiAward className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h4 className="font-semibold text-xs md:text-base text-foreground group-hover:text-primary transition-colors">{achievement.title}</h4>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-2 md:px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-[10px] md:text-xs font-medium border border-primary/20">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </MagneticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h3 className="text-h3 mb-4 md:mb-6">{t('education.philosophy.title')}</h3>
              <p className="text-xs md:text-body-lg text-muted-foreground mb-4 md:mb-8">
                {t('education.philosophy.description')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <MagneticCard className="p-4 md:p-6 text-center bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 group max-w-xs w-full mx-auto">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md min-w-[44px] min-h-[44px]">
                      <FiBookOpen className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h4 className="text-xs md:text-h4 font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">{t('education.philosophy.formal.title')}</h4>
                    <p className="text-xs md:text-body-base text-muted-foreground">{t('education.philosophy.formal.description')}</p>
                  </MagneticCard>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <MagneticCard className="p-4 md:p-6 text-center bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 group max-w-xs w-full mx-auto">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md min-w-[44px] min-h-[44px]">
                      <FiTrendingUp className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h4 className="text-xs md:text-h4 font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">{t('education.philosophy.skills.title')}</h4>
                    <p className="text-xs md:text-body-base text-muted-foreground">{t('education.philosophy.skills.description')}</p>
                  </MagneticCard>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <MagneticCard className="p-4 md:p-6 text-center bg-gradient-to-br from-background via-background to-surface border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 group max-w-xs w-full mx-auto">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md min-w-[44px] min-h-[44px]">
                      <FiAward className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h4 className="text-xs md:text-h4 font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">{t('education.philosophy.recognition.title')}</h4>
                    <p className="text-xs md:text-body-base text-muted-foreground">{t('education.philosophy.recognition.description')}</p>
                  </MagneticCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 md:mt-20"
            >
              <MagneticCard className="p-6 md:p-12 text-center" glass={true}>
                <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
                  <h2 className="text-h2 font-bold">
                    {t('education.cta.title')}
                  </h2>
                  <p className="text-body-lg text-muted-foreground">
                    {t('education.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Button 
                      size="sm"
                      className="group min-h-[44px] min-w-[44px] h-11 md:h-14 text-sm md:text-lg"
                      variant="gradient"
                      asChild
                    >
                      <a href="/contact">
                        {t('education.cta.startProject')}
                        <FiExternalLink className="ml-2 group-hover:scale-110 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="group min-h-[44px] min-w-[44px] h-11 md:h-14 text-sm md:text-lg"
                      variant="outline"
                      asChild
                    >
                      <a href="/projects">
                        <FiBookOpen className="mr-2 group-hover:scale-110 transition-transform" />
                        {t('education.cta.viewProjects')}
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {t('education.cta.customSolution')} <a href="/contact" className="text-primary hover:underline">{t('education.cta.contactUs')}</a> {t('education.cta.forQuote')}.
                  </p>
                </div>
              </MagneticCard>
            </motion.section>
          </div>
        </section>

        {/* Technology Modal */}
        <TechnologyModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          technology={selectedTechnology}
        />
      </main>
    </>
  );
};

export default Education;