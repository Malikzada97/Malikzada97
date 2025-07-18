import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiCheck, FiClock, FiTrendingUp, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import MagneticCard from './MagneticCard';
import { cn, gradients } from '../lib/utils';

const CaseStudy = ({ project, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: FiTarget },
    { id: 'challenge', label: 'Challenge', icon: FiClock },
    { id: 'solution', label: 'Solution', icon: FiCheck },
    { id: 'process', label: 'Process', icon: FiTrendingUp },
    { id: 'results', label: 'Results', icon: FiAward }
  ];

  const steps = [
    { title: 'Discovery', description: 'Requirements gathering and analysis' },
    { title: 'Design', description: 'UI/UX design and architecture planning' },
    { title: 'Development', description: 'Agile development with regular iterations' },
    { title: 'Testing', description: 'Comprehensive testing and quality assurance' },
    { title: 'Deployment', description: 'Production deployment and monitoring' }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="relative overflow-hidden">
        <div 
          className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 relative"
          style={{ background: gradients.primary }}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-white/20 text-white border-0">
                Case Study
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {project.longDescription || project.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {project.techStack.slice(0, 6).map((tech, index) => (
                  <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-0">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav variants={itemVariants} className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Button variant="ghost" onClick={onClose} className="group">
              <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
            
            <div className="flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className="group"
                >
                  <section.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <motion.main variants={itemVariants} className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Project Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {project.stats?.slice(0, 4).map((stat, index) => (
                        <MagneticCard key={index} className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </MagneticCard>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <MagneticCard className="overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </MagneticCard>
                  </div>
                </div>
              )}

              {/* Challenge Section */}
              {activeSection === 'challenge' && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Every great solution starts with understanding the problem. Here are the key challenges we needed to address.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.challenges?.map((challenge, index) => (
                      <MagneticCard key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Challenge {index + 1}</h3>
                            <p className="text-muted-foreground">{challenge}</p>
                          </div>
                        </div>
                      </MagneticCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution Section */}
              {activeSection === 'solution' && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Innovative approaches and cutting-edge technologies to solve complex problems.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.solutions?.map((solution, index) => (
                      <MagneticCard key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success">
                            <FiCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Solution {index + 1}</h3>
                            <p className="text-muted-foreground">{solution}</p>
                          </div>
                        </div>
                      </MagneticCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Section */}
              {activeSection === 'process' && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Development Process</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      A systematic approach to delivering high-quality solutions on time and within budget.
                    </p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  {/* Steps */}
                  <div className="grid gap-6">
                    {steps.map((step, index) => (
                      <MagneticCard 
                        key={index} 
                        className={cn(
                          "p-6 transition-all duration-300",
                          index <= currentStep ? "border-primary/20 bg-primary/5" : "border-border"
                        )}
                        onClick={() => setCurrentStep(index)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300",
                            index <= currentStep 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-muted-foreground"
                          )}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                          {index <= currentStep && (
                            <FiCheck className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </MagneticCard>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                    >
                      <FiArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button
                      onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                      disabled={currentStep === steps.length - 1}
                    >
                      Next
                      <FiArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Results Section */}
              {activeSection === 'results' && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Measurable outcomes and the real-world impact of our solution.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      {project.stats.map((stat, index) => (
                        <MagneticCard key={index} className="p-6 text-center">
                          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </MagneticCard>
                      ))}
                    </div>
                  )}
                  
                  {/* Results Details */}
                  {project.results && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {project.results.map((result, index) => (
                        <MagneticCard key={index} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success">
                              <FiAward className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{result.title}</h3>
                              <p className="text-muted-foreground">{result.description}</p>
                            </div>
                          </div>
                        </MagneticCard>
                      ))}
                    </div>
                  )}
                  
                  {/* CTA */}
                  <MagneticCard className="p-8 text-center" glass={true}>
                    <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss how we can apply similar solutions to your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="gradient" asChild>
                        <a href="/contact">Get In Touch</a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Demo
                        </a>
                      </Button>
                    </div>
                  </MagneticCard>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.main>
    </motion.div>
  );
};

export default CaseStudy; 