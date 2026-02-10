import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/effects/LoadingScreen';
import MatrixRain from '@/components/effects/MatrixRain';
import ParticleField from '@/components/effects/ParticleField';
import CustomCursor from '@/components/effects/CustomCursor';
import ChapterProgress from '@/components/effects/ChapterProgress';
import AchievementNotification from '@/components/effects/AchievementNotification';
import ScrollToTop from '@/components/effects/ScrollToTop';
import CommandCenter from '@/components/chapters/CommandCenter';
import NetworkHub from '@/components/chapters/NetworkHub';
import CareerTimeline from '@/components/chapters/CareerTimeline';
import CertificationsVault from '@/components/chapters/CertificationsVault';
import ProjectsVault from '@/components/chapters/ProjectsVault';
import AchievementsArmory from '@/components/chapters/AchievementsArmory';
import SkillsRadar from '@/components/chapters/SkillsRadar';
import WorkExperience from '@/components/chapters/WorkExperience';
import TechInsights from '@/components/chapters/TechInsights';
import PersonalityQuadrant from '@/components/chapters/PersonalityQuadrant';
import MissionControl from '@/components/chapters/MissionControl';

const chapters = [
  { id: 'command-center', name: 'Command Center' },
  { id: 'network-hub', name: 'Network Hub' },
  { id: 'work-experience', name: 'Work Experience' },
  { id: 'career-timeline', name: 'Education' },
  { id: 'certifications-vault', name: 'Certifications' },
  { id: 'projects-vault', name: 'Projects Vault' },
  { id: 'achievements-armory', name: 'Achievements' },
  { id: 'skills-radar', name: 'Skills Radar' },
  { id: 'tech-insights', name: 'Tech Insights' },
  { id: 'personality-quadrant', name: 'Personality' },
];

const achievements = [
  { id: 'welcome', title: 'Mission Initiated', description: 'Started exploring the portfolio', icon: 'zap' as const },
  { id: 'projects', title: 'Project Explorer', description: 'Viewed the projects vault', icon: 'eye' as const },
  { id: 'skills', title: 'Skills Analyzed', description: 'Checked out the skills radar', icon: 'target' as const },
  { id: 'contact', title: 'Ready to Connect', description: 'Reached the contact section', icon: 'trophy' as const },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [currentAchievement, setCurrentAchievement] = useState<typeof achievements[0] | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const unlockAchievement = useCallback((id: string) => {
    setUnlockedAchievements((prev) => {
      if (prev.includes(id)) return prev;

      const achievement = achievements.find((a) => a.id === id);
      if (achievement) setCurrentAchievement(achievement);

      return [...prev, id];
    });
  }, []);

  useEffect(() => {
    // Unlock welcome achievement on load
    setTimeout(() => unlockAchievement('welcome'), 2000);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Set up intersection observer for chapters (after the loading screen is gone,
    // so the sections actually exist in the DOM)
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleIndex = -1;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = chapters.findIndex((c) => c.id === entry.target.id);
          if (index === -1) continue;

          if (entry.intersectionRatio >= maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleIndex = index;
          }
        }

        if (mostVisibleIndex !== -1) {
          setCurrentChapter(mostVisibleIndex);

          // Unlock achievements based on chapter
          const chapterId = chapters[mostVisibleIndex].id;
          if (chapterId === 'projects-vault') unlockAchievement('projects');
          if (chapterId === 'skills-radar') unlockAchievement('skills');
          if (chapterId === 'personality-quadrant') unlockAchievement('contact');
        }
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: '-15% 0px -55% 0px',
      }
    );

    observerRef.current = observer;

    const raf = requestAnimationFrame(() => {
      chapters.forEach((chapter) => {
        const element = document.getElementById(chapter.id);
        if (element) observer.observe(element);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      if (observerRef.current === observer) observerRef.current = null;
    };
  }, [isLoading, unlockAchievement]);

  const scrollToChapter = (index: number) => {
    const element = document.getElementById(chapters[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Site */}
      {!isLoading && (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
          {/* Background Effects */}
          <MatrixRain />
          <ParticleField />
          
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Chapter Progress */}
          <ChapterProgress
            currentChapter={currentChapter}
            totalChapters={chapters.length}
            chapterNames={chapters.map((c) => c.name)}
            onChapterClick={scrollToChapter}
          />

          {/* Achievement Notifications */}
          <AchievementNotification
            achievement={currentAchievement}
            onDismiss={() => setCurrentAchievement(null)}
          />

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Main Content */}
          <main className="relative z-10">
            <CommandCenter />
            <NetworkHub />
            <WorkExperience />
            <CareerTimeline />
            <CertificationsVault />
            <ProjectsVault />
            <AchievementsArmory />
            <SkillsRadar />
            <TechInsights />
            <PersonalityQuadrant />
            <MissionControl />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
