import { motion } from 'motion/react';
import { Scan, Camera, Clock } from 'lucide-react';
import GlassCard from './GlassCard';
import { useTheme, themes } from '../contexts/ThemeContext';

export default function ScanPage() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="size-full overflow-auto pb-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: currentTheme.text }}>
            Meal Scanner
          </h1>
          <p style={{ color: currentTheme.textMuted }}>
            Scan your QR code or plate
          </p>
        </div>

        {/* Scanner UI */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <GlassCard className="p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Scanner Frame */}
              <div
                className="absolute inset-0 rounded-3xl border-4"
                style={{ borderColor: currentTheme.primary }}
              >
                {/* Corner Markers */}
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                  <div
                    key={corner}
                    className={`absolute w-8 h-8 border-4 ${
                      corner.includes('top') ? 'top-0' : 'bottom-0'
                    } ${corner.includes('left') ? 'left-0' : 'right-0'} ${
                      corner.includes('top')
                        ? corner.includes('left')
                          ? 'border-b-0 border-r-0'
                          : 'border-b-0 border-l-0'
                        : corner.includes('left')
                        ? 'border-t-0 border-r-0'
                        : 'border-t-0 border-l-0'
                    }`}
                    style={{ borderColor: currentTheme.primary }}
                  />
                ))}

                {/* Animated Scan Beam */}
                <motion.div
                  className="absolute left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`,
                    boxShadow: `0 0 20px ${currentTheme.primary}`,
                  }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="p-6 rounded-full"
                  style={{ backgroundColor: `${currentTheme.primary}20` }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Camera className="w-12 h-12" style={{ color: currentTheme.primary }} />
                </motion.div>
              </div>
            </div>

            {/* Instruction */}
            <motion.p
              className="text-center mt-6 text-sm"
              style={{ color: currentTheme.textMuted }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Position QR code or meal plate within frame
            </motion.p>
          </GlassCard>
        </motion.div>

        {/* Scan Button */}
        <motion.button
          className="w-full py-4 rounded-xl font-semibold text-lg mb-8"
          style={{
            background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary})`,
            color: theme === 'light' ? currentTheme.background : '#fff',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Scan className="w-6 h-6" />
            <span>Start Scanning</span>
          </div>
        </motion.button>

        {/* Recent Scans */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
            Recent Scans
          </h3>
          <div className="space-y-3">
            <ScanHistoryItem
              meal="Lunch - Rice & Dal"
              time="12:30 PM"
              status="completed"
            />
            <ScanHistoryItem
              meal="Breakfast - Oats"
              time="8:15 AM"
              status="completed"
            />
            <ScanHistoryItem
              meal="Dinner - Roti & Curry"
              time="Yesterday, 7:45 PM"
              status="completed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScanHistoryItem({
  meal,
  time,
  status,
}: {
  meal: string;
  time: string;
  status: string;
}) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${currentTheme.success}20` }}
          >
            <Clock className="w-5 h-5" style={{ color: currentTheme.success }} />
          </div>
          <div>
            <h4 className="font-semibold text-sm" style={{ color: currentTheme.text }}>
              {meal}
            </h4>
            <p className="text-xs" style={{ color: currentTheme.textMuted }}>
              {time}
            </p>
          </div>
        </div>
        <div
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: `${currentTheme.success}20`,
            color: currentTheme.success,
          }}
        >
          {status}
        </div>
      </div>
    </GlassCard>
  );
}
