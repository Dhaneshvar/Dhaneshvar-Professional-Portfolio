import { motion } from 'framer-motion';

interface ChapterProgressProps {
  currentChapter: number;
  totalChapters: number;
  chapterNames: string[];
  onChapterClick: (index: number) => void;
}

const ChapterProgress = ({
  currentChapter,
  totalChapters,
  chapterNames,
  onChapterClick,
}: ChapterProgressProps) => {
  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
        <motion.div
          className="h-full progress-fill"
          style={{
            width: `${((currentChapter + 1) / totalChapters) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Chapter Counter */}
      <div className="fixed top-4 left-4 z-50 hidden md:block">
        <motion.div
          className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-md border border-border/50 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xs font-mono text-muted-foreground">CHAPTER</span>
          <span className="text-lg font-mono font-bold text-primary">
            {String(currentChapter + 1).padStart(2, '0')}
          </span>
          <span className="text-xs font-mono text-muted-foreground">/ {String(totalChapters).padStart(2, '0')}</span>
        </motion.div>
      </div>

      {/* Side Navigation Dots */}
      <div className="chapter-indicator hidden md:flex">
        {chapterNames.map((name, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => onChapterClick(index)}
              className={`chapter-dot ${index === currentChapter ? 'active' : ''}`}
              aria-label={`Go to ${name}`}
            />
            {/* Tooltip */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="px-3 py-1 bg-card border border-primary/30 rounded text-xs font-mono text-primary whitespace-nowrap">
                {name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/90 backdrop-blur-md border-t border-border/50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => onChapterClick(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            className="px-3 py-1 text-sm font-mono text-primary disabled:text-muted-foreground disabled:opacity-50"
          >
            ← PREV
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">
              {chapterNames[currentChapter]}
            </span>
            <span className="text-sm font-mono font-bold text-primary">
              {currentChapter + 1}/{totalChapters}
            </span>
          </div>
          <button
            onClick={() => onChapterClick(Math.min(totalChapters - 1, currentChapter + 1))}
            disabled={currentChapter === totalChapters - 1}
            className="px-3 py-1 text-sm font-mono text-primary disabled:text-muted-foreground disabled:opacity-50"
          >
            NEXT →
          </button>
        </div>
      </div>
    </>
  );
};

export default ChapterProgress;
