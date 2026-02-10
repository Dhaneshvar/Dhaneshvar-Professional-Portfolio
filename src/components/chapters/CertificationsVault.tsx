import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const certifications = [
  { 
    name: 'Quantum Computing Fundamentals', 
    provider: 'EdX', 
    year: '2026',
    credentialUrl: '#',
    description: 'InProgress',
    skills: ['Qiskit', 'Quantum Gates', 'Entanglement']
  },
  { 
    name: 'IT Specialist - Artificial Intelligence', 
    provider: 'Certiport - A Pearson VUE Business', 
    year: '2024',
    credentialUrl: 'https://www.credly.com/badges/e3f2ecaf-c5dc-4afd-a1e5-243f52d036f1',
    description: 'Artificial Intelligence',
    skills: ['AI', 'ML', 'MLOps', 'DL']
  },
  { 
    name: 'Microsoft Certified: Azure AI Engineer Associate', 
    provider: 'AWS', 
    year: '2024',
    credentialUrl: '#6ED1A76182E3D85C',
    description: 'Microsoft Certified: Azure AI Engineer Associate',
    skills: ['Azure Cognitive Services', 'Azure Open AI Services']
  },
  { 
    name: 'Academy Accreditation - Generative AI Fundamentals', 
    provider: 'Databricks', 
    year: '2024',
    credentialUrl: 'https://credentials.databricks.com/d8bbd517-6f4f-441c-8bf6-c4705ecd88e8',
    description: 'Academy Accreditation - Generative AI Fundamentals',
    skills: ['Generative AI', 'Vector DB', 'GANs']
  },
  { 
    name: 'Microsoft Certified: Power Platform Fundamentals', 
    provider: 'Microsoft', 
    year: '2023',
    credentialUrl: 'https://www.credly.com/badges/7ea0c87c-ad68-4f32-bba9-eb363d23b6d4/linked_in_profile',
    description: 'Microsoft Certified: Power Platform Fundamentals',
    skills: ['Power Platform', 'Services', 'Apps']
  },
  { 
    name: 'MTA: Introduction to Programming Using JavaScript - Certified 2021', 
    provider: 'Microsoft', 
    year: '2021',
    credentialUrl: 'https://www.credly.com/badges/4a3a1b6f-1861-4c46-b247-e72730a8852a/linked_in_profile',
    description: 'MTA: Introduction to Programming Using JavaScript - Certified 2021',
    skills: ['JavaScript',]
  },
];

const CertificationsVault = () => {
  return (
    <section id="certifications-vault" className="relative min-h-screen py-20">
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
          <h2 className="section-title">Certifications Vault</h2>
          <p className="section-subtitle">Credentials & Professional Development</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full card-cyber rounded-xl p-4 md:p-5 border border-border/50 hover:border-secondary/50 transition-all duration-300 bg-gradient-to-br from-card via-card to-secondary/5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 hover:bg-secondary/20 transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </a>
                </div>

                {/* Title & Provider */}
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {cert.provider}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] md:text-xs font-mono bg-secondary/10 text-secondary border border-secondary/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="card-cyber rounded-xl p-4 md:p-6 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">{certifications.length}+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">Certifications</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">4</div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">Cloud Platforms</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">Skills Verified</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-hud-gold">100+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">Learning Hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsVault;
