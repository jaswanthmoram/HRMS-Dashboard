'use client';

import { useState, useEffect } from 'react';
import { Card } from '../common/Card';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function EmployeeTurnover({ dateRange }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const mockData = {
      labels: months,
      datasets: [
        {
          label: 'Turnover Rate',
          data: [2.5, 3.1, 2.8, 2.3, 2.1, 1.9],
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.5)',
          tension: 0.4
        },
        {
          label: 'Industry Average',
          data: [3.2, 3.4, 3.1, 3.0, 2.9, 2.8],
          borderColor: 'rgb(156, 163, 175)',
          backgroundColor: 'rgba(156, 163, 175, 0.5)',
          borderDash: [5, 5],
          tension: 0.4
        }
      ]
    };

    setData(mockData);
  }, [dateRange]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employee Turnover Rate'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Turnover Rate (%)'
        }
      }
    }
  };

  if (!data) {
    return (
      <Card>
        <div className="p-4 text-center">Loading...</div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="p-4">
        <Line data={data} options={options} />
      </div>
    </Card>
  );
} 