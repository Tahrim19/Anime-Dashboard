import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { useNavigate } from 'react-router-dom';

export default function Magazines() {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
      const response = await axios.get(requests.fetchMagazines);
      setMagazines(response.data.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    navigate(`/magazineDetail/${id}`);
  };

  return (
    <>
      <div className="magazines p-8 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {magazines.map((item, index) => (
            <div
              key={item.mal_id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div key={item.mal_id}>
                <p className="mb-2"><strong>Name:</strong> {item.name}</p>
                <p className="mb-2">
                  <strong>URL:</strong> <a href={item.url} className="text-blue-500">Click here!</a>
                </p>
                <p className="mb-2"><strong>Count:</strong> {item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
