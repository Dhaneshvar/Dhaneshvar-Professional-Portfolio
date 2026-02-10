import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sword, 
  Shield, 
  Zap, 
  Target, 
  Flame, 
  Cpu, 
  Globe, 
  Database, 
  Brain, 
  Code2,
  Keyboard,
  Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Arsenal',
    icon: Globe,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/50',
    skills: [
      { name: 'React.js', icon: '⚛️', rarity: 'Legendary' },
      { name: 'Next.js', icon: '▲', rarity: 'Epic' },
      { name: 'TypeScript', icon: '📘', rarity: 'Epic' },
      { name: 'State Mangement - Redux', icon: '🎮', rarity: 'Epic' },
      { name: 'CSS', icon: '🎨', rarity: 'Epic' },
      { name: 'Framer Motion', icon: '✨', rarity: 'Rare' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Weapons',
    icon: Database,
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/50',
    skills: [
      { name: 'Python', icon: '🐍', rarity: 'Legendary' },
      // { name: 'Node.js', icon: '💚', rarity: 'Epic' },
      { name: 'Flask', icon: '⚡', rarity: 'Epic' },
      // { name: 'PostgreSQL', icon: '🐘', rarity: 'Rare' },
      { name: 'MongoDB', icon: '🍃', rarity: 'Rare' },
      { name: 'Redis', icon: '🔴', rarity: 'Rare' },
    ],
  },
  {
    id: 'genai',
    label: 'Gen AI Powers',
    icon: Brain,
    color: 'from-fuchsia-400 to-pink-400',
    bgColor: 'bg-fuchsia-400/20',
    borderColor: 'border-fuchsia-400/50',
    skills: [
      { name: 'AI Agents', icon: '🕵️', rarity: 'Legendary' },
      { name: 'LangChain', icon: '🦜', rarity: 'Legendary' },
      { name: 'RAG Systems', icon: '📚', rarity: 'Epic' },
      { name: 'Prompt Engineering', icon: '✍️', rarity: 'Epic' },
      { name: 'Vector DBs', icon: '📊', rarity: 'Epic' },
      // { name: 'OpenAI API', icon: '🤖', rarity: 'Legendary' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cpu,
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/50',
    skills: [
      { name: 'Azure', icon: '☸️', rarity: 'Epic' },
      { name: 'AWS', icon: '🌩️', rarity: 'Epic' },
      { name: 'GCP', icon: '☁️', rarity: 'Epic' },
      { name: 'Docker', icon: '🐳', rarity: 'Epic' },
      // { name: 'Terraform', icon: '🏗️', rarity: 'Rare' },
      { name: 'CI/CD', icon: '🔄', rarity: 'Rare' },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Tech',
    icon: Shield,
    color: 'from-red-500 to-rose-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/50',
    skills: [
      { name: 'IBM Mainframe', icon: '🏛️', rarity: 'Legendary' },
      { name: 'Unisys MainFrame', icon: '📜', rarity: 'rare' },
      // { name: 'COBOL', icon: '📜', rarity: 'Epic' },
      // { name: 'DB2', icon: '💾', rarity: 'Epic' },
      // { name: 'ZOWE CLI', icon: '⚙️', rarity: 'Rare' },
      // { name: 'Java', icon: '☕', rarity: 'Epic' },
      // { name: 'JIRA', icon: '📋', rarity: 'Rare' },
    ],
  },
];

const typingStats = {
  wpm: 79,
  accuracy: 93,
  level: 'Higher',
  destination: '90+ WPM',
};

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Legendary':
      return 'from-yellow-400 via-orange-500 to-red-500 text-yellow-300 border-yellow-500/50';
    case 'Epic':
      return 'from-purple-400 via-pink-500 to-purple-600 text-purple-300 border-purple-500/50';
    case 'Rare':
      return 'from-blue-400 via-cyan-500 to-blue-600 text-blue-300 border-blue-500/50';
    default:
      return 'from-gray-400 to-gray-600 text-gray-300 border-gray-500/50';
  }
};

const getRarityBadgeColor = (rarity: string) => {
  switch (rarity) {
    case 'Legendary':
      return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30';
    case 'Epic':
      return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30';
    case 'Rare':
      return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const SkillsRadar = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills-radar" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 06
          </span>
          <h2 className="section-title">Skill Arsenal</h2>
          <p className="section-subtitle">Weapons in My Tech Inventory</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs - Styled as Weapon Cases */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {skillCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg font-mono text-xs md:text-sm transition-all
                    ${activeCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'bg-card border border-border/50 text-muted-foreground hover:border-primary/50'
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Arsenal Box */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Arsenal Container */}
            <div className={`
              relative rounded-2xl overflow-hidden
              bg-gradient-to-br from-card via-background to-card
              border ${currentCategory?.borderColor}
              p-1
            `}>
              {/* Header */}
              <div className={`
                flex items-center justify-between px-4 md:px-6 py-3 md:py-4
                bg-gradient-to-r ${currentCategory?.color} bg-opacity-20
                border-b ${currentCategory?.borderColor}
              `}>
                <div className="flex items-center gap-3">
                  <Sword className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <h3 className="text-base md:text-lg font-bold text-white">{currentCategory?.label}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/70">{currentCategory?.skills.length} Items</span>
                </div>
              </div>

              {/* Skills Grid - Weapon Slots */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6">
                {currentCategory?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      relative group cursor-pointer
                      bg-gradient-to-br from-muted/50 to-background
                      border ${hoveredSkill === skill.name ? currentCategory.borderColor : 'border-border/30'}
                      rounded-xl p-3 md:p-4
                      transition-all duration-300
                      ${hoveredSkill === skill.name ? 'scale-105 shadow-lg' : ''}
                    `}
                  >
                    {/* Glow effect */}
                    <div className={`
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity
                      bg-gradient-to-br ${getRarityColor(skill.rarity)}
                    `} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-2xl md:text-3xl mb-2">{skill.icon}</div>
                      
                      {/* Name */}
                      <h4 className="font-bold text-foreground text-sm md:text-base mb-1">
                        {skill.name}
                      </h4>
                      
                      {/* Rarity Badge */}
                      <span className={`
                        inline-block px-2 py-0.5 rounded text-[10px] md:text-xs font-mono
                        border ${getRarityBadgeColor(skill.rarity)}
                      `}>
                        {skill.rarity}
                      </span>
                    </div>

                    {/* Sparkle effect on legendary */}
                    {skill.rarity === 'Legendary' && (
                      <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Typing Stats - Inside Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <div className={`
              rounded-xl overflow-hidden
              bg-gradient-to-br from-card to-background
              border border-hud-gold/30
            `}>
              {/* Header */}
              <div className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-hud-gold/10 border-b border-hud-gold/30">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-hud-gold/20 flex items-center justify-center">
                  <Keyboard className="w-4 h-4 md:w-5 md:h-5 text-hud-gold" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">Typing Proficiency</h3>
                  <p className="text-xs text-muted-foreground font-mono">Bonus Skill</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6">
                <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-mono mb-1">
                    {typingStats.wpm}
                  </div>
                  <div className="text-xs text-muted-foreground">Words/Min</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-accent font-mono mb-1">
                    {typingStats.accuracy}%
                  </div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-hud-gold font-mono mb-1">
                    {typingStats.level}
                  </div>
                  <div className="text-xs text-muted-foreground">Current Level</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-neon-cyan font-mono mb-1">
                    {typingStats.destination}
                  </div>
                  <div className="text-xs text-muted-foreground">Target</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadar;
