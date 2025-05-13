export default function StoreAbout() {

  return (
    <section id="store" className="pt-32 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-30 z-0"></div>

      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl"></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div
        className="container mx-auto max-w-4xl relative z-10  transform translate-y-10 transition-all"
      >
        <h2 className="text-[2.2rem] md:text-[4rem] font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          OFFICIAL STORE
        </h2>

        <div className="backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.03)]">
          <p className="text-lg md:text-xl mb-6 text-gray-300">
           Discover a curated collection of rare, limited-edition pieces crafted by the artist. Each item is more than merchandise — it&apos;s a timeless expression of the music, art, and vision of Forallus.
          </p>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Every product in our store is exclusive, limited in quantity, and truly priceless. Once they&apos;re gone, they may never return.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Join our mailing list to stay ahead of new drops and restocks — because in a world of mass production, true artistry doesn&apos;t wait. All items are ethically made with sustainability at the core. We proudly offer worldwide, carbon-neutral shipping.
          </p>
        </div>
      </div>
    </section>
  )
}
