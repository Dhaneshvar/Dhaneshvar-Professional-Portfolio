import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Mic, Heart, ChevronRight } from 'lucide-react';

const quadrants = [
  {
    id: 'professional',
    label: 'Professional',
    icon: Briefcase,
    color: 'from-primary to-neon-cyan',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/50',
    content: {
      title: 'Enterprise Systems Builder',
      description: 'Experienced in delivering reliable, scalable enterprise systems with a strong focus on migration, performance, and long-term maintainability.',
      highlights: [
        'Enterprise application development & delivery',
        'Cloud-native backend design & optimization',
        'Technical ownership and peer mentoring',
        'Task-oriented and design-focused developer committed to reusable code'
      ],
      caseStudies: [
        { title: 'AI Agent Platform', result: 'Production system handling high-volume requests' },
        { title: 'Mainframe Modernization', result: 'Legacy workloads migrated to cloud-based services' },
        { title: 'Cloud Cost Optimization', result: 'Improved performance with reduced infrastructure spend' },
      ],
    },
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: Sparkles,
    color: 'from-fuchsia-400 to-pink-400',
    bgColor: 'bg-fuchsia-400/10',
    borderColor: 'border-fuchsia-400/50',
    content: {
      title: 'Innovation Explorer',
      description: 'Exploring creative applications of emerging technologies to build meaningful and future-ready solutions.',
      highlights: [
        'IoT + Machine Learning for Health Monitoring',
        'Technology for Circular Economy & Sustainability',
        'Health Avatar System powered by Generative AI',
        'AI-Driven Yoga & Wellness Platform',
      ],
      caseStudies: [
        { title: 'Health Avatar AI', result: 'Personalized, multi-channel health insights' },
        { title: 'Sustainability IoT', result: 'Smart monitoring for eco-friendly systems' },
        { title: 'AI Yoga Platform', result: 'Real-time posture analysis & feedback' },
      ],
    },
  },
  {
    id: 'evangelist',
    label: 'Tech Evangelist',
    icon: Mic,
    color: 'from-hud-gold to-orange-400',
    bgColor: 'bg-hud-gold/10',
    borderColor: 'border-hud-gold/50',
    content: {
      title: 'Knowledge Sharer',
      description: 'Passionate about sharing knowledge through writing, demos, and active participation in the tech community.',
      highlights: [
        'Technical Blogging (AI & Full-Stack)',
        'YouTube Demo Videos on AI Projects',
        'Open Source Contributor',
        'Active Hackathon Participant',
        'Regular Attendee at Weekend Tech Meetups & Events',
      ],
      caseStudies: [
        { title: 'Published Articles', result: '2+ blog posts' },
        { title: 'Demo & Video Content', result: 'AI project walkthroughs' },
        { title: 'Community Engagement', result: 'Hackathons & meetups participated' },
      ],
    },
  },
  {
    id: 'personal',
    label: 'Personal',
    icon: Heart,
    color: 'from-accent to-plasma-green',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/50',
    content: {
      title: 'Beyond the Code',
      description: 'A well-rounded individual who values balance, discipline, and continuous self-growth beyond technology.',
      highlights: [
        'Yoga & Meditation Practitioner',
        'Active Outdoor Sports Enthusiast',
        'Avid Movie Enthusiast',
        'Travel & Culture Explorer',
        'Food Lover with a Passion for Exploring Cuisines',
      ],
      caseStudies: [
        { title: 'Yoga Practice', result: '3+ years of consistent practice' },
        { title: 'Sports & Fitness', result: 'Regular participation in outdoor games' },
        { title: 'Travel & Exploration', result: 'Multiple places explored and counting' },
      ],
    },
  },
];

const PersonalityQuadrant = () => {
  const [activeQuadrant, setActiveQuadrant] = useState('professional');

  const currentQuadrant = quadrants.find((q) => q.id === activeQuadrant);

  return (
    <section id="personality-quadrant" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 09
          </span>
          <h2 className="section-title">Personality Quadrant</h2>
          <p className="section-subtitle">The Complete Picture</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quadrant Selector */}
            <div className="grid grid-cols-2 gap-4">
              {quadrants.map((quadrant, index) => {
                const IconComponent = quadrant.icon;
                const isActive = activeQuadrant === quadrant.id;

                return (
                  <motion.button
                    key={quadrant.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveQuadrant(quadrant.id)}
                    className={`
                      relative p-6 rounded-xl transition-all duration-300 text-left
                      ${quadrant.bgColor} border ${quadrant.borderColor}
                      ${isActive ? 'ring-2 ring-offset-2 ring-offset-background ring-primary' : 'hover:scale-105'}
                    `}
                  >
                    {/* Gradient overlay on active */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${quadrant.color} opacity-10 rounded-xl`} />
                    )}

                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${quadrant.color} flex items-center justify-center mb-4`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{quadrant.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {quadrant.content.title}
                      </p>

                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-3 h-3 rounded-full bg-accent"
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Content Display */}
            <motion.div
              key={activeQuadrant}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="card-cyber rounded-xl p-6 lg:p-8"
            >
              {currentQuadrant && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentQuadrant.color} flex items-center justify-center`}
                    >
                      <currentQuadrant.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {currentQuadrant.content.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {currentQuadrant.label} Zone
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {currentQuadrant.content.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {currentQuadrant.content.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="w-4 h-4 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Studies */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                      Featured
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {currentQuadrant.content.caseStudies.map((study, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-lg ${currentQuadrant.bgColor} border ${currentQuadrant.borderColor} text-center`}
                        >
                          <p className="text-xs text-muted-foreground mb-1">{study.title}</p>
                          <p className="text-sm font-bold text-foreground">{study.result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalityQuadrant;
