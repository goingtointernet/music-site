'use client';

import { useEffect, useRef, useState } from 'react';
import { ShootingStars } from '../ShootingStar/ShootingStar';
import { StarsBackground } from '../StarsBackground/StarsBackground';

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
        className="absolute inset-0 bg-cover bg-top z-10"
        style={{
          backgroundImage: 'url(/images/main3.jpg)',
          transform: `translateY(${backgroundTranslateY}px)`,
          transition: 'transform 0.1s ease-out',
          mixBlendMode:"screen"
        }}
      />

      <ShootingStars />
      <StarsBackground />
    </section>
  );
}