import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  gradient = false,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-h2 font-bold ${gradient ? 'text-gradient' : 'text-foreground'} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          {subtitle}
        </p>
      )}
      
      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '4rem' : '3rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-primary mt-6 ${
          centered ? 'mx-auto' : ''
        } rounded-full`}
      />
    </motion.div>
  );
};

export default SectionTitle;