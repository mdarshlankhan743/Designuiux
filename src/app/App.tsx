import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider, useTheme, themes } from './contexts/ThemeContext';
import ThemedBackground from './components/ThemedBackground';
import SplashScreen from './components/SplashScreen';
import BottomNav, { NavPage } from './components/BottomNav';
import Home from './components/Home';
import ScanPage from './components/ScanPage';
import FeedbackPage from './components/FeedbackPage';
import LeaderboardPage from './components/LeaderboardPage';
import ProfilePage from './components/ProfilePage';
import StudentDashboard from './components/StudentDashboard';
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';
import NGODashboard from './components/NGODashboard';
import SmartBinInterface from './components/SmartBinInterface';

type View = NavPage | 'splash' | 'student' | 'staff' | 'admin' | 'ngo' | 'smartbin' | 'ai-insights' | 'analytics' | 'menu' | 'alerts' | 'rewards';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('splash');
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const showBottomNav = ['home', 'scan', 'feedback', 'leaderboard', 'profile'].includes(currentView);

  const handleNavigation = (page: string) => {
    setCurrentView(page as View);
  };

  return (
    <div className="size-full overflow-hidden" style={{ backgroundColor: currentTheme.background }}>
      <ThemedBackground />
      <div className="relative z-10 size-full">
        <AnimatePresence mode="wait">
          {currentView === 'splash' && (
            <SplashScreen onComplete={() => setCurrentView('home')} />
          )}
          {currentView === 'home' && <Home onNavigate={handleNavigation} />}
          {currentView === 'scan' && <ScanPage />}
          {currentView === 'feedback' && <FeedbackPage />}
          {currentView === 'leaderboard' && <LeaderboardPage />}
          {currentView === 'profile' && <ProfilePage />}
          {currentView === 'student' && <StudentDashboard onBack={() => setCurrentView('home')} />}
          {currentView === 'staff' && <StaffDashboard onBack={() => setCurrentView('home')} />}
          {currentView === 'admin' && <AdminDashboard onBack={() => setCurrentView('home')} />}
          {currentView === 'ngo' && <NGODashboard onBack={() => setCurrentView('home')} />}
          {currentView === 'smartbin' && <SmartBinInterface onBack={() => setCurrentView('home')} />}
        </AnimatePresence>

        {showBottomNav && (
          <BottomNav
            currentPage={currentView as NavPage}
            onNavigate={(page) => setCurrentView(page)}
          />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}