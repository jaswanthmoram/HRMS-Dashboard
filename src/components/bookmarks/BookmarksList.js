'use client';

import { useState, useEffect } from 'react';
import { useBookmarks } from '../../context/BookmarkContext';
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

export default function BookmarksList() {
  const { bookmarks } = useBookmarks();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError('');
      try {
        const employeeBookmarks = bookmarks.filter(b => b.type === 'employee');
        if (employeeBookmarks.length === 0) {
          setEmployees([]);
          setLoading(false);
          return;
        }
        // Fetch each employee by ID from the API
        const results = await Promise.all(
          employeeBookmarks.map(b =>
            fetch(`https://dummyjson.com/users/${b.id}`)
              .then(res => res.json())
              .then(data => ({ ...data, ...b }))
          )
        );
        setEmployees(results);
      } catch (e) {
        setError('Failed to load bookmarked employees.');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [bookmarks]);

  if (loading) return <div className="text-gray-500">Loading bookmarks...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!employees.length) return <div className="text-gray-500">No bookmarks yet.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-xl shadow flex flex-col gap-2">
          <div className="flex items-center mb-2 gap-3">
            <img src={item.image} alt={item.firstName} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <div className="font-bold text-lg">{item.firstName} {item.lastName}</div>
              <div className="text-sm text-gray-500">{item.email}</div>
            </div>
            <BookmarkButton item={item} />
          </div>
          <div className="mb-1">Department: <span className="font-medium text-blue-700">{item.department}</span></div>
          <div className="mb-1 flex items-center gap-2">Performance: <PerformanceBadge rating={item.performanceRating} /></div>
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={() => alert('Promoted! (mock)')}>Promote</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={() => alert('Assigned! (mock)')}>Assign to Project</button>
          </div>
        </div>
      ))}
    </div>
  );
} 