
export default function HomeHero() {
  return (
    <section 
      className="relative h-[calc(100vh-45px)] w-full flex justify-center items-center overflow-hidden"
    >
      {/* Solid black background (bottom layer) */}
      <div className="absolute inset-0 bg-black"></div>
      <div className='flex justify-center mt-[40px] items-center w-[70%] h-[60%] z-20 relative'>
        <img src="/images/logo.png" alt='logo' className='w-full h-full object-contain floating' />
      </div>

      
    </section>
  );
}