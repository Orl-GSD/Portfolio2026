import React from 'react';

// Keep the colors here since the card is what uses them
const CATEGORY_COLORS = {
  "UI/UX & Development": "#66D9D5", 
  "Layout & Graphic Design": "#A875FF" 
};

const CATEGORY_BG = {
  "UI/UX & Development": "#0B1014", 
  "Layout & Graphic Design": "#0D0B14" 
};

export default function ProjectCard({ project, onClick }) {
  const themeColor = CATEGORY_COLORS[project.category] || "#FFFFFF";
  const bgStyle = CATEGORY_BG[project.category] || "#1E1E2F";

  return (
    <div 
      onClick={onClick}
      className="flex bg-[#121215] border border-[#2A2A35] rounded-xl p-6 cursor-pointer relative overflow-hidden transition-all duration-200 hover:border-gray-500 hover:-translate-y-1"
      style={{ backgroundColor: bgStyle }}
    >
      {/* Colored Left Pillar */}
      <div 
        className="absolute w-1 top-6 bottom-6 left-6 rounded-md"
        style={{ backgroundColor: themeColor }}
      ></div>
      
      {/* Main Content Area */}
      <div className="ml-6 flex-1">
        
        {/* Header: Project Number & Click to view */}
        <div className="flex justify-between items-center mb-2 font-dm">
          <div className="text-md" style={{ color: themeColor }}>
            {project.projectNumber}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-white text-4xl md:text-5xl font-dm-serif font-bold mb-4">
          {project.title}
        </h3>
        
        {/* Tags */}
        <div className="flex gap-3 flex-wrap pt-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[#b0bdbd] border border-[#2A2A35] px-3 py-1 rounded-full text-md font-dm"
             >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}