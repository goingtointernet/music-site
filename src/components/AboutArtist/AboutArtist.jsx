"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AboutArtist() {
  const statsRef = useRef(null)
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

    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll(".stat-item")
      statElements.forEach((el) => observer.observe(el))
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="artists" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

      <div
        ref={sectionRef}
        className=" max-w-[1250px] mx-auto relative z-10 opacity-0 transform translate-y-10 transition-all duration-1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 border border-white/20 rounded-xl transform rotate-3 z-0"></div>
              <div className="absolute inset-0 border border-white/30 rounded-xl transform -rotate-3 z-0"></div>
              <div className="absolute inset-0 rounded-xl overflow-hidden z-10">
                <Image src="/images/logo.png" alt="Forallus. V.A" fill className="object-contain m-auto !w-[70%] !h-[70%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Glowing effect */}
              <div className="absolute -inset-2 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="md:col-span-7 space-y-4 md:space-y-6">
            <h2 className="text-[2.2rem] md:text-[4rem] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              About The Artists
            </h2>

            <div className="space-y-6 text-gray-300 backdrop-blur-md bg-black/20 p-8 rounded-xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.03)]">
             <p className="text-lg"> I go by FORALLUS. V.A — not everyone needs to know who I am. My identity isn&apos;t the story. The music is. </p>
             <p className="text-lg"> I come from nowhere and everywhere. The underground shaped me. The noise, the silence, the chaos — it&apos;s all part of what I create. Every sound I release is a piece of something real. Emotional. Raw. Honest. </p>
             <p className="text-lg"> I&apos;ve performed for thousands, but I&apos;ve never needed a spotlight. What matters is the energy — the connection. If you&apos;ve felt it, you know what I mean. </p>
             <p className="text-lg"> I make music, art, and statements. Not just for the moment, but for the ones who see the bigger picture. This isn&apos;t about fame — it&apos;s about feeling. And I&apos;m just getting started. </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              <div className="stat-item opacity-0 transform translate-y-10 transition-all duration-700 delay-100 backdrop-blur-md bg-black/30 px-4 py-6 md:p-6  rounded-xl border border-white/10 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all group">
                <span className="block text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all duration-300">
                  100B+
                </span>
                <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
                  STREAMS
                </span>
              </div>

              <div className="stat-item opacity-0 transform translate-y-10 transition-all duration-700 delay-200 backdrop-blur-md bg-black/30 px-4 py-6 md:p-6 rounded-xl border border-white/10 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all group">
                <span className="block text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all duration-300">
                  100+
                </span>
                <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">SHOWS</span>
              </div>

              <div className="stat-item opacity-0 transform translate-y-10 transition-all duration-700 delay-300 backdrop-blur-md bg-black/30 px-4 py-6 md:p-6  rounded-xl border border-white/10 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all group">
                <span className="block text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all duration-300">
                  7+
                </span>
                <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">ALBUMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
