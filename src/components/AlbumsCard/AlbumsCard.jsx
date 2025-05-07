"use client"
import { useState } from 'react';

export default function AlbumsCard() {
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  
  const albums = [
    {
      id: 1,
      title: "Box on Her. ft. MÄD MØD",
      artist: "Cash In",
      imageUrl: "/images/album.png"
    },
    {
      id: 2,
      title: "Rather Be.",
      artist: "Cash In",
      imageUrl: "/images/a2.jpg"
    },
    {
      id: 3,
      title: "Humble AF.",
      artist: "Cash In",
      imageUrl: "/images/a3.jpeg"
    },
    {
      id: 4,
      title: "Can We Talk?",
      artist: "Cash In",
      imageUrl: "/images/a4.jpeg"
    },
    {
      id: 5,
      title: "Birth In The Borough",
      artist: "Cash In",
      imageUrl: "/images/a5.jpg"
    },
    {
      id: 6,
      title: "711",
      artist: "Cash In",
      imageUrl: "/images/a6.png"
    },
    {
      id: 7,
      title: "711 DELUXE",
      artist: "Cash In",
      imageUrl: "/images/a7.png"
    },
    {
      id: 8,
      title: "CA$H: The Elegant Fella",
      artist: "Cash In",
      imageUrl: "/images/a8.png"
    }
  ];

  return (
    <div className="bg-gradient-to-t from-black to-[#111111] flex flex-col justify-center items-center min-h-screen text-white py-4 px-4 pb-[0px]">

    <span className='text-textColor opacity-50 uppercase' style={{letterSpacing:"10px"}}>Listen My</span>
    <h2 className='mb-[40px] text-[28px] md:text-[40px] font-[500] uppercase' style={{letterSpacing:"40px"}}>Albums</h2>
      <div className="max-w-[1150px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div 
              key={album.id}
              className="relative bg-[#0e0e0e] overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
            >
              <div className="aspect-square relative">
                <img 
                  src={album.imageUrl} 
                  alt={album.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                {hoveredAlbum === album.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 w-full p-[10px_20px] bg-gradient-to-t from-[#121213] to-transparent">
                <h3 className="font-semibold text-lg">{album.title}</h3>
                <p className="text-gray-400 text-sm">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}