import React from 'react'

function SectionHeader({header, description}){
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='font-eternalo text-white text-[96px]'>{header}</p>
      <p className='font-dm text-slate-500 text-2xl'>{description}</p>
    </div>
  )
}

export default SectionHeader

