import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";



export default function Footer() {

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-[80vh] bg-[#07080D] flex flex-col justify-between items-center px-6 py-16 overflow-hidden select-none">
      
      {/*Gridline Container */}
        <div className="absolute inset-0 pointer-events-none">
        
            <img 
                src="./images/gridline.png" 
                alt="" 
                className="w-full h-full object-cover object-center opacity-3" 
            />

            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#07080D] to-transparent"></div>

        </div>

      {/* 2. Main Center Content (Text, Button, Links) */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center font-dm">
        
        {/* Main Serif Heading */}
        <h2 className="text-white font-dm-serif-display text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-bold mb-12 tracking-tight">
          Let’s Work <br /> Together!
        </h2>

        {/* Contact Me Button */}
        <a 
          href="mailto:egsdworks@gmail.com"
          className="inline-block bg-[#0B0C14] border border-[#2A2A35] hover:border-white text-white text-base md:text-xl px-16 py-3 rounded-full transition-all duration-300 hover:scale-105 mb-10 hover:bg-cyan-400 hover:text-[#07080D]"
        >
          Contact Me
        </a>

        {/* Contact Information Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-dm">
          
          {/* Email */}
          <a 
            href="mailto:egsdworks@gmail.com" 
            className="flex items-center gap-2.5 text-[#66D9D5] hover:underline transition-all"
          >
            <MdEmail className="w-5 h-5"/>
            <span>egsdworks@gmail.com</span>
          </a>

          {/* Name / LinkedIn */}
          <a 
                href="https://www.linkedin.com/in/earldicipulo/" 
                className="flex items-center gap-2.5 text-[#66D9D5] hover:underline transition-all"
            >
                <FaLinkedin className="w-5 h-5" />
                <span>Earl Geibriel Dicipulo</span>
            </a>

        </div>

      </div>

      {/* 3. Footer Copyright */}
      <div className="relative z-10 flex flex-col items-center gap-6 mt-12 font-dm">
        
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#888895] hover:text-white border border-[#2A2A35] hover:border-[#888895] px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-1"
        >
          <span>BACK TO TOP</span>
          <FaArrowUp />
        </button>

        <div className="text-[#555560] text-xs md:text-sm tracking-wider uppercase">
          © 2026 EARL DICIPULO
        </div>

      </div>

    </section>
  );
}