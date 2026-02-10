import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  FileText,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react';

type Tone = 'primary' | 'secondary' | 'accent' | 'cyan' | 'purple' | 'gold';

const toneVar: Record<Tone, string> = {
  primary: '--primary',
  secondary: '--secondary',
  accent: '--accent',
  cyan: '--neon-cyan',
  purple: '--cyber-purple',
  gold: '--hud-gold',
};

const hslVar = (tone: Tone) => `hsl(var(${toneVar[tone]}))`;
const hslaVar = (tone: Tone, alpha: number) => `hsl(var(${toneVar[tone]}) / ${alpha})`;

const links = [
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/dhaneshvar',
    tone: 'primary' as const,
    description: 'Open source repos',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhaneshvar/',
    tone: 'cyan' as const,
    description: 'Professional profile',
  },
  {
    id: 'website',
    icon: Globe,
    label: 'Website',
    href: '#',
    tone: 'secondary' as const,
    description: 'Portfolio + blog',
  },
  {
    id: 'youtube',
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@DhaneshvarMaha',
    tone: 'gold' as const,
    description: 'Talks + demos',
  },
  {
    id: 'instagram',
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/dhaneshvarmaha',
    tone: 'purple' as const,
    description: 'Behind the scenes',
  },
  {
    id: 'discord',
    icon: FileText,
    label: 'Discord',
    href: 'https://discord.com/users/860558723114467348',
    tone: 'accent' as const,
    description: 'Discord',
  },
  {
    id: 'calendly',
    icon: Calendar,
    label: 'Calendly',
    href: 'https://calendly.com',
    tone: 'secondary' as const,
    description: 'Book a call',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    href: 'mailto:dhaneshvartech@gmail.com',
    tone: 'gold' as const,
    description: 'Direct contact',
  },
];

const getNodePositions = (count: number, radius: number) => {
  const positions: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
    positions.push({ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius });
  }
  return positions;
};

const NetworkHub = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string>('github');

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const size = Math.min(containerRef.current.offsetWidth, 640);
      setDimensions({ width: size, height: size });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const radius = useMemo(() => {
    const size = Math.min(dimensions.width, dimensions.height);
    // Keep labels inside the canvas
    return Math.max(160, size * 0.34);
  }, [dimensions.width, dimensions.height]);

  const nodePositions = useMemo(() => getNodePositions(links.length, radius), [radius]);

  const active = useMemo(() => links.find((l) => l.id === activeNode) ?? links[0], [activeNode]);

  return (
    <section id="network-hub" className="relative min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 02
          </span>
          <h2 className="section-title">Network Hub</h2>
          <p className="section-subtitle">Access Points to My Digital Presence</p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-[640px] mx-auto" style={{ height: dimensions.height }}>
          {/* Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            aria-hidden="true"
          >
            {/* Center -> nodes */}
            {nodePositions.map((pos, index) => {
              const link = links[index];
              const isHot = hoveredNode === link.id || activeNode === link.id;
              return (
                <motion.line
                  key={`ray-${link.id}`}
                  x1={dimensions.width / 2}
                  y1={dimensions.height / 2}
                  x2={dimensions.width / 2 + pos.x}
                  y2={dimensions.height / 2 + pos.y}
                  stroke={isHot ? hslaVar(link.tone, 0.6) : hslaVar('primary', 0.25)}
                  strokeWidth={isHot ? 2 : 1}
                  strokeDasharray="6,6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2.2s" repeatCount="indefinite" />
                </motion.line>
              );
            })}

            {/* Node ring (soft) */}
            {nodePositions.map((pos, index) => {
              const nextIndex = (index + 1) % nodePositions.length;
              const nextPos = nodePositions[nextIndex];
              return (
                <motion.line
                  key={`orbit-${index}`}
                  x1={dimensions.width / 2 + pos.x}
                  y1={dimensions.height / 2 + pos.y}
                  x2={dimensions.width / 2 + nextPos.x}
                  y2={dimensions.height / 2 + nextPos.y}
                  stroke={hslaVar('primary', 0.12)}
                  strokeWidth={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.04 }}
                />
              );
            })}

            {/* Rotating rings */}
            <circle
              cx={dimensions.width / 2}
              cy={dimensions.height / 2}
              r={radius * 0.45}
              fill="none"
              stroke={hslaVar('primary', 0.18)}
              strokeWidth="1"
            />
            <circle
              cx={dimensions.width / 2}
              cy={dimensions.height / 2}
              r={radius * 0.75}
              fill="none"
              stroke={hslaVar('primary', 0.1)}
              strokeWidth="1"
              strokeDasharray="10,6"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${dimensions.width / 2} ${dimensions.height / 2}`}
                to={`360 ${dimensions.width / 2} ${dimensions.height / 2}`}
                dur="70s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Center globe - positioned via wrapper so Framer transforms don't break alignment */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="Network center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 220, delay: 0.25 }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-card border border-border/60 flex items-center justify-center shadow-md">
                <Globe className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="absolute inset-[-8px] rounded-full border border-primary/20" />
              <div className="absolute inset-[-16px] rounded-full border border-primary/10" />
            </motion.div>
          </div>

          {/* Nodes */}
          {links.map((link, index) => {
            const Icon = link.icon;
            const pos = nodePositions[index];
            const isHot = hoveredNode === link.id || activeNode === link.id;

            return (
              <div
                key={link.id}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
              >
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 220, delay: 0.45 + index * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => {
                    setHoveredNode(link.id);
                    setActiveNode(link.id);
                  }}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="group flex flex-col items-center gap-2 select-none"
                  aria-label={link.label}
                >
                  {/* Node */}
                  <div
                    className={
                      "relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border bg-card transition-all duration-300"
                    }
                    style={{
                      borderColor: isHot ? hslaVar(link.tone, 0.55) : hslaVar('primary', 0.18),
                      boxShadow: isHot ? `0 0 26px ${hslaVar(link.tone, 0.35)}` : undefined,
                    }}
                  >
                    <div
                      className="absolute inset-[-6px] rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${hslaVar(link.tone, 0.18)} 0%, transparent 60%)`,
                      }}
                    />

                    <Icon
                      className="relative w-6 h-6 md:w-7 md:h-7"
                      style={{ color: isHot ? hslVar(link.tone) : 'hsl(var(--foreground))' }}
                    />

                    {activeNode === link.id && (
                      <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.55, opacity: 0 }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: hslaVar(link.tone, 0.6) }}
                      />
                    )}
                  </div>

                  {/* Label (always visible) */}
                  <div className="w-24 md:w-28">
                    <div
                      className="h-0.5 w-full rounded-full mb-1"
                      style={{ background: hslaVar(link.tone, 0.85) }}
                    />
                    <div className="px-2 py-1 rounded-md bg-card/70 border border-border/50 backdrop-blur">
                      <p className="text-xs md:text-sm font-mono font-bold text-foreground text-center leading-tight">
                        {link.label}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>
            );
          })}

          {/* Data packets */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`packet-${i}`}
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-primary"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, nodePositions[i % links.length].x * 0.85],
                y: [0, nodePositions[i % links.length].y * 0.85],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.1, delay: i * 0.45, repeat: Infinity, repeatDelay: 0.8 }}
              style={{ translateX: '-50%', translateY: '-50%' }}
            />
          ))}
        </div>

        {/* Active node - positioned below the network with extra spacing */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-card border border-border/50 rounded-full">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: hslaVar(active.tone, 0.9) }}
            />
            <span className="text-sm font-mono text-muted-foreground">
              Connect with me on <span className="text-foreground font-bold">{active.label} </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkHub;
