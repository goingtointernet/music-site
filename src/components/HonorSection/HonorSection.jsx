"use client"

import { useRef, useEffect } from "react"

export default function HonorSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="honor"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden opacity-0 transform translate-y-10 transition-all duration-1000 z-[20]"
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 opacity-40 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-black/30 p-12 md:p-16 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] text-center">
          <h2 className="text-[2.2rem] md:text-[4rem] font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            HONOR
          </h2>

          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            <span className="text-gray-400">Odd Good Times, </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-medium">
             Even On Bad Days
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
