'use client';

import { useState, useEffect } from 'react';
import { Card } from '../common/Card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DepartmentHeadcount({ dateRange }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockData = {
      labels: ['Engineering', 'Marketing', 'Sales', 'Finance', 'HR', 'Operations'],
      datasets: [
        {
          label: 'Current Headcount',
          data: [45, 25, 30, 15, 10, 20],
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1
        },
        {
          label: 'Previous Period',
          data: [40, 22, 28, 12, 8, 18],
          backgroundColor: 'rgba(156, 163, 175, 0.5)',
          borderColor: 'rgb(156, 163, 175)',
          borderWidth: 1
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
        text: 'Department-wise Headcount'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Employees'
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
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
} 