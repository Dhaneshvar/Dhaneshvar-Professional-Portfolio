import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mouse, Zap, Code2, Trophy, Layers, Calendar, Download } from 'lucide-react';
import profileImgDhanesh from "../../Images/Dhaneshvar.jpg";

const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

const CommandCenter = () => {
  const [stats] = useState([
    { icon: Zap, label: 'Years Exp', value: '2+', color: 'text-primary' },
    { icon: Code2, label: 'Tech Stack', value: '20+', color: 'text-neon-cyan' },
    { icon: Trophy, label: 'Hackathons', value: '10+', color: 'text-hud-gold' },
    { icon: Layers, label: 'Projects', value: '25+', color: 'text-plasma-green' },
  ]);

  const titles = [
    'Software Engineer @ Unisys India',
    'Gen AI/ML',
    'Full-Stack Developer',
  ];

  return (
    <section id="command-center" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scanlines overlay */}
      <div className="scanlines" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-50 opacity-20" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image with HUD Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Corner Stats - positioned at 4 corners of profile frame */}
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const positions = [
                  '-top-4 -left-4', // top-left
                  '-top-4 -right-4', // top-right
                  '-bottom-4 -left-4', // bottom-left
                  '-bottom-4 -right-4', // bottom-right
                ];
                const initialOffsets = [
                  { x: -20, y: -20 }, // top-left comes from top-left
                  { x: 20, y: -20 },  // top-right comes from top-right
                  { x: -20, y: 20 },  // bottom-left comes from bottom-left
                  { x: 20, y: 20 },   // bottom-right comes from bottom-right
                ];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5, 
                      x: initialOffsets[idx].x, 
                      y: initialOffsets[idx].y,
                      filter: 'blur(8px)'
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 0, 
                      y: 0,
                      filter: 'blur(0px)'
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + idx * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      transition: { duration: 0.2 } 
                    }}
                    className={`absolute ${positions[idx]} z-30 cursor-pointer`}
                  >
                    <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-lg px-2 py-1.5 hud-frame transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                      <div className="flex items-center gap-1.5">
                        <Icon className={`h-3 w-3 md:h-4 md:w-4 ${stat.color} transition-transform duration-300 group-hover:rotate-12`} />
                        <div className="leading-tight">
                          <div className="text-xs md:text-sm font-bold font-mono text-foreground">{stat.value}</div>
                          <div className="text-[8px] md:text-[9px] uppercase tracking-wider text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              
              {/* Inner static ring */}
              <div className="absolute inset-4 rounded-full border border-primary/50" />
              
              {/* Profile placeholder with HUD frame */}
              <motion.div 
                className="absolute inset-8 hud-frame rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                
                {/* Profile image with hover effects */}
                <motion.img 
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  src={profileImgDhanesh}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                />
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden z-20">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[matrix-fall_3s_linear_infinite]" />
                </div>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{
                    background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                  }}
                />
                
                {/* Corner shine effect on hover */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out z-20" />
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left max-w-2xl"
          >
            {/* Status indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-plasma-green animate-pulse" />
              <span className="text-xs font-mono text-plasma-green uppercase tracking-widest">
                 {'Agent Dhanesh Online --> • AI, Frontend & Scalable Systems'}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4">
              <span className="text-gradient-primary glitch">Dhaneshvar Maha</span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="h-10 md:h-12 mb-6">
              <p className="text-lg md:text-xl font-mono text-muted-foreground">
                <span className="text-primary">&gt;</span>{' '}
                <TypewriterText texts={titles} />
              </p>
            </div>

            {/* Mission statement */}
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Building intelligent full-stack solutions powered by 
              <span className="text-primary"> Generative AI</span> and
              <span className="text-secondary"> modern web technologies</span>.
              Active hackathon participant, continuous learner, and explorer of emerging tech.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <motion.a
                href="#projects-vault"
                className="cyber-button text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              {/* <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button border-accent/50 text-accent hover:border-accent text-sm md:text-base flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4" />
                Schedule Call
              </motion.a>
              <motion.a
                href="#"
                className="cyber-button border-secondary/50 text-secondary hover:border-secondary text-sm md:text-base flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a> */}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator - clickable to scroll to next section */}
      <motion.button
        onClick={() => {
          const nextSection = document.getElementById('network-hub');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute inset-x-0 bottom-8 z-20 flex justify-center cursor-pointer group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center gap-1">
          <Mouse className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-accent transition-colors" />
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground group-hover:text-primary uppercase tracking-widest transition-colors">
            Scroll
          </span>
        </div>
      </motion.button>
    </section>
  );
};

export default CommandCenter;
