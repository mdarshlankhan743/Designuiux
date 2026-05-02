import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';
import { useTheme, themes } from '../contexts/ThemeContext';

export default function FeedbackPage() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [selectedSatisfaction, setSelectedSatisfaction] = useState<number | null>(null);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const satisfactionLevels = [
    { emoji: '😊', label: 'Great', value: 5 },
    { emoji: '🙂', label: 'Good', value: 4 },
    { emoji: '😐', label: 'Okay', value: 3 },
    { emoji: '🙁', label: 'Poor', value: 2 },
    { emoji: '😞', label: 'Bad', value: 1 },
  ];

  const wasteReasons = [
    { id: 'taste', label: 'Taste Issue', icon: '👅' },
    { id: 'quality', label: 'Poor Quality', icon: '⚠️' },
    { id: 'portion', label: 'Excess Portion', icon: '🍽️' },
    { id: 'preference', label: 'Menu Preference', icon: '📋' },
    { id: 'health', label: 'Health Reason', icon: '🏥' },
    { id: 'other', label: 'Other', icon: '💬' },
  ];

  const toggleReason = (id: string) => {
    setSelectedReasons((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedSatisfaction(null);
      setSelectedReasons([]);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="size-full flex items-center justify-center pb-24">
        <motion.div
          className="text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1 }}
          >
            ✅
          </motion.div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: currentTheme.text }}>
            Thank You!
          </h2>
          <p className="text-lg" style={{ color: currentTheme.textMuted }}>
            Your feedback helps us improve
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="size-full overflow-auto pb-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: currentTheme.text }}>
            Your Feedback Matters
          </h1>
          <p style={{ color: currentTheme.textMuted }}>
            Help us create a better dining experience
          </p>
        </div>

        {/* Meal Satisfaction */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: currentTheme.text }}>
              How was your meal today?
            </h3>
            <div className="flex justify-center gap-4">
              {satisfactionLevels.map((level) => (
                <motion.button
                  key={level.value}
                  onClick={() => setSelectedSatisfaction(level.value)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl"
                  style={{
                    backgroundColor:
                      selectedSatisfaction === level.value
                        ? `${currentTheme.primary}30`
                        : 'transparent',
                    borderWidth: 2,
                    borderColor:
                      selectedSatisfaction === level.value
                        ? currentTheme.primary
                        : 'transparent',
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-4xl">{level.emoji}</span>
                  <span
                    className="text-xs font-medium"
                    style={{
                      color:
                        selectedSatisfaction === level.value
                          ? currentTheme.primary
                          : currentTheme.textMuted,
                    }}
                  >
                    {level.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Waste Reasons */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
              Why was food wasted today?
            </h3>
            <p className="text-sm mb-4" style={{ color: currentTheme.textMuted }}>
              Select all that apply (collective improvement, not individual blame)
            </p>
            <div className="grid grid-cols-2 gap-3">
              {wasteReasons.map((reason) => (
                <motion.button
                  key={reason.id}
                  onClick={() => toggleReason(reason.id)}
                  className="p-4 rounded-xl text-left"
                  style={{
                    backgroundColor: selectedReasons.includes(reason.id)
                      ? `${currentTheme.primary}20`
                      : currentTheme.cardBg,
                    borderWidth: 2,
                    borderColor: selectedReasons.includes(reason.id)
                      ? currentTheme.primary
                      : currentTheme.border,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{reason.icon}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: selectedReasons.includes(reason.id)
                          ? currentTheme.primary
                          : currentTheme.text,
                      }}
                    >
                      {reason.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Sustainability Tip */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-5">
            <div className="flex items-start gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${currentTheme.success}20` }}
              >
                <Sparkles className="w-5 h-5" style={{ color: currentTheme.success }} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1" style={{ color: currentTheme.text }}>
                  💡 Sustainability Tip
                </h4>
                <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                  Taking smaller portions initially and getting seconds if needed reduces waste by 40% on average!
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={!selectedSatisfaction && selectedReasons.length === 0}
          className="w-full py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
          style={{
            background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary})`,
            color: theme === 'light' ? currentTheme.background : '#fff',
          }}
          whileHover={{ scale: !selectedSatisfaction && selectedReasons.length === 0 ? 1 : 1.02 }}
          whileTap={{ scale: !selectedSatisfaction && selectedReasons.length === 0 ? 1 : 0.98 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            <span>Submit Feedback</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
