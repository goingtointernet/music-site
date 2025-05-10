
export default function HomeHero() {
  return (
    <section 
      className="relative h-[calc(100vh-45px)] w-full flex justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50 z-0"></div>
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>
      <div className='flex justify-center mt-[40px] items-center w-[70%] h-[60%] z-20 relative'>
        <img src="/images/logo.png" alt='logo' className='w-full h-full object-contain floating' />
      </div>

      
    </section>
  );
}