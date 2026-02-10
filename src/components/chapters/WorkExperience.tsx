import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, ChevronDown, MapPin, Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const workExperience = [
  {
    id: 'current',
    company: 'Unisys India Pvt. Ltd.',
    role: 'Software Engineer',
    period: '2024 - Present',
    location: 'Bangalore, India',
    logo: '🏢',
    color: 'from-primary to-neon-cyan',
    teamSize: 35,
   impact: '+25% Platform Efficiency',
  description: 'Developed and enhanced AI-driven full-stack features with a focus on performance and reliability.',
  responsibilities: [
    'Designed and implemented AI-enabled application features used by thousands of users',
    'Built scalable frontend and backend components using React and Python',
    'Optimized application performance and reduced cloud resource usage',
    'Collaborated with cross-functional teams to deliver features end-to-end',
  ],
  technologies: ['Generative AI', 'AI Agents', 'React', 'Python', 'LangChain'],
  metrics: [
    { label: 'Active Users', value: '3K+' },
    { label: 'Performance Gain', value: '25%' },
    { label: 'Deployment Time', value: 'Minutes' },
  ],
  },
  {
    id: 'unisys',
    company: 'Unisys India Pvt. Ltd.',
    role: 'Intern',
    period: '2023 - 2024',
    location: 'Bangalore, India',
    logo: '🌐',
    color: 'from-blue-400 to-cyan-400',
    teamSize: 20,
  impact: 'Contributed to Frontend and GenAI-driven Enhancements',
  description: 'Frontend-focused intern at Unisys, working on React-based enterprise applications with exposure to Generative AI integrations.',
  responsibilities: [
    'Developed and enhanced React components for enterprise web applications',
    'Integrated frontend features with GenAI-powered backend services',
    'Implemented state management and UI logic using Redux',
    'Collaborated with backend and AI teams to consume APIs and display AI-generated insights',
    'Participated in code reviews, testing, and documentation within an agile team',
  ],
  technologies: ['ReactJS', 'Redux', 'JavaScript', 'GenAI', 'REST APIs', 'Jest', 'Jira'],
  metrics: [
    { label: 'UI Features Delivered', value: '10+' },
    { label: 'AI Integrations', value: 'Multiple' },
    { label: 'Team Size', value: '20' },
  ],
  },
  // {
  //   id: 'previous',
  //   company: 'Previous Company',
  //   role: 'Software Engineer',
  //   period: '2020 - 2022',
  //   location: 'Remote',
  //   logo: '💻',
  //   color: 'from-accent to-plasma-green',
  //   teamSize: 8,
  //   impact: '15+ Apps Delivered',
  //   description: 'Full-stack development with focus on scalable web applications.',
  //   responsibilities: [
  //     'Built 15+ full-stack applications from concept to production deployment',
  //     'Implemented CI/CD pipelines reducing deployment time by 60%',
  //     'Created reusable component library adopted across 10+ projects',
  //     'Optimized database queries improving page load times by 50%',
  //     'Integrated third-party APIs including payment gateways and analytics',
  //   ],
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Redis'],
  //   metrics: [
  //     { label: 'Apps Built', value: '15+' },
  //     { label: 'Deployment Speed', value: '+60%' },
  //     { label: 'Performance Boost', value: '+50%' },
  //   ],
  // },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 03
          </span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Professional Experience in Detail</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="current" className="space-y-4">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={exp.id} className="card-cyber rounded-xl border-0 overflow-hidden">
                  <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                    <div className="flex items-start gap-3 md:gap-4 w-full text-left">
                      {/* Company Logo */}
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-xl md:text-2xl">{exp.logo}</span>
                      </div>

                      {/* Company Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-foreground">{exp.company}</h3>
                        <p className="text-primary font-medium text-sm">{exp.role}</p>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            Team of {exp.teamSize}
                          </span>
                        </div>

                        {/* Impact badge */}
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs font-mono rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            {exp.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4 md:space-y-6">
                      {/* Description */}
                      <p className="text-sm text-muted-foreground">{exp.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 md:gap-4">
                        {exp.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="text-center p-2 md:p-4 bg-muted/30 rounded-lg"
                          >
                            <div className="text-lg md:text-2xl font-bold text-primary font-mono">
                              {metric.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-muted-foreground mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
