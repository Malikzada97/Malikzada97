import { AnimatePresence, motion } from 'framer-motion';
import { CardBase } from './ui/card';

const AvatarCard = ({ 
  name, 
  title, 
  image, 
  className = "",
  size = "large",
  animated = false
}) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24", 
    large: "w-32 h-32",
    xlarge: "w-48 h-48"
  };

  return (
    <CardBase className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* Avatar */}
      <div className="relative group">
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300`}>
          {image ? (
            animated ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={image}
                  src={image}
                  alt={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 40%' }}
                />
              </AnimatePresence>
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 40%' }}
              />
            )
          ) : (
            <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">
                {name?.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      </div>

      {/* Name and Title */}
      {(name || title) && (
        <div className="text-center space-y-1">
          {name && (
            <h3 className="font-semibold text-h4 text-foreground">{name}</h3>
          )}
          {title && (
            <p className="text-body-base text-muted-foreground">{title}</p>
          )}
        </div>
      )}
    </CardBase>
  );
};

export default AvatarCard;