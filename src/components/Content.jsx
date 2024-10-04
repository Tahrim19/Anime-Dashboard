import React from 'react';
import TopRanked from '../charts/TopRanked'; // Import your TopRanked chart component
import TopManga from '../charts/TopManga';
import Popular from '../charts/Popular';
import TopMovie from '../charts/TopMovie';

const Content = () => {
  return (
    <div className="content p-4">
      <h1 className='text-center mb-4'>ANIME STATISTICS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="top-ranked p-4">
          <TopRanked />
        </div>

        <div className="top-manga p-4">
          <TopManga />
        </div>

        <div className="popular p-4">
          <Popular/>
        </div>
      </div>

      <div className="top-movie p-4">
        <TopMovie/>
      </div>
    </div>
  );
};

export default Content;

