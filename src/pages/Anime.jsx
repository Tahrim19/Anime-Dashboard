import React from 'react'
import { AnimeProvider } from '../contexts/AnimeContext'
import { useNavigate } from 'react-router-dom';
import requests from '../Requests';
import ReusablePage from './ReusablePage';

export default function Anime() {
  const navigate = useNavigate();
    const handleClick = (id) => {
       navigate(`/animeDetail/${id}`); 
    };

  return (
    <div>
      <AnimeProvider url={requests.fetchAnime}>
        <ReusablePage handleClick={handleClick} contentType="anime"/>
      </AnimeProvider>
    </div>
  )
};
