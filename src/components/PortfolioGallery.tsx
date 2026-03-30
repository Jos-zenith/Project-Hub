import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './PortfolioGallery.css';

interface WorkItem {
  id: string;
  title: string;
  category: 'retail' | 'corporate' | 'creative';
  image?: string;
  description?: string;
  link?: string;
}

interface PortfolioGalleryProps {
  items?: WorkItem[];
  category?: 'retail' | 'corporate' | 'creative';
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ 
  items = defaultItems, 
  category 
}) => {
  const [floatingParticles, setFloatingParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  // Generate floating particles for deep space effect
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 15,
    }));
    setFloatingParticles(particles);
  }, []);

  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(46, 91, 255, 0.5), 0 0 60px rgba(46, 91, 255, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const floatingVariants: Variants = {
    float: {
      y: [0, -30, 30, 0],
      x: [0, 10, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as any,
      },
    },
  };

  return (
    <div className="portfolio-gallery-container">
      {/* Deep Space Background */}
      <div className="deep-space-bg">
        {floatingParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="floating-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            variants={floatingVariants}
            animate="float"
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="space-depth-overlay" />

      {/* Gallery Grid */}
      <motion.div
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="portfolio-item"
            variants={itemVariants}
            whileHover="hover"
            custom={index}
          >
            <div className="item-inner">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="item-image"
                  loading="lazy"
                />
              ) : (
                <div className="item-placeholder">
                  <span className="placeholder-icon">◆</span>
                </div>
              )}
              
              <motion.div 
                className="item-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="item-title">{item.title}</h3>
                {item.description && (
                  <p className="item-description">{item.description}</p>
                )}
                {item.link && (
                  <a href={item.link} className="item-link">
                    View Project →
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const defaultItems: WorkItem[] = [
  {
    id: 'pothys-1',
    title: 'Pothys Branding',
    category: 'retail',
    description: 'Luxury retail branding and visual identity',
  },
  {
    id: 'pristine-1',
    title: 'Pristine Solutions',
    category: 'corporate',
    description: 'Enterprise digital transformation',
  },
  {
    id: 'posters-1',
    title: 'Creative Collection',
    category: 'creative',
    description: 'Artistic posters and graphics',
  },
];

export default PortfolioGallery;
