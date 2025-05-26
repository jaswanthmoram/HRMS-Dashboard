'use client';

import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DEPARTMENTS = ['HR', 'Tech', 'Finance', 'Marketing'];
const COLORS = ['#14b8a6', '#6366f1', '#f59e42', '#f43f5e']; // teal, indigo, orange, pink

function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

export default function AnalyticsCharts() {
  // Dummy data for department-wise average performance
  const [deptData, setDeptData] = useState({ labels: [], datasets: [] });
  // Dummy data for bookmark trends
  const [bookmarkTrend, setBookmarkTrend] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Simulate department-wise average performance
    const avgRatings = DEPARTMENTS.map(() => 2 + Math.random() * 3);
    setDeptData({
      labels: DEPARTMENTS,
      datasets: [
        {
          label: 'Avg Performance',
          data: avgRatings,
          backgroundColor: COLORS,
          borderRadius: 8,
        },
      ],
    });
    // Simulate bookmark trend
    setBookmarkTrend({
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Bookmarks',
          data: [2, 5, 8, 12],
          borderColor: '#14b8a6',
          backgroundColor: 'rgba(20,184,166,0.2)',
          pointBackgroundColor: '#f43f5e',
          pointBorderColor: '#6366f1',
          tension: 0.4,
        },
      ],
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col"
      >
        <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-200">Department-wise Avg Performance</h3>
        <Bar
          data={deptData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
              tooltip: { enabled: true },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 5,
                grid: { color: '#e5e7eb' },
                ticks: { color: '#334155' },
              },
              x: {
                grid: { color: '#f1f5f9' },
                ticks: { color: '#334155' },
              },
            },
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col"
      >
        <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-200">Bookmark Trend</h3>
        <Line
          data={bookmarkTrend}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
              tooltip: { enabled: true },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: '#e5e7eb' },
                ticks: { color: '#334155' },
              },
              x: {
                grid: { color: '#f1f5f9' },
                ticks: { color: '#334155' },
              },
            },
          }}
        />
      </motion.div>
    </div>
  );
} 