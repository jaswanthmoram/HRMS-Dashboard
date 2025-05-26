'use client';

import { Line, Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from "chart.js";
import { Card } from '../common/Card';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export default function Charts() {
  const employeeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Employee Count",
        data: [120, 130, 140, 145, 150, 155],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const departmentData = {
    labels: ["HR", "Engineering", "Marketing", "Sales", "Finance", "Operations"],
    datasets: [
      {
        data: [20, 40, 30, 25, 15, 20],
        backgroundColor: [
          "#3B82F6", // Blue
          "#10B981", // Green
          "#F59E0B", // Yellow
          "#EF4444", // Red
          "#8B5CF6", // Purple
          "#EC4899", // Pink
        ],
        borderWidth: 1,
      },
    ],
  };

  const leaveData = {
    labels: ["Sick", "Vacation", "Unpaid", "Maternity", "Bereavement"],
    datasets: [
      {
        label: "Leave Days",
        data: [30, 45, 15, 10, 5],
        backgroundColor: [
          "rgba(239, 68, 68, 0.7)",  // Red
          "rgba(16, 185, 129, 0.7)", // Green
          "rgba(245, 158, 11, 0.7)", // Yellow
          "rgba(59, 130, 246, 0.7)", // Blue
          "rgba(139, 92, 246, 0.7)", // Purple
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Employee Growth Trend</h3>
        <div className="h-64">
          <Line 
            data={employeeData} 
            options={{
              ...chartOptions,
              scales: {
                y: {
                  beginAtZero: false,
                  ticks: {
                    stepSize: 10
                  }
                }
              }
            }} 
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
          <div className="h-64">
            <Pie 
              data={departmentData} 
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} (${percentage}%)`;
                      }
                    }
                  }
                }
              }} 
            />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4">Leave Statistics</h3>
          <div className="h-64">
            <Bar 
              data={leaveData} 
              options={{
                ...chartOptions,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 10
                    }
                  }
                }
              }} 
            />
          </div>
        </Card>
      </div>
    </div>
  );
} 