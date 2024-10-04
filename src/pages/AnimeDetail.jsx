import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import requests from '../Requests';

export default function AnimeDetail() {
    const { mal_id } = useParams(); 
    const navigate = useNavigate(); 
    const [animeDetail, setAnimeDetail] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(requests.fetchAnimeDetail(mal_id));
            setAnimeDetail(response.data.data); 
        } catch (err) {
            console.log(err);
            setError(err.message); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Render error or loading state
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (!animeDetail) return <div className="text-center text-white">Loading Anime Details...</div>;

    // Handle back button click
    const handleClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    // Render anime details
    return (
        <div className="anime-detail p-4 flex">
            <div className="image-container">
                <img 
                    src={animeDetail.images.webp.large_image_url} 
                    alt={animeDetail.title} 
                    className="my-4 w-full h-auto rounded" 
                    style={{ maxHeight: '400px', objectFit: 'cover' }} 
                />
                <button 
                    onClick={handleClick} 
                    className="mt-2 px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded hover:bg-purple-200"
                >
                    Back
                </button>
            </div>

            <div className="details w-2/3 ml-4">
                <h1 className="text-2xl font-bold mb-2">{animeDetail.title}</h1>
                <p><strong>Synopsis:</strong> {animeDetail.synopsis}</p>
                <p><strong>Status:</strong> {animeDetail.status}</p>
                <p><strong>Episodes:</strong> {animeDetail.episodes}</p>
                <p><strong>Aired:</strong> {animeDetail.aired.string}</p>
                <p><strong>Rating:</strong> {animeDetail.score}</p>
                <p><strong>Genres:</strong> 
                    {animeDetail.genres.map((genre, index) => (
                        <span key={genre.mal_id}>
                            {genre.name}
                            {index < animeDetail.genres.length - 1 && ", "} 
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
