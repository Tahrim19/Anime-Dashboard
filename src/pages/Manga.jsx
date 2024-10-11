import React from 'react'
import { AnimeProvider } from '../contexts/AnimeContext'
import { useNavigate } from 'react-router-dom';
import requests from '../Requests';
import ReusablePage from './ReusablePage';

export default function Manga() {
  const navigate = useNavigate();
    const handleClick = (id) => {
       navigate(`/mangaDetail/${id}`); 
    };

  return (
    <div>
      <AnimeProvider url={requests.fetchManga}>
        <ReusablePage handleClick={handleClick} contentType="manga"/>
      </AnimeProvider>
    </div>
  )
};