import AboutArtist from "@/components/AboutArtist/AboutArtist";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import HomeHero from "@/components/HomeHero/HomeHero";
import HonorSection from "@/components/HonorSection/HonorSection";
import Navbar from "@/components/Navbar/Navbar";
import { ShootingStars } from "@/components/ShootingStar/ShootingStar";
import { StarsBackground } from "@/components/StarsBackground/StarsBackground";
import StoreAbout from "@/components/StoreAbout/StoreAbout";
import StoreItems from "@/components/StoreItem/StoreItem";
import { TouringSection } from "@/components/Tourung/TouringSection";
import YoutubeSlider from "@/components/YoutubeSlider/YoutubeSlider";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden bg-black">
      <Navbar/>
      <HomeHero/>
      <marquee className="marquee-ele" behavior="alternate">FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music - FORALLUS Music
      </marquee> 
      <StoreAbout/>
      <StoreItems/>
      <AboutArtist/>
      <YoutubeSlider/>
      <HonorSection/>
      <TouringSection/>
      <ContactSection/>
      <Footer/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
