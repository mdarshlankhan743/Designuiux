import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, Leaf, TrendingUp, MapPin, Building2, BarChart3, Download } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';

interface AdminDashboardProps {
  onBack: () => void;
}

const monthlyData = [
  { month: 'Jan', waste: 1200, savings: 8400 },
  { month: 'Feb', waste: 1100, savings: 9200 },
  { month: 'Mar', waste: 950, savings: 10100 },
  { month: 'Apr', waste: 880, savings: 11300 },
  { month: 'May', waste: 810, savings: 12500 },
  { month: 'Jun', waste: 750, savings: 13800 },
];

const campusData = [
  { campus: 'North', score: 87 },
  { campus: 'South', score: 92 },
  { campus: 'East', score: 78 },
  { campus: 'West', score: 84 },
  { campus: 'Central', score: 89 },
];

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  return (
    <div className="size-full overflow-auto bg-[#071120]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#00E5FF] backdrop-blur-xl hover:bg-[#00E5FF]/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Mission Control</h1>
              <p className="text-gray-400">Multi-Campus Analytics & Oversight</p>
            </div>
          </div>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] rounded-xl font-semibold text-[#071120]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Export ESG Report
          </motion.button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-transparent opacity-10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981] to-[#22D3EE]">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#10B981]"
                  >
                    ↓
                  </motion.div>
                </div>
                <p className="text-gray-400 text-sm mb-1">Total CO₂ Saved</p>
                <AnimatedCounter end={127.8} duration={2} className="text-3xl font-bold text-[#10B981]" suffix=" tons" decimals={1} />
                <p className="text-xs text-[#10B981] mt-2">+24% vs last month</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#EF4444] to-transparent opacity-10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#EF4444] to-[#F97316]">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-1">Cost Loss Prevented</p>
                <AnimatedCounter end={186400} duration={2} className="text-3xl font-bold text-[#FACC15]" prefix="$" />
                <p className="text-xs text-gray-400 mt-2">This quarter</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00E5FF] to-transparent opacity-10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#3B82F6]">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-1">Active Campuses</p>
                <AnimatedCounter end={5} duration={2} className="text-3xl font-bold text-[#00E5FF]" />
                <p className="text-xs text-gray-400 mt-2">24 smart bins total</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-transparent opacity-10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF]">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-1">AI Accuracy</p>
                <AnimatedCounter end={94.7} duration={2} className="text-3xl font-bold text-[#7C3AED]" suffix="%" decimals={1} />
                <p className="text-xs text-[#10B981] mt-2">+2.3% improvement</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Waste Reduction Trend */}
          <GlassCard className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Waste Reduction & Savings Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorWasteArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 30, 54, 0.9)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="waste"
                  stroke="#EF4444"
                  fillOpacity={1}
                  fill="url(#colorWasteArea)"
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorSavings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Campus Performance */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Campus Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={campusData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="campus" stroke="#94A3B8" />
                <PolarRadiusAxis stroke="#94A3B8" />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#00E5FF"
                  fill="#00E5FF"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Campus Map */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Live Campus Overview</h3>
            <div className="space-y-3">
              <CampusRow name="North Campus" bins={5} status="optimal" waste={45} students={1240} />
              <CampusRow name="South Campus" bins={4} status="optimal" waste={38} students={980} />
              <CampusRow name="East Campus" bins={6} status="warning" waste={72} students={1560} />
              <CampusRow name="West Campus" bins={5} status="optimal" waste={51} students={1180} />
              <CampusRow name="Central Campus" bins={4} status="optimal" waste={42} students={890} />
            </div>
          </GlassCard>

          {/* AI Predictions */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">AI Forecasting & Insights</h3>
            <div className="space-y-4">
              <PredictionCard
                title="Week Ahead Forecast"
                prediction="-15% waste reduction expected"
                reason="Exam period → reduced campus activity"
                confidence={91}
                color="#10B981"
              />
              <PredictionCard
                title="Intervention Needed"
                prediction="East Campus waste trending up"
                reason="New hostel intake → education campaign needed"
                confidence={87}
                color="#F97316"
              />
              <PredictionCard
                title="NGO Optimization"
                prediction="Schedule pickup on Thursday"
                reason="3 campuses reaching 80% capacity"
                confidence={95}
                color="#00E5FF"
              />
            </div>
          </GlassCard>
        </div>

        {/* ESG & Impact */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">ESG Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImpactMetric
              icon={<Leaf className="w-8 h-8" />}
              label="Trees Equivalent"
              value="2,840"
              gradient="from-[#10B981] to-[#22D3EE]"
            />
            <ImpactMetric
              icon={<BarChart3 className="w-8 h-8" />}
              label="Meals Rescued"
              value="18,240"
              gradient="from-[#00E5FF] to-[#3B82F6]"
            />
            <ImpactMetric
              icon={<MapPin className="w-8 h-8" />}
              label="NGO Partners"
              value="12"
              gradient="from-[#7C3AED] to-[#00E5FF]"
            />
            <ImpactMetric
              icon={<TrendingUp className="w-8 h-8" />}
              label="Student Engagement"
              value="94%"
              gradient="from-[#FACC15] to-[#F97316]"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function CampusRow({ name, bins, status, waste, students }: {
  name: string;
  bins: number;
  status: 'optimal' | 'warning' | 'critical';
  waste: number;
  students: number;
}) {
  const statusColors = {
    optimal: '#10B981',
    warning: '#F97316',
    critical: '#EF4444',
  };

  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#3B82F6] flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{name}</h4>
            <p className="text-xs text-gray-400">{bins} bins · {students.toLocaleString()} students</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-white">{waste}kg</p>
          <p className="text-xs" style={{ color: statusColors[status] }}>
            {status.toUpperCase()}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function PredictionCard({ title, prediction, reason, confidence, color }: {
  title: string;
  prediction: string;
  reason: string;
  confidence: number;
  color: string;
}) {
  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm mb-1" style={{ color }}>{prediction}</p>
          <p className="text-xs text-gray-400">{reason}</p>
        </div>
        <div className="text-right ml-3">
          <div className="text-xs text-gray-400">Confidence</div>
          <div className="text-lg font-bold text-[#10B981]">{confidence}%</div>
        </div>
      </div>
    </motion.div>
  );
}

function ImpactMetric({ icon, label, value, gradient }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  gradient: string;
}) {
  return (
    <motion.div
      className="text-center"
      whileHover={{ y: -5 }}
    >
      <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-3`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </motion.div>
  );
}
