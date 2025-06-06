"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Spotlight } from "../ui/spotlight"
import Image from "next/image"

export default function YoutubeSlider() {
  const sectionRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

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

  const videos = [
    {
      id: "6EEW-9NDM5k", // Example YouTube ID
      title: "Coming soon",
      thumbnail: "/images/empty.jpg",
    },
    {
      id: "6EEW-9NDM5k", // Example YouTube ID
      title: "Coming soon",
      thumbnail: "/images/empty.jpg",
    },
    {
      id: "6EEW-9NDM5k", // Example YouTube ID
      title: "Coming soon",
      thumbnail: "/images/empty.jpg",
    },
    {
      id: "6EEW-9NDM5k", // Example YouTube ID
      title: "Coming soon",
      thumbnail: "/images/empty.jpg",
    },
    {
      id: "6EEW-9NDM5k", // Example YouTube ID
      title: "Coming soon",
      thumbnail: "/images/empty.jpg",
    },
  ]

  return (
    <>

      {activeVideo ? (
        <div className="mb-16 fixed flex justify-center items-center left-0 top-0 w-full h-full z-[5002] bg-black/80 backdrop-blur-sm">

          <div className="max-w-5xl mx-auto flex flex-col justify-center max-h-[80vh] w-[90%] h-full relative animate-fade-in">
            <button
              onClick={() => setActiveVideo(null)}
              className="bg-black/50 ml-auto backdrop-blur-md mb-[10px] p-2 rounded-full z-10 hover:bg-white/10 transition-colors border border-white/10"
            >
              <X size={20} className="text-white" />
            </button>
            <div className="relative pb-[45.25%] bg-black h-0 overflow-hidden rounded-xl border border-white/10 animate-scale-in shadow-[0_0_70px_rgba(255,255,255,0.05)]">
              {/* Left spotlight - fixed position, subtle animation */}
              <div className="spotlight fixed left-0 top-0 h-full w-1/3 pointer-events-none -z-10" aria-hidden="true">
                <div className="h-full w-full bg-gradient-to-r from-[#111111] to-transparent animate-spotlight-sweep"></div>
              </div>

              {/* Right spotlight - fixed position, subtle animation */}
              <div className="spotlight fixed right-0 top-0 h-full w-1/3 pointer-events-none -z-10" aria-hidden="true">
                <div className="h-full w-full bg-gradient-to-l from-[#111111] to-transparent animate-spotlight-sweep-right"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>
              {/* Decorative elements */}
              <Spotlight direction="left" className={"opacity-0  top-[-15%]"} />
              <Spotlight direction="right" className="right-[-140%] md:!right-[-86%] top-[-15%]" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center">
                <div className="inline-block relative">
                  {/* Light beam effect */}
                  <div className="light-beam absolute h-[150vh] w-[20px] bg-white/5 blur-xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-light-beam"></div>

                  {/* Main text with clean, minimal styling */}
                  <div className="overflow-hidden">
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-[600] tracking-widest  bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white uppercase relative animate-text-reveal opacity-0">
                      {/* Subtle text shadow */}
                      <span className="absolute -top-0.5 -left-0.5 text-gray-700/20 filter blur-sm">COMING SOON</span>

                      {/* Main text */}
                      <span className="relative">
                        COMING SOON
                      </span>
                    </h2>
                  </div>

                  {/* Minimal line effect */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-width-expand"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section
        id="videos"
        ref={sectionRef}
        className="py-24 px-4 relative overflow-hidden opacity-0 transform translate-y-10 transition-all duration-1000 z-[20]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>

        <div className="max-w-[1250px] mx-auto relative z-10">
          <h2 className="text-[2.2rem] md:text-[4rem] font-bold mb-7 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Music Videos
          </h2>

          <div className="relative">
            {/* Navigation buttons - visible on all devices */}
            <button
              ref={navigationPrevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-black/50 transition-all z-20"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              ref={navigationNextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-black/50 transition-all z-20"
              aria-label="Next video"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Swiper implementation */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              loop={true}
              centeredSlides={false}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current
              }}
              className="pb-8"
            >
              {videos.map((video) => (
                <SwiperSlide key={video.id} className="max-w-[300px] md:max-w-[350px]">
                  <div
                    className="h-full bg-black/30 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group border border-white/10 hover:border-white/30 cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative h-[250px] w-full overflow-hidden">
                      {/* <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      /> */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredVideo === video.id ? "opacity-100" : "opacity-100"
                          }`}
                      >
                        <div className="relative  mt-[10px]">
                          <div className="absolute -inset-10 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                          <div className="relative bg-white/20 backdrop-blur-md border border-white/50 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                            <Image width={100} height={100} src={'/images/cd.png'} alt="cd" className="w-[50px] h-[50px] object-contain object-center spin" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>

  )
}
