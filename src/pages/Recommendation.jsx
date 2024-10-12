import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { useNavigate } from 'react-router-dom';

export default function Recommendation() {
  const [recommendation, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [option, setOption] = useState('anime');
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

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const url = option === 'anime' ? requests.fetchAnimeRecommendations : requests.fetchMangaRecommendations;
      const response = await axios.get(url);
      setRecommendation(response.data.data);
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

  const handleClick = (id) => {
    navigate(`/${option}Detail/${id}`); 
 };


  return (
    <>
      <div className="recommendation p-8 min-h-screen">
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

        {/* Render recommendation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendation.map((item, index) => (
            <div
              key={item.mal_id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              {item.entry.map((item) => (
                <div key={item.mal_id}>
                  <img
                    src={item.images.jpg.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                    onClick={() => handleClick(item.mal_id)}
                  />
                  <p className='mb-2'><strong>Title:</strong> {item.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
