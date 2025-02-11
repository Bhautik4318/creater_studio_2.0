import AudioCleaning from "@/components/AudioCleaning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import RemoveBg from "@/components/RemoveBg";
import ChatGPT from "@/components/ChatGpt";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import NewSection from "@/components/NewSection";

// import Image from "next/image";

export default function Home() {
  return (
    <>
    <ShootingStars className="-z-10"/>
    <StarsBackground className="-z-10"/>
    <HeroSection/>   
    <ShootingStars className="-z-10"/>
    <StarsBackground className="-z-10"/>
    <NewSection/>
    
    
        </>
  );
}
