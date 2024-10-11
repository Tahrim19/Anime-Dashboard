import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children, url }) => {
    const [list, setlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnimeList = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}`); 
            const data = response.data; 
            setlist(data.data);
            setTotalItems(data.pagination?.items?.total || 0); // Update totalItems from response
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimeList(currentPage); 
    }, [url]); 

    return (
        <AnimeContext.Provider value={{ list, currentPage, setCurrentPage, totalItems, loading, error }}>
            {children}
        </AnimeContext.Provider>
    );
};
