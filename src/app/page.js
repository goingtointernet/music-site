import ModelAboutSection from "@/components/AboutSection/AboutSection";
import AlbumsCard from "@/components/AlbumsCard/AlbumsCard";
import Footer from "@/components/Footer/Footer";
import HomeHero from "@/components/HomeHero/HomeHero";
import Navbar from "@/components/Navbar/Navbar";
import { ShootingStars } from "@/components/ShootingStar/ShootingStar";
import { StarsBackground } from "@/components/StarsBackground/StarsBackground";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden bg-black">
      <Navbar/>
      <HomeHero/>
      <marquee className="marquee-ele" behavior="alternate">FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music
      </marquee> 
      {/* <ModelAboutSection/> */}
      <Footer/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
