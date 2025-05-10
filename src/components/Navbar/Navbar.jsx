"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-gradient-to-t from-transparent to-black fixed left-0 top-0 w-full  text-white z-[4002]`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo and Plus/Cross Icon */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image src={logo} width={90} height={80} className='object-contain h-[50px] object-center'/>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-white bg-black flex border border-[#ffffff2a] p-[12px] rounded-[10px] shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faClose}  className='text-[20px]'/>
              ) : (
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCartShopping} className='text-[18px]'/>
                  <div className='flex flex-col justify-center items-center gap-[4px] ml-[10px]'>
                    <span className='w-[3px] h-[3px] rounded-[50%] flex bg-white'></span>
                    <span className='w-[3px] h-[3px] rounded-[50%] flex bg-white'></span>
                    <span className='w-[3px] h-[3px] rounded-[50%] flex bg-white'></span>
                  </div>
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div>
          <div className="bg-black/95 max-w-7xl mx-auto bg-opacity-95 px-4 pt-2 pb-4 space-y-2">
            <Link href="#about" onClick={()=>setIsMenuOpen(false)} className="block p-4 hover:text-gray-300 transition-colors border border-[#ffffff12] text-[14px]">
              About
            </Link>
            <Link href="#store" onClick={()=>setIsMenuOpen(false)}  className="block p-4 hover:text-gray-300 transition-colors border border-[#ffffff12] text-[14px]">
              Store
            </Link>
            <Link href="#artists" onClick={()=>setIsMenuOpen(false)} className="block p-4 hover:text-gray-300 transition-colors border border-[#ffffff12] text-[14px]">
              Artists
            </Link>
            <Link href="#touring" onClick={()=>setIsMenuOpen(false)} className="block p-4 hover:text-gray-300 transition-colors border border-[#ffffff12] text-[14px]">
              Touring 
            </Link>
            <Link href="#contact" onClick={()=>setIsMenuOpen(false)} className="block p-4 hover:text-gray-300 transition-colors border border-[#ffffff12] text-[14px]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}