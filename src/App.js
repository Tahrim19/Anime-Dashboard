import React from 'react';
import './scrollbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Anime from './pages/Anime'; 
import Manga from './pages/Manga';
import Genres from './pages/Genre';
import TopRanking from './pages/TopRanking';
import Recommendation from './pages/Recommendation';
import Magazines from './pages/Magazines';
import AnimeDetail from './details/AnimeDetail';
import Search from './pages/Search';
import MangaDetail from './details/MangaDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AuthWrapper from './AuthWrapper'

export default function App() {
    return (
        <Router>
            <div className="app h-screen flex flex-col">
                <Header />
                <div className="flex flex-grow">
                    <Sidebar />
                    <div className="content flex-grow">
                        <Routes>
                            {/* Apply AuthWrapper to routes that require authentication */}
                            <Route path="/" element={<AuthWrapper><Content /></AuthWrapper>} />
                            <Route path="/anime" element={<AuthWrapper><Anime /></AuthWrapper>} />
                            <Route path="/manga" element={<AuthWrapper><Manga /></AuthWrapper>} />
                            <Route path="/genres" element={<AuthWrapper><Genres /></AuthWrapper>} />
                            <Route path="/topranking" element={<AuthWrapper><TopRanking /></AuthWrapper>} />
                            <Route path="/recommendation" element={<AuthWrapper><Recommendation /></AuthWrapper>} />
                            <Route path="/magazines" element={<AuthWrapper><Magazines /></AuthWrapper>} />
                            <Route path='/animeDetail/:mal_id' element={<AuthWrapper><AnimeDetail /></AuthWrapper>} />
                            <Route path='/MangaDetail/:mal_id' element={<AuthWrapper><MangaDetail /></AuthWrapper>} />
                            <Route path="/search" element={<AuthWrapper><Search /></AuthWrapper>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
