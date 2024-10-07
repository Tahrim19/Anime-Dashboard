import React, { useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import requests from '../Requests';
import { useLocalStorage } from '../hooks/useLocalStorage';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function TopMovies() {
  const [movies, setMovies] = useLocalStorage('movies', []);

  // Fetch top movies
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchTopMovie);
      setMovies(response.data.data.slice(0, 10)); 
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prepareChartData = () => {
    if (!movies || movies.length === 0) {
      return {
        labels: [], // No labels if data is empty
        datasets: [],
      };
    }

    return {
      labels: movies.map((movie) => movie.title), // Movie titles as labels
      datasets: [
        {
          label: 'Movie Popularity',
          data: movies.map((movie) => movie.score || 0), // Movie scores as data points
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)', // Line color
          tension: 0.1,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area color
        },
      ],
    };
  };

  // Options for the Line chart
  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            return `${movies[index].title}: ${movies[index].score}`; 
          },
        },
      },
    },
  };

  return (
    <div>
      <h3 className='text-center'>Top 10 Movies Popularity</h3>
      <div style={{ width: '800px', height: '550px' }}>
      {movies.length > 0 ? (
        <Line data={prepareChartData()} options={options} width={800} height={550}/>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    </div>
  );
}
