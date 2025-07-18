import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

const FloatingElement = ({ 
  children, 
  className, 
  speed = 1, 
  direction = 'up',
  delay = 0,
  duration = 20,
  size = 'medium',
  opacity = 0.6,
  blur = false,
  ...props 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 50 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };

  const directionStyles = {
    up: { y: springY },
    down: { y: useTransform(scrollYProgress, [0, 1], [0, 100 * speed]) },
    left: { x: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]) },
    right: { x: springX },
    rotate: { rotate },
    scale: { scale }
  };

  return (
    <motion.div
      ref={ref}
      style={directionStyles[direction]}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: opacity, 
        scale: 1,
        y: [0, -20, 0],
        x: [0, 10, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className={cn(
        'absolute select-none pointer-events-none',
        sizeClasses[size],
        blur && 'blur-sm',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const FloatingElements = ({ className, children, ...props }) => {
  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
};

export { FloatingElement, FloatingElements }; 