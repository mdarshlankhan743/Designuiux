import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Leaf, Brain, BarChart3, Users, Trash2, Award } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import ThemeSwitcher from './ThemeSwitcher';
import HoloBinX from './HoloBinX';
import { useTheme, themes } from '../contexts/ThemeContext';

interface LandingPageProps {
  onNavigate: (view: 'student' | 'staff' | 'admin' | 'ngo' | 'smartbin') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="size-full overflow-auto relative">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Theme Switcher - Top Right */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeSwitcher />
        </div>
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20 pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo / Brand */}
          <motion.div
            className="inline-block mb-6"
            animate={{
              filter: [`drop-shadow(0 0 20px ${currentTheme.primary}80)`, `drop-shadow(0 0 40px ${currentTheme.primary}cc)`, `drop-shadow(0 0 20px ${currentTheme.primary}80)`],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl p-0.5" style={{
                background: `linear-gradient(to bottom right, ${currentTheme.primary}, ${currentTheme.accent})`
              }}>
                <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ backgroundColor: currentTheme.background }}>
                  <Sparkles className="w-8 h-8" style={{ color: currentTheme.primary }} />
                </div>
              </div>
            </div>
          </motion.div>

          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent" style={{
            backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary}, ${currentTheme.success})`
          }}>
            MESSINTEL 360
          </h1>

          <motion.p
            className="text-2xl mb-8"
            style={{ color: currentTheme.primary }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "Measure. Predict. Prevent."
          </motion.p>

          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: currentTheme.textMuted }}>
            Turning Waste Into Wisdom - Elite IoT + AI powered sustainability platform for food waste management
          </p>

          {/* HoloBin X Hero */}
          <div className="h-[500px] mb-12">
            <HoloBinX fillPercentage={65} weight={42.5} temperature={24} category="Mixed" status="warning" />
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="p-6">
              <AnimatedCounter end={12500} duration={2} className="text-4xl font-bold mb-2" suffix="kg" style={{ color: currentTheme.primary }} />
              <p style={{ color: currentTheme.textMuted }}>Waste Prevented</p>
            </GlassCard>
            <GlassCard className="p-6">
              <AnimatedCounter end={8200} duration={2} className="text-4xl font-bold mb-2" suffix=" tons" style={{ color: currentTheme.success }} />
              <p style={{ color: currentTheme.textMuted }}>CO₂ Saved</p>
            </GlassCard>
            <GlassCard className="p-6">
              <AnimatedCounter end={95} duration={2} className="text-4xl font-bold mb-2" suffix="%" style={{ color: currentTheme.warning }} />
              <p style={{ color: currentTheme.textMuted }}>Efficiency Rate</p>
            </GlassCard>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('student')}
              className="px-8 py-4 rounded-xl font-semibold relative overflow-hidden group"
              style={{
                background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary})`,
                color: theme === 'light' ? currentTheme.background : '#fff',
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${currentTheme.primary}80` }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>

            <motion.button
              onClick={() => onNavigate('admin')}
              className="px-8 py-4 rounded-xl font-semibold backdrop-blur-xl border-2"
              style={{
                backgroundColor: currentTheme.cardBg,
                borderColor: currentTheme.primary,
                color: currentTheme.primary,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${currentTheme.primary}50` }}
              whileTap={{ scale: 0.95 }}
            >
              Admin Dashboard
            </motion.button>
          </div>
        </motion.div>

        {/* Role Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <RoleCard
            icon={<Users className="w-8 h-8" />}
            title="Student Portal"
            description="Track your waste, earn rewards, compete on leaderboards"
            gradient="from-[#00E5FF] to-[#3B82F6]"
            onClick={() => onNavigate('student')}
          />
          <RoleCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Staff Dashboard"
            description="Optimize meal prep, reduce overproduction, live analytics"
            gradient="from-[#10B981] to-[#22D3EE]"
            onClick={() => onNavigate('staff')}
          />
          <RoleCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Admin Control"
            description="Multi-campus oversight, AI forecasting, ESG reports"
            gradient="from-[#7C3AED] to-[#00E5FF]"
            onClick={() => onNavigate('admin')}
          />
          <RoleCard
            icon={<Leaf className="w-8 h-8" />}
            title="NGO Partner"
            description="Real-time donation alerts, route optimization, impact metrics"
            gradient="from-[#10B981] to-[#FACC15]"
            onClick={() => onNavigate('ngo')}
          />
          <RoleCard
            icon={<Trash2 className="w-8 h-8" />}
            title="Smart Bin System"
            description="IoT sensors, real-time monitoring, AI categorization"
            gradient="from-[#3B82F6] to-[#7C3AED]"
            onClick={() => onNavigate('smartbin')}
          />
          <RoleCard
            icon={<Brain className="w-8 h-8" />}
            title="AI Assistant"
            description="Predictive insights, waste prevention, smart recommendations"
            gradient="from-[#00E5FF] to-[#10B981]"
            onClick={() => {}}
          />
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent" style={{
            backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.success})`
          }}>
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="AI Powered"
              description="Machine learning predictions and insights"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Real-time Analytics"
              description="Live data streaming and visualization"
            />
            <FeatureCard
              icon={<Award className="w-6 h-6" />}
              title="Gamification"
              description="Rewards, leaderboards, achievements"
            />
            <FeatureCard
              icon={<Leaf className="w-6 h-6" />}
              title="Sustainability"
              description="Track carbon savings and impact"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RoleCard({ icon, title, description, gradient, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="p-6 h-full relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ backgroundColor: currentTheme.background, color: currentTheme.text }}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.text }}>{title}</h3>
        <p style={{ color: currentTheme.textMuted }}>{description}</p>
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </GlassCard>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <GlassCard className="p-6 text-center">
      <div className="inline-block p-3 rounded-xl mb-4" style={{
        background: `linear-gradient(to bottom right, ${currentTheme.primary}, ${currentTheme.accent})`
      }}>
        <div style={{ color: theme === 'light' ? currentTheme.background : '#fff' }}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: currentTheme.text }}>{title}</h3>
      <p className="text-sm" style={{ color: currentTheme.textMuted }}>{description}</p>
    </GlassCard>
  );
}
