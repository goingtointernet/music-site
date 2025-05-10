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
  const colors = ["#2dc653", "#6ede8a", "#6ede8a"];
 
  const generateArcs = (baseCount = 14, variations = 3) => {
  const orders = Array.from({ length: baseCount }, (_, i) => i + 1);
  const arcGroups = orders.flatMap(order => 
    Array.from({ length: variations }, () => ({
      order,
      startLat: (Math.random() * 180 - 90),
      startLng: (Math.random() * 360 - 180),
      endLat: (Math.random() * 180 - 90),
      endLng: (Math.random() * 360 - 180),
      arcAlt: Math.random() * 0.7 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  );
  return arcGroups;
};

  const sampleArcs = [
  ...generateArcs(14, 3),  // Original 14 orders with 3 variations each
  ...generateArcs(14, 2)   // New 14 orders with 2 variations each
].map((arc, index) => ({
  ...arc,
  order: index < 42 ? Math.ceil((index + 1)/3) : Math.ceil((index - 42 + 1)/2) + 14,
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
