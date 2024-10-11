import React, { useContext } from 'react';
import { AnimeContext } from '../contexts/AnimeContext';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ReusablePage = ({ handleClick , onPageChange}) => {
    const { list, currentPage, setCurrentPage, loading, error } = useContext(AnimeContext);

    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('Manga List:', list);

    if (loading) return <div className="text-center text-white">Loading Manga...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    const totalAnimeCount = 500; // Update based on the actual count from API
    const itemsPerPage = 25;
    const totalPages = Math.ceil(totalAnimeCount / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            setCurrentPage(currentPage - 1); 
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            setCurrentPage(currentPage + 1); 
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => {
                        onPageChange(i);
                        setCurrentPage(i); 
                    }}
                    className={`px-2 py-1 rounded ${currentPage === i ? 'bg-purple-300' : 'bg-purple-200'} hover:bg-purple-300 text-purple-900 font-medium`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="anime-page">
            <div className="anime-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {list.map((item) => (
                    <div
                        key={item.mal_id}
                        className="anime-card flex border rounded-md shadow-md bg-white p-4 cursor-pointer"
                        onClick={() => handleClick(item.mal_id)}
                    >
                        <img
                            src={item.images.webp.image_url}
                            alt={item.title}
                            className="w-1/3 h-auto rounded mr-4"
                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p><strong>Status:</strong> {item.status}</p>
                            <p><strong>Rating:</strong> {item.score}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="pagination-controls mt-6 flex justify-center items-center space-x-4 mb-6">
                <button
                    className="px-4 py-2 rounded bg-purple-200 hover:bg-purple-300"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    <GrFormPrevious />
                </button>
                {renderPageNumbers()}
                <button
                    className="px-4 py-2 bg-purple-200 hover:bg-purple-300 rounded"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    );
};

    export default ReusablePage;


