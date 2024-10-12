import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

export const AnimeContext = createContext();

export const AnimeProvider = ({ children, url }) => {
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage',1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnimeList = async (page) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${url}?page=${page}`); 
            setList(response.data.data);
            setTotalItems(response.data.pagination?.items?.total || 0); 
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimeList(currentPage); // Refetch when currentPage changes
    }, []);

    return (
        <AnimeContext.Provider value={{ list, currentPage, setCurrentPage, totalItems, loading, error, fetchAnimeList }}>
            {children}
        </AnimeContext.Provider>
    );
};
