import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Filter, Layers, Cpu, Cloud, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 'Alertx-AI-Agents-Capstone-Project',
    title: 'Alertx-AI-Agents-Capstone-Project',
    description: 'Alertx AI is an intelligent environmental monitoring and incident reporting platform by Team FDRK, powered Google Gemini. It helps communities track and respond to environmental issues through AI-powered features including smart live maps, eco-routing, trip sequencing, AI chat agents, carbon dashboards, and incident reporting. The platform integrates streaming video analysis for real-time environmental hazard detection and emergency response.',
    image: '📝',
    tech: ['Python', 'Gen AI', 'Google ADK', 'Flask'],
    category: 'Gen AI',
    github: 'https://github.com/Dhaneshvar/Alertx-AI-Agents-Capstone-Project',
    stars: 445,
    forks: 89,
    featured: true,
  },
  {
    id: 'cloud-cost',
    title: 'Cloud Cost Optimizer',
    description: 'Multi-cloud cost analysis and optimization tool with ML-based recommendations.',
    image: '💰',
    tech: ['Python', 'AWS', 'GCP', 'Terraform', 'React'],
    category: 'Enterprise',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 167,
    forks: 42,
  },
  {
    id: 'TeachWell-LearnWell-GenAI_Hackathon_Google',
    title: 'TeachWell-LearnWell-GenAI_Hackathon_Google',
    description: 'Unlock the power of storytelling with Gen AI. Create engaging, visually rich narratives for your students or embark on a magical learning journey.',
    image: '👥',
    tech: ["Next.js - React Framework",
          "React - UI Library",
          "Genkit - AI Framework",
          "ShadCN UI - Component Library",
          "Tailwind CSS" ],
    category: 'Gen AI',
    github: 'https://github.com/Dhaneshvar/TeachWell-LearnWell-GenAI_Hackathon_Google',
    stars: 234,
    forks: 56,
  },
  {
    id: 'UnisysIBM_API_Hosting',
    title: 'UnisysIBM_API_Hosting',
    description: 'UnisysIBM_API_Hosting',
    image: '🔄',
    tech: ['Python', 'API', 'Flask', 'Rest API'],
    category: 'Enterprise',
    github: 'https://github.com/Dhaneshvar/UnisysIBM_API_Hosting',
    stars: 523,
    forks: 112,
  },
  {
    id: 'AICostPilot',
    title: 'AICostPilot',
    description: `Enterprise AI Cost Optimization Advisor
                  Smarter AI Usage. Lower Cost. Higher ROI.
                  Built with Lyzr Studio`,
    image: '🚀',
    tech: ['Lyzr Studio ', 'RAG', 'Multi-Agent', 'ReactJS + Redux','LLM-as-Judge'],
    category: 'Gen AI',
    github: 'https://github.com/Dhaneshvar/AICostPilot',
    stars: 345,
    forks: 78,
  },
  {
    id: 'Arokaya',
    title: 'Arokaya',
    description: 'An AI Powered AROKAYA Medi Assistant',
    image: '💬',
    tech: ['AWS', 'Python', 'AWS Agent Builder', 'Lambda'],
    category: 'Full-Stack',
    github: 'https://github.com/Dhaneshvar/Arokaya',
    demo: 'https://github.com/Dhaneshvar/Arokaya',
    stars: 278,
    forks: 61,
  },
  {
    id: 'Vitteey-Sahaayak',
    title: 'Vitteey-Sahaayak',
    description: "An Gen AI Powered Intelligent Fiancial Management Assistant that helps rural populations manage their finances effortlessly. We are calling this Vitteey Sahaayak which consist of an interactive, voice-enabled chatbot that can help users manage their finances, track expenses, and provide financial advice.",
    image: '📊',
    tech: [
    "AWS Services", 
    "Bedrock",
    "Guardrails",
    "Lambda",
    "Amason Nova Pro",
    "LangGraph",
    "LangSmith",
    "SQL lite"
  ],
    category: 'Full-Stack',
    github: 'https://github.com/Dhaneshvar/Vitteey-Sahaayak',
    demo: 'https://github.com/Dhaneshvar/Vitteey-Sahaayak',
    stars: 198,
    forks: 43,
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'Gen AI', label: 'Gen AI', icon: Cpu },
  { id: 'Full-Stack', label: 'Full-Stack', icon: Code2 },
  { id: 'Enterprise', label: 'Enterprise', icon: Cloud },
];

const MAX_VISIBLE_PROJECTS = 10;
const GITHUB_PROFILE_URL = 'https://github.com/dhaneshvar'; // Replace with your GitHub profile

const ProjectsVault = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const filtered = activeCategory === 'all' 
      ? projects 
      : projects.filter(p => p.category === activeCategory);
    return filtered.slice(0, MAX_VISIBLE_PROJECTS);
  }, [activeCategory]);

  const totalProjects = activeCategory === 'all' 
    ? projects.length 
    : projects.filter(p => p.category === activeCategory).length;

  const hasMoreProjects = totalProjects > MAX_VISIBLE_PROJECTS;

  return (
    <section id="projects-vault" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 05
          </span>
          <h2 className="section-title">Projects Vault</h2>
          <p className="section-subtitle">Enterprise-Grade Solutions</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative group"
              >
                <div className={`
                  card-cyber rounded-xl overflow-hidden h-full
                  ${project.featured ? 'ring-1 ring-hud-gold/30' : ''}
                `}>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-1 text-xs font-mono bg-hud-gold/20 text-hud-gold border border-hud-gold/50 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project image/icon */}
                  <div className="relative h-40 bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <span className="text-6xl">{project.image}</span>
                    
                    {/* Holographic overlay on hover */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20
                      transition-opacity duration-300
                      ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                    `} />
                    
                    {/* Scan line */}
                    <div className={`
                      absolute inset-0 overflow-hidden pointer-events-none
                      ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[matrix-fall_2s_linear_infinite]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats & Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 text-hud-gold" />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork className="w-3 h-3" />
                          {project.forks}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Button
            asChild
            variant="outline"
            className="group gap-2 px-6 py-3 border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="font-mono">View More on GitHub</span>
              {hasMoreProjects && (
                <span className="text-xs text-muted-foreground ml-1">
                  (+{totalProjects - MAX_VISIBLE_PROJECTS} more)
                </span>
              )}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsVault;
