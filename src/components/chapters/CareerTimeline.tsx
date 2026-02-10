import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronDown } from 'lucide-react';

const education = [
  {
    id: 'btech',
    degree: 'B.Tech. Computer Science',
    institution: 'Sri Manakula Vinayagar Engineering College',
    year: '2020 - 2024',
    // grade: '8.5 CGPA',
    highlights: [ 'Academic Top Performer','Problem-Solving Mindset', 'Hackathon Winner'],
  },
  {
    id: '12th',
    degree: '12th Grade (Higher Secondary)',
    institution: 'Petit Seminaire Higher Secondary School',
    year: '2018 - 2020',
    // grade: '85%',
  highlights: ['Ramanujan Award – Mathematics (Class XII)'],
  },
  {
    id: '10th',
    degree: '10th Grade (Secondary)',
    institution: 'Petit Seminaire Higher Secondary School',
    year: '2018',
    // grade: '92%',
    highlights: ['National and State-Level Winner in Yoga', 'Top Academic Performer',],
  },
];

const CareerTimeline = () => {
  const [expandedEducation, setExpandedEducation] = useState<string | null>('btech');

  return (
    <section id="career-timeline" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 04
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic Foundation</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Academic Journey</h3>
                <p className="text-xs text-muted-foreground font-mono">Foundation Layer</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />
                  )}

                  <div
                    className={`card-cyber rounded-lg p-4 md:p-5 cursor-pointer transition-all ${
                      expandedEducation === edu.id ? 'border-accent/50' : ''
                    }`}
                    onClick={() => setExpandedEducation(expandedEducation === edu.id ? null : edu.id)}
                  >
                    <div className="flex items-start gap-4">
                      {/* <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent">{edu.grade.split(' ')[0]}</span>
                      </div> */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-foreground text-base md:text-lg">{edu.degree}</h4>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                              expandedEducation === edu.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs font-mono text-accent mt-1">{edu.year}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedEducation === edu.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border/50">
                            <div className="flex flex-wrap gap-2">
                              {edu.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
