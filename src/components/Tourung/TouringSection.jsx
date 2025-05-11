"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../Globe/globe").then((m) => m.World), {
  ssr: false,
});

export function TouringSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000", // black
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF", // white
    atmosphereAltitude: 0.1,
    emissive: "#000000", // black
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)", // white with transparency
    ambientLight: "#FFFFFF", // white
    directionalLeftLight: "#FFFFFF", // white
    directionalTopLight: "#FFFFFF", // white
    pointLight: "#FFFFFF", // white
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#d4d4d4", "#b8b8b8", "#d4d4d4"];

  const cities = [
    { name: "Anchorage", lat: 61.2170, lng: -149.8980 },
    { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
    { name: "Auckland", lat: -36.8485, lng: 174.7633 },
    { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { name: "Iqaluit", lat: 63.7467, lng: -68.5145 },
    { name: "Reykjavik", lat: 64.1355, lng: -21.8954 },
    { name: "Oslo", lat: 59.9139, lng: 10.7522 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Dubai", lat: 25.276987, lng: 55.296249 },
    { name: "Lima", lat: -12.0464, lng: -77.0428 },
    { name: "Helsinki", lat: 60.1695, lng: 24.9354 },
    { name: "Santiago", lat: -33.4489, lng: -70.6693 },
    { name: "Addis Ababa", lat: 9.0316, lng: 38.7469 },
    { name: "Port Moresby", lat: -9.4438, lng: 147.1803 },
    { name: "Wellington", lat: -41.2867, lng: 174.7762 },
    { name: "Freetown", lat: 8.4657, lng: -13.2317 },
    { name: "Nouakchott", lat: 18.0858, lng: -15.9784 },
    { name: "Windhoek", lat: -22.5597, lng: 17.0836 },
    { name: "Dakar", lat: 14.6928, lng: -17.4467 },
    { name: "Antananarivo", lat: -18.8792, lng: 47.5079 },
    { name: "Suva", lat: -17.7134, lng: 178.0650 },
    { name: "Baku", lat: 40.4093, lng: 49.8671 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { name: "Accra", lat: 5.6037, lng: -0.1870 },
    { name: "Kinshasa", lat: -4.4419, lng: 15.2663 },
    { name: "Algiers", lat: 36.7528, lng: 3.0420 },
    { name: "Lagos", lat: 6.5244, lng: 3.3792 },
    { name: "New Delhi", lat: 28.6139, lng: 77.2090 },
    { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
    { name: "Manila", lat: 14.5995, lng: 120.9842 },
    { name: "Seoul", lat: 37.5665, lng: 126.9780 },
    { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
    { name: "Shenzhen", lat: 22.5431, lng: 114.0579 },
    { name: "Beijing", lat: 39.9042, lng: 116.4074 },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Taipei", lat: 25.0330, lng: 121.5654 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { name: "Lagos", lat: 6.5244, lng: 3.3792 },
    { name: "Caracas", lat: 10.4925, lng: -66.8778 },
    { name: "Brasília", lat: -15.7801, lng: -47.9292 },
    { name: "Montevideo", lat: -34.9011, lng: -56.1645 },
    { name: "La Paz", lat: -16.5000, lng: -68.1193 },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { name: "Tbilisi", lat: 41.7151, lng: 44.8271 },
    { name: "Colombo", lat: 6.9271, lng: 79.8612 },
    { name: "Accra", lat: 5.6037, lng: -0.1870 },
    { name: "Kigali", lat: -1.9441, lng: 30.0619 },
    { name: "Lagos", lat: 6.5244, lng: 3.3792 },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Berlin", lat: 52.5200, lng: 13.4050 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
    { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
    { name: "Tashkent", lat: 41.2995, lng: 69.2401 },           
    { name: "Kabul", lat: 34.5553, lng: 69.2075 },       
    { name: "Ulaanbaatar", lat: 47.8864, lng: 106.9057 },  
    { name: "Tbilisi", lat: 41.7151, lng: 44.8271 },  
    { name: "Muscat", lat: 23.5880, lng: 58.3829 },  
    { name: "Riyadh", lat: 24.7136, lng: 46.6753 }, 
    { name: "Doha", lat: 25.276987, lng: 51.5200 }, 
    { name: "Tunis", lat: 36.8065, lng: 10.1815 },
    { name: "Yerevan", lat: 40.1792, lng: 44.4991 }, 
    { name: "Nur-Sultan", lat: 51.1605, lng: 71.4704 }, 
    { name: "Sahara Desert Central", lat: 23.4162, lng: 25.6628 },
    { name: "Rub' al Khali (Empty Quarter)", lat: 20.0000, lng: 50.0000 },
    { name: "Gobi Desert Central", lat: 42.5900, lng: 105.0000 }, 
    { name: "Karakum Desert", lat: 39.0000, lng: 59.0000 },
    { name: "Great Victoria Desert", lat: -29.0000, lng: 130.0000 },
  ];


  const generateArcs = (baseCount = 14, variations = 3) => {
    const arcGroups = [];

    for (let i = 0; i < baseCount; i++) {
      for (let j = 0; j < variations; j++) {
        const start = cities[Math.floor(Math.random() * cities.length)];
        let end = cities[Math.floor(Math.random() * cities.length)];

        // Ensure start and end are not the same
        while (end === start) {
          end = cities[Math.floor(Math.random() * cities.length)];
        }

        arcGroups.push({
          order: i + 1,
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
          arcAlt: Math.random() * 0.7 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }

    return arcGroups;
  };

  const sampleArcs = [
    ...generateArcs(40, 8),  // Original 14 orders with 3 variations each
    ...generateArcs(40, 6)   // New 14 orders with 2 variations each
  ].map((arc, index) => ({
    ...arc,
    order: index < 42 ? Math.ceil((index + 1) / 3) : Math.ceil((index - 42 + 1) / 2) + 14,
    arcAlt: arc.arcAlt + (index % 3 * 0.1)  // Add altitude variation
  }));


  return (
    <div
      id="touring"
      className="flex flex-row items-center justify-center py-20 h-[570px] md:h-auto relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>
      <div
        className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[45rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div flex flex-col">
          <h2 className="text-[2.2rem] text-center md:text-[4rem] mx-auto font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Touring the World
          </h2>
          <p
            className="text-center text-base md:text-lg font-normal text-paragraphColor max-w-[700px] mt-2 mx-auto">
            One Artist. Endless Destinations. Bringing sound to streets, stages, and souls worldwide. Every stop is a moment, every show a connection.
          </p>
        </motion.div>
        <div
          className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none  z-40" />
        <div className="absolute w-full -bottom-[125px] md:-bottom-40 h-[350px] md:h-full z-10 ml-[-20px] pb-[105px] md:pb-[130px]">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
