"use client"
import { useState, useEffect, useRef } from 'react';
import { ShootingStars } from '../ShootingStar/ShootingStar';
import { StarsBackground } from '../StarsBackground/StarsBackground';

export default function ModelAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Stats animation
  const [stats, setStats] = useState([
    { label: 'Projects', value: 0, target: 120 },
    { label: 'Clients', value: 0, target: 84 },
    { label: 'Awards', value: 0, target: 37 }
  ]);
  
  // Handle intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Start counting animation once visible
        animateStats();
        observer.unobserve(sectionRef.current);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Animate the stats counters
  const animateStats = () => {
    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(progress * stat.target)
        }))
      );
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
  };
  
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-t to-black from-[#111111] text-white pb-[120px] mt-[50px]">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image column with parallax effect */}
          <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gray-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-500 rounded-full opacity-20 animate-pulse" />
            
            <div className="relative aspect-square bg-black overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition duration-700">
              <img 
                src="/images/main2.jpg" 
                alt="Model Portrait" 
                className="w-full h-full object-cover z-10"
                style={{mixBlendMode:"screen"}}
              />
              <ShootingStars />
              <StarsBackground />
            </div>
          </div>
          
          {/* Content column with staggered fade-ins */}
          <div>
            <h2 className={`text-sm font-semibold text-gray-300 tracking-wider uppercase mb-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-300`}>
              About Me
            </h2>
            
            <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-500`}>
            Creating  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Musical Journeys</span>
            </h3>
            
            <div className={`prose prose-lg prose-invert max-w-none mb-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-700`}>
              <p>
              ith over a decade of dedication to music, I craft sounds that tell stories, evoke emotion, and connect with audiences on a deep level. From writing lyrics to producing beats, every note is a reflection of my journey and artistic vision.
              </p>
              <p className='mt-[20px]'>
              Each track is an exploration of rhythm and soul—whether I'm in the studio laying down vocals or performing live on stage, my goal is to move people through sound. Music isn’t just what I do, it's who I am.
              </p>
            </div>
            
            {/* Stats with counter animation */}
            {/* <div className={`grid grid-cols-3 gap-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-900`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}+</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div> */}
            
            {/* CTA Button with hover effect */}
            <div className={`mt-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-1000`}>
              <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium bg-white rounded-lg hover:bg-gray-300 transition-all duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-medium text-black">View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}