'use client';

import { motion } from 'framer-motion';
import { FaUserPlus, FaChartLine, FaCalendarAlt, FaBell } from 'react-icons/fa';

const actions = [
  {
    title: 'Add Employee',
    icon: FaUserPlus,
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    onClick: () => alert('Add Employee clicked')
  },
  {
    title: 'View Reports',
    icon: FaChartLine,
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    onClick: () => alert('View Reports clicked')
  },
  {
    title: 'Schedule',
    icon: FaCalendarAlt,
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    onClick: () => alert('Schedule clicked')
  },
  {
    title: 'Notifications',
    icon: FaBell,
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    onClick: () => alert('Notifications clicked')
  }
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${action.color} ${action.hoverColor} text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-200 shadow-md`}
          onClick={action.onClick}
        >
          <action.icon className="text-2xl" />
          <span className="font-medium">{action.title}</span>
        </motion.button>
      ))}
    </div>
  );
} 