import React from 'react'

const logo = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
]
const PatnersLogo = () => {
  return (
    <div className='bg-black flex justify-center items-center pb-[60px]'>
        <div className='flex justify-center items-center gap-[30px] flex-wrap max-w-[1150px] w-[90%]'>
        {logo?.map((item, index)=>(
            <img key={index} src={item} alt='logo' className='max-h-[50px] h-full max-w-[180px] grayscale-[1] opacity-60 hover:opacity-100 transition-opacity object-contain object-center'/>
        ))}
        </div>
    </div>
  )
}

export default PatnersLogo