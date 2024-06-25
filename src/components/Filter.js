import React from 'react';
import '../styles/Filter.scss';

const Filter = ({ launches, year, setYear, statusFilter, setStatusFilter }) => {
  return (
    <div className="filter">
      <select value={year} onChange={(e) => setYear(e.target.value)} className="filter-select">
        <option value="">All Years</option>
        {[...new Set(launches.map((launch) => launch.launch_year))].map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="failed">Failed</option>
      </select>
    </div>
  );
};

export default Filter;
