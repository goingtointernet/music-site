"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${!isMenuOpen ? "bg-gradient-to-t from-transparent to-black bg-opacity-80":"bg-black"} fixed left-0 top-0 w-full  text-white z-50`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-[120px]">
          {/* Logo and Plus/Cross Icon */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image src={logo} width={60} height={64} className='object-contain h-[50px] object-center'/>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex">
            <button
              type="button"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faClose}  className='text-[28px]'/>
              ) : (
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBars} className='text-[28px]'/>
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div>
          <div className="bg-black max-w-7xl mx-auto bg-opacity-95 px-4 pt-2 pb-4 space-y-4">
            <Link href="/about" className="block py-2 hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="block py-2 hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="block py-2 hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="block py-2 hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}