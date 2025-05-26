'use client';

import { useState, useEffect } from 'react';
import { Card } from '../common/Card';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function PerformanceMetrics({ dateRange }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockData = {
      labels: [
        'Productivity',
        'Quality',
        'Attendance',
        'Teamwork',
        'Communication',
        'Initiative'
      ],
      datasets: [
        {
          label: 'Current Period',
          data: [85, 90, 95, 88, 92, 87],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(59, 130, 246)'
        },
        {
          label: 'Previous Period',
          data: [80, 85, 90, 85, 88, 82],
          backgroundColor: 'rgba(156, 163, 175, 0.2)',
          borderColor: 'rgb(156, 163, 175)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(156, 163, 175)'
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
        text: 'Performance Metrics Overview'
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
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
        <Radar data={data} options={options} />
      </div>
    </Card>
  );
} 