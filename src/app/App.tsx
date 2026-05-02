import { useState } from 'react';
import { ThemeProvider, useTheme, themes } from './contexts/ThemeContext';
import ThemedBackground from './components/ThemedBackground';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';
import NGODashboard from './components/NGODashboard';
import SmartBinInterface from './components/SmartBinInterface';

type View = 'landing' | 'student' | 'staff' | 'admin' | 'ngo' | 'smartbin';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="size-full overflow-hidden" style={{ backgroundColor: currentTheme.background }}>
      <ThemedBackground />
      <div className="relative z-10 size-full">
        {currentView === 'landing' && <LandingPage onNavigate={setCurrentView} />}
        {currentView === 'student' && <StudentDashboard onBack={() => setCurrentView('landing')} />}
        {currentView === 'staff' && <StaffDashboard onBack={() => setCurrentView('landing')} />}
        {currentView === 'admin' && <AdminDashboard onBack={() => setCurrentView('landing')} />}
        {currentView === 'ngo' && <NGODashboard onBack={() => setCurrentView('landing')} />}
        {currentView === 'smartbin' && <SmartBinInterface onBack={() => setCurrentView('landing')} />}
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