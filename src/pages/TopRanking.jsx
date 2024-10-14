import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { useNavigate } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function TopRanking() {
  const [topRanking, setTopRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [option, setOption] = useState('anime');
  const [page, setPage] = useState(1); // Track the current page
  const [totalPages, setTotalPages] = useState(1); // Track the total number of pages
  const navigate = useNavigate();

  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(199, 199, 199, 0.6)',
    'rgba(83, 102, 255, 0.6)',
    'rgba(245, 230, 83, 0.6)',
    'rgba(100, 159, 64, 0.6)',
  ];

  const fetchData = async (pageNum) => {
    setLoading(true);
    setError(false);
    try {
      const url = option === 'anime' ? `${requests.fetchTrending}?page=${pageNum}` : `${requests.fetchTopManga}?page=${pageNum}`;
      const response = await axios.get(url);
      setTopRanking(response.data.data);
      setTotalPages(response.data.pagination?.last_visible_page || 1); // Set total pages if the API returns it
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page); // Fetch data when `option` or `page` changes
  }, [option, page]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">Error loading data.</p>
      </div>
    );
  }

  const handleClick = (id) => {
    navigate(`/${option}Detail/${id}`);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="top-ranking p-8 min-h-screen">
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => {
              setOption('anime');
              setPage(1); // Reset to page 1 when option changes
            }}
            className={`px-4 py-2 mr-4 font-bold rounded-lg ${option === 'anime' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Anime
          </button>
          <button
            onClick={() => {
              setOption('manga');
              setPage(1); // Reset to page 1 when option changes
            }}
            className={`px-4 py-2 font-bold rounded-lg ${option === 'manga' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Manga
          </button>
        </div>

        {/* Render cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRanking.map((item, index) => (
            <div
              key={item.mal_id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.images.jpg.image_url}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => handleClick(item.mal_id)}
              />
              <p className="mb-2"><strong>Title:</strong> {item.title}</p>
              <p className="mb-2"><strong>Score:</strong> {item.score}</p>
              <p className="mb-2"><strong>Rank:</strong> {item.rank}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 rounded bg-purple-200 hover:bg-purple-300"
            disabled={page === 1} // Disable previous button on first page
          >
            <GrFormPrevious/>
          </button>
          <span className="px-4 py-2">Page {page} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 rounded bg-purple-200 hover:bg-purple-300"
            disabled={page === totalPages} // Disable next button on last page
          >
            <GrFormNext/>
          </button>
        </div>
      </div>
    </>
  );
}
