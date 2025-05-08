import { faApple, faInstagram, faMedium, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        label: "Artists",
        link: "#"
    },
    {
        label: "Touuring",
        link: "#"
    },
    {
        label: "Artist",
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
        link: "#",
        title:"Instagram",
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        link: "#",
        title:"Youtube",
    },
    {
        icon: <FontAwesomeIcon icon={faApple} />,
        link: "#",
        title:"Apple Music",
    },
    {
        icon: <FontAwesomeIcon icon={faSoundcloud} />,
        link: "#",
        title:"SoundCloud",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="tidal" width={"20px"} height={"20px"} fill='white'>
            <path d="m8.01 8.002 4-4.005 4.004 4-4 4.005zM24 8l-3.979-3.975L16.042 8l3.979 3.975zM.002 7.998l4.004-4 4 4.004-4.004 4z"></path>
            <path d="m8.01 15.997 4.004-4 4 4.004-4.004 4z"></path>
        </svg>
        ),
        link: "#",
        title:"Tidal",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="audiomack" width={"20px"} height={"20px"} fill='white'>
            <path d="M20.8041 6c0-.37441-.2762-.69147-.647-.74289-.3709-.05143-.7229.17854-.8248.53883l-2.2039 7.79496v-4.0159c0-.34427-.2344-.64433-.5684-.72769-.3341-.08335-.6819.07141-.8437.37532l-2.6833 5.04177-1.1428-3.0059c-.1064-.2799-.3691-.4697-.6683-.4828-.2991-.0131-.5774.1531-.7078.4226l-.97191 2.0087-.24655-.6485c-.08909-.2344-.28942-.4087-.53385-.4646-.24443-.0559-.50062.014-.68273.1864l-.74794.7078-.9141-.6115c-.34427-.2303-.81008-.1379-1.04039.2064-.23032.3443-.13793.8101.20635 1.0404l1.41176.9444c.29109.1947.6782.1621.93256-.0786l.36592-.3463.46519 1.2236c.10641.2799.36913.4697.6683.4828.29918.0131.57749-.1531.70789-.4226l.9719-2.0087 1.1114 2.9235c.1045.275.3602.4635.6539.482.2936.0185.571-.1364.7092-.3961l2.0474-3.8469v6.4195c0 .3744.2761.6915.647.7429.3708.0514.7228-.1786.8247-.5388l2.204-7.795v3.6909c0 .2412.1159.4676.3116.6086.1957.1409.4472.1792.676.1028l1.9459-.65c.3929-.1313.605-.5561.4738-.949-.1313-.3929-.5561-.605-.949-.4738l-.9583.3201v-8.0587zM3 12.25c-.41421 0-.75.3358-.75.75 0 .4142.33579.75.75.75h.5c.41421 0 .75-.3358.75-.75 0-.4142-.33579-.75-.75-.75h-.5z"></path>
        </svg>
        ),
        link: "#",
        title:"Audiomack",
    }
]


const Footer = () => {
    return (
        <div className='bg-black xl:p-[0_20px] flex flex-wrap gap-[20px] justify-between items-center flex-col xl:flex-row border-t border-t-[#ffffff17] mt-[50px] z-10 p-[20px]'>
            <span className='text-[14px] font-[400] text-textColor opacity-60 text-center md:text-start'>© Copyright 2025 Forallux V.A all rights reserved.</span>
            <div className="flex justify-center items-center flex-wrap md:flex-nowrap max-w-[70%] gap-[10px] xl:gap-0">
                {socialLink?.map((item, index) => (
                    <a
                        key={index}
                        href={item?.link}
                        title={item?.title}
                        className={`p-[10px] xl:p-[10px_20px] w-[45px] h-[45px] xl:w-full xl:h-full flex justify-center items-center hover:opacity-80 transition-opacity rounded-[50%] xl:rounded-none border border-[#ffffff18] xl:border-transparent xl:border-r shadow-lg xl:border-r-[#ffffff18] ${index === 0 ? 'border-l !border-l-[#ffffff18]' : ''
                            }`}
                    >
                        {item?.icon}
                    </a>
                ))}
            </div>

            <div className='flex justify-center items-center gap-[25px] flex-wrap'>
                {links?.map((item, index) => (
                    <Link key={index} href={item?.link} className='text-textColor hover:opacity-100 transition-opacity font-[300] text-[13px] opacity-80' style={{ letterSpacing: "0.5px" }}>{item?.label}</Link>
                ))}
            </div>
        </div>
    )
}

export default Footer