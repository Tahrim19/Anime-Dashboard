import { createContext, useEffect, useState } from 'react'
import requests from '../Requests';

// create context
export const AnimeContext = createContext();

// create context provider
export const AnimeProvider = ({ children }) => {
    const [animeList ,setAnimeList] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    const fetchAnimeList = async (page) => {
        setLoading(true);
        try{
            const response = await fetch(`${requests.fetchTrending}?page=${page}`);
            const data = await response.json();
            setAnimeList(data.data);
        }
        catch(err){
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchAnimeList(currentPage);
    },[currentPage]);

    return(
        <AnimeContext.Provider value ={{animeList, currentPage, setCurrentPage, loading, error}}>
            {children}
        </AnimeContext.Provider>
    )
}