import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

// --- Modal Component ---
const Modal = ({ isOpen, onClose, project }) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Category colors for the accent text
  const CATEGORY_COLORS = {
    "UI/UX & Development": "#66D9D5", 
    "Layout & Graphic Design": "#A875FF" 
  };
  const themeColor = CATEGORY_COLORS[project.category] || "#FFFFFF";

  return (
    <>
      <style>{`
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal {
          animation: modalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>

      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 md:p-10 transition-opacity duration-300"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div 
          className="animate-modal hide-scrollbar bg-[#09090B] border border-[#2A2A35] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-xl p-8 md:p-12 relative shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
        >
          {/* Close Button (Top Right) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[#888895] hover:text-white transition-colors text-xl font-bold z-10"
          >
            ✕
          </button>

          {/* Top Header */}
          <div className="mb-8 text-left font-dm">
            <div className="text-md font-medium mb-2" style={{ color: themeColor }}>
              {project.projectNumber}
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold font-dm-serif mb-4">
              {project.title}
            </h2>
            <div className="flex gap-3 flex-wrap">
              {project.tags?.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-[#888895] border border-[#2A2A35] px-4 py-1 rounded-full text-sm md:text-base font-dm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Banner Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-[#121215] border border-[#2A2A35] rounded-xl mb-10 overflow-hidden flex-shrink-0">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#555560] text-sm">
                No Image Available
              </div>
            )}
          </div>

          {/* Bottom Content Layout */}
          <div className="flex flex-col md:flex-row gap-10 font-dm">
            
            {/* Left Sidebar (Metadata) */}
            <div className="w-full md:w-[35%] flex flex-col gap-6 bg-[#09090B] border border-[#2A2A35] rounded-xl p-6 h-fit">
              
              {/* Tools Used */}
              <div>
                <h4 className="text-[#888895] text-sm font-medium mb-3 tracking-wide">
                  &gt;&gt; Tools and Languages Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool, index) => (
                    <span 
                      key={index}
                      className="border border-[#2A2A35] text-[#888895] px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <h4 className="text-[#888895] text-sm font-medium mb-1 tracking-wide">
                  &gt;&gt; Project Type
                </h4>
                <p className="text-white text-lg">{project.projectType}</p>
              </div>

              {/* Project Date */}
              <div>
                <h4 className="text-[#888895] text-sm font-medium mb-1 tracking-wide">
                  &gt;&gt; Project Date
                </h4>
                <p className="text-white text-lg">{project.projectDate}</p>
              </div>

              {/* Status */}
              <div>
                <h4 className="text-[#888895] text-sm font-medium mb-1 tracking-wide">
                  &gt;&gt; Status
                </h4>
                <p className="text-white text-lg">{project.status}</p>
              </div>

              {/* Conditional Button */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[#E5E5E5] text-black font-medium py-3 rounded-md text-center hover:bg-[#66D9D5] transition-colors ease-in-out duration-200"
                >
                  Access Website Here
                </a>
              )}
            </div>

            {/* Right Side (Description) */}
            <div className="w-full md:w-[65%]">
              <p className="text-[#888895] font-light leading-relaxed text-md md:text-lg">
                {project.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

// --- Main Board Component ---
export default function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="p-10 min-h-screen font-sans">
      <div className="flex flex-col gap-5 max-w-[1200px] mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15, // Staggers each project card as you scroll
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <ProjectCard 
              project={project} 
              onClick={() => handleCardClick(project)} 
            />
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
    </div>
  );
}