import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiFilter, FiGrid, FiList, FiExternalLink, FiGithub, FiCode, FiDatabase, FiTrendingUp, FiUsers, FiStar } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import MagneticCard from '../components/MagneticCard';
import { FloatingElements, FloatingElement } from '../components/FloatingElements';
import { cn, gradients } from '../lib/utils';

const Projects = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: t('projects.items.ecommerceDashboard.title'),
      description: t('projects.items.ecommerceDashboard.description'),
      longDescription: t('projects.items.ecommerceDashboard.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'fullstack',
      featured: true,
      year: '2024',
      stats: [
        { value: '40%', label: t('projects.items.ecommerceDashboard.stats.performance') },
        { value: '95%', label: t('projects.items.ecommerceDashboard.stats.satisfaction') },
        { value: '24/7', label: t('projects.items.ecommerceDashboard.stats.uptime') },
        { value: '500+', label: t('projects.items.ecommerceDashboard.stats.users') }
      ],
      challenges: [
        t('projects.items.ecommerceDashboard.challenges.inventory'),
        t('projects.items.ecommerceDashboard.challenges.responsive'),
        t('projects.items.ecommerceDashboard.challenges.optimization'),
        t('projects.items.ecommerceDashboard.challenges.security')
      ],
      solutions: [
        t('projects.items.ecommerceDashboard.solutions.websocket'),
        t('projects.items.ecommerceDashboard.solutions.design'),
        t('projects.items.ecommerceDashboard.solutions.database'),
        t('projects.items.ecommerceDashboard.solutions.payment')
      ],
      features: [
        { title: t('projects.items.ecommerceDashboard.features.analytics.title'), description: t('projects.items.ecommerceDashboard.features.analytics.description') },
        { title: t('projects.items.ecommerceDashboard.features.inventory.title'), description: t('projects.items.ecommerceDashboard.features.inventory.description') },
        { title: t('projects.items.ecommerceDashboard.features.orders.title'), description: t('projects.items.ecommerceDashboard.features.orders.description') },
        { title: t('projects.items.ecommerceDashboard.features.customer.title'), description: t('projects.items.ecommerceDashboard.features.customer.description') }
      ],
      process: [
        { title: t('projects.items.ecommerceDashboard.process.discovery.title'), description: t('projects.items.ecommerceDashboard.process.discovery.description') },
        { title: t('projects.items.ecommerceDashboard.process.design.title'), description: t('projects.items.ecommerceDashboard.process.design.description') },
        { title: t('projects.items.ecommerceDashboard.process.development.title'), description: t('projects.items.ecommerceDashboard.process.development.description') },
        { title: t('projects.items.ecommerceDashboard.process.testing.title'), description: t('projects.items.ecommerceDashboard.process.testing.description') }
      ],
      results: [
        { title: t('projects.items.ecommerceDashboard.results.efficiency.title'), description: t('projects.items.ecommerceDashboard.results.efficiency.description') },
        { title: t('projects.items.ecommerceDashboard.results.insights.title'), description: t('projects.items.ecommerceDashboard.results.insights.description') },
        { title: t('projects.items.ecommerceDashboard.results.savings.title'), description: t('projects.items.ecommerceDashboard.results.savings.description') }
      ]
    },
    {
      id: 2,
      title: t('projects.items.salesAnalytics.title'),
      description: t('projects.items.salesAnalytics.description'),
      longDescription: t('projects.items.salesAnalytics.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['Python', 'Pandas', 'Power BI', 'SQL', 'Scikit-learn', 'Plotly'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'data',
      featured: true,
      year: '2024',
      stats: [
        { value: '85%', label: t('projects.items.salesAnalytics.stats.accuracy') },
        { value: '3x', label: t('projects.items.salesAnalytics.stats.speed') },
        { value: '24hrs', label: t('projects.items.salesAnalytics.stats.reports') },
        { value: '10K+', label: t('projects.items.salesAnalytics.stats.records') }
      ]
    },
    {
      id: 3,
      title: t('projects.items.portfolioWebsite.title'),
      description: t('projects.items.portfolioWebsite.description'),
      longDescription: t('projects.items.portfolioWebsite.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Vite', 'TypeScript'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'frontend',
      year: '2024',
      stats: [
        { value: '100', label: t('projects.items.portfolioWebsite.stats.lighthouse') },
        { value: '0.5s', label: t('projects.items.portfolioWebsite.stats.loadTime') },
        { value: '100%', label: t('projects.items.portfolioWebsite.stats.responsive') },
        { value: '95%', label: t('projects.items.portfolioWebsite.stats.accessibility') }
      ]
    },
    {
      id: 4,
      title: t('projects.items.restApi.title'),
      description: t('projects.items.restApi.description'),
      longDescription: t('projects.items.restApi.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Redis'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'backend',
      year: '2023',
      stats: [
        { value: '99.9%', label: t('projects.items.restApi.stats.uptime') },
        { value: '<100ms', label: t('projects.items.restApi.stats.responseTime') },
        { value: '10K', label: t('projects.items.restApi.stats.requests') },
        { value: '100%', label: t('projects.items.restApi.stats.coverage') }
      ]
    },
    {
      id: 5,
      title: t('projects.items.mobileApp.title'),
      description: t('projects.items.mobileApp.description'),
      longDescription: t('projects.items.mobileApp.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['React Native', 'Redux', 'Firebase', 'AsyncStorage', 'React Navigation'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'mobile',
      year: '2023',
      stats: [
        { value: '4.8', label: t('projects.items.mobileApp.stats.rating') },
        { value: '50K+', label: t('projects.items.mobileApp.stats.downloads') },
        { value: '98%', label: t('projects.items.mobileApp.stats.crashFree') },
        { value: '2s', label: t('projects.items.mobileApp.stats.launchTime') }
      ]
    },
    {
      id: 6,
      title: t('projects.items.performanceTool.title'),
      description: t('projects.items.performanceTool.description'),
      longDescription: t('projects.items.performanceTool.longDescription'),
      image: '/api/placeholder/400/250',
      techStack: ['JavaScript', 'Web APIs', 'Lighthouse', 'Chrome DevTools', 'Web Workers'],
      githubUrl: 'https://github.com/mudassirjaved',
      liveUrl: 'https://demo.com',
      category: 'frontend',
      year: '2023',
      stats: [
        { value: '60%', label: t('projects.items.performanceTool.stats.improvement') },
        { value: '90+', label: t('projects.items.performanceTool.stats.score') },
        { value: '1000+', label: t('projects.items.performanceTool.stats.sites') },
        { value: '24/7', label: t('projects.items.performanceTool.stats.monitoring') }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: t('projects.categories.all'), icon: FiGrid },
    { id: 'fullstack', label: t('projects.categories.fullstack'), icon: FiCode },
    { id: 'frontend', label: t('projects.categories.frontend'), icon: FiCode },
    { id: 'backend', label: t('projects.categories.backend'), icon: FiDatabase },
    { id: 'data', label: t('projects.categories.data'), icon: FiTrendingUp },
    { id: 'mobile', label: t('projects.categories.mobile'), icon: FiUsers }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('projects.meta.title')}</title>
        <meta name="description" content={t('projects.meta.description')} />
      </Helmet>

      <FloatingElements className="min-h-screen">
        {/* Floating background elements */}
        <FloatingElement 
          className="top-20 left-10 text-primary/20" 
          speed={0.5} 
          direction="up"
          size="large"
        >
          <FiCode className="w-full h-full" />
        </FloatingElement>
        
        <FloatingElement 
          className="top-40 right-20 text-secondary/20" 
          speed={0.8} 
          direction="down"
          size="medium"
        >
          <FiDatabase className="w-full h-full" />
        </FloatingElement>
        
        <FloatingElement 
          className="bottom-40 left-20 text-success/20" 
          speed={0.6} 
          direction="rotate"
          size="small"
        >
          <FiTrendingUp className="w-full h-full" />
        </FloatingElement>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-16"
        >
          {/* Header Section */}
          <motion.section variants={itemVariants} className="text-center mb-8 md:mb-16 py-10 md:py-24">
              <SectionTitle
                title={t('projects.hero.title')}
                subtitle={t('projects.hero.subtitle')}
                className="mb-4 md:mb-8"
              />
            
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {t('projects.hero.description')}
            </p>
          </motion.section>

          {/* Filters & Search */}
          <motion.section variants={itemVariants} className="mb-6 md:mb-12 py-6 md:py-24">
            <MagneticCard className="p-3 md:p-6" glass={true}>
              <div className="projects-filters-row flex flex-col gap-3 md:gap-4 w-full sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center overflow-x-auto">
                {/* Search */}
                <div className="flex-1 min-w-[220px] max-w-xs mx-auto sm:mx-0">
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder={t('projects.search.placeholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                {/* Category Filters */}
                <div className="flex flex-1 flex-nowrap justify-center gap-2 min-w-0">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="group whitespace-nowrap min-w-[44px] min-h-[44px]"
                    >
                      <category.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {category.label}
                    </Button>
                  ))}
                </div>
                {/* View Mode Toggle */}
                <div className="flex border border-border rounded-lg p-1 ml-0 sm:ml-4 flex-shrink-0">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="min-w-[44px] min-h-[44px]"
                  >
                    <FiGrid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="min-w-[44px] min-h-[44px]"
                  >
                    <FiList className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </MagneticCard>
          </motion.section>

              {/* Projects Grid */}
          <motion.section variants={itemVariants}>
            {filteredProjects.length > 0 ? (
              <div className={cn(
                'grid gap-4 md:gap-8',
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              )}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant={viewMode === 'list' ? 'gradient' : 'default'}
                    showDetails={viewMode === 'list'}
                    onViewDetails={handleViewDetails}
                    className={viewMode === 'list' ? 'flex-row' : ''}
                  />
                ))}
              </div>
            ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                <FiSearch className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-h3 font-semibold mb-2">{t('projects.noResults.title')}</h3>
                <p className="text-body-lg text-muted-foreground">
                  {t('projects.noResults.description')}
                  </p>
                </motion.div>
              )}
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="mt-10 md:mt-20">
            <MagneticCard className="p-6 md:p-12 text-center" glass={true}>
              <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
                <h2 className="text-h2 font-bold">
                  {t('projects.cta.title')}
              </h2>
                
                <p className="text-body-lg text-muted-foreground">
                  {t('projects.cta.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button 
                    size="sm md:lg" 
                    variant="gradient"
                    className="group min-h-[44px] min-w-[44px]"
                    asChild
                  >
                    <a href="/contact">
                      {t('projects.cta.startProject')}
                      <FiExternalLink className="ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm md:lg" 
                    variant="outline"
                    className="group min-h-[44px] min-w-[44px]"
                    asChild
                  >
                    <a href="https://github.com/mudassirjaved" target="_blank" rel="noopener noreferrer">
                      <FiGithub className="mr-2 group-hover:scale-110 transition-transform" />
                      {t('projects.cta.viewGitHub')}
                    </a>
                  </Button>
              </div>
              </div>
            </MagneticCard>
          </motion.section>
            </motion.div>
      </FloatingElements>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
          isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </>
  );
};

export default Projects;