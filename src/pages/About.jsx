import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCode, FiDatabase, FiUsers, FiTrendingUp, FiTool, FiBarChart, FiHeart } from 'react-icons/fi';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '../components/SectionTitle';
import AvatarCard from '../components/AvatarCard';
import Floating3DElement from '../components/Floating3DElement';
import TechnologyModal from '../components/TechnologyModal';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

const mudassirImages = [
  '/avatars/mdassir (0).NEF',
  '/avatars/mdassir (1).jpg',
  '/avatars/mdassir (2).jpg',
  '/avatars/mdassir (3).jpg',
];

const About = () => {
  const { t } = useTranslation();
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mudassirImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTechnologyClick = (techName) => {
    setSelectedTechnology(techName);
    setIsModalOpen(true);
  };

  const highlights = [
    {
      icon: FiCode,
      title: t('about.highlights.webDevelopment.title'),
      description: t('about.highlights.webDevelopment.description')
    },
    {
      icon: FiDatabase,
      title: t('about.highlights.dataAnalysis.title'),
      description: t('about.highlights.dataAnalysis.description')
    },
    {
      icon: FiUsers,
      title: t('about.highlights.collaboration.title'),
      description: t('about.highlights.collaboration.description')
    },
    {
      icon: FiTrendingUp,
      title: t('about.highlights.growthMindset.title'),
      description: t('about.highlights.growthMindset.description')
    }
  ];

  const tools = [
    {
      title: t('about.tools.webDevelopment.title'),
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'HTML5 & CSS3', 'JavaScript', 'React', 'Node.js', 
        'Express.js', 'REST APIs', 'Git', 'TailwindCSS'
      ]
    },
    {
      title: t('about.tools.dataAnalysis.title'),
      icon: FiBarChart,
      color: 'from-green-500 to-emerald-500',
      items: [
        'Python', 'Pandas & NumPy', 'SQL', 'Power BI', 
        'Excel', 'SPSS', 'Data Visualization', 'Statistical Analysis'
      ]
    },
    {
      title: t('about.tools.softSkills.title'),
      icon: FiHeart,
      color: 'from-purple-500 to-pink-500',
      items: [
        'Problem Solving', 'Critical Thinking', 'Communication', 'Project Management',
        'Team Collaboration', 'Attention to Detail', 'Adaptability', 'Time Management'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Helmet>

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-8"
              >
                <SectionTitle
                  title={t('about.hero.title')}
                  subtitle={t('about.hero.subtitle')}
                  centered={false}
                  gradient={true}
                />

                <div className="space-y-3 md:space-y-6 text-xs md:text-body-lg">
                  <p>
                    {t('about.hero.description1')}
                  </p>

                  <p>
                    {t('about.hero.description2')}
                  </p>

                  <p>
                    {t('about.hero.description3')}
                  </p>
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <Floating3DElement className="animate-float">
                  <AvatarCard
                    name={t('about.profile.name')}
                    title={t('about.profile.title')}
                    size="xlarge"
                    image={mudassirImages[currentImage]}
                    animated
                  />
                </Floating3DElement>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding bg-surface py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('about.highlights.title')}
              subtitle={t('about.highlights.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group max-w-xs w-full mx-auto"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl text-center"
                  >
                    <CardContent className="p-4 md:p-8">
                      {/* Highlight Icon */}
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto min-w-[44px] min-h-[44px]">
                        <highlight.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>

                      {/* Highlight Title */}
                      <h3 className="text-base md:text-h3 font-semibold mb-2 md:mb-4 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>

                      {/* Highlight Description */}
                      <p className="text-xs md:text-body-base text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-2 md:mt-6 w-8 md:w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="section-padding py-10 md:py-24">
          <div className="container-custom">
            <SectionTitle
              title={t('about.tools.title')}
              subtitle={t('about.tools.subtitle')}
              className="mb-8 md:mb-16"
            />

            <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group max-w-xs w-full mx-auto"
                >
                  <Card 
                    variant="elevated"
                    className="h-full hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl"
                  >
                    <CardContent className="p-4 md:p-8">
                      {/* Tool Icon */}
                      <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto min-w-[44px] min-h-[44px]`}>
                        <tool.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>

                      {/* Tool Title */}
                      <h3 className="text-base md:text-h3 font-semibold mb-2 md:mb-6 text-center group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>

                      {/* Tool Items */}
                      <div className="grid grid-cols-2 gap-1 md:gap-3">
                        {tool.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.05) }}
                            className="text-xs md:text-sm text-muted-foreground transition-colors cursor-pointer hover:text-primary group-hover:text-foreground min-h-[44px] flex items-center"
                            onClick={() => handleTechnologyClick(item)}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} flex-shrink-0`} />
                              <span className="font-medium text-xs md:text-sm">{item}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative Element */}
                      <div className={`mt-2 md:mt-6 w-8 md:w-12 h-1 bg-gradient-to-r ${tool.color} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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

        {/* Testimonials Section */}
        <section className="py-10 md:py-24 bg-surface">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 md:mb-12"
            >
              <h2 className="text-h2 font-bold mb-2 md:mb-4">
                {t('home.testimonials.title')}
              </h2>
              <p className="text-xs md:text-body-lg text-muted-foreground max-w-2xl mx-auto">
                {t('home.testimonials.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TestimonialsSlider />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;