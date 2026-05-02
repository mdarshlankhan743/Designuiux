import { motion } from 'motion/react';
import { ArrowLeft, AlertTriangle, TrendingDown, Clock, Users, ChefHat, Thermometer } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';

interface StaffDashboardProps {
  onBack: () => void;
}

const wasteData = [
  { time: '08:00', waste: 12 },
  { time: '10:00', waste: 8 },
  { time: '12:00', waste: 45 },
  { time: '14:00', waste: 38 },
  { time: '16:00', waste: 15 },
  { time: '18:00', waste: 52 },
  { time: '20:00', waste: 41 },
];

const categoryData = [
  { category: 'Rice', amount: 28 },
  { category: 'Curry', amount: 15 },
  { category: 'Roti', amount: 12 },
  { category: 'Salad', amount: 8 },
  { category: 'Dal', amount: 18 },
];

export default function StaffDashboard({ onBack }: StaffDashboardProps) {
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
            <h1 className="text-3xl font-bold text-white">Staff Dashboard</h1>
            <p className="text-gray-400">Kitchen Operations & Analytics</p>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-8">
          <AlertBanner
            type="warning"
            message="Lunch rice overproduction detected. Reduce next batch by 15%."
            time="5 mins ago"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#EF4444] to-[#F97316]">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Today's Waste</p>
            <AnimatedCounter end={81.5} duration={2} className="text-3xl font-bold text-[#EF4444]" suffix=" kg" decimals={1} />
            <p className="text-xs text-[#10B981] mt-2">-12% vs yesterday</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981] to-[#22D3EE]">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Meal Bookings</p>
            <AnimatedCounter end={847} duration={2} className="text-3xl font-bold text-[#10B981]" />
            <p className="text-xs text-gray-400 mt-2">For next meal</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#3B82F6]">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Prep Efficiency</p>
            <AnimatedCounter end={92} duration={2} className="text-3xl font-bold text-[#00E5FF]" suffix="%" />
            <p className="text-xs text-[#10B981] mt-2">+5% this week</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FACC15] to-[#F97316]">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Peak Waste Hour</p>
            <div className="text-3xl font-bold text-[#FACC15]">18:30</div>
            <p className="text-xs text-gray-400 mt-2">Dinner rush</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Live Bins */}
          <GlassCard className="p-6 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Live Smart Bins</h3>
            <div className="space-y-4">
              <BinStatus name="Bin A - Main Hall" fill={78} temperature={24} status="warning" />
              <BinStatus name="Bin B - Kitchen" fill={45} temperature={22} status="normal" />
              <BinStatus name="Bin C - Canteen" fill={92} temperature={26} status="critical" />
            </div>
          </GlassCard>

          {/* Waste Timeline */}
          <GlassCard className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Today's Waste Timeline</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={wasteData}>
                <defs>
                  <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 30, 54, 0.9)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="waste"
                  stroke="#00E5FF"
                  strokeWidth={3}
                  fill="url(#colorWaste)"
                  dot={{ fill: '#00E5FF', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Category Breakdown */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Waste by Food Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="category" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 30, 54, 0.9)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <Bar dataKey="amount" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* AI Recommendations */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">AI Meal Prep Forecast</h3>
            <div className="space-y-4">
              <RecommendationCard
                meal="Tomorrow Lunch"
                prediction="Rice demand ↓ 18%"
                action="Reduce by 12 kg"
                confidence={94}
              />
              <RecommendationCard
                meal="Tomorrow Dinner"
                prediction="Curry demand ↑ 22%"
                action="Increase by 8 kg"
                confidence={87}
              />
              <RecommendationCard
                meal="Weekend Breakfast"
                prediction="Normal demand"
                action="Maintain current levels"
                confidence={91}
              />
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#7C3AED]/10 to-[#00E5FF]/10 border border-[#7C3AED]/20">
              <p className="text-sm text-gray-300">
                🤖 <span className="text-[#7C3AED]">MessIntel AI:</span> Weekend wedding event detected in campus calendar. Expect +30% demand on Saturday dinner.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ActionButton label="Empty Bin C" urgent={true} />
            <ActionButton label="Update Menu" urgent={false} />
            <ActionButton label="View Reports" urgent={false} />
            <ActionButton label="Call NGO" urgent={false} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function AlertBanner({ type, message, time }: { type: 'warning' | 'error' | 'info'; message: string; time: string }) {
  const colors = {
    warning: 'from-[#F97316]/20 to-[#FACC15]/20 border-[#F97316]/50',
    error: 'from-[#EF4444]/20 to-[#F97316]/20 border-[#EF4444]/50',
    info: 'from-[#00E5FF]/20 to-[#3B82F6]/20 border-[#00E5FF]/50',
  };

  return (
    <motion.div
      className={`p-4 rounded-xl bg-gradient-to-r ${colors[type]} border backdrop-blur-xl`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#F97316] mt-0.5" />
        <div className="flex-1">
          <p className="text-white">{message}</p>
          <p className="text-xs text-gray-400 mt-1">{time}</p>
        </div>
      </div>
    </motion.div>
  );
}

function BinStatus({ name, fill, temperature, status }: {
  name: string;
  fill: number;
  temperature: number;
  status: 'normal' | 'warning' | 'critical';
}) {
  const getStatusColor = () => {
    if (status === 'critical') return '#EF4444';
    if (status === 'warning') return '#F97316';
    return '#10B981';
  };

  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white">{name}</h4>
        <div className="flex items-center gap-1 text-gray-400">
          <Thermometer className="w-4 h-4" />
          <span className="text-xs">{temperature}°C</span>
        </div>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-2">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: getStatusColor() }}
          initial={{ width: 0 }}
          animate={{ width: `${fill}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-400">{fill}% full</span>
        <span style={{ color: getStatusColor() }} className="font-semibold">
          {status.toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
}

function RecommendationCard({ meal, prediction, action, confidence }: {
  meal: string;
  prediction: string;
  action: string;
  confidence: number;
}) {
  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-sm font-semibold text-white">{meal}</h4>
          <p className="text-xs text-[#00E5FF] mt-1">{prediction}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Confidence</div>
          <div className="text-sm font-bold text-[#10B981]">{confidence}%</div>
        </div>
      </div>
      <p className="text-sm text-gray-300">→ {action}</p>
    </motion.div>
  );
}

function ActionButton({ label, urgent }: { label: string; urgent: boolean }) {
  return (
    <motion.button
      className={`p-4 rounded-xl font-semibold text-sm ${
        urgent
          ? 'bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white'
          : 'bg-white/5 border border-white/10 text-gray-300'
      } backdrop-blur-xl`}
      whileHover={{ scale: 1.05, boxShadow: urgent ? '0 0 20px rgba(239, 68, 68, 0.5)' : '0 0 20px rgba(0, 229, 255, 0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}
