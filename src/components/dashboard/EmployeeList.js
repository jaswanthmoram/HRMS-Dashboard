'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaBookmark, FaEllipsisV } from 'react-icons/fa';
import BookmarkButton from '../common/BookmarkButton';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=5');
        const data = await response.json();
        const employeesWithExtras = data.users.map(user => ({
          ...user,
          department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][Math.floor(Math.random() * 5)],
          performanceRating: Math.floor(Math.random() * 5) + 1
        }));
        setEmployees(employeesWithExtras);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {employees.map((employee, index) => (
        <motion.div
          key={employee.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <img
              src={employee.image}
              alt={`${employee.firstName} ${employee.lastName}`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {employee.firstName} {employee.lastName}
              </h3>
              <p className="text-sm text-gray-500">{employee.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              {employee.department}
            </div>
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-1" />
              {employee.performanceRating}
            </div>
            <BookmarkButton item={employee} />
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FaEllipsisV className="text-gray-500" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 