'use client';

import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaStar, FaArrowUp, FaBookmark, FaEye, FaRocket } from 'react-icons/fa';
import BookmarkButton from '../common/BookmarkButton';

function PerformanceBadge({ rating }) {
  let color = 'bg-red-100 text-red-700';
  if (rating >= 4) color = 'bg-green-100 text-green-700';
  else if (rating === 3) color = 'bg-yellow-100 text-yellow-700';
  return (
    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  );
}

const departmentIcons = {
  HR: FaUserTie,
  Tech: FaRocket,
  Finance: FaBuilding,
  Marketing: FaBuilding,
};

export default function EmployeeCard({ user, onViewProfile, onPromote }) {
  const DeptIcon = departmentIcons[user.department] || FaBuilding;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
      className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 items-center text-center transition-all"
    >
      <img src={user.image} alt={user.firstName} className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-teal-100" />
      <div className="font-bold text-lg text-gray-800">{user.firstName} {user.lastName}</div>
      <div className="text-sm text-gray-500 mb-1">{user.email}</div>
      <div className="flex items-center justify-center gap-2 text-sm mb-1">
        <DeptIcon className="text-teal-500" />
        <span className="font-medium text-gray-700">{user.department}</span>
      </div>
      <div className="flex items-center justify-center gap-2 mb-1">
        <PerformanceBadge rating={user.performanceRating} />
      </div>
      <div className="flex gap-2 mt-2">
        <BookmarkButton item={user} />
        <button
          className="flex items-center gap-1 px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-xs"
          onClick={onViewProfile}
        >
          <FaEye /> View
        </button>
        <button
          className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-xs"
          onClick={onPromote}
        >
          <FaArrowUp /> Promote
        </button>
      </div>
    </motion.div>
  );
} 