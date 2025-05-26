'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/common/Layout';
import EmployeeFilters from '../../components/employees/EmployeeFilters';
import EmployeeList from '../../components/employees/EmployeeList';

export default function EmployeesPage() {
  // Add filters state
  const [filters, setFilters] = useState({
    search: '',
    department: '',
    rating: ''
  });
  const [editModal, setEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const router = useRouter();

  const handleViewProfile = (id) => {
    router.push(`/employees/${id}`);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setEditModal(true);
    // You can show a modal here for editing
    alert(`Edit employee: ${employee.firstName} ${employee.lastName}`);
  };

  const handleDelete = (id) => {
    // You can show a confirmation modal here
    if (window.confirm('Are you sure you want to delete this employee?')) {
      alert('Deleted! (mock)');
    }
  };

  return (
    <Layout title="Employees">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Employees</h1>
        <EmployeeFilters filters={filters} onFilterChange={setFilters} />
        <EmployeeList
          filters={filters}
          onViewProfile={handleViewProfile}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </Layout>
  );
} 