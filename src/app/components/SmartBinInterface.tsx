import { motion } from 'motion/react';
import { ArrowLeft, Trash2, Thermometer, Activity, Camera, Scale, AlertCircle, Wifi, CheckCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import CircularProgress from './CircularProgress';

interface SmartBinInterfaceProps {
  onBack: () => void;
}

export default function SmartBinInterface({ onBack }: SmartBinInterfaceProps) {
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
            <h1 className="text-3xl font-bold text-white">Smart Bin System</h1>
            <p className="text-gray-400">IoT Monitoring & Real-time Analytics</p>
          </div>
        </div>

        {/* Bin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <SmartBinCard
            id="BIN-A-001"
            location="Main Hall - North Campus"
            fill={78}
            weight={42.5}
            temperature={24}
            status="warning"
            lastUpdate="2 mins ago"
            category="Mixed"
          />
          <SmartBinCard
            id="BIN-B-002"
            location="Kitchen - South Campus"
            fill={45}
            weight={28.3}
            temperature={22}
            status="normal"
            lastUpdate="Just now"
            category="Cooked Food"
          />
          <SmartBinCard
            id="BIN-C-003"
            location="Canteen - East Campus"
            fill={92}
            weight={58.7}
            temperature={26}
            status="critical"
            lastUpdate="1 min ago"
            category="Vegetables"
          />
        </div>

        {/* Detailed View */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">BIN-C-003 - Detailed View</h3>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-[#10B981]"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-[#10B981]">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3D Bin Visualization */}
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0B1E36] to-[#071120] border border-white/10 flex items-end justify-center p-8">
                {/* Bin Container */}
                <div className="relative w-48 h-80">
                  {/* Bin Outline */}
                  <div className="absolute inset-0 rounded-2xl border-4 border-[#00E5FF]/30" />

                  {/* Fill Level */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-[#EF4444] via-[#F97316] to-[#FACC15] opacity-60"
                    initial={{ height: 0 }}
                    animate={{ height: '92%' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                        '0 0 40px rgba(239, 68, 68, 0.6)',
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Percentage Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white drop-shadow-lg">
                      92%
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-[#EF4444] text-white font-semibold text-sm">
                  CRITICAL
                </div>
              </div>
            </div>

            {/* Sensor Data */}
            <div className="space-y-4">
              <SensorReading
                icon={<Scale className="w-5 h-5" />}
                label="Current Weight"
                value="58.7 kg"
                status="critical"
                trend="+2.3 kg in last hour"
              />
              <SensorReading
                icon={<Thermometer className="w-5 h-5" />}
                label="Temperature"
                value="26°C"
                status="normal"
                trend="Optimal range"
              />
              <SensorReading
                icon={<Activity className="w-5 h-5" />}
                label="Fill Level"
                value="92%"
                status="critical"
                trend="Needs immediate attention"
              />
              <SensorReading
                icon={<Camera className="w-5 h-5" />}
                label="AI Category"
                value="Vegetables"
                status="normal"
                trend="98% confidence"
              />
              <SensorReading
                icon={<Wifi className="w-5 h-5" />}
                label="Connectivity"
                value="Online"
                status="normal"
                trend="Signal: Strong"
              />

              <motion.button
                className="w-full py-4 bg-gradient-to-r from-[#EF4444] to-[#F97316] rounded-xl font-semibold text-white mt-6"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Alert Kitchen Staff
                </span>
              </motion.button>
            </div>
          </div>
        </GlassCard>

        {/* System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <h4 className="text-sm text-gray-400 mb-4">Total Bins</h4>
            <AnimatedCounter end={24} duration={2} className="text-4xl font-bold text-[#00E5FF]" />
            <p className="text-xs text-[#10B981] mt-2">All operational</p>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-sm text-gray-400 mb-4">Bins Need Emptying</h4>
            <AnimatedCounter end={3} duration={2} className="text-4xl font-bold text-[#F97316]" />
            <p className="text-xs text-gray-400 mt-2">Above 75% capacity</p>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-sm text-gray-400 mb-4">AI Accuracy</h4>
            <AnimatedCounter end={97.8} duration={2} className="text-4xl font-bold text-[#10B981]" suffix="%" decimals={1} />
            <p className="text-xs text-[#10B981] mt-2">+1.2% this week</p>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-sm text-gray-400 mb-4">System Uptime</h4>
            <AnimatedCounter end={99.94} duration={2} className="text-4xl font-bold text-[#00E5FF]" suffix="%" decimals={2} />
            <p className="text-xs text-gray-400 mt-2">Last 30 days</p>
          </GlassCard>
        </div>

        {/* Camera Feeds */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Live Camera Feeds</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CameraFeed binId="BIN-A-001" status="active" />
            <CameraFeed binId="BIN-B-002" status="active" />
            <CameraFeed binId="BIN-C-003" status="active" />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function SmartBinCard({ id, location, fill, weight, temperature, status, lastUpdate, category }: {
  id: string;
  location: string;
  fill: number;
  weight: number;
  temperature: number;
  status: 'normal' | 'warning' | 'critical';
  lastUpdate: string;
  category: string;
}) {
  const statusColors = {
    normal: { color: '#10B981', bg: 'from-[#10B981]/10 to-[#22D3EE]/10', border: 'border-[#10B981]/30' },
    warning: { color: '#F97316', bg: 'from-[#F97316]/10 to-[#FACC15]/10', border: 'border-[#F97316]/30' },
    critical: { color: '#EF4444', bg: 'from-[#EF4444]/10 to-[#F97316]/10', border: 'border-[#EF4444]/30' },
  };

  const config = statusColors[status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
    >
      <GlassCard className={`p-6 bg-gradient-to-br ${config.bg} border ${config.border}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{id}</h3>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
          <div className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase`} style={{ color: config.color, backgroundColor: 'rgba(255,255,255,0.1)' }}>
            {status}
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <CircularProgress value={fill} size={140} strokeWidth={10} color={config.color} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Scale className="w-4 h-4" />
              <span>Weight</span>
            </div>
            <span className="text-white font-semibold">{weight} kg</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Thermometer className="w-4 h-4" />
              <span>Temp</span>
            </div>
            <span className="text-white font-semibold">{temperature}°C</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Trash2 className="w-4 h-4" />
              <span>Category</span>
            </div>
            <span className="text-white font-semibold">{category}</span>
          </div>

          <div className="pt-3 border-t border-white/10">
            <p className="text-xs text-gray-500">Last update: {lastUpdate}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function SensorReading({ icon, label, value, status, trend }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: 'normal' | 'warning' | 'critical';
  trend: string;
}) {
  const statusColors = {
    normal: '#10B981',
    warning: '#F97316',
    critical: '#EF4444',
  };

  return (
    <motion.div
      className="p-4 rounded-xl bg-white/5 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-[#00E5FF]/20" style={{ color: statusColors[status] }}>
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-lg font-bold text-white">{value}</p>
        </div>
        {status === 'critical' && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <AlertCircle className="w-5 h-5 text-[#EF4444]" />
          </motion.div>
        )}
        {status === 'normal' && (
          <CheckCircle className="w-5 h-5 text-[#10B981]" />
        )}
      </div>
      <p className="text-xs text-gray-500">{trend}</p>
    </motion.div>
  );
}

function CameraFeed({ binId, status }: { binId: string; status: 'active' | 'offline' }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1E36] to-[#071120] border border-white/10 aspect-video">
      {/* Simulated Camera Feed */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#112B4A]/50 to-[#071120]/50" />

      {/* Grid Overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-[#00E5FF]/10" />
          ))}
        </div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-sm flex items-center gap-2">
        <motion.div
          className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-[#10B981]' : 'bg-gray-500'}`}
          animate={status === 'active' ? { opacity: [1, 0.5, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-white">{binId}</span>
      </div>

      {/* AI Detection Box */}
      {status === 'active' && (
        <motion.div
          className="absolute inset-0 m-12 border-2 border-[#00E5FF] rounded-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute -top-6 left-0 px-2 py-1 bg-[#00E5FF] text-[#071120] text-xs font-semibold rounded">
            Food Detected: 98%
          </div>
        </motion.div>
      )}

      {/* Recording Indicator */}
      {status === 'active' && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#EF4444]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-xs text-white">REC</span>
        </div>
      )}
    </div>
  );
}
