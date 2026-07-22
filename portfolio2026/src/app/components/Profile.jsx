import React from 'react';

export default function ProfileBoard() {
  // --- Data Configuration ---
  const experiences = [
    {
      role: "UI/UX Design Intern",
      date: "May 2025 - Jun 2025",
      company: "WebForest Digital Solutions",
      color: "#66D9D5" // Blue Green
    },
    {
      role: "UI/UX Designer",
      date: "Feb 2025 - Jun 2026",
      company: "SAMAHAN Systems Development, Ateneo de Davao University",
      color: "#66D9D5"
    },
    {
      role: "Art Editor for Web",
      date: "Jul 2025 - Jun 2026",
      company: "Atenews, Ateneo de Davao University",
      color: "#66D9D5"
    },
    {
      role: "Art Editor for Layout and Graphics",
      date: "Jun 2023 - Jun 2024",
      company: "Atenews, Ateneo de Davao University",
      color: "#66D9D5"
    },
    {
      role: "UI/UX Designer & Developer",
      date: "May 2025 - June 2025",
      company: "LIKHA Design + Build",
      color: "#66D9D5"
    }
  ];

  const hardSkills = [
    "Figma", "Wireframing", "Prototyping", "React.js", 
    "Tailwind", "Photoshop", "Illustrator", "InDesign", 
    "Krita", "Canva"
  ];

  const softSkills = [
    "Creativity", "Critical Thinking", "Collaboration", 
    "Empathy", "Problem Solving"
  ];

  return (
    <div className="min-h-screen bg-[#07080D] p-6 md:p-10 font-sans flex justify-center text-[#888895]">
      
      {/* Main Container */}
      <div className="max-w-300 w-full flex flex-col xl:flex-row gap-6 h-full">
        
        {/* === LEFT COLUMN === */}
        <div className="flex-1 bg-[#0B0C14] border border-[#2A2A35] rounded-xl p-8 md:p-12 flex flex-col">
          
          {/* Header Section */}
          <h1 className="text-white text-5xl md:text-6xl font-dm-serif font-bold mb-4">
            Earl Geibriel Dicipulo
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light">
            [Section Description Here]
          </p>

          {/* Primary Tags */}
          <div className="flex flex-col gap-4 mb-16 font-dm">
            <div className="flex flex-wrap gap-4">
              <span className="border border-[#66D9D5] text-[#66D9D5] bg-[#0B1014] px-6 py-2 rounded-sm text-sm md:text-base">
                UI/UX Design
              </span>
              <span className="border border-[#66D9D5] text-[#66D9D5] bg-[#0B1014] px-6 py-2 rounded-sm text-sm md:text-base">
                Frontend Development
              </span>
            </div>
            <div className="flex">
              <span className="border border-[#A875FF] text-[#A875FF] bg-[#0D0B14] px-6 py-2 rounded-sm text-sm md:text-base">
                Layout & Graphic Design
              </span>
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <h2 className="text-white font-dm font-bold text-lg mb-4 tracking-wide">
              &gt;&gt; Experience
            </h2>
            <div className="border-b border-[#2A2A35] mb-8"></div>
            
            <div className="flex flex-col gap-8 font-dm">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col relative pl-5">
                  
                  {/* Colored Left Pillar */}
                  <div 
                    className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full" 
                    style={{ backgroundColor: exp.color }}
                  ></div>
                  
                  {/* Role & Date Pill */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium" style={{ color: exp.color }}>
                      {exp.role}
                    </h3>
                    <span className="border border-[#2A2A35] text-[10px] md:text-xs px-3 py-1 rounded-full text-[#888895]">
                      {exp.date}
                    </span>
                  </div>
                  
                  {/* Company */}
                  <p className="text-sm md:text-base font-light text-[#888895]">
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="w-full xl:w-100 flex flex-col gap-6 font-dm">
          
          {/* Hard Skills Card */}
          <div className="bg-[#0B0C14] border border-[#2A2A35] rounded-xl p-8">
            <h2 className="text-white font-dm font-bold text-lg mb-4 tracking-wide">
              &gt;&gt; Hard Skills
            </h2>
            <div className="border-b border-[#2A2A35] mb-6"></div>
            
            <div className="flex flex-wrap gap-2">
              {hardSkills.map(skill => (
                <span 
                  key={skill} 
                  className="border border-[#2A2A35] bg-[#10121C] text-[#888895] font-light text-lg md:text-base px-4 py-2 rounded-sm hover:border-[#888895] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="bg-[#0B0C14] border border-[#2A2A35] rounded-xl p-8">
            <h2 className="text-white font-dm font-bold text-lg mb-4 tracking-wide">
              &gt;&gt; Soft Skills
            </h2>
            <div className="border-b border-[#2A2A35] mb-6"></div>
            
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <span 
                  key={skill} 
                  className="border border-[#2A2A35] bg-[#10121C] text-[#888895] font-light text-lg md:text-base px-4 py-2 rounded-sm hover:border-[#888895] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}