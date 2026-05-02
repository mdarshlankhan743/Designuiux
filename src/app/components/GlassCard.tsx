import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useTheme, themes } from '../contexts/ThemeContext';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GlassCard({ children, className = '', animate = true }: GlassCardProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const baseClasses = 'backdrop-blur-xl rounded-2xl shadow-2xl';

  const cardStyle = {
    backgroundColor: currentTheme.cardBg,
    borderColor: currentTheme.border,
  };

  if (animate) {
    return (
      <motion.div
        className={`${baseClasses} border ${className}`}
        style={cardStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          boxShadow: `0 0 30px ${currentTheme.primary}33`,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseClasses} border ${className}`} style={cardStyle}>{children}</div>;
}
