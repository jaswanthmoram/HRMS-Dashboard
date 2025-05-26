'use client';

import { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

function getRandomDepartment() {
  const DEPARTMENTS = ['HR', 'Tech', 'Finance', 'Marketing'];
  return DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
}

function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

export default function EmployeeList({ filters, onEdit, onDelete, onViewProfile }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [promoteModal, setPromoteModal] = useState({ open: false, user: null });
  const [toast, setToast] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then(res => res.json())
      .then(data => {
        const usersWithExtras = data.users.map(user => ({
          ...user,
          department: getRandomDepartment(),
          performanceRating: getRandomRating(),
        }));
        setUsers(usersWithExtras);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load users. Please try again.');
        setLoading(false);
      });
  }, []);

  const filtered = users.filter(user => {
    const searchMatch =
      user.firstName.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.department.toLowerCase().includes(filters.search.toLowerCase());
    const departmentMatch = !filters.department || user.department === filters.department;
    const ratingMatch = !filters.rating || user.performanceRating === Number(filters.rating);
    return searchMatch && departmentMatch && ratingMatch;
  });

  if (loading) {
    return (
      <div className="p-8 flex justify-center"><LoadingSpinner size="lg" /></div>
    );
  }
  if (error) {
    return (
      <div className="p-4"><ErrorMessage message={error} onRetry={() => window.location.reload()} /></div>
    );
  }
  if (filtered.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 animate-fade-in">No users found matching your criteria</div>
    );
  }

  return (
    <>
      {toast && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow z-50 animate-fade-in">{toast}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((user, idx) => (
          <EmployeeCard
            key={user.id}
            user={user}
            onViewProfile={() => onViewProfile(user.id)}
            onPromote={() => setPromoteModal({ open: true, user })}
          />
        ))}
      </div>
      {/* Promote Modal */}
      {promoteModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow max-w-sm w-full animate-fade-in">
            <h3 className="font-bold mb-2">Promote Employee</h3>
            <p>Promote {promoteModal.user.firstName} {promoteModal.user.lastName}?</p>
            <div className="flex gap-2 mt-4 justify-end">
              <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => setPromoteModal({ open: false, user: null })}>Cancel</button>
              <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => {
                setPromoteModal({ open: false, user: null });
                setToast('Employee promoted!');
                setTimeout(() => setToast(''), 2000);
              }}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 