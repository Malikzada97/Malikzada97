import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useHover } from '@use-gesture/react';
import { cn } from '../lib/utils';

const MagneticCard = ({ 
  children, 
  className, 
  intensity = 0.1, 
  scale = 1.05,
  borderRadius = '1rem',
  shadow = true,
  glass = false,
  ...props 
}) => {
  const cardRef = useRef(null);
  
  const [spring, api] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
    config: { tension: 300, friction: 30 }
  }));

  const bind = useHover(
    ({ hovering, event }) => {
      if (hovering && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        
        const rotateX = (mouseY * intensity) / (rect.height / 2);
        const rotateY = (mouseX * intensity) / (rect.width / 2);
        
        api.start({
          scale: scale,
          rotateX: -rotateX,
          rotateY: rotateY,
          z: 20,
          immediate: false
        });
      } else {
        api.start({
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          immediate: false
        });
      }
    },
    { eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={cardRef}
      {...bind()}
      style={{
        ...spring,
        transformStyle: 'preserve-3d',
        borderRadius,
        ...(glass && {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
        }),
        ...(shadow && !glass && {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        })
      }}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        glass ? 'backdrop-blur-md' : 'bg-card',
        shadow && !glass && 'shadow-lg',
        className
      )}
      {...props}
    >
      <div style={{ transform: 'translateZ(0)' }}>
        {children}
      </div>
      
      {/* Subtle gradient overlay for depth */}
      {!glass && (
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
          }}
        />
      )}
    </animated.div>
  );
};

export default MagneticCard; 