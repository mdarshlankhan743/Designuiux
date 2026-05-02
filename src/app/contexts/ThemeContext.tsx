import { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeType = 'dark' | 'eco' | 'light';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export const themes = {
  dark: {
    name: 'Midnight Intelligence',
    background: '#071120',
    backgroundGradient: 'from-[#071120] via-[#0B1E36] to-[#112B4A]',
    primary: '#00E5FF',
    secondary: '#3B82F6',
    accent: '#7C3AED',
    success: '#10B981',
    warning: '#F97316',
    danger: '#EF4444',
    text: '#E0F2FE',
    textMuted: '#94A3B8',
    cardBg: 'rgba(11, 30, 54, 0.5)',
    border: 'rgba(0, 229, 255, 0.1)',
  },
  eco: {
    name: 'Eco Pulse',
    background: '#0A1F0F',
    backgroundGradient: 'from-[#0A1F0F] via-[#14532D] to-[#166534]',
    primary: '#10B981',
    secondary: '#84CC16',
    accent: '#22D3EE',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    text: '#ECFDF5',
    textMuted: '#86EFAC',
    cardBg: 'rgba(20, 83, 45, 0.4)',
    border: 'rgba(16, 185, 129, 0.2)',
  },
  light: {
    name: 'Clean Horizon',
    background: '#F8FAFC',
    backgroundGradient: 'from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1]',
    primary: '#38BDF8',
    secondary: '#10B981',
    accent: '#1E293B',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    text: '#1E293B',
    textMuted: '#64748B',
    cardBg: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(30, 41, 59, 0.1)',
  },
};
