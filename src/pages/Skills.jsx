import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCode, FiDatabase, FiGlobe, FiServer, FiBarChart, FiTool, FiAward, FiBookOpen, FiTrendingUp, FiShield } from 'react-icons/fi';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../components/SectionTitle';
import TechnologyModal from '../components/TechnologyModal';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Skills = () => {
  const { t } = useTranslation();
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechnologyClick = (techName) => {
    setSelectedTechnology(techName);
    setIsModalOpen(true);
  };

  const skillCategories = [
    {
      title: t('skills.categories.frontend.title'),
      icon: FiGlobe,
      color: 'text-primary',
      skills: [
        { name: t('skills.categories.frontend.skills.html'), level: 95 },
        { name: t('skills.categories.frontend.skills.javascript'), level: 90 },
        { name: t('skills.categories.frontend.skills.react'), level: 88 },
        { name: t('skills.categories.frontend.skills.tailwind'), level: 85 },
        { name: t('skills.categories.frontend.skills.responsive'), level: 92 },
        { name: t('skills.categories.frontend.skills.threejs'), level: 78 }
      ]
    },
    {
      title: t('skills.categories.backend.title'),
      icon: FiServer,
      color: 'text-accent',
      skills: [
        { name: t('skills.categories.backend.skills.nodejs'), level: 82 },
        { name: t('skills.categories.backend.skills.express'), level: 80 },
        { name: t('skills.categories.backend.skills.rest'), level: 85 },
        { name: t('skills.categories.backend.skills.database'), level: 78 },
        { name: t('skills.categories.backend.skills.auth'), level: 75 }
      ]
    },
    {
      title: t('skills.categories.data.title'),
      icon: FiBarChart,
      color: 'text-success',
      skills: [
        { name: t('skills.categories.data.skills.python'), level: 90 },
        { name: t('skills.categories.data.skills.pandas'), level: 88 },
        { name: t('skills.categories.data.skills.sql'), level: 85 },
        { name: t('skills.categories.data.skills.powerbi'), level: 82 },
        { name: t('skills.categories.data.skills.statistics'), level: 80 }
      ]
    },
    {
      title: t('skills.categories.ai.title'),
      icon: FiCode,
      color: 'text-accent',
      skills: [
        { name: t('skills.categories.ai.skills.automation'), level: 85 },
        { name: t('skills.categories.ai.skills.chatbots'), level: 88 },
        { name: t('skills.categories.ai.skills.seo'), level: 90 },
        { name: t('skills.categories.ai.skills.ml'), level: 75 },
        { name: t('skills.categories.ai.skills.process'), level: 82 }
      ]
    },
    {
      title: t('skills.categories.tools.title'),
      icon: FiTool,
      color: 'text-warning',
      skills: [
        { name: t('skills.categories.tools.skills.git'), level: 88 },
        { name: t('skills.categories.tools.skills.vscode'), level: 95 },
        { name: t('skills.categories.tools.skills.terminal'), level: 82 },
        { name: t('skills.categories.tools.skills.package'), level: 85 },
        { name: t('skills.categories.tools.skills.debugging'), level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: t('skills.certifications.google.name'),
      organization: t('skills.certifications.google.organization'),
      year: '2023',
      type: t('skills.certifications.google.type'),
      icon: FiAward,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: t('skills.certifications.react.name'),
      organization: t('skills.certifications.react.organization'),
      year: '2023',
      type: t('skills.certifications.react.type'),
      icon: FiCode,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: t('skills.certifications.python.name'),
      organization: t('skills.certifications.python.organization'),
      year: '2022',
      type: t('skills.certifications.python.type'),
      icon: FiBookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: t('skills.certifications.sql.name'),
      organization: t('skills.certifications.sql.organization'),
      year: '2022',
      type: t('skills.certifications.sql.type'),
      icon: FiDatabase,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    { name: t('skills.technologies.react'), icon: '⚛️' },
    { name: t('skills.technologies.javascript'), icon: '🟨' },
    { name: t('skills.technologies.python'), icon: '🐍' },
    { name: t('skills.technologies.nodejs'), icon: '🟢' },
    { name: t('skills.technologies.sql'), icon: '🗄️' },
    { name: t('skills.technologies.git'), icon: '📦' },
    { name: t('skills.technologies.tailwind'), icon: '🎨' },
    { name: t('skills.technologies.powerbi'), icon: '📊' },
    { name: t('skills.technologies.vscode'), icon: '💻' },
    { name: t('skills.technologies.pandas'), icon: '🐼' },
    { name: t('skills.technologies.excel'), icon: '📈' },
    { name: t('skills.technologies.rest'), icon: '🔗' }
  ];

  return (
    <>
      <Helmet>
        <title>{t('skills.meta.title')}</title>
        <meta name="description" content={t('skills.meta.description')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Skills Overview */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('skills.hero.title')}
              subtitle={t('skills.hero.subtitle')}
              gradient={true}
              className="mb-8 md:mb-16"
            />

            <div className="grid lg:grid-cols-3 gap-4 md:gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="card-3d group max-w-xs w-full mx-auto"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-8">
                    <motion.div 
                      className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center relative min-w-[44px] min-h-[44px]"
                      whileHover={{ 
                        rotateY: 180,
                        transition: { duration: 0.6 }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <category.icon className={`w-5 h-5 md:w-6 md:h-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <h3 className="text-base md:text-h3 font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 md:space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-1 md:space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-xs md:text-base text-foreground">{skill.name}</span>
                          <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                              ease: "easeOut"
                            }}
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.color === 'text-primary' ? 'from-primary to-primary-hover' :
                              category.color === 'text-accent' ? 'from-accent to-accent-hover' :
                              category.color === 'text-success' ? 'from-success to-success' :
                              'from-warning to-warning'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Icons */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('skills.technology.title')}
              subtitle={t('skills.technology.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-4 rounded-xl hover:bg-card transition-colors group cursor-pointer min-w-[44px] min-h-[44px]"
                  onClick={() => handleTechnologyClick(tech.name)}
                >
                  <div className="text-2xl md:text-4xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('skills.certifications.title')}
              subtitle={t('skills.certifications.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
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
                      {/* Certification Icon */}
                      <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                        <cert.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>
                      
                      {/* Certification Name */}
                      <h4 className="font-semibold text-xs md:text-base text-foreground mb-1 md:mb-3 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      
                      {/* Organization */}
                      <p className="text-primary text-xs md:text-sm font-medium mb-1 md:mb-2">
                        {cert.organization}
                      </p>
                      
                      {/* Year */}
                      <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-4">
                        {cert.year}
                      </p>
                      
                      {/* Type Badge */}
                      <div className="mb-2 md:mb-4">
                        <span className="px-2 md:px-4 py-1 md:py-2 bg-muted text-muted-foreground rounded-full text-[10px] md:text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {cert.type}
                        </span>
                      </div>

                      {/* Decorative Element */}
                      <div className={`mt-2 md:mt-4 w-8 md:w-12 h-1 bg-gradient-to-r ${cert.color} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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

export default Skills;