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
  const audienceTranslateY = 0; // Increased movement rate for more dramatic effect
  
  return (
    <section 
      ref={sectionRef}
      className="relative h-[calc(100vh-45px)] w-full overflow-hidden"
    >
      {/* Solid black background (bottom layer) */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: 'url(/images/main.webp)',
          transform: `translateY(${backgroundTranslateY}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20" />
      
      {/* <div className='absolute bottom-0 left-0 md:h-[24vh] w-full bg-black z-[11]'></div> */}
      {/* Audience image with parallax effect - positioned relative to viewport */}
      <div
        className="absolute bottom-[-20%] left-0 z-10 h-full w-full hidden md:block floating"
        style={{
          transform: `translateY(${audienceTranslateY}px)`,
          backgroundImage: 'url(/images/bg1.png)',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto', // Full width, auto height to maintain aspect ratio
          transition: 'transform 0.1s ease-out',
        }}
      />
    </section>
  );
}