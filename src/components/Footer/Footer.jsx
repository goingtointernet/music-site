import { faApple, faInstagram, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        label: "Artists",
        link: "#"
    },
    {
        label: "Achievements",
        link: "#"
    },
    {
        label: "Honor",
        link: "#"
    },
    {
        label: "Store",
        link: "#"
    }
]

const socialLink = [
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        link: "#"
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        link: "#"
    },
    {
        icon: <FontAwesomeIcon icon={faApple} />,
        link: "#"
    },
    {
        icon: <FontAwesomeIcon icon={faMedium} />,
        link: "#"
    }
]


const Footer = () => {
    return (
        <div className='bg-black p-[10px_20px] md:p-[0_20px] flex flex-wrap gap-[20px] justify-between items-center border-t border-t-[#ffffff17]'>
            <span className='text-[14px] font-[400] text-textColor opacity-60'>© Copyright 2025 Universal Music Group N.V. All rights reserved.</span>
            <div className="grid grid-cols-4 md:flex md:justify-center md:items-center">
                {socialLink?.map((item, index) => (
                    <a
                        key={index}
                        href={item?.link}
                        className={`p-[10px_20px] w-full md:w-auto hover:opacity-80 transition-opacity border-r border-r-[#ffffff2a] ${index === 0 ? 'border-l border-l-[#ffffff2a]' : ''
                            }`}
                    >
                        {item?.icon}
                    </a>
                ))}
            </div>

            <div className='flex justify-center items-center gap-[25px]'>
                {links?.map((item, index) => (
                    <Link key={index} href={item?.link} className='text-textColor hover:opacity-100 transition-opacity font-[300] text-[14px] opacity-80' style={{ letterSpacing: "0.5px" }}>{item?.label}</Link>
                ))}
            </div>
        </div>
    )
}

export default Footer