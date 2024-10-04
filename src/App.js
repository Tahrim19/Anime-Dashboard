import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Anime from './pages/Anime'; // Import your pages/components for routing
import Manga from './pages/Manga';
import Genres from './pages/Genre';
import TopRanking from './pages/TopRanking';
import Recommendation from './pages/Recommendation';
import Magazines from './pages/Magazines';
import AnimeDetail from './pages/AnimeDetail';

export default function App() {
  return (
    <Router>
      <div className="app h-screen flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="content flex-grow">
            <Routes>
              <Route path='/' element={ <Content/>}/>
              <Route path="/anime" element={<Anime/>} />
              <Route path="/manga" element={<Manga/>} />
              <Route path="/genres" element={<Genres/>} />
              <Route path="/topranking" element={<TopRanking/>} />
              <Route path="/recommendation" element={<Recommendation/>} />
              <Route path="/magazines" element={<Magazines/>} />
              <Route path='/animeDetail' element={<AnimeDetail/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
