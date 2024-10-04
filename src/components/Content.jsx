// import React from 'react';
// import TopRanked from '../charts/TopRanked'; // Import your TopRanked chart component
// import TopManga from '../charts/TopManga';

// const Content = () => {
//   return (
//     <div className="content p-4">
//         <h1 className='text-center mb-4'>ANIME STATISTICS</h1>
//       <div className="grid grid-cols-2 bg-teal-300">
//         <div className='flex flex-row bg-pink-500' >
//           <TopRanked className='grid grid-cols-1'/>
//           <TopManga className='grid grid-cols-2'/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;



import React from 'react';
import TopRanked from '../charts/TopRanked'; // Import your TopRanked chart component
import TopManga from '../charts/TopManga';
import Popular from '../charts/Popular';
import TopMovie from '../charts/TopMovie';

const Content = () => {
  return (
    <div className="content p-4">
      <h1 className='text-center mb-4'>ANIME STATISTICS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="top-ranked p-4">
          <TopRanked />
        </div>

        <div className="top-manga p-4">
          <TopManga />
        </div>

        <div className="popular p-4">
          <Popular/>
        </div>
      </div>

      <div className="top-movie p-4">
        <TopMovie/>
      </div>
    </div>
  );
};

export default Content;



// import React from 'react';
// import TopRanked from '../charts/TopRanked'; 
// import TopManga from '../charts/TopManga';

// const Content = () => {
//   return (
//     <div className="content p-4">
//       <h1 className='text-center mb-4'>ANIME STATISTICS</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-teal-300">
        
//         <div className="bg-pink-500 p-4 w-full h-full"> {/* Ensure full width and height */}
//           <TopRanked />
//         </div>
        
//         <div className="bg-pink-500 p-4 w-full h-full"> {/* Ensure full width and height */}
//           <TopManga />
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default Content;
