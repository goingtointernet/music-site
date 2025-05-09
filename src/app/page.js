import ModelAboutSection from "@/components/AboutSection/AboutSection";
import AlbumsCard from "@/components/AlbumsCard/AlbumsCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import HomeHero from "@/components/HomeHero/HomeHero";
import Navbar from "@/components/Navbar/Navbar";
import { ShootingStars } from "@/components/ShootingStar/ShootingStar";
import { StarsBackground } from "@/components/StarsBackground/StarsBackground";
import LuxuryLimitedStore from "@/components/StoreSlider/LuxuryLimitedStore";
import StoreSlider from "@/components/StoreSlider/StoreSlider";
 const products = [
    {
      id: 1,
      name: 'Premium Sneakers',
      price: 149.99,
      image: '/images/shirt.jpg',
      soldOut: true,
    },
    {
      id: 2,
      name: 'Designer Watch',
      price: 299.99,
      image: '/images/shirt.jpg',
      soldOut: true,
    },
    {
      id: 3,
      name: 'Leather Backpack',
      price: 199.99,
      image: '/images/shirt.jpg',
      soldOut: true,
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 179.99,
      image: '/images/shirt.jpg',
      soldOut: true,
    },
  ];

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden bg-black">
      <Navbar/>
      <HomeHero/>
      <marquee className="marquee-ele" behavior="alternate">FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music
      </marquee> 

      {/* <ModelAboutSection/> */}
      <StoreSlider items={products} />
      {/* <ContactForm/> */}
      <Footer/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
