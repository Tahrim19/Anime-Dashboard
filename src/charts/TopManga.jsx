import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TopManga() {
  const [popular, setPopular] = useState([]);

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(requests.fetchManga);
        setPopular(response.data.data.slice(0, 10)); // Get top 10 manga
      } catch (err) {
        console.log(err);
      }
    }, 2000); // delay by 2 second
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  // Prepare the data for the PieChart
  const prepareChartData = () => {
    if (!popular || popular.length === 0) {
      return {
        labels: [], // No labels if data is empty
        datasets: [],
      };
    }

    return {
      labels: popular.map((manga) => manga.title), // Manga titles as labels
      datasets: [
        {
          label: 'Popular Manga Scores',
          data: popular.map((manga) => manga.score || 0), // Manga scores as data points
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
          borderWidth: 1,
        },
      ],
    };
  };

  // Options for the Pie chart
  const options = {
    plugins: {
      legend: {
        position: 'right', // Set the legend position to the right
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            return popular[index].title; // Show the manga title in the tooltip
          },
        },
      },
    },
  };

  return (
    <div>
      <h3 className='text-center'>Top Ranked Manga</h3> {/* Updated Chart Title */}
      <div style={{ width: '450px', height: '450px' }}> {/* Adjusted size for better layout */}
        {popular.length > 0 ? (
          <Pie data={prepareChartData()} options={options} width={450} height={450} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}
