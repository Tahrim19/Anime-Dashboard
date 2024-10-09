// import { createContext, useEffect, useState } from 'react'
// import requests from '../Requests';

// // create context
// export const AnimeContext = createContext();

// // create context provider
// export const AnimeProvider = ({ children }) => {
//     const [animeList ,setAnimeList] = useState([]);
//     const [currentPage , setCurrentPage] = useState(1);
//     const [loading , setLoading] = useState(true);
//     const [error , setError] = useState(null);

//     const fetchAnimeList = async (page) => {
//         setLoading(true);
//         try{
//             const response = await fetch(`${requests.fetchAnime}?page=${page}`);
//             const data = await response.json();
//             setAnimeList(data.data);
//         }
//         catch(err){
//             setError(err);
//         }
//         finally{
//             setLoading(false);
//         }
//     }
//     useEffect(()=>{
//         fetchAnimeList(currentPage);
//     },[currentPage]);

//     return(
//         <AnimeContext.Provider value ={{animeList, currentPage, setCurrentPage, loading, error}}>
//             {children}
//         </AnimeContext.Provider>
//     )
// }



import { createContext, useEffect, useState } from 'react'
// import requests from '../Requests';

// create context
export const AnimeContext = createContext();

// create context provider
export const AnimeProvider = ({ children , url }) => {
    const [list ,setlist] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    const fetchAnimeList = async (page) => {
        setLoading(true);
        try{
            const response = await fetch(`${url}?page=${page}`);
            const data = await response.json();
            setlist(data.data);
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
        <AnimeContext.Provider value ={{list, currentPage, setCurrentPage, loading, error}}>
            {children}
        </AnimeContext.Provider>
    )
}