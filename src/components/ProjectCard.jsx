import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye, FiCode, FiDatabase, FiTrendingUp, FiUsers, FiCalendar } from 'react-icons/fi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import MagneticCard from './MagneticCard';
import { CardBase } from './ui/card';
import { cn, gradients } from '../lib/utils';
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ 
  project, 
  className,
  variant = 'default',
  showDetails = false,
  onViewDetails 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.03}
      transitionSpeed={300}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      className={cn('w-full h-full')}
    >
      <motion.div
        className={cn('relative group')}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        tabIndex={0}
        aria-label={project.title}
      >
        {/* Animated shadow */}
        {/* Remove custom shadow overlay, CardBase will handle shadow */}
        <MagneticCard className="relative z-10" glass={variant === 'glass'}>
          <CardBase className="!p-0 overflow-hidden">
            {/* Image Section */}
            <div className="relative overflow-hidden aspect-video">
              <motion.img
                src={project.image}
                alt={project.title}
                variants={imageVariants}
                onLoad={() => setImageLoaded(true)}
                className={cn(
                  'w-full h-full object-cover transition-all duration-300',
                  !imageLoaded && 'blur-sm'
                )}
              />
              
              {/* Loading overlay */}
              <AnimatePresence>
                {!imageLoaded && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-muted animate-pulse"
                  />
                )}
              </AnimatePresence>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <Badge 
                  className={cn(
                    'text-white border-0',
                    getCategoryColor(project.category)
                  )}
                >
                  {React.createElement(getCategoryIcon(project.category), { className: "w-3 h-3 mr-1" })}
                  {project.category}
                </Badge>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground border-0">
                    Featured
                  </Badge>
                </div>
              )}
              
              {/* Hover Overlay */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Live Demo
                        </a>
                      </Button>
                )}
                    
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FiGithub className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content Section */}
            <motion.div 
              variants={contentVariants}
              className="p-4 md:p-6 space-y-3 md:space-y-4"
            >
              {/* Header */}
              <div className="space-y-1 md:space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-base md:text-h3 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs md:text-body-sm text-muted-foreground font-medium">
                    {project.year}
                  </span>
                </div>
                <p className="text-xs md:text-body-base text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-1 md:space-y-2">
                <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-[10px] md:text-xs min-h-[24px] min-w-[44px]"
                    >
                      {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-[10px] md:text-xs min-h-[24px] min-w-[44px]">
                        +{project.techStack.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                {showDetails && project.stats && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4 border-t border-border">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-base md:text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                  ))}
                </div>
              )}

                {/* Action Buttons */}
                <div className="flex gap-1 md:gap-2 pt-1 md:pt-2">
                  {onViewDetails && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn min-h-[44px] min-w-[44px]"
                      onClick={() => onViewDetails(project)}
                      tilt={false}
                    >
                      <FiEye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      <span className="hidden xs:inline">View Details</span>
                    </Button>
                )}
                
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn min-h-[44px] min-w-[44px]"
                      asChild
                      tilt={false}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        <span className="hidden xs:inline">Demo</span>
                      </a>
                    </Button>
                )}
              </div>
            </motion.div>
          </CardBase>
        </MagneticCard>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;