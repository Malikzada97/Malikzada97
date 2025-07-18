import { FiCalendar, FiExternalLink, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { CardBase } from './ui/card';

const CertificateCard = ({ 
  title, 
  organization, 
  date, 
  image, 
  credentialUrl, 
  description,
  skills = [],
  className,
  tilt = true
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.12}
      scale={1.02}
      transitionSpeed={250}
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      className={className}
      disabled={!tilt}
    >
      <CardBase>
        {/* Certificate Image/Badge */}
        <div className="relative mb-4">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-full h-32 object-contain rounded-lg bg-muted/30 p-4 group-hover:bg-primary-muted/30 transition-colors duration-300"
            />
          ) : (
            <div className="w-full h-32 bg-muted/30 rounded-lg flex items-center justify-center group-hover:bg-primary-muted/30 transition-colors duration-300">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <FiAward className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.div>
            </div>
          )}
          
          {/* Floating Icons */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ✓
            </motion.div>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="space-y-3 relative z-10">
          <motion.h3 
            className="font-semibold text-h4 text-foreground group-hover:text-gradient transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h3>

          <div className="space-y-2">
            <p className="text-primary font-medium group-hover:text-primary-hover transition-colors duration-300">
              {organization}
            </p>
            
            <div className="flex items-center text-body-sm text-muted-foreground">
              <FiCalendar className="w-4 h-4 mr-2 group-hover:text-primary transition-colors duration-300" />
              {date}
            </div>
          </div>

          {description && (
            <p className="text-body-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              {description}
            </p>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-muted/60 text-muted-foreground rounded text-xs backdrop-blur-sm hover:bg-primary-muted hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}

          {/* Credential Link */}
          {credentialUrl && (
            <motion.a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors group/link mt-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FiExternalLink className="w-4 h-4 group-hover/link:scale-125 transition-transform duration-200" />
              <span className="text-sm font-medium">View Credential</span>
            </motion.a>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-card bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-shimmer bg-[length:200px_100%] bg-no-repeat bg-[-200px_0] group-hover:animate-[shimmer_1.5s_ease-in-out] opacity-20 rounded-card" />
      </CardBase>
    </Tilt>
  );
};

export default CertificateCard;