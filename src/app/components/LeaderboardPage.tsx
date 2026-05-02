import { motion } from 'motion/react';
import { Trophy, TrendingUp, Award, Zap } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import { useTheme, themes } from '../contexts/ThemeContext';

export default function LeaderboardPage() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const hostels = [
    { rank: 1, name: 'North Wing', reduction: 42, streak: 12, points: 2847, change: 'up' },
    { rank: 2, name: 'South Block', reduction: 38, streak: 8, points: 2654, change: 'up' },
    { rank: 3, name: 'East Campus', reduction: 35, streak: 5, points: 2421, change: 'down' },
    { rank: 4, name: 'West Hall', reduction: 32, streak: 7, points: 2198, change: 'same' },
    { rank: 5, name: 'Central Tower', reduction: 28, streak: 4, points: 1987, change: 'up' },
  ];

  return (
    <div className="size-full overflow-auto pb-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="w-16 h-16 mx-auto" style={{ color: currentTheme.warning }} />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: currentTheme.text }}>
            Hostel Leaderboard
          </h1>
          <p style={{ color: currentTheme.textMuted }}>
            This week's sustainability champions
          </p>
        </div>

        {/* Weekly Champion */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <GlassCard className="p-6 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.warning}, ${currentTheme.primary})`,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.text }}>
                {hostels[0].name}
              </h2>
              <p className="text-sm mb-4" style={{ color: currentTheme.textMuted }}>
                Weekly Champion
              </p>
              <div className="flex justify-center gap-8">
                <div>
                  <AnimatedCounter
                    end={hostels[0].reduction}
                    duration={2}
                    className="text-3xl font-bold"
                    suffix="%"
                    style={{ color: currentTheme.success }}
                  />
                  <p className="text-xs" style={{ color: currentTheme.textMuted }}>
                    Waste Reduced
                  </p>
                </div>
                <div>
                  <AnimatedCounter
                    end={hostels[0].points}
                    duration={2}
                    className="text-3xl font-bold"
                    style={{ color: currentTheme.primary }}
                  />
                  <p className="text-xs" style={{ color: currentTheme.textMuted }}>
                    Points
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Rankings */}
        <div className="space-y-3 mb-8">
          {hostels.map((hostel, index) => (
            <motion.div
              key={hostel.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HostelRankCard hostel={hostel} />
            </motion.div>
          ))}
        </div>

        {/* Rewards Progress */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
            Unlock Rewards
          </h3>
          <div className="space-y-4">
            <RewardProgress
              title="Free Snacks for All"
              current={2847}
              target={3000}
              unlocked={false}
            />
            <RewardProgress
              title="Extended Meal Hours"
              current={2847}
              target={2500}
              unlocked={true}
            />
            <RewardProgress
              title="Premium Menu Week"
              current={2847}
              target={5000}
              unlocked={false}
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function HostelRankCard({ hostel }: { hostel: any }) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const getTrendIcon = () => {
    if (hostel.change === 'up') return '↑';
    if (hostel.change === 'down') return '↓';
    return '−';
  };

  const getTrendColor = () => {
    if (hostel.change === 'up') return currentTheme.success;
    if (hostel.change === 'down') return currentTheme.danger;
    return currentTheme.textMuted;
  };

  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-4">
        {/* Rank Badge */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background:
              hostel.rank <= 3
                ? `linear-gradient(135deg, ${currentTheme.warning}, ${currentTheme.primary})`
                : currentTheme.cardBg,
          }}
        >
          <span
            className="text-xl font-bold"
            style={{
              color: hostel.rank <= 3 ? '#fff' : currentTheme.text,
            }}
          >
            {hostel.rank}
          </span>
        </div>

        {/* Hostel Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold" style={{ color: currentTheme.text }}>
              {hostel.name}
            </h4>
            {hostel.streak >= 5 && (
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ backgroundColor: `${currentTheme.warning}20` }}>
                <Zap className="w-3 h-3" style={{ color: currentTheme.warning }} />
                <span className="text-xs font-semibold" style={{ color: currentTheme.warning }}>
                  {hostel.streak} day streak
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span style={{ color: currentTheme.textMuted }}>
              <span style={{ color: currentTheme.success }}>{hostel.reduction}%</span> reduced
            </span>
            <span style={{ color: currentTheme.textMuted }}>
              <span style={{ color: currentTheme.primary }}>{hostel.points}</span> pts
            </span>
          </div>
        </div>

        {/* Trend */}
        <div
          className="text-2xl font-bold"
          style={{ color: getTrendColor() }}
        >
          {getTrendIcon()}
        </div>
      </div>
    </GlassCard>
  );
}

function RewardProgress({
  title,
  current,
  target,
  unlocked,
}: {
  title: string;
  current: number;
  target: number;
  unlocked: boolean;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {unlocked ? (
            <Award className="w-5 h-5" style={{ color: currentTheme.success }} />
          ) : (
            <TrendingUp className="w-5 h-5" style={{ color: currentTheme.primary }} />
          )}
          <span className="text-sm font-medium" style={{ color: currentTheme.text }}>
            {title}
          </span>
        </div>
        <span
          className="text-sm font-semibold"
          style={{ color: unlocked ? currentTheme.success : currentTheme.textMuted }}
        >
          {unlocked ? 'Unlocked!' : `${current}/${target}`}
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: `${currentTheme.primary}20` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: unlocked ? currentTheme.success : currentTheme.primary,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
