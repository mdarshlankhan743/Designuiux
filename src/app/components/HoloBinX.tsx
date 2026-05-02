import { motion } from 'motion/react';
import { useState } from 'react';
import { Thermometer, Scale, Activity, Sparkles } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

interface HoloBinXProps {
  fillPercentage?: number;
  weight?: number;
  temperature?: number;
  category?: string;
  status?: 'normal' | 'warning' | 'critical';
}

export default function HoloBinX({
  fillPercentage = 65,
  weight = 42.5,
  temperature = 24,
  category = 'Mixed',
  status = 'normal',
}: HoloBinXProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [rotation, setRotation] = useState(0);

  const statusColors = {
    normal: currentTheme.success,
    warning: currentTheme.warning,
    critical: currentTheme.danger,
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Holographic Glow Ring */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: `radial-gradient(circle, ${statusColors[status]}40 0%, transparent 70%)`,
        }}
      />

      {/* Floating Data Labels */}
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl backdrop-blur-xl border z-20"
        style={{
          backgroundColor: currentTheme.cardBg,
          borderColor: currentTheme.border,
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4" style={{ color: statusColors[status] }} />
          <span className="text-sm font-bold" style={{ color: currentTheme.text }}>
            {fillPercentage}% Full
          </span>
        </div>
      </motion.div>

      {/* Main Bin Container */}
      <div className="relative w-64 h-96">
        {/* 360° Rotation Control */}
        <div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => {
            const startX = e.clientX;
            const startRotation = rotation;

            const handleMouseMove = (moveEvent: MouseEvent) => {
              const deltaX = moveEvent.clientX - startX;
              setRotation(startRotation + deltaX);
            };

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{ rotateY: rotation }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {/* Transparent Bin Body */}
            <div className="relative w-full h-full">
              {/* Glass Container */}
              <div
                className="absolute inset-0 rounded-3xl backdrop-blur-md border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  borderColor: currentTheme.border,
                  boxShadow: `0 0 60px ${statusColors[status]}40, inset 0 0 30px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Holographic Scan Lines */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="w-full h-8 opacity-30"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${currentTheme.primary}, transparent)`,
                    }}
                  />
                </motion.div>

                {/* Food Waste Fill - Visible Inside */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 rounded-b-3xl overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: `${fillPercentage}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  {/* Layered Waste Visualization */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top,
                        rgba(239, 68, 68, 0.6) 0%,
                        rgba(249, 115, 22, 0.5) 30%,
                        rgba(250, 204, 21, 0.4) 60%,
                        rgba(132, 204, 22, 0.3) 100%)`,
                    }}
                  />

                  {/* Food Particle Texture */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-white/20"
                      style={{
                        left: `${Math.random() * 100}%`,
                        bottom: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Heat Zones */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      background: `radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.3), transparent)`,
                    }}
                  />
                </motion.div>

                {/* Edge Glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 40px ${statusColors[status]}60`,
                  }}
                />

                {/* Percentage Ring Indicator */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-20 h-20 rounded-full border-4 flex items-center justify-center backdrop-blur-sm"
                    style={{
                      borderColor: statusColors[status],
                      backgroundColor: currentTheme.cardBg,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold" style={{ color: statusColors[status] }}>
                        {fillPercentage}%
                      </div>
                      <div className="text-xs" style={{ color: currentTheme.textMuted }}>
                        Fill
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Sensor Pulse Points */}
              {[
                { top: '20%', left: '10%' },
                { top: '50%', left: '90%' },
                { top: '80%', left: '10%' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    backgroundColor: currentTheme.primary,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Sensor Data */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
        <SensorBadge
          icon={<Scale className="w-4 h-4" />}
          label="Weight"
          value={`${weight} kg`}
          theme={currentTheme}
        />
        <SensorBadge
          icon={<Thermometer className="w-4 h-4" />}
          label="Temp"
          value={`${temperature}°C`}
          theme={currentTheme}
        />
        <SensorBadge
          icon={<Sparkles className="w-4 h-4" />}
          label="Category"
          value={category}
          theme={currentTheme}
        />
      </div>

      {/* Rotate Hint */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg backdrop-blur-xl text-xs"
        style={{
          backgroundColor: currentTheme.cardBg,
          color: currentTheme.textMuted,
          borderColor: currentTheme.border,
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🖱️ Drag to rotate 360°
      </motion.div>
    </div>
  );
}

function SensorBadge({
  icon,
  label,
  value,
  theme,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  theme: typeof themes.dark;
}) {
  return (
    <motion.div
      className="px-3 py-2 rounded-lg backdrop-blur-xl border text-center"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.border,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-1 mb-1" style={{ color: theme.primary }}>
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <div className="text-sm font-bold" style={{ color: theme.text }}>
        {value}
      </div>
    </motion.div>
  );
}
