import React from 'react'

const OpenToWork = () => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-500 bg-transparent px-6 py-2.5 w-50">
      {/* Blinking green light */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
      </span>
 
      <span className="font-dm text-sm font-semibold tracking-widest text-white">
        OPEN TO WORK
      </span>
    </div>
  )
}

export default OpenToWork
