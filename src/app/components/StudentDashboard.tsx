import { motion } from 'motion/react';
import { ArrowLeft, Award, TrendingUp, Leaf, Trophy, Target, Flame } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import CircularProgress from './CircularProgress';

interface StudentDashboardProps {
  onBack: () => void;
}

export default function StudentDashboard({ onBack }: StudentDashboardProps) {
  return (
    <div className="size-full overflow-auto bg-[#071120]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            onClick={onBack}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#00E5FF] backdrop-blur-xl hover:bg-[#00E5FF]/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <div>
            <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
            <p className="text-gray-400">Welcome back, Alex!</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#3B82F6]">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Flame className="w-6 h-6 text-[#F97316]" />
              </motion.div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Eco Points</p>
            <AnimatedCounter end={2847} duration={2} className="text-3xl font-bold text-[#00E5FF]" />
            <p className="text-xs text-[#10B981] mt-2">+124 this week</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981] to-[#22D3EE]">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Current Rank</p>
            <div className="flex items-baseline gap-2">
              <AnimatedCounter end={7} duration={2} className="text-3xl font-bold text-[#10B981]" prefix="#" />
              <span className="text-sm text-gray-400">/ 250</span>
            </div>
            <p className="text-xs text-[#10B981] mt-2">↑ 3 positions</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FACC15] to-[#F97316]">
                <Flame className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Green Streak</p>
            <AnimatedCounter end={12} duration={2} className="text-3xl font-bold text-[#FACC15]" suffix=" days" />
            <p className="text-xs text-gray-400 mt-2">Best: 18 days</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF]">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">CO₂ Saved</p>
            <AnimatedCounter end={34} duration={2} className="text-3xl font-bold text-[#10B981]" suffix=" kg" decimals={1} />
            <p className="text-xs text-gray-400 mt-2">This month</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Waste Score */}
          <GlassCard className="p-6 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Your Waste Score</h3>
            <div className="flex justify-center mb-6">
              <CircularProgress value={87} size={180} strokeWidth={12} color="#10B981" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">This Week</span>
                <span className="text-[#10B981] font-semibold">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Last Week</span>
                <span className="text-gray-500">82%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Campus Avg</span>
                <span className="text-gray-500">74%</span>
              </div>
            </div>
          </GlassCard>

          {/* Meal Booking */}
          <GlassCard className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Smart Meal Booking</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MealCard
                meal="Breakfast"
                time="08:00 - 10:00"
                status="booked"
                portion="Regular"
              />
              <MealCard
                meal="Lunch"
                time="12:30 - 14:30"
                status="available"
                portion="Select"
              />
              <MealCard
                meal="Dinner"
                time="19:00 - 21:00"
                status="available"
                portion="Select"
              />
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 to-[#10B981]/10 border border-[#00E5FF]/20">
              <p className="text-sm text-gray-300">
                💡 <span className="text-[#00E5FF]">AI Tip:</span> Tomorrow's lunch: Rice waste predicted high. Consider dal-roti combo!
              </p>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Leaderboard */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Hostel Leaderboard</h3>
              <span className="text-sm text-[#00E5FF]">This Week</span>
            </div>
            <div className="space-y-4">
              <LeaderboardRow rank={1} name="Sarah Chen" points={3120} trend="up" highlight={false} />
              <LeaderboardRow rank={2} name="Raj Patel" points={2956} trend="up" highlight={false} />
              <LeaderboardRow rank={3} name="Emma Wilson" points={2891} trend="down" highlight={false} />
              <LeaderboardRow rank={7} name="You (Alex)" points={2847} trend="up" highlight={true} />
              <LeaderboardRow rank={8} name="Mike Johnson" points={2803} trend="same" highlight={false} />
            </div>
          </GlassCard>

          {/* Achievements */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              <AchievementBadge
                icon={<Trophy className="w-6 h-6" />}
                title="Zero Waste Week"
                date="2 days ago"
                unlocked={true}
              />
              <AchievementBadge
                icon={<Flame className="w-6 h-6" />}
                title="10 Day Streak"
                date="1 week ago"
                unlocked={true}
              />
              <AchievementBadge
                icon={<Leaf className="w-6 h-6" />}
                title="Eco Warrior"
                date="Locked"
                unlocked={false}
              />
              <AchievementBadge
                icon={<Award className="w-6 h-6" />}
                title="Top 10"
                date="3 days ago"
                unlocked={true}
              />
            </div>
            <motion.button
              className="w-full mt-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] rounded-xl font-semibold text-[#071120]"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              View All Achievements
            </motion.button>
          </GlassCard>
        </div>

        {/* Rewards Section */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Available Rewards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RewardCard
              title="Free Coffee"
              cost={500}
              icon="☕"
              available={true}
            />
            <RewardCard
              title="Cafeteria Voucher"
              cost={1000}
              icon="🎟️"
              available={true}
            />
            <RewardCard
              title="Premium Meal"
              cost={2000}
              icon="🍽️"
              available={true}
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function MealCard({ meal, time, status, portion }: { meal: string; time: string; status: string; portion: string }) {
  const isBooked = status === 'booked';

  return (
    <motion.div
      className={`p-4 rounded-xl border ${
        isBooked ? 'bg-[#10B981]/10 border-[#10B981]/30' : 'bg-white/5 border-white/10'
      } backdrop-blur-xl`}
      whileHover={{ scale: 1.02 }}
    >
      <h4 className="font-semibold text-white mb-1">{meal}</h4>
      <p className="text-xs text-gray-400 mb-3">{time}</p>
      {isBooked ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-sm text-[#10B981]">Booked - {portion}</span>
        </div>
      ) : (
        <button className="text-sm text-[#00E5FF] hover:underline">Book Now</button>
      )}
    </motion.div>
  );
}

function LeaderboardRow({ rank, name, points, trend, highlight }: {
  rank: number;
  name: string;
  points: number;
  trend: 'up' | 'down' | 'same';
  highlight: boolean;
}) {
  const getTrendIcon = () => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '−';
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-[#10B981]';
    if (trend === 'down') return 'text-[#EF4444]';
    return 'text-gray-500';
  };

  return (
    <motion.div
      className={`flex items-center justify-between p-3 rounded-xl ${
        highlight ? 'bg-[#00E5FF]/10 border border-[#00E5FF]/30' : 'bg-white/5'
      }`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          rank <= 3 ? 'bg-gradient-to-br from-[#FACC15] to-[#F97316] text-white' : 'bg-white/10 text-gray-400'
        } font-semibold text-sm`}>
          {rank}
        </div>
        <span className={`${highlight ? 'text-[#00E5FF] font-semibold' : 'text-white'}`}>{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[#00E5FF] font-semibold">{points}</span>
        <span className={`${getTrendColor()}`}>{getTrendIcon()}</span>
      </div>
    </motion.div>
  );
}

function AchievementBadge({ icon, title, date, unlocked }: {
  icon: React.ReactNode;
  title: string;
  date: string;
  unlocked: boolean;
}) {
  return (
    <motion.div
      className={`p-4 rounded-xl border ${
        unlocked ? 'bg-gradient-to-br from-[#FACC15]/10 to-[#F97316]/10 border-[#FACC15]/30' : 'bg-white/5 border-white/10'
      } text-center`}
      whileHover={{ scale: unlocked ? 1.05 : 1, y: unlocked ? -5 : 0 }}
      animate={unlocked ? { rotateY: [0, 360] } : {}}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <div className={`inline-block p-3 rounded-xl mb-2 ${
        unlocked ? 'bg-gradient-to-br from-[#FACC15] to-[#F97316]' : 'bg-white/10'
      }`}>
        <div className={unlocked ? 'text-white' : 'text-gray-600'}>
          {icon}
        </div>
      </div>
      <h4 className={`text-sm font-semibold mb-1 ${unlocked ? 'text-white' : 'text-gray-500'}`}>{title}</h4>
      <p className="text-xs text-gray-400">{date}</p>
    </motion.div>
  );
}

function RewardCard({ title, cost, icon, available }: {
  title: string;
  cost: number;
  icon: string;
  available: boolean;
}) {
  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-[#FACC15] font-bold mb-3">{cost} points</p>
      <motion.button
        className={`w-full py-2 rounded-lg ${
          available ? 'bg-[#00E5FF] text-[#071120]' : 'bg-white/10 text-gray-500'
        } font-semibold text-sm`}
        disabled={!available}
        whileHover={available ? { scale: 1.05 } : {}}
        whileTap={available ? { scale: 0.95 } : {}}
      >
        {available ? 'Redeem' : 'Locked'}
      </motion.button>
    </motion.div>
  );
}
