import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEM');

  const loadingStages = [
    'INITIALIZING SYSTEM',
    'LOADING NEURAL INTERFACE',
    'CALIBRATING DISPLAY',
    'SYNCING DATA NODES',
    'ESTABLISHING CONNECTION',
    'SYSTEM READY'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const stageIndex = Math.min(
      Math.floor(progress / (100 / loadingStages.length)),
      loadingStages.length - 1
    );
    setLoadingText(loadingStages[stageIndex]);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite',
            }}
          />
        </div>

        {/* Scanning lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ opacity: 0.3 }}
            />
          ))}
        </motion.div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-4">
          {/* Logo/Icon with pulse effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
            className="relative"
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 120, height: 120, margin: -10 }}
            />
            
            {/* Main hexagon container */}
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Hexagon outline */}
                <motion.polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                
                {/* Inner hexagon */}
                <motion.polygon
                  points="50,20 80,35 80,65 50,80 20,65 20,35"
                  fill="hsl(var(--primary) / 0.1)"
                  stroke="hsl(var(--neon-cyan))"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                
                {/* Center dot */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </svg>
              
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-[-8px] border border-dashed border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-mono font-extrabold bg-gradient-to-r from-primary via-neon-cyan to-accent bg-clip-text text-transparent tracking-[0.25em]">
              Dhaneshvar Portfolio
            </h1>
            <p className="text-xs md:text-sm font-mono text-muted-foreground mt-3 tracking-widest">
              v0.0.01 // Initializing... Sit Back
            </p>
          </motion.div>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-xs md:max-w-md"
          >
            {/* Progress background */}
            <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden border border-border/50">
              {/* Progress fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-neon-cyan to-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Progress text */}
            <div className="flex justify-between items-center mt-3">
              <motion.span
                key={loadingText}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-mono text-muted-foreground"
              >
                {loadingText}
              </motion.span>
              <span className="text-xs font-mono text-primary font-bold">
                {progress}%
              </span>
            </div>
          </motion.div>

          {/* Data streams */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 text-xs font-mono text-muted-foreground/50"
          >
            {['GEN', 'AI', 'DEVOPS', 'IOT'].map((label, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-plasma-green" />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Corner decorations */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
          <motion.div
            key={corner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`absolute ${corner.includes('top') ? 'top-4' : 'bottom-4'} ${corner.includes('left') ? 'left-4' : 'right-4'} w-12 h-12`}
          >
            <svg viewBox="0 0 50 50" className="w-full h-full text-primary/30">
              <path
                d={corner === 'top-left' ? 'M0,20 L0,0 L20,0' :
                   corner === 'top-right' ? 'M30,0 L50,0 L50,20' :
                   corner === 'bottom-left' ? 'M0,30 L0,50 L20,50' :
                   'M30,50 L50,50 L50,30'}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        ))}

        <style>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
