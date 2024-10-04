import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Popular() {
  const [popular, setpopular] = useState([]);

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(requests.fetchPopular);
        setpopular(response.data.data.slice(0, 10)); 
      } catch (err) {
        console.log(err);
      }
    }, 3000); // delay by 3 seconds
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Prepare the data for the Bar Chart with pastel colors
  const prepareChartData = () => {
    if (!popular || popular.length === 0) {
      return {
        labels: [],
        datasets: [],
      };
    }

    return {
      labels: popular.map((anime) => anime.title), // Anime titles as labels
      datasets: [
        {
          label: 'Popular Anime',
          data: popular.map((anime) => anime.score || 0), // Anime scores as data points
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(199, 199, 199, 0.6)',
            'rgba(83, 102, 255, 0.6)',
            'rgba(245, 230, 83, 0.6)',
            'rgba(100, 159, 64, 0.6)',
          ],
        },
      ],
    };
  };

  // Options for the Bar chart
  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Anime Titles',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 50,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Scores',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h3 className='text-center'>Popular Anime</h3>
      <div style={{ width: '800px', height: '500px' }}>
        {popular.length > 0 ? (
          <Bar data={prepareChartData()} options={options} width={800} height={500} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}
