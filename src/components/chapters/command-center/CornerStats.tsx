import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface CornerStat {
  icon: LucideIcon;
  label: string;
  value: string;
  color?: string;
}

const cornerClasses = [
  'top-6 left-4 md:left-6',
  'top-6 right-4 md:right-6',
  'bottom-6 left-4 md:left-6',
  'bottom-6 right-4 md:right-6',
] as const;

export default function CornerStats({ stats }: { stats: CornerStat[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
      {stats.slice(0, 4).map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: idx < 2 ? -8 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
            className={`absolute ${cornerClasses[idx]}`}
          >
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-lg px-3 py-2 hud-frame">
              <div className="flex items-center gap-2">
                <Icon className={`h-4 w-4 ${stat.color ?? 'text-primary'}`} />
                <div className="leading-tight">
                  <div className="text-base font-bold font-mono text-foreground">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
