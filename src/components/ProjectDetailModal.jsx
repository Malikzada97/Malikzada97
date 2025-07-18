import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCalendar, FiUsers, FiTrendingUp, FiCode, FiDatabase, FiGlobe, FiArrowRight, FiStar } from 'react-icons/fi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { cn, gradients } from '../lib/utils';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiGlobe },
    { id: 'features', label: 'Features', icon: FiCode },
    { id: 'process', label: 'Process', icon: FiTrendingUp },
    { id: 'results', label: 'Results', icon: FiStar }
  ];

  const getCategoryIcon = (category) => {
    const icons = {
      fullstack: FiCode,
      frontend: FiCode,
      backend: FiDatabase,
      data: FiTrendingUp,
      mobile: FiUsers
    };
    return icons[category] || FiCode;
  };

  const getCategoryColor = (category) => {
    const colors = {
      fullstack: 'bg-gradient-to-r from-blue-500 to-purple-600',
      frontend: 'bg-gradient-to-r from-green-500 to-blue-600',
      backend: 'bg-gradient-to-r from-orange-500 to-red-600',
      data: 'bg-gradient-to-r from-purple-500 to-pink-600',
      mobile: 'bg-gradient-to-r from-indigo-500 to-cyan-600'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.1 }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={contentVariants}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-background rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Side - Image & Basic Info */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        className={cn(
                          'text-white border-0',
                          getCategoryColor(project.category)
                        )}
                      >
                        {React.createElement(getCategoryIcon(project.category), { className: "w-3 h-3 mr-1" })}
                        {project.category}
                      </Badge>
                      
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    
                    <p className="text-white/90 text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FiCalendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FiGithub className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      
                      {project.liveUrl && (
                        <Button size="sm" variant="default" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex-1 overflow-hidden">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-border">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative',
                          activeTab === tab.id
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-6 overflow-y-auto max-h-96">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="space-y-6"
                      >
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.longDescription || project.description}
                              </p>
                            </div>
                            
                            {project.challenges && (
                              <div>
                                <h4 className="font-medium mb-2">Key Challenges</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      {challenge}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {project.solutions && (
                              <div>
                                <h4 className="font-medium mb-2">Solutions Implemented</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  {project.solutions.map((solution, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <span className="text-primary mt-1">•</span>
                                      {solution}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Features Tab */}
                        {activeTab === 'features' && (
                          <div className="space-y-6">
                            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                            <div className="grid gap-4">
                              {project.features?.map((feature, index) => (
                                <div key={index} className="p-4 rounded-lg border border-border">
                                  <h4 className="font-medium mb-2">{feature.title}</h4>
                                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                              )) || (
                                <p className="text-muted-foreground">Features information coming soon...</p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Process Tab */}
                        {activeTab === 'process' && (
                          <div className="space-y-6">
                            <h3 className="text-lg font-semibold mb-4">Development Process</h3>
                            <div className="space-y-4">
                              {project.process?.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                                    {index + 1}
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                  </div>
                                </div>
                              )) || (
                                <p className="text-muted-foreground">Process information coming soon...</p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Results Tab */}
                        {activeTab === 'results' && (
                          <div className="space-y-6">
                            <h3 className="text-lg font-semibold mb-4">Results & Impact</h3>
                            
                            {project.stats && (
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {project.stats.map((stat, index) => (
                                  <div key={index} className="text-center p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {project.results && (
                              <div className="space-y-4">
                                {project.results.map((result, index) => (
                                  <div key={index} className="p-4 rounded-lg border border-border">
                                    <h4 className="font-medium mb-2">{result.title}</h4>
                                    <p className="text-sm text-muted-foreground">{result.description}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {!project.stats && !project.results && (
                              <p className="text-muted-foreground">Results information coming soon...</p>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal; 