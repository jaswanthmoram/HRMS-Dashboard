'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const TABS = ['Overview', 'Projects', 'Feedback'];

const departmentIcons = {
  HR: FaUserTie,
  Tech: FaRocket,
  Finance: FaBuilding,
  Marketing: FaBuilding,
};

function StarBadge({ rating }) {
  return (
    <span className="text-yellow-500 text-lg">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  );
}

export default function EmployeeDetails({ id }) {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('Overview');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Try to get user from localStorage (if cached)
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('users')) || [];
    } catch {}
    let found = users.find(u => String(u.id) === String(id));
    if (found) {
      setUser(found);
    } else {
      // Fallback: fetch from API
      fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          // Add random department and rating for consistency
          const DEPARTMENTS = ['HR', 'Tech', 'Finance', 'Marketing'];
          data.department = DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
          data.performanceRating = Math.floor(Math.random() * 5) + 1;
          setUser(data);
        });
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;
  const DeptIcon = departmentIcons[user.department] || FaBuilding;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <img src={user.image} alt={user.firstName} className="w-32 h-32 rounded-full object-cover border-4 border-teal-100 shadow" />
        <div className="flex-1 text-center md:text-left">
          <div className="text-3xl font-bold text-gray-800 mb-1">{user.firstName} {user.lastName}</div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-teal-600 mb-2">
            <DeptIcon className="text-xl" />
            <span className="font-medium">{user.department}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-2">
            <FaEnvelope /> {user.email}
            <FaPhone className="ml-4" /> {user.phone}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-2">
            <FaMapMarkerAlt /> {user.address?.address}, {user.address?.city}, {user.address?.state}
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <StarBadge rating={user.performanceRating} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-6 justify-center md:justify-start">
        {TABS.map(t => (
          <button
            key={t}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${tab === t ? 'bg-teal-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div>
        {tab === 'Overview' && (
          <div className="text-gray-700 space-y-2">
            <div><span className="font-semibold">Bio:</span> Enthusiastic team member with a passion for excellence. (mocked)</div>
          </div>
        )}
        {tab === 'Projects' && (
          <div className="text-gray-700 space-y-2">
            <div><span className="font-semibold">Project:</span> HRMS Revamp (mocked)</div>
            <div><span className="font-semibold">Role:</span> {user.department} Specialist</div>
            <div><span className="font-semibold">Status:</span> Active</div>
          </div>
        )}
        {tab === 'Feedback' && (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (feedback.trim()) {
                  setFeedbacks([...feedbacks, feedback]);
                  setFeedback('');
                }
              }}
              className="mb-4"
            >
              <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                className="w-full p-3 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Leave feedback..."
              />
              <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-700 transition">Submit</button>
            </form>
            <div>
              {feedbacks.length === 0 && <div className="text-gray-500">No feedback yet.</div>}
              {feedbacks.map((fb, i) => (
                <div key={i} className="mb-2 p-3 bg-gray-100 rounded shadow-sm">{fb}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
} 