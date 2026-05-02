import { motion } from 'motion/react';
import { Home, Scan, MessageSquare, Trophy, User } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

export type NavPage = 'home' | 'scan' | 'feedback' | 'leaderboard' | 'profile';

interface BottomNavProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const navItems: { page: NavPage; icon: React.ReactNode; label: string }[] = [
    { page: 'home', icon: <Home className="w-6 h-6" />, label: 'Home' },
    { page: 'scan', icon: <Scan className="w-6 h-6" />, label: 'Scan' },
    { page: 'feedback', icon: <MessageSquare className="w-6 h-6" />, label: 'Feedback' },
    { page: 'leaderboard', icon: <Trophy className="w-6 h-6" />, label: 'Leaderboard' },
    { page: 'profile', icon: <User className="w-6 h-6" />, label: 'Profile' },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-2xl"
      style={{
        backgroundColor: currentTheme.cardBg,
        borderColor: currentTheme.border,
      }}
    >
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <motion.button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className="relative flex flex-col items-center gap-1 px-4 py-2"
                whileTap={{ scale: 0.9 }}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  style={{
                    color: isActive ? currentTheme.primary : currentTheme.textMuted,
                  }}
                  animate={
                    isActive
                      ? {
                          filter: `drop-shadow(0 0 8px ${currentTheme.primary})`,
                          scale: 1.1,
                        }
                      : { filter: 'none', scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Label */}
                <span
                  className="text-xs font-medium"
                  style={{
                    color: isActive ? currentTheme.primary : currentTheme.textMuted,
                  }}
                >
                  {item.label}
                </span>

                {/* Ripple Effect on Tap */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
