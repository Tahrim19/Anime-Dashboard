// import React from 'react';
// import { IoPerson } from "react-icons/io5";

// export default function Header() {
//   return (
//     <div className='header bg-slate-200 p-2 h-13'>
//       <div className='header-content flex items-center justify-between'>
        
//         <h1 className='anime font-mono font-bold text-lg tracking-widest text-black cursor-pointer ml-4'>
//           AnimeHub
//         </h1>

//         <div className='flex space-x-9 items-center'>
//           <span>
//             <input
//               type='text'
//               placeholder='Search...'
//               className='h-8 pl-2 w-80 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all'
//             />
//           </span>
//           <span className='cursor-pointer'>
//             <IoPerson className='w-12 h-5 text-black hover:text-gray-600 transition-colors' />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { IoPerson } from "react-icons/io5";

export default function Header() {
  return (
    <div className='header bg-purple-100 p-2 h-13'>
      <div className='header-content flex items-center justify-between'>
        
        <h1 className='anime font-mono font-bold text-lg tracking-widest text-purple-700 cursor-pointer ml-4'>
          AnimeHub
        </h1>

        <div className='flex space-x-9 items-center'>
          <span>
            <input
              type='text'
              placeholder='Search...'
              className='h-8 pl-2 w-80 border border-purple-300 rounded-md bg-white text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all'
            />
          </span>
          <span className='cursor-pointer'>
            <IoPerson className='w-12 h-5 text-purple-700 hover:text-purple-500 transition-colors' />
          </span>
        </div>
      </div>
    </div>
  );
}
