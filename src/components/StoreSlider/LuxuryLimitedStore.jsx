"use client"
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Clock, Award, X } from 'lucide-react';

export default function LuxuryLimitedStore() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const luxuryItems = [
    {
      id: 1,
      name: "NOVA X-1 EDITION",
      category: "Collector's Masterpiece",
      status: "SOLD OUT",
      description: "The pinnacle of avant-garde design, only 3 ever crafted. Each piece individually numbered and signed by the creator.",
      image: "/images/shirt.jpg"
    },
    {
      id: 2,
      name: "PHANTOM DARK",
      category: "Limited Release",
      status: "SOLD OUT",
      description: "A revolutionary approach to form and function, created with proprietary materials never before seen in the industry.",
      image: "/images/shirt.jpg"
    },
    {
      id: 3,
      name: "ECLIPSE SERIES",
      category: "Archive Collection",
      status: "1 REMAINING",
      description: "Inspired by celestial phenomena, this piece embodies the mysterious beauty of cosmic events in tangible form.",
      image: "/images/shirt.jpg"
    },
    {
      id: 4,
      name: "OBSIDIAN VAULT",
      category: "Museum Quality",
      status: "SOLD OUT",
      description: "Constructed with materials recovered from historical artifacts, representing a perfect fusion of past and future.",
      image: "/images/shirt.jpg"
    },
    {
      id: 5,
      name: "ETHEREAL CONSTRUCT",
      category: "Final Edition",
      status: "2 REMAINING",
      description: "The culmination of years of research and development, pushing the boundaries of what was thought possible.",
      image: "/images/shirt.jpg"
    }
  ];
  
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !showDetails) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % luxuryItems.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, luxuryItems.length, showDetails]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % luxuryItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + luxuryItems.length) % luxuryItems.length);
    setIsAutoPlaying(false);
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
    setIsAutoPlaying(false);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setIsAutoPlaying(true);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <div className="w-full max-w-7xl px-4 py-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">PRICELESS</span>
            <span className="ml-3">COLLECTION</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Extraordinary pieces beyond conventional value. Each item represents the pinnacle of exclusivity and craftsmanship.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900">
          {/* Slides */}
          <div className="absolute inset-0">
            {luxuryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover object-center" 
                />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 w-full md:w-2/3">
                  <div className="inline-block px-3 py-1 mb-3 bg-red-600 text-xs font-semibold rounded-full">
                    {item.status}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-300 mb-4">{item.category}</p>
                  <div className="flex items-center mb-6">
                    <div className="mr-8 flex flex-col items-center">
                      <Clock className="h-5 w-5 mb-1 text-gray-400" />
                      <span className="text-xs text-gray-400">LIMITED TIME</span>
                    </div>
                    <div className="mr-8 flex flex-col items-center">
                      <Award className="h-5 w-5 mb-1 text-gray-400" />
                      <span className="text-xs text-gray-400">CERTIFIED</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ShoppingBag className="h-5 w-5 mb-1 text-gray-400" />
                      <span className="text-xs text-gray-400">EXCLUSIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-1 font-light">PRICE</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        PRICELESS
                      </div>
                    </div>
                    <button 
                      onClick={() => openDetails(item)}
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={item.status === "SOLD OUT"}
                    >
                      {item.status === "SOLD OUT" ? "SOLD OUT" : "DETAILS"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30">
            <button 
              onClick={prevSlide}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
            <div className="flex space-x-2">
              {luxuryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Collection preview */}
        <div className="mt-8 grid grid-cols-5 gap-3">
          {luxuryItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`cursor-pointer rounded-lg overflow-hidden relative transition-all ${
                index === currentSlide ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-black' : 'opacity-60'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-24 object-cover" 
              />
              {item.status === "SOLD OUT" && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <p className="text-xs font-bold text-red-500">SOLD OUT</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 bg-opacity-60 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Museum Quality</h3>
            <p className="text-gray-400">Each piece is created to museum standards with archival materials and expert craftsmanship.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-60 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-pink-900 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-pink-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Limited Releases</h3>
            <p className="text-gray-400">Our collections feature extremely limited quantities, often with single-digit production runs.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-60 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-6 w-6 text-red-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Beyond Value</h3>
            <p className="text-gray-400">Transcending traditional pricing models, these pieces represent the pinnacle of exclusivity.</p>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showDetails && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-gray-900 max-w-4xl w-full rounded-2xl overflow-hidden relative">
            <button 
              onClick={closeDetails}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-block px-3 py-1 mb-4 bg-red-600 text-xs font-semibold rounded-full">
                  {selectedProduct.status}
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-300 mb-6">{selectedProduct.category}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-400">{selectedProduct.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="text-lg mb-1 font-light">PRICE</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    PRICELESS
                  </div>
                </div>
                
                <button 
                  className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={selectedProduct.status === "SOLD OUT"}
                >
                  {selectedProduct.status === "SOLD OUT" ? "SOLD OUT" : "REQUEST ACCESS"}
                </button>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-500">∞</div>
                    <div className="text-xs text-gray-400">VALUE</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-500">1/1</div>
                    <div className="text-xs text-gray-400">UNIQUENESS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">100%</div>
                    <div className="text-xs text-gray-400">EXCLUSIVITY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}