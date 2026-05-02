import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Package, TrendingUp, Navigation, Bell, CheckCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';

interface NGODashboardProps {
  onBack: () => void;
}

export default function NGODashboard({ onBack }: NGODashboardProps) {
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
            <h1 className="text-3xl font-bold text-white">NGO Dashboard</h1>
            <p className="text-gray-400">Food Rescue & Social Impact</p>
          </div>
        </div>

        {/* Urgent Alerts */}
        <div className="mb-8 space-y-3">
          <UrgentAlert
            location="North Campus - Main Hall"
            time="23 mins"
            amount="42 kg"
            distance="2.3 km"
            urgent={true}
          />
          <UrgentAlert
            location="East Campus - Canteen"
            time="1.2 hrs"
            amount="38 kg"
            distance="4.1 km"
            urgent={false}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981] to-[#22D3EE]">
                <Package className="w-6 h-6 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bell className="w-5 h-5 text-[#F97316]" />
              </motion.div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Available Pickups</p>
            <AnimatedCounter end={3} duration={2} className="text-3xl font-bold text-[#00E5FF]" />
            <p className="text-xs text-[#F97316] mt-2">2 urgent alerts</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#3B82F6]">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">This Month</p>
            <AnimatedCounter end={284} duration={2} className="text-3xl font-bold text-[#10B981]" suffix=" kg" />
            <p className="text-xs text-[#10B981] mt-2">+18% vs last month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF]">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Successful Rescues</p>
            <AnimatedCounter end={47} duration={2} className="text-3xl font-bold text-[#7C3AED]" />
            <p className="text-xs text-gray-400 mt-2">This month</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FACC15] to-[#F97316]">
                <Navigation className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">Avg Response Time</p>
            <AnimatedCounter end={18} duration={2} className="text-3xl font-bold text-[#FACC15]" suffix=" min" />
            <p className="text-xs text-[#10B981] mt-2">-3 min improvement</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Pickups */}
          <GlassCard className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Active Pickup Requests</h3>
            <div className="space-y-4">
              <PickupCard
                location="North Campus - Main Hall"
                address="Building A, 123 University Ave"
                amount={42}
                timeLeft={23}
                priority="high"
                distance={2.3}
                contactName="Kitchen Staff - Raj"
                contactPhone="+91 98765 43210"
              />
              <PickupCard
                location="East Campus - Canteen"
                address="Block C, Campus Road"
                amount={38}
                timeLeft={72}
                priority="medium"
                distance={4.1}
                contactName="Manager - Priya"
                contactPhone="+91 98765 43211"
              />
              <PickupCard
                location="South Campus - Mess"
                address="Hostel Area, South Wing"
                amount={25}
                timeLeft={145}
                priority="low"
                distance={5.8}
                contactName="Staff - Kumar"
                contactPhone="+91 98765 43212"
              />
            </div>
          </GlassCard>

          {/* Route Optimization */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Optimized Route</h3>
            <div className="space-y-4 mb-6">
              <RouteStep step={1} location="North Campus" eta="Now" status="active" />
              <RouteStep step={2} location="East Campus" eta="15 min" status="next" />
              <RouteStep step={3} location="South Campus" eta="35 min" status="pending" />
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 to-[#10B981]/10 border border-[#00E5FF]/20 mb-4">
              <p className="text-sm text-gray-300 mb-2">
                🚗 <span className="text-[#00E5FF]">Total Distance:</span> 12.2 km
              </p>
              <p className="text-sm text-gray-300">
                ⏱️ <span className="text-[#00E5FF]">Est. Time:</span> 45 minutes
              </p>
            </div>
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-[#10B981] to-[#22D3EE] rounded-xl font-semibold text-white"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Start Navigation
            </motion.button>
          </GlassCard>
        </div>

        {/* Impact Metrics */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Social Impact This Month</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ImpactCard
              icon="🍽️"
              label="Meals Provided"
              value="1,847"
              change="+12%"
            />
            <ImpactCard
              icon="👥"
              label="People Served"
              value="642"
              change="+8%"
            />
            <ImpactCard
              icon="🌍"
              label="CO₂ Prevented"
              value="18.4 tons"
              change="+15%"
            />
            <ImpactCard
              icon="💰"
              label="Value Rescued"
              value="$12,840"
              change="+21%"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function UrgentAlert({ location, time, amount, distance, urgent }: {
  location: string;
  time: string;
  amount: string;
  distance: string;
  urgent: boolean;
}) {
  return (
    <motion.div
      className={`p-4 rounded-xl border backdrop-blur-xl ${
        urgent
          ? 'bg-gradient-to-r from-[#EF4444]/20 to-[#F97316]/20 border-[#EF4444]/50'
          : 'bg-gradient-to-r from-[#F97316]/20 to-[#FACC15]/20 border-[#F97316]/50'
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${urgent ? 'bg-[#EF4444]' : 'bg-[#F97316]'}`}>
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">{location}</h4>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {time} left
              </span>
              <span className="flex items-center gap-1">
                <Package className="w-4 h-4" />
                {amount}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {distance}
              </span>
            </div>
          </div>
        </div>
        <motion.button
          className={`px-6 py-2 rounded-lg font-semibold ${
            urgent
              ? 'bg-[#EF4444] text-white'
              : 'bg-[#F97316] text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {urgent ? 'Accept Now' : 'View Details'}
        </motion.button>
      </div>
    </motion.div>
  );
}

function PickupCard({ location, address, amount, timeLeft, priority, distance, contactName, contactPhone }: {
  location: string;
  address: string;
  amount: number;
  timeLeft: number;
  priority: 'high' | 'medium' | 'low';
  distance: number;
  contactName: string;
  contactPhone: string;
}) {
  const priorityColors = {
    high: { bg: 'from-[#EF4444]/10 to-[#F97316]/10', border: 'border-[#EF4444]/30', text: 'text-[#EF4444]' },
    medium: { bg: 'from-[#F97316]/10 to-[#FACC15]/10', border: 'border-[#F97316]/30', text: 'text-[#F97316]' },
    low: { bg: 'from-[#00E5FF]/10 to-[#3B82F6]/10', border: 'border-[#00E5FF]/30', text: 'text-[#00E5FF]' },
  };

  const colors = priorityColors[priority];

  return (
    <motion.div
      className={`p-5 rounded-xl bg-gradient-to-r ${colors.bg} border ${colors.border} backdrop-blur-xl`}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white mb-1">{location}</h4>
          <p className="text-sm text-gray-400 mb-2">{address}</p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Package className="w-4 h-4" />
              {amount} kg
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {distance} km away
            </span>
            <span className={`font-semibold ${colors.text}`}>
              {timeLeft} min left
            </span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-lg ${colors.text} bg-white/10 text-xs font-semibold uppercase`}>
          {priority}
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <div className="text-sm text-gray-400">
          <p>Contact: {contactName}</p>
          <p>{contactPhone}</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 text-sm font-semibold hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg bg-[#10B981] text-white text-sm font-semibold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Accept
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function RouteStep({ step, location, eta, status }: {
  step: number;
  location: string;
  eta: string;
  status: 'active' | 'next' | 'pending';
}) {
  const colors = {
    active: 'bg-[#10B981] text-white',
    next: 'bg-[#00E5FF] text-[#071120]',
    pending: 'bg-white/10 text-gray-400',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full ${colors[status]} flex items-center justify-center font-bold`}>
        {step}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-white">{location}</h4>
        <p className="text-xs text-gray-400">ETA: {eta}</p>
      </div>
      {status === 'active' && (
        <motion.div
          className="w-2 h-2 rounded-full bg-[#10B981]"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </div>
  );
}

function ImpactCard({ icon, label, value, change }: {
  icon: string;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <motion.div
      className="text-center"
      whileHover={{ y: -5 }}
    >
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400 mb-2">{label}</p>
      <p className="text-xs text-[#10B981]">{change}</p>
    </motion.div>
  );
}
