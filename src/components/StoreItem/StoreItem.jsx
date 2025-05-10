"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "../ui/custom-dialog"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function StoreItems() {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [itemColors, setItemColors] = useState({})
  const sectionRef = useRef(null)
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

    // Initialize default colors for items with color options
    const initialColors = {};
    storeItems.forEach(item => {
      if (item.colors && item.colors.length > 0) {
        initialColors[item.id] = item.colors[0].value;
      }
    });
    setItemColors(initialColors);

    return () => observer.disconnect()
  }, [])

  const storeItems = [
    {
      id: 1,
      name: "Forallus Music CD",
      description:
        "A rare collector's piece that captures the soul of Forallus. This limited-edition music CD is a physical embodiment of the artist's sound journey — once gone, it's gone forever. Timeless. Priceless.",
      price: "$-Priceless",
      image: "/images/pr1.jpg",
      colors: null,
    },
    {
      id: 2,
      name: "Limited Edition CD",
      description:
        "Crafted for true fans and collectors, this CD is part of a strictly limited run. It's not just music — it's a keepsake of the Forallus legacy. A priceless artifact for those who understand the value of rarity.",
      price: "$-Priceless",
      image: "/images/pr2.jpg",
      colors: null,
    },
    {
      id: 3,
      name: "Forallus T-Shirt",
      description: 'Wear the vision. This exclusive Forallus tee blends minimal design with deep artistic meaning. Limited in number, infinite in impact. A priceless piece of the movement.',
      price: "$-Priceless",
      colors: [
        { name: "White", value: "white", image: "/images/pr3.jpg" },
        { name: "Black", value: "black", image: "/images/pr3-black.jpg" }
      ],
      image: "/images/pr3.jpg", // Default image
    },
    {
      id: 4,
      name: "Limited Edition T-Shirt",
      description: "Designed in collaboration with FORALLUS. V.A., this shirt is available for a short time only. Ethically made, artist-approved, and impossible to replicate. Once it's gone, it's gone — making it truly priceless.",
      price: "$-Priceless",
      colors: [
        { name: "White", value: "white", image: "/images/pr4.jpg" },
        { name: "Black", value: "black", image: "/images/pr4-black.jpg" }
      ],
      image: "/images/pr4.jpg", // Default image
    },
    {
      id: 5,
      name: "Forallus Symbol",
      description:
        "More than a collectible — the Forallus Symbol represents identity, unity, and the deeper meaning behind the music. Limited in existence, infinite in significance. A rare emblem for those who truly understand.",
      price: "$-Priceless",
      image: "/images/pr5.jpg",
      colors: null,
    },
  ]

  const openModal = (item) => {
    setSelectedItem(item)
    // Use the currently selected color for the item if available, otherwise default to first color
    const currentColor = itemColors[item.id] || (item.colors ? item.colors[0].value : null)
    setSelectedColor(currentColor)
    setOpen(true)
  }

  // Function to get current image based on selected color
  const getCurrentImage = (item) => {
    if (!item.colors || !selectedColor) return item.image;

    const colorOption = item.colors.find(color => color.value === selectedColor);
    return colorOption ? colorOption.image : item.image;
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 px-4 relative opacity-0 transform translate-y-10 transition-all duration-1000 z-[20]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 opacity-40 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>

        <div className="max-w-[1250px] mx-auto relative z-10">
          <div className="relative">
            {/* Navigation buttons - visible on all devices */}
            <button
              ref={navigationPrevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-black/50 transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              ref={navigationNextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-black/50 transition-all z-20"
              aria-label="Next slide"
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
              {storeItems.map((item) => {
                // Function to get current card image
                const getCardImage = () => {
                  if (!item.colors) return item.image;
                  const currentColor = itemColors[item.id] || (item.colors[0].value);
                  const colorOption = item.colors.find(color => color.value === currentColor);
                  return colorOption ? colorOption.image : item.image;
                };

                return (
                  <SwiperSlide key={item.id} className="max-w-[300px] md:max-w-[350px]">
                    <div
                      className="h-full bg-black/20 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group border border-white/10 hover:border-white/20"
                    >
                      <div
                        className="relative h-[280px] md:h-[350px] w-full overflow-hidden cursor-pointer"
                        onClick={() => openModal(item)}
                      >
                        <Image
                          src={getCardImage() || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/50 text-white font-bold text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            VIEW DETAILS
                          </span>
                        </div>
                      </div>
                      <div className="p-6 relative">
                      {item.colors && (
                            <div className="flex justify-center space-x-4 mb-[20px] mx-auto mt-[-40px]">
                              {item.colors.map((color) => (
                                <button
                                  key={color.value}
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering openModal
                                    // Update the global state for this item's color
                                    setItemColors(prev => ({
                                      ...prev,
                                      [item.id]: color.value
                                    }));
                                  }}
                                  className={`w-5 h-5 rounded-full flex items-center justify-center ${(itemColors[item.id] || item.colors[0].value) === color.value ? 'ring-1 ring-white ring-offset-1 ring-offset-black' : 'ring-1 ring-[#2b2a2a] ring-offset-1 ring-offset-black'
                                    }`}
                                  style={{ backgroundColor: color.value === 'white' ? 'white' : 'black' }}
                                  aria-label={`Select ${color.name} color`}
                                >
                                  {(itemColors[item.id] || item.colors[0].value) === color.value && (
                                    <span className={`text-xs ${color.value === 'white' ? 'text-black' : 'text-white'}`}>✓</span>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}

                        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                          {item.name}
                        </h3>



                        <div className="flex justify-between items-center gap-[5px] flex-wrap sm:flex-nowrap">
                          <span className="text-gray-400  text-[14px] md:text-[16px]">{item.price}</span>
                          {/* Color options in card */}
                          
                          <span className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-4 py-1 font-bold text-sm rounded-full">
                            SOLD OUT
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedItem && (
          <DialogContent>
            <div className="relative">
              <DialogClose onClick={() => setOpen(false)} />

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[320px] md:h-[450px] w-full">
                  <Image
                    src={selectedItem.colors ? getCurrentImage(selectedItem) : selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 space-y-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {selectedItem.name}
                  </h2>

                  <p className="text-gray-300 text-base">{selectedItem.description}</p>

                  {/* Color selection */}
                  {selectedItem.colors && (
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium text-gray-400">Color</span>
                      <div className="flex space-x-3">
                        {selectedItem.colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => {
                              setSelectedColor(color.value);
                              // Also update the global state for this item's color
                              setItemColors(prev => ({
                                ...prev,
                                [selectedItem.id]: color.value
                              }));
                            }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : 'ring-1 ring-[#2b2a2a] ring-offset-1 ring-offset-black'
                              }`}
                            style={{ backgroundColor: color.value === 'white' ? 'white' : 'black' }}
                            aria-label={`Select ${color.name} color`}
                          >
                            {selectedColor === color.value && (
                              <span className={`text-xs ${color.value === 'white' ? 'text-black' : 'text-white'}`}>✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold text-gray-400">{selectedItem.price}</span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-6 py-2 font-bold rounded-full">
                      SOLD OUT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}