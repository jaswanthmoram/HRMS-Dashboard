'use client';

import { useBookmarks } from '../../context/BookmarkContext';
import Link from 'next/link';
import { useState } from 'react';

export default function QuickBookmarks() {
  const { bookmarks, removeBookmark } = useBookmarks();
  const employees = bookmarks.filter(b => b.type === 'employee').slice(0, 5);
  const [toast, setToast] = useState('');

  const handleRemove = (id) => {
    removeBookmark(id);
    setToast('Bookmark removed!');
    setTimeout(() => setToast(''), 2000);
  };

  if (employees.length === 0) {
    return <div className="text-gray-500">No bookmarks yet.</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow relative">
      <h3 className="font-semibold mb-2">Quick Bookmarks</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp.id} className="mb-2 flex items-center justify-between gap-2">
            <span>{emp.title}</span>
            <div className="flex gap-1 items-center">
              <Link href={`/employees/${emp.id}`} className="text-blue-600 hover:underline text-sm">View</Link>
              <button
                onClick={() => handleRemove(emp.id)}
                className="ml-2 text-xs text-red-500 hover:underline"
                title="Remove bookmark"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/bookmarks" className="text-blue-500 hover:underline text-xs">View all bookmarks</Link>
      {toast && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow text-sm animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
} 