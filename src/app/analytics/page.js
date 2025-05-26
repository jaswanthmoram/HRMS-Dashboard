'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/common/Layout';
import AnalyticsCharts from '../../components/analytics/AnalyticsCharts';
// import your analytics charts/components as needed

export default function AnalyticsPage() {
  return (
    <Layout title="Analytics">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10 px-4 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-gray-900 dark:to-gray-800 text-white rounded-2xl mb-10 shadow"
        >
          <h1 className="text-4xl font-bold mb-2">Analytics & Insights</h1>
          <p className="text-teal-100 dark:text-teal-300 text-lg">Visualize your HR data and trends in real time</p>
        </motion.div>

        {/* Animated Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <StatCard label="Total Departments" value="4" color="bg-blue-500" />
          <StatCard label="Avg. Rating" value="4.1" color="bg-yellow-500" />
          <StatCard label="Bookmarks" value="12" color="bg-pink-500" />
          <StatCard label="Active Projects" value="8" color="bg-green-500" />
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm p-6">
            <AnalyticsCharts />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

function StatCard({ label, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${color} text-white dark:shadow-none`}
    >
      <div className="text-lg font-semibold mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
    </motion.div>
  );
} 