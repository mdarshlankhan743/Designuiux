import { motion } from 'motion/react';
import { useTheme, themes } from '../contexts/ThemeContext';

export default function ThemedBackground() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${currentTheme.backgroundGradient}`}
      />

      {/* Dark Theme - Neural Grid & Particles */}
      {theme === 'dark' && (
        <>
          {/* Animated Gradient Orb */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1), transparent 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Cyber Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating Data Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </>
      )}

      {/* Eco Theme - Organic Flow */}
      {theme === 'eco' && (
        <>
          {/* Pulsing Eco Orb */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 60%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Leaf Vein Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id="leaf-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path
                    d="M100,0 Q150,50 100,100 Q50,50 100,0 M100,100 Q125,125 100,150 M100,100 Q75,125 100,150"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
            </svg>
          </div>

          {/* Floating Leaf Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              🍃
            </motion.div>
          ))}

          {/* Organic Wave */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-64"
            style={{
              background: 'linear-gradient(to top, rgba(16, 185, 129, 0.1), transparent)',
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Light Theme - Clean Aurora */}
      {theme === 'light' && (
        <>
          {/* Soft Gradient Mesh */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.1), transparent 50%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.1), transparent 50%)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Abstract Cloud Intelligence */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${150 + Math.random() * 150}px`,
                height: `${100 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${i % 2 === 0 ? '56, 189, 248' : '16, 185, 129'}, 0.05)`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Minimal Geometric Flow */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, rgba(30, 41, 59, 0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          </div>
        </>
      )}
    </div>
  );
}
