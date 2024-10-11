import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests'; 

export default function Genre() {
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [option, setOption] = useState('anime'); 

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

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const url = option === 'anime' ? requests.fetchAnimeGenre : requests.fetchMangaGenre;
      const response = await axios.get(url);
      setGenre(response.data.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [option]);

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

  return (
    <>
      <div className="genre p-8 min-h-screen">
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setOption('anime')}
            className={`px-4 py-2 mr-4 font-bold rounded-lg ${option === 'anime' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Anime
          </button>
          <button
            onClick={() => setOption('manga')}
            className={`px-4 py-2 font-bold rounded-lg ${option === 'manga' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Manga
          </button>
        </div>

        {/* Render genre cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genre.map((item, index) => (
            <div
              key={item.mal_id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p><strong>Name:</strong> {item.name}</p>              
              <p><strong>Total:</strong> {item.count}</p>              
              <p><strong>URL:</strong> <a href={item.url} className="text-black-500 underline">Click Here!</a></p>              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
