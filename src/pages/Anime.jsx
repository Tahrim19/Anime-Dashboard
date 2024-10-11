import React from 'react';
import { AnimeProvider } from '../contexts/AnimeContext';
import { useNavigate, useLocation } from 'react-router-dom';  
import requests from '../Requests';
import ReusablePage from './ReusablePage';

export default function Anime() {
    const navigate = useNavigate();
    const location = useLocation();

    // extract page number from the query parameters
    const searchParams = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(searchParams.get('page'), 10) || 1; 

    const handleClick = (id) => {
        navigate(`/animeDetail/${id}`);
    };

    // handle page change and update URL
    const handlePageChange = (newPage) => {
        searchParams.set('page', newPage);
        navigate(`?${searchParams.toString()}`); // update the URL with new page number
    };

    return (
        <div>
            <AnimeProvider url={requests.fetchAnime(pageFromUrl)}>
                <ReusablePage handleClick={handleClick} onPageChange={handlePageChange} />
            </AnimeProvider>
        </div>
    );
}
