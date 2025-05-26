'use client';

import { motion } from 'framer-motion';
import Layout from '../../components/common/Layout';
import SummaryCards from '../../components/dashboard/SummaryCards';
import Charts from '../../components/dashboard/Charts';
import QuickActions from '../../components/dashboard/QuickActions';
import EmployeeList from '../../components/dashboard/EmployeeList';

export default function DashboardPage() {
  return (
    <Layout title="Dashboard">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Welcome to HRMS Dashboard</h1>
              <p className="text-teal-100 text-lg">Manage your workforce efficiently with real-time insights</p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <QuickActions />
          </motion.div>

          {/* Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <SummaryCards />
          </motion.div>

          {/* Charts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Performance Analytics</h2>
              <Charts />
            </div>
          </motion.div>

          {/* Employee List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Recent Employees</h2>
              <EmployeeList />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 