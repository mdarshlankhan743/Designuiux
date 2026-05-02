import { motion, AnimatePresence } from 'motion/react';
import { Moon, Leaf, Sun } from 'lucide-react';
import { useTheme, ThemeType } from '../contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: ThemeType; icon: React.ReactNode; label: string }[] = [
    { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Midnight' },
    { value: 'eco', icon: <Leaf className="w-4 h-4" />, label: 'Eco' },
    { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
  ];

  return (
    <div className="relative inline-flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
      {themeOptions.map((option) => (
        <motion.button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors z-10 ${
            theme === option.value
              ? 'text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {theme === option.value && (
              <motion.div
                layoutId="activeTheme"
                className={`absolute inset-0 rounded-lg ${
                  option.value === 'dark'
                    ? 'bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]'
                    : option.value === 'eco'
                    ? 'bg-gradient-to-r from-[#10B981] to-[#84CC16]'
                    : 'bg-gradient-to-r from-[#38BDF8] to-[#10B981]'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{option.icon}</span>
          <span className="relative z-10">{option.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
