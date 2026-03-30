import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './DeepSpaceHero.css';

interface DeepSpaceHeroProps {
  title: string;
  category: 'retail' | 'corporate' | 'creative';
  description?: string;
  subtitle?: string;
}

const categoryColors = {
  retail: { accent: '#FF6B6B', glow: 'rgba(255, 107, 107, 0.2)' },
  corporate: { accent: '#4ECDC4', glow: 'rgba(78, 205, 196, 0.2)' },
  creative: { accent: '#FFE66D', glow: 'rgba(255, 230, 109, 0.2)' },
};

const DeepSpaceHero: React.FC<DeepSpaceHeroProps> = ({ 
  title, 
  category, 
  description, 
  subtitle 
}) => {
  const colors = categoryColors[category];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as any },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' as any },
    },
  };

  return (
    <motion.div
      className="deep-space-hero"
      style={{ '--category-accent': colors.accent } as any}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
    >
      {/* Floating orbs */}
      <div className="floating-orbs">
        <motion.div
          className="orb orb-1"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ background: colors.glow }}
        />
        <motion.div
          className="orb orb-2"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ background: colors.glow }}
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-label"
          variants={descriptionVariants}
        >
          <span className="category-tag" style={{ color: colors.accent }}>
            {category.toUpperCase()}
          </span>
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={titleVariants}
          style={{ color: '#F4F4F4' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="hero-subtitle"
            variants={descriptionVariants}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {description && (
          <motion.p
            className="hero-description"
            variants={descriptionVariants}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Accent line */}
      <motion.div
        className="hero-accent-line"
        style={{
          background: colors.accent,
          boxShadow: `0 0 20px ${colors.accent}`,
        }}
        animate={{
          scaleX: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
};

export default DeepSpaceHero;
