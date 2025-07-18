import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Floating3DComponent = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={{
        rotateX: mousePosition.y * 0.1,
        rotateY: mousePosition.x * 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      {children}
      
      {/* 3D Glow Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: 'translateZ(-20px)' }}
      />
    </motion.div>
  );
};

export default Floating3DComponent; 