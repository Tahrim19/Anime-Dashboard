import React, { useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLocalStorage } from '../hooks/useLocalStorage';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TopRanked() {
  const [topRanked, setTopRanked] = useLocalStorage('topRanked',[]);

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(requests.fetchTrending);
        setTopRanked(response.data.data.slice(0, 10)); // Get top 10 ranked animes
      } catch (err) {
        console.log(err);
      }
    }, 1000); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prepareChartData = () => {
    if (!topRanked || topRanked.length === 0) {
      return {
        labels: [], // No labels if data is empty
        datasets: [],
      };
    }

    return {
      labels: topRanked.map((anime) => anime.title), // Anime titles as labels
      datasets: [
        {
          label: 'Top Ranked Anime Scores',
          data: topRanked.map((anime) => anime.score || 0), // Anime scores as data points
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
            return topRanked[index].title; 
          },
        },
      },
    },
  };

  return (
    <div>
      <h3 className='text-center'>Top Ranked Anime</h3>
      <div style={{ width: '450px', height: '450px'}}>
        {topRanked.length > 0 ? (
          <Pie data={prepareChartData()} options={options} width={450} height={450}/>
            ) : (
            <p>Loading data...</p>
        )}
        </div>
    </div>
  );
}
