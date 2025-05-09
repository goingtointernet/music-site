// components/StoreSlider.tsx
import Image from 'next/image';


const StoreSlider = ({ items}) => {
  return (
    <section className="py-16 px-4 z-[20]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-10 text-center">
         Our 
        </h2>
        
        <div className="grid grid-flow-col auto-cols-[minmax(300px,1fr)] gap-8 overflow-x-auto pb-8 scrollbar-hide">
          {items.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-[#0d0d0e] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105 opacity-70"
                />
                {product.soldOut && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191a1b] via-transparent to-transparent flex flex-col items-center justify-end p-6">
                    <span className="text-white text-xl font-bold bg-black px-6 py-2 rounded-full backdrop-blur-sm">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-2 border-t border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-100">{product.name}</h3>
                <p className="text-gray-400">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-gray-900/80 text-gray-100 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                Limited Edition
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSlider;