import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';
import { motion } from 'framer-motion';

const CTAButton = ({ 
  children, 
  href, 
  variant = 'primary', 
  icon, 
  className = '', 
  trackingLocation = 'Unknown',
  onClick 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500",
    secondary: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 focus:ring-zinc-200",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]",
    ghost: "bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
  };

  const handleClick = (e) => {
    if (variant === 'whatsapp' || href?.includes('wa.me')) {
      trackWhatsAppClick(trackingLocation);
    }
    if (onClick) onClick(e);
  };

  const content = (
    <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </>
  );

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a 
        href={href}
        className={buttonClass}
        onClick={handleClick}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={buttonClass}
      onClick={handleClick}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;
