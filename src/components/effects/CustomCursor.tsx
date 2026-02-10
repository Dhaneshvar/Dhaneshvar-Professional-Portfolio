import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  
  const ringX = useSpring(0, { stiffness: 300, damping: 20 });
  const ringY = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInputElement = 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable;
      
      // Hide custom cursor when over input fields
      if (isInputElement) {
        setIsVisible(false);
      }
      
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isPointer ? 8 : 6,
            height: isPointer ? 8 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border-2 border-primary"
          animate={{
            width: isPointer ? 50 : 40,
            height: isPointer ? 50 : 40,
            opacity: isVisible ? 0.5 : 0,
            scale: isPointer ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Crosshair lines when not hovering */}
      {!isPointer && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <motion.div
              className="absolute w-6 h-[1px] bg-primary/50"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ opacity: isVisible ? 0.5 : 0 }}
            />
            <motion.div
              className="absolute w-[1px] h-6 bg-primary/50"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ opacity: isVisible ? 0.5 : 0 }}
            />
          </motion.div>
        </>
      )}

      {/* Hide default cursor - except for input elements */}
      <style>{`
        @media (hover: hover) {
          body, body * {
            cursor: none;
          }
          input, 
          textarea, 
          select, 
          [contenteditable="true"],
          input *,
          textarea *,
          .form-input,
          [type="text"],
          [type="email"],
          [type="password"],
          [type="search"],
          [type="tel"],
          [type="url"] {
            cursor: text !important;
          }
          a, button, [role="button"] {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
