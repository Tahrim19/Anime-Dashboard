import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import requests from '../Requests';

export default function MangaDetail() {
    const { mal_id } = useParams(); 
    const navigate = useNavigate(); 
    const [mangaDetail, setmangaDetail] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(requests.fetchMangaDetail(mal_id));
            setmangaDetail(response.data.data); 
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
    if (!mangaDetail) return <div className="text-center text-white">Loading manga Details...</div>;

    // Handle back button click
    const handleClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    // Render manga details
    return (
        <div className="manga-detail p-4 flex">
            <div className="image-container">
                <img 
                    src={mangaDetail.images.webp.large_image_url} 
                    alt={mangaDetail.title} 
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
                <h1 className="text-2xl font-bold mb-2">{mangaDetail.title}</h1>
                <p><strong>Synopsis:</strong> {mangaDetail.synopsis}</p>
                <p><strong>Status:</strong> {mangaDetail.status}</p>
                <p><strong>Chapters:</strong> {mangaDetail.chapters}</p>
                <p><strong>Published:</strong> {mangaDetail.published.string}</p>
                <p><strong>Volumes:</strong> {mangaDetail.volumes}</p>
                <p><strong>Authors:</strong> {mangaDetail.authors[0]?.name || 'N/A'}</p>
                <p><strong>Genres: </strong> 
                    {mangaDetail.genres.map((genre, index) => (
                        <span key={genre.mal_id}>
                            {genre.name}
                            {index < mangaDetail.genres.length - 1 && ", "} 
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
