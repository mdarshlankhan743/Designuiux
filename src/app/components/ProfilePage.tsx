import { motion } from 'motion/react';
import { User, Settings, Moon, Sun, Leaf, Info, LogOut, ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme, themes } from '../contexts/ThemeContext';

export default function ProfilePage() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="size-full overflow-auto pb-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              >
                👤
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1" style={{ color: currentTheme.text }}>
                  Alex Kumar
                </h2>
                <p style={{ color: currentTheme.textMuted }}>North Wing, Room 204</p>
                <div
                  className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${currentTheme.success}20`,
                    color: currentTheme.success,
                  }}
                >
                  🌱 Eco Warrior
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Sustainability Stats */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
              Your Impact
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <StatItem
                label="CO₂ Saved"
                value="34.2"
                unit="kg"
                icon="🌍"
              />
              <StatItem
                label="Streak"
                value="12"
                unit="days"
                icon="🔥"
              />
              <StatItem
                label="Rank"
                value="7"
                unit="th"
                icon="🏆"
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Theme Selector */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
              Theme Preference
            </h3>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
            <p className="text-center text-xs mt-4" style={{ color: currentTheme.textMuted }}>
              Choose your preferred visual style
            </p>
          </GlassCard>
        </motion.div>

        {/* Settings Menu */}
        <div className="space-y-3 mb-8">
          <MenuButton
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
            onClick={() => {}}
          />
          <MenuButton
            icon={<Info className="w-5 h-5" />}
            label="About MessIntel 360"
            onClick={() => {}}
          />
          <MenuButton
            icon={<LogOut className="w-5 h-5" />}
            label="Logout"
            onClick={() => {}}
            danger
          />
        </div>

        {/* App Version */}
        <div className="text-center">
          <p className="text-sm" style={{ color: currentTheme.textMuted }}>
            MessIntel 360 v1.0.0
          </p>
          <p className="text-xs mt-1" style={{ color: currentTheme.textMuted }}>
            Measure. Predict. Prevent.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  unit,
  icon,
}: {
  label: string;
  value: string;
  unit: string;
  icon: string;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <AnimatedCounter
        end={parseFloat(value)}
        duration={2}
        className="text-2xl font-bold"
        suffix={unit}
        decimals={value.includes('.') ? 1 : 0}
        style={{ color: currentTheme.text }}
      />
      <p className="text-xs mt-1" style={{ color: currentTheme.textMuted }}>
        {label}
      </p>
    </div>
  );
}

function MenuButton({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <motion.button
      onClick={onClick}
      className="w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <GlassCard className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: danger
                  ? `${currentTheme.danger}20`
                  : `${currentTheme.primary}20`,
              }}
            >
              <div style={{ color: danger ? currentTheme.danger : currentTheme.primary }}>
                {icon}
              </div>
            </div>
            <span
              className="font-medium"
              style={{ color: danger ? currentTheme.danger : currentTheme.text }}
            >
              {label}
            </span>
          </div>
          <ChevronRight
            className="w-5 h-5"
            style={{ color: currentTheme.textMuted }}
          />
        </div>
      </GlassCard>
    </motion.button>
  );
}
