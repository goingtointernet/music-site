'use client';

import { useEffect, useRef, useState } from 'react';
export default function HomeHero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    let observer;
    
    // Setup Intersection Observer to detect when hero is in view
    observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (section) {
      observer.observe(section);
    }
    
    // Function to handle scroll
    const handleScroll = () => {
      if (isVisible) {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // Calculate parallax positions
  const backgroundTranslateY = 0; // Slower movement for background
  
  return (
    <section 
      ref={sectionRef}
      className="relative h-[calc(100vh-45px)] w-full flex justify-center items-center overflow-hidden"
    >
      {/* Solid black background (bottom layer) */}
      <div className="absolute inset-0 bg-black"></div>
      <div className='flex justify-center mt-[40px] items-center w-[70%] h-[60%] z-20 relative'>
        <img src="/images/logo.png" alt='logo' className='w-full h-full object-contain floating' />
      </div>

      
    </section>
  );
}