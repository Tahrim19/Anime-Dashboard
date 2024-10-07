import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Sidebar() {
    const [open, setOpen] = useLocalStorage('open' , false);
    
    const menu = [
        {title: "Home" , path:'/'},
        { title: "Anime" , path:'/anime'},
        { title: "Manga" , path:'/manga' },
        { title: "Genres" , path:'/genres'},
        { title: "Top Ranking" , path:'/topranking'},
        { title: "Recommendations" , path:'/recommendation'},
        { title: "Magazines" , path:'/magazines'},
    ];

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
        <div className='sidebar'>
            <aside className={`${open ? 'w-50 mr-6' : 'w-12 mr-6'} transition-all duration-300 h-full bg-purple-100 h-full`}>
                <IoMenu className='w-10 h-8 ml-1 cursor-pointer text-purple-700' onClick={handleClick}/>

                <ul className={`${!open && 'hidden'} mt-4 space-y-4 `}>
                    {menu.map((menus, i) => (
                        <li key={i} className='px-6 py-2 cursor-pointer hover:bg-purple-200 text-purple-700 rounded-md'>
                            <Link to={menus.path} className="w-full h-full block">{menus.title}</Link>

                        </li>
                    ))}
                </ul>
            </aside>
        </div> 
        </>
    )
}
