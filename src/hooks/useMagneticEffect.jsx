import { useEffect, useRef } from 'react';

const useMagneticEffect = (strength = 0.3) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let isHovering = false;
    let mouseX = 0;
    let mouseY = 0;
    let elementX = 0;
    let elementY = 0;

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      // Reset position when leaving
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      element.style.transform = 'translate(0px, 0px)';
    };

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      mouseX = e.clientX - rect.left - rect.width / 2;
      mouseY = e.clientY - rect.top - rect.height / 2;
    };

    const animate = () => {
      if (isHovering) {
        elementX += (mouseX * strength - elementX) * 0.1;
        elementY += (mouseY * strength - elementY) * 0.1;

        element.style.transform = `translate(${elementX}px, ${elementY}px)`;
      } else {
        elementX *= 0.9;
        elementY *= 0.9;
        element.style.transform = `translate(${elementX}px, ${elementY}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [strength]);

  return elementRef;
};

export default useMagneticEffect; 