import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Rocket } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset launching state after animation
    setTimeout(() => setIsLaunching(false), 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary/30 transition-colors" />
          
          {/* Main button */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-card via-muted to-card border-2 border-primary/50 group-hover:border-primary flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg shadow-primary/20">
            {/* Scan line effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ y: [-20, 60] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            {/* Background pulse */}
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Icon */}
            <motion.div
              animate={isLaunching ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {isLaunching ? (
                <Rocket className="w-6 h-6 text-primary rotate-[-45deg]" />
              ) : (
                <ChevronUp className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              )}
            </motion.div>

            {/* Hover background fill */}
            <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
          </div>

          {/* Tooltip - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
          >
            <span className="text-xs font-mono text-primary">WARP TO TOP</span>
          </motion.div>

          {/* Exhaust particles when launching */}
          <AnimatePresence>
            {isLaunching && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      y: 0, 
                      x: 0, 
                      opacity: 1, 
                      scale: 1 
                    }}
                    animate={{ 
                      y: [0, 30 + i * 8], 
                      x: [(i % 2 === 0 ? -1 : 1) * (5 + i * 2)], 
                      opacity: [1, 0],
                      scale: [1, 0.3]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-primary"
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;