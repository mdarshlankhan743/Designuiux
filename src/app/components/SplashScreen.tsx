import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <motion.div
      className="size-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: currentTheme.background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
    >
      {/* Animated Background Pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 50% 50%, ${currentTheme.primary}20, transparent)`,
            `radial-gradient(circle at 50% 50%, ${currentTheme.primary}40, transparent)`,
            `radial-gradient(circle at 50% 50%, ${currentTheme.primary}20, transparent)`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="w-24 h-24 rounded-3xl p-1"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
          }}
          animate={{
            boxShadow: [
              `0 0 20px ${currentTheme.primary}60`,
              `0 0 40px ${currentTheme.primary}99`,
              `0 0 20px ${currentTheme.primary}60`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-full h-full rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: currentTheme.background }}
          >
            <Sparkles className="w-12 h-12" style={{ color: currentTheme.primary }} />
          </div>
        </motion.div>
      </motion.div>

      {/* Brand Name */}
      <motion.h1
        className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary})`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        MESSINTEL 360
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-xl mb-12"
        style={{ color: currentTheme.textMuted }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        "Measure. Predict. Prevent."
      </motion.p>

      {/* Loading Bar */}
      <div
        className="w-64 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: `${currentTheme.primary}20` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: currentTheme.primary }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: currentTheme.primary,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
}
