import React from 'react';
import '../styles/Pagination.scss';

const Pagination = ({ launchesPerPage, totalLaunches, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalLaunches / launchesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <button
        onClick={() => paginate(1)}
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        onClick={() => paginate(currentPage - 1)}
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        onClick={() => paginate(totalPages)}
        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </nav>
  );
};

export default Pagination;
