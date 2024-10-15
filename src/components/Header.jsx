import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { createSearchParams, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase'; 
import { signOut } from 'firebase/auth';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            if (searchQuery.trim()) {
                navigate({
                    pathname: '/search',
                    search: createSearchParams({
                        query: searchQuery
                    }).toString(),
                });
            } else {
                navigate('/anime');
            }
        }
    };

    const handleLogout = async () => {
        await signOut(auth); 
        navigate('/login'); 
    };

    return (
        <div className='header bg-purple-100 p-2 h-13'>
            <div className='header-content flex items-center justify-between'>
                <h1 className='anime font-mono font-bold text-lg tracking-widest text-purple-700 cursor-pointer ml-4'
                    onClick={handleClick}
                >
                    AnimeHub
                </h1>

                <div className='flex space-x-9 items-center'>
                    <span>
                        <input
                            type='text'
                            placeholder='Search anime...'
                            className='h-8 pl-2 w-80 border border-purple-300 rounded-md bg-white text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch} // Trigger search on Enter key
                        />
                    </span>
                    <span className='cursor-pointer'>
                        <IoPerson className='w-12 h-5 text-purple-700 hover:text-purple-500 transition-colors' />
                    </span>
                    <button onClick={handleLogout} className="text-purple-700 hover:text-purple-500 pr-4">Logout</button>
                </div>
            </div>
        </div>
    );
}
