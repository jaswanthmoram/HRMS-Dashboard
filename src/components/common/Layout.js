'use client';

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Layout({ children, title = 'Dashboard' }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [dark, setDark] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const toggleDark = () => {
    setDark(d => {
      const next = !d;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-teal-600 to-teal-800 dark:from-gray-900 dark:to-gray-800 text-white flex flex-col shadow-lg sticky top-0 min-h-screen">
        <div className="p-6 border-b border-teal-900 dark:border-gray-800">
          <h2 className="text-2xl font-extrabold tracking-tight">HRMS Dashboard</h2>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            <li>
              <a href="/dashboard" className="block px-6 py-3 hover:bg-teal-700 dark:hover:bg-gray-800 rounded transition">Dashboard</a>
            </li>
            <li>
              <a href="/employees" className="block px-6 py-3 hover:bg-teal-700 dark:hover:bg-gray-800 rounded transition">Employees</a>
            </li>
            <li>
              <a href="/analytics" className="block px-6 py-3 hover:bg-teal-700 dark:hover:bg-gray-800 rounded transition">Analytics</a>
            </li>
            <li>
              <a href="/bookmarks" className="block px-6 py-3 hover:bg-teal-700 dark:hover:bg-gray-800 rounded transition">Bookmarks</a>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-teal-900 dark:border-gray-800 mt-auto">
          {user && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">{user.username}</span>
              <button onClick={handleLogout} className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition">Logout</button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white dark:bg-gray-950 shadow-sm p-6 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-teal-700 dark:text-teal-300 tracking-tight">{title}</h1>
          <button
            onClick={toggleDark}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-teal-700 dark:text-yellow-300 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">{children}</main>
      </div>
    </div>
  );
} 