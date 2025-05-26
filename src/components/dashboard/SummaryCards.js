'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaChartLine, FaUserClock } from 'react-icons/fa';

const cards = [
  {
    title: 'Total Employees',
    value: '150',
    change: '+12%',
    icon: FaUsers,
    color: 'bg-blue-500',
    trend: 'up'
  },
  {
    title: 'Average Rating',
    value: '4.2',
    change: '+0.3',
    icon: FaStar,
    color: 'bg-yellow-500',
    trend: 'up'
  },
  {
    title: 'Department Growth',
    value: '8',
    change: '+2',
    icon: FaChartLine,
    color: 'bg-green-500',
    trend: 'up'
  },
  {
    title: 'Active Projects',
    value: '24',
    change: '-3',
    icon: FaUserClock,
    color: 'bg-purple-500',
    trend: 'down'
  }
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`${card.color} p-3 rounded-lg`}>
              <card.icon className="text-white text-xl" />
            </div>
            <span className={`text-sm font-medium ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {card.change}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{card.title}</h3>
          <p className="text-2xl font-bold text-gray-800">{card.value}</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
} 