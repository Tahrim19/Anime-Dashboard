// import React, { useContext } from 'react';
// import { AnimeContext } from '../contexts/AnimeContext';
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";
// import { useNavigate } from 'react-router-dom';

// const Anime = () => {
//   const { animeList, currentPage, setCurrentPage, loading, error } = useContext(AnimeContext);
//   const navigate = useNavigate();

//   if (loading) return <div className="text-center text-white">Loading Anime...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;

//   const totalAnimeCount = 200; // total anime count fetched
//   const itemsPerPage = 25;
//   const totalPages = Math.ceil(totalAnimeCount / itemsPerPage);

//   const handleClick = (id) => {
//     navigate(`/animeDetail/${id}`); // Use the passed id here
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           className={`px-2 py-1 rounded ${currentPage === i ? 'bg-purple-300' : 'bg-purple-200'} hover:bg-purple-300 text-purple-900 font-medium`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className="anime-page">
//       <div className="anime-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {animeList.map((item) => (
//           <div 
//             key={item.mal_id} 
//             className="anime-card flex border rounded-md shadow-md bg-white p-4 cursor-pointer" 
//             onClick={() => handleClick(item.mal_id)} // Use item.mal_id here
//           >
//             <img
//               src={item.images.webp.image_url}
//               alt={item.title}
//               className="w-1/3 h-auto rounded mr-4" 
//               style={{ maxHeight: '200px', objectFit: 'cover' }} 
//             />
//             <div className="flex-grow"> 
//               <h2 className="text-xl font-semibold">{item.title}</h2>
//               <p><strong>Status:</strong> {item.status}</p>
//               <p><strong>Aired:</strong> {item.aired.string}</p>
//               <p><strong>Rating:</strong> {item.score}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination controls */}
//       <div className="pagination-controls mt-6 flex justify-center items-center space-x-4 mb-6">
//         <button
//           className="px-4 py-2 rounded bg-purple-200 hover:bg-purple-300"
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           <GrFormPrevious/>
//         </button>
//         <span className="text-white px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
//         {renderPageNumbers()}
//         <button
//           className="px-4 py-2 bg-purple-200 hover:bg-purple-300 rounded"
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} // Ensure it doesn't exceed total pages
//         >
//           <GrFormNext/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Anime;

import React from 'react'
import { AnimeProvider } from '../contexts/AnimeContext'
import { useNavigate } from 'react-router-dom';
import requests from '../Requests';
import ReusablePage from './ReusablePage';

export default function Anime() {
  const navigate = useNavigate();
    const handleClick = (id) => {
       navigate(`/animeDetail/${id}`); // Use the passed id here
    };
  return (
    <div>
      <AnimeProvider url={requests.fetchAnime}>
        <ReusablePage handleClick={handleClick}/>
      </AnimeProvider>
    </div>
  )
}
