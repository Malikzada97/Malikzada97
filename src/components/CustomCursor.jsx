import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]'
    );

    const handleElementMouseEnter = () => {
      setIsHovering(true);
    };

    const handleElementMouseLeave = () => {
      setIsHovering(false);
    };

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleElementMouseEnter);
      element.addEventListener('mouseleave', handleElementMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleElementMouseEnter);
        element.removeEventListener('mouseleave', handleElementMouseLeave);
      });
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          mixBlendMode: "difference",
        }}
      />

      {/* Cursor outline */}
      <motion.div
        className="cursor-dot-outline"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          mixBlendMode: "difference",
        }}
      />

      {/* Hover effect ring */}
      {isHovering && (
        <motion.div
          className="absolute w-16 h-16 border-2 border-primary rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1,
            opacity: 0.3,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      )}

      {/* Click effect */}
      {isClicking && (
        <motion.div
          className="absolute w-8 h-8 bg-primary rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor; 