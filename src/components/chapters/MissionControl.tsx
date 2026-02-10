import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Eye,
  Github,
  Linkedin,
  Youtube
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const MissionControl = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer id="mission-control" className="relative py-16 bg-gradient-to-t from-background via-card/50 to-transparent">
      <div className="container mx-auto px-4">
        {/* Analytics Info Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-lg mx-auto"
        >
          <div className="card-cyber rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-foreground">Analytics Enabled</span>
            </div>
            <p className="text-xs text-muted-foreground">
              View detailed visitor stats in your Google Analytics dashboard
            </p>
          </div>
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-cyber rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Get in Touch</h3>
                  <p className="text-xs text-muted-foreground">I'll respond within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-primary font-mono">Message sent successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Your message..."
                      required
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cyber-button flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="card-cyber rounded-xl p-5">
              <h3 className="text-lg font-bold text-foreground mb-4">Currently Available For</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Full-time opportunities
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Freelance projects
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Consulting & mentorship
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Open source collaboration
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Hackathons Collaborations
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-cyber rounded-xl p-5">
              <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/dhaneshvar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/dhaneshvar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.youtube.com/@DhaneshvarMaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="mailto:dhaneshvartech@gmail.com"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
         <div className="text-sm font-mono text-muted-foreground">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Dhaneshvar. All rights reserved.
          </p>
          <p>Designed and developed with passion.</p>
        </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MissionControl;
