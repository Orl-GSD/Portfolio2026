'use client';

import Image from "next/image";
import LightPillar from '@/components/LightPillar.jsx';
import OpenToWork from './components/OpenToWork.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import ProjectList from './components/ProjectList.jsx'
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import NotchedPanel from "./components/NotchedPanel.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-top bg-[#07080D] font-sans dark:bg-black">

      <div className="relative w-full min-h-screen overflow-hidden">
      
      {/* 1. LightPillar Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <LightPillar
          topColor="#66cfda"
          bottomColor="#6189f7"
          intensity={0.4}
          rotationSpeed={0.5}
          glowAmount={0.003}
          pillarWidth={2.5}
          pillarHeight={0.4}
          noiseIntensity={1}
          pillarRotation={213}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* 2. Gridline Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/gridline.png" 
          alt="Background grid" 
          fill
          priority
          className="opacity-2 object-cover object-center"
        />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-10 w-full min-h-screen text-white flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16 sm:py-20 space-y-5 sm:space-y-6 md:space-y-8">
        
        {/* Open To Work Badge */}
        <OpenToWork />

        {/* Main Heading - Highly Responsive Font Size */}
        <h1 className="font-eternalo text-center text-9xl xs:text-5xl sm:text-8xl md:text-[110px] lg:text-[140px] xl:text-[184px] leading-[0.88] md:leading-[0.85] tracking-tight">
          EARL DICIPULO
        </h1>

        {/* Subtitle / Bio */}
        <p className="font-dm font-extralight text-center text-lg sm:text-lg md:text-xl lg:text-[24px] leading-relaxed w-full max-w-[660px] text-gray-300">
          A layout designer, UI/UX designer, and frontend developer with a passion for crafting visually compelling and user-centered websites and interfaces using modern design tools and frameworks.
        </p>

      </div>

    </div>

      <ScrollReveal yOffset={60} duration={0.8}>
        {/* Works Section */}
        <div className='w-full h-full bg-[#07080D] flex flex-col items-center justify-center py-24'>
          <SectionHeader header="Works" description="Look into my showcase of recent projects!" />
          
          <div className="w-full px-10 lg:px-36">
            <ProjectList />
          </div>
        </div>
      </ScrollReveal>


      <ScrollReveal yOffset={60} duration={0.8}>
        {/* Profile Section */}
        <div className='w-full h-full bg-[#07080D] flex flex-col items-center justify-center pt-16'>
          <SectionHeader header="Profile" description="Look into my skills and work experience!" />
        </div>

        <div className="w-full px-10 lg:px-36">
          <Profile />
        </div>
      </ScrollReveal>

      {/* Footer Section */}
      <div className='w-full h-full bg-[#07080D] flex flex-col items-center justify-center pt-16'>
        <Footer />
      </div>


    </div>
  );
}
