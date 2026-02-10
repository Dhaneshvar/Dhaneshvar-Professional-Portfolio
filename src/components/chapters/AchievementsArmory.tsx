import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Zap, Calendar } from 'lucide-react';

const hackathons = [
  {
    id: 'IBM_Call_For_Code_2025',
    title: 'IBM Call For Code 2025',
    position: '2nd Runner up',
    description: 'It helps reduces the gap between incident detection and emergency action from minutes to seconds. It’s is an autonomous, multi-agent AI framework that detects, analyzes, and communicates critical incidents to authorities with intelligent coordination. Built on IBM watsonx.ai and IBM watsonx Orchestrate, Alert X integrates visual understanding, contextual reasoning, and natural interaction into one continuous workflow.',
    prize: '$10,000',
    tech: ['IBM Orchestrate', 'watsonx.AI', 'LangChain', 'React', 'Agentic AI'],
    date: 'Oct 2025 - Dec 2025',
  },
  {
    id: 'FourSquare Places API Hackathon',
    title: 'FourSquare Places API Hackathon',
    position: '1st Place',
    description: '𝐋𝐨𝐨𝐤𝐚𝐭𝐞 aimed to redefine contextual, agentic ai applications by blending Gen AI and location intelligence.',
    prize: '$5,000',
    tech: ['Python', 'FSQ Places API ', 'Rest API', 'Gen AI', 'Agentic AI'],
    date: 'Sept 2025',
  },
  {
    id: 'google-ai-2025',
    title: 'Google Agentic AI Hackathon',
    position: 'Finalist',
    description: 'Created an accessibility-focused AI tool that converts complex documents into easy-to-understand summaries for diverse audiences.',
    tech: ['Gemini', 'ReactJs', 'Firebase', 'Google ADK', 'Agentic AI'],
    date: 'July 2025',
  },
  // {
  //   id: 'aws-build',
  //   title: 'AWS Build Day',
  //   position: 'Winner',
  //   description: 'Architected a serverless cost optimization platform that reduced cloud spending by 40% through ML-based recommendations.',
  //   prize: '$3,000',
  //   tech: ['AWS', 'Lambda', 'SageMaker'],
  //   date: 'Aug 2025',
  // },
  // {
  //   id: 'mlh',
  //   title: 'MLH Global Hack',
  //   position: 'Best AI Project',
  //   description: 'Built a real-time language translation system with low latency for cross-cultural business communication.',
  //   tech: ['PyTorch', 'WebRTC', 'Node.js'],
  //   date: 'Jun 2025',
  // },
];

const certifications = [
  {
    id: 'aws-dev',
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    logo: '☁️',
    color: 'from-orange-400 to-orange-600',
    year: '2024',
  },
  {
    id: 'gcp-ml',
    name: 'GCP Professional ML Engineer',
    issuer: 'Google Cloud',
    logo: '🧠',
    color: 'from-blue-400 to-green-400',
    year: '2024',
  },
  {
    id: 'ibm-mainframe',
    name: 'IBM Certified Mainframe Developer',
    issuer: 'IBM',
    logo: '🏢',
    color: 'from-blue-500 to-blue-700',
    year: '2023',
  },
  {
    id: 'quantum',
    name: 'Quantum Computing Fundamentals',
    issuer: 'EdX / MIT',
    logo: '⚛️',
    color: 'from-purple-400 to-pink-500',
    year: '2024',
  },
  {
    id: 'kubernetes',
    name: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    logo: '🚢',
    color: 'from-blue-400 to-cyan-400',
    year: '2023',
  },
  {
    id: 'terraform',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    logo: '🏗️',
    color: 'from-purple-500 to-purple-700',
    year: '2023',
  },
  {
    id: 'azure',
    name: 'Azure Solutions Architect',
    issuer: 'Microsoft',
    logo: '💎',
    color: 'from-blue-500 to-cyan-500',
    year: '2023',
  },
  {
    id: 'deeplearning',
    name: 'Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    logo: '🔮',
    color: 'from-red-400 to-pink-500',
    year: '2022',
  },
  {
    id: 'python',
    name: 'Python Professional Certificate',
    issuer: 'Python Institute',
    logo: '🐍',
    color: 'from-yellow-400 to-green-500',
    year: '2022',
  },
  {
    id: 'security',
    name: 'AWS Security Specialty',
    issuer: 'Amazon Web Services',
    logo: '🔒',
    color: 'from-red-500 to-orange-500',
    year: '2024',
  },
  {
    id: 'dataeng',
    name: 'GCP Data Engineer',
    issuer: 'Google Cloud',
    logo: '📊',
    color: 'from-green-400 to-blue-500',
    year: '2023',
  },
  {
    id: 'scrum',
    name: 'Professional Scrum Master',
    issuer: 'Scrum.org',
    logo: '🔄',
    color: 'from-cyan-400 to-blue-500',
    year: '2022',
  },
];

const AchievementsArmory = () => {
  return (
    <section id="achievements-armory" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 05
          </span>
          <h2 className="section-title">Achievements Armory</h2>
          <p className="section-subtitle">Victories & Credentials</p>
        </motion.div>

        {/* Hackathon Victories */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-lg bg-hud-gold/20 border border-hud-gold/50 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-hud-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Hackathon Victories</h3>
              <p className="text-sm text-muted-foreground font-mono">30+ Hackathons • 99+ Tech Events</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hack, index) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber rounded-xl p-6 relative overflow-hidden group"
              >
                {/* Trophy glow effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-hud-gold/10 rounded-full blur-3xl group-hover:bg-hud-gold/20 transition-colors" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-hud-gold transition-colors">
                        {hack.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{hack.date}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-sm font-bold bg-hud-gold/20 text-hud-gold rounded-full whitespace-nowrap">
                      {hack.position}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {hack.description}
                  </p>

                  {hack.prize && (
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-hud-gold" />
                      <span className="text-sm font-bold text-hud-gold">{hack.prize}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {hack.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Arsenal */}
        {/* <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Certifications Arsenal</h3>
              <p className="text-sm text-muted-foreground font-mono">12+ Professional Certifications</p>
            </div>
          </motion.div>

          //  Certification Carousel/Grid 
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-cyber rounded-xl p-4 text-center group cursor-pointer"
                >
                  <div className={`
                    w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center
                    bg-gradient-to-br ${cert.color}
                    group-hover:shadow-lg transition-shadow
                  `}>
                    <span className="text-2xl">{cert.logo}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono text-primary mt-2">
                    {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */ }
      </div>
    </section>
  );
};

export default AchievementsArmory;
