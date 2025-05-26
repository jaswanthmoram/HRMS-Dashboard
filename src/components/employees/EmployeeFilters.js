'use client';

const DEPARTMENTS = ['HR', 'Tech', 'Finance', 'Marketing'];
const RATINGS = [1, 2, 3, 4, 5];

export default function EmployeeFilters({ filters, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        id="search"
        value={filters.search}
        onChange={e => onFilterChange({ ...filters, search: e.target.value })}
        placeholder="Search by name, email, or department..."
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={filters.department}
        onChange={e => onFilterChange({ ...filters, department: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">All Departments</option>
        {DEPARTMENTS.map(dep => (
          <option key={dep} value={dep}>{dep}</option>
        ))}
      </select>
      <select
        value={filters.rating || ''}
        onChange={e => onFilterChange({ ...filters, rating: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">All Ratings</option>
        {RATINGS.map(r => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
    </div>
  );
} 