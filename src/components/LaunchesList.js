import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunches } from '../features/launches/launchesSlice';
import debounce from 'lodash.debounce';
import SearchBar from './SearchBar';
import Filter from './Filter';
import LaunchItem from './LaunchItem';
import Pagination from './Pagination';
import '../styles/LaunchesList.scss';

const LaunchesList = () => {
  const dispatch = useDispatch();
  const { launches, status, error } = useSelector((state) => state.launches);
  const [search, setSearch] = useState('');
  const [year, setYear] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(9); 

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 500),
    []
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const filteredLaunches = launches.filter((launch) => {
    return (
      (launch.mission_name.toLowerCase().includes(search.toLowerCase())) &&
      (year ? launch.launch_year === year : true) &&
      (statusFilter ? launch.launch_success === (statusFilter === 'success') : true)
    );
  });

  // Pagination calculations
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = filteredLaunches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <SearchBar handleSearchChange={handleSearchChange} />
      <Filter
        year={year}
        setYear={setYear}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        launches={launches}
      />
      <div className="grid-container">
        {currentLaunches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
      <Pagination
        launchesPerPage={launchesPerPage}
        totalLaunches={filteredLaunches.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default LaunchesList;
