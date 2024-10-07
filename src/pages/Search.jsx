import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import requests from '../Requests';

export default function Search() {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();
    
    const query = searchParams.get('query');

    const fetchData = async () => {
        try {
            const animeRes = await axios.get(`${requests.fetchAnime}?q=${query}`);

            setResults(animeRes.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (query) {
            fetchData();
        }
    }, [query]);

    return (
        <div className="search-results">
            <ul>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <li key={index} className="search-item flex flex-cols gap-4 justify-center align-center">
                            <Link to={`/animeDetail/${result.mal_id}`} className="flex gap-4">
                                <img 
                                    src={result.images.webp.image_url} 
                                    alt={result.title || result.name} 
                                    className="my-4 rounded" 
                                />
                                <div>
                                    <p><strong>{result.title || result.name}</strong></p>
                                    {result.synopsis && <p>{result.synopsis}</p>}
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ul>
        </div>
    );
}