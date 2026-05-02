import { motion } from 'motion/react';
import { Brain, BarChart3, Utensils, Bell, Gift, MessageSquare, ChevronRight } from 'lucide-react';
import HoloBinX from './HoloBinX';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import { useTheme, themes } from '../contexts/ThemeContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="size-full overflow-auto pb-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            className="text-3xl font-bold mb-2"
            style={{ color: currentTheme.text }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome Back! 👋
          </motion.h1>
          <p style={{ color: currentTheme.textMuted }}>
            Your sustainability command center
          </p>
        </div>

        {/* HoloBin X Hero */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8">
            <div className="h-[400px]">
              <HoloBinX fillPercentage={65} weight={42.5} temperature={24} category="Mixed" status="warning" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <QuickStat
            label="Daily Waste"
            value="42.5"
            unit="kg"
            change="-8%"
            positive={true}
          />
          <QuickStat
            label="Carbon Saved"
            value="12.8"
            unit="kg CO₂"
            change="+15%"
            positive={true}
          />
          <QuickStat
            label="Eco Score"
            value="87"
            unit="%"
            change="+5%"
            positive={true}
          />
          <QuickStat
            label="Rewards"
            value="1,240"
            unit="pts"
            change="+120"
            positive={true}
          />
        </div>

        {/* AI Recommendation Card */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${currentTheme.primary}20` }}
              >
                <Brain className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1" style={{ color: currentTheme.text }}>
                  AI Insight for Today
                </h3>
                <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                  Tomorrow's lunch: Rice waste predicted to increase by 18%. Consider dal-roti combo instead!
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <ActionCard
            icon={<Brain className="w-6 h-6" />}
            title="AI Predictions"
            description="Smart forecasting"
            gradient="from-[#7C3AED] to-[#00E5FF]"
            onClick={() => onNavigate('ai-insights')}
          />
          <ActionCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Analytics"
            description="Waste insights"
            gradient="from-[#00E5FF] to-[#10B981]"
            onClick={() => onNavigate('analytics')}
          />
          <ActionCard
            icon={<Utensils className="w-6 h-6" />}
            title="Menu"
            description="Optimization"
            gradient="from-[#10B981] to-[#84CC16]"
            onClick={() => onNavigate('menu')}
          />
          <ActionCard
            icon={<Bell className="w-6 h-6" />}
            title="Alerts"
            description="3 new alerts"
            gradient="from-[#F97316] to-[#EF4444]"
            onClick={() => onNavigate('alerts')}
          />
          <ActionCard
            icon={<Gift className="w-6 h-6" />}
            title="Rewards"
            description="Unlock perks"
            gradient="from-[#FACC15] to-[#F97316]"
            onClick={() => onNavigate('rewards')}
          />
          <ActionCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Feedback"
            description="Quick submit"
            gradient="from-[#3B82F6] to-[#7C3AED]"
            onClick={() => onNavigate('feedback')}
          />
        </div>

        {/* Sustainability Progress */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4" style={{ color: currentTheme.text }}>
            This Week's Impact
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label="Zero Waste Goal"
              current={67}
              target={100}
              color={currentTheme.success}
            />
            <ProgressBar
              label="Hostel Rank"
              current={7}
              target={10}
              color={currentTheme.primary}
              suffix="th position"
            />
            <ProgressBar
              label="Reward Progress"
              current={840}
              target={1000}
              color={currentTheme.warning}
              suffix="pts"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function QuickStat({
  label,
  value,
  unit,
  change,
  positive,
}: {
  label: string;
  value: string;
  unit: string;
  change: string;
  positive: boolean;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <GlassCard className="p-4">
      <p className="text-xs mb-1" style={{ color: currentTheme.textMuted }}>
        {label}
      </p>
      <div className="flex items-baseline gap-1 mb-1">
        <AnimatedCounter
          end={parseFloat(value)}
          duration={2}
          className="text-2xl font-bold"
          decimals={value.includes('.') ? 1 : 0}
          style={{ color: currentTheme.text }}
        />
        <span className="text-sm" style={{ color: currentTheme.textMuted }}>
          {unit}
        </span>
      </div>
      <p
        className="text-xs font-semibold"
        style={{ color: positive ? currentTheme.success : currentTheme.danger }}
      >
        {change}
      </p>
    </GlassCard>
  );
}

function ActionCard({
  icon,
  title,
  description,
  gradient,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <GlassCard className="p-4 cursor-pointer" onClick={onClick}>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-2.5 mb-3`}>
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="font-semibold text-sm mb-1" style={{ color: currentTheme.text }}>
          {title}
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-xs" style={{ color: currentTheme.textMuted }}>
            {description}
          </p>
          <ChevronRight className="w-4 h-4" style={{ color: currentTheme.textMuted }} />
        </div>
      </GlassCard>
    </motion.div>
  );
}

function ProgressBar({
  label,
  current,
  target,
  color,
  suffix = '%',
}: {
  label: string;
  current: number;
  target: number;
  color: string;
  suffix?: string;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const percentage = (current / target) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm" style={{ color: currentTheme.text }}>
          {label}
        </span>
        <span className="text-sm font-semibold" style={{ color }}>
          {current}{suffix}
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${color}20` }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
