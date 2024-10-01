import React from 'react';

export default function Header() {
  return (
    <div className='bg-slate-200 p-4'>
      <div className='header-content flex items-center justify-between'>
        
        <h1 className='anime font-mono font-bold text-lg tracking-widest text-black cursor-pointer'>
          AnimeHub
        </h1>

        <div className='flex space-x-6'>
          <span className='text-black cursor-pointer hover:text-gray-600 transition-colors'>Home</span>
          <span className='text-black cursor-pointer hover:text-gray-600 transition-colors'>Explore</span>
          <span className='text-black cursor-pointer hover:text-gray-600 transition-colors'>About</span>
        </div>
      </div>
    </div>
  );
}
