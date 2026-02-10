import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Eye, Zap, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'eye' | 'zap' | 'target';
}

const icons = {
  trophy: Trophy,
  star: Star,
  eye: Eye,
  zap: Zap,
  target: Target,
};

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onDismiss: () => void;
}

const AchievementNotification = ({ achievement, onDismiss }: AchievementNotificationProps) => {
  useEffect(() => {
    if (achievement) {
      const timer = setTimeout(onDismiss, 3000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onDismiss]);

  if (!achievement) return null;

  const IconComponent = icons[achievement.icon];

  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-20 md:bottom-6 right-4 z-[100] max-w-sm"
        >
          <div className="bg-gradient-to-r from-card via-muted to-card border border-hud-gold/50 rounded-lg p-4 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-hud-gold/5 to-transparent rounded-lg" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-hud-gold/20 flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-hud-gold animate-glow-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-hud-gold uppercase tracking-wider">
                    Achievement Unlocked!
                  </span>
                </div>
                <h4 className="text-sm font-bold text-foreground truncate">
                  {achievement.title}
                </h4>
                <p className="text-xs text-muted-foreground truncate">
                  {achievement.description}
                </p>
              </div>
            </div>
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
              <div 
                className="absolute inset-0 border-2 border-transparent"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(var(--hud-gold)), transparent) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: 'inherit',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementNotification;
