import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaginationProps } from '../../store/interface';
import { PATHS } from '../../store/enum';
import './pagination.css';

function Pagination({ totalPages }: PaginationProps) {
  const location = useLocation();
  const pageFromAddress = +location.search.slice(6);
  const [currentPage, setCurrentPage] = useState(pageFromAddress);
  const navigate = useNavigate();

  const handlePrevious = async () => {
    const newPage = currentPage - 1;
    navigate(`${PATHS.POKEMON}?page=${newPage}`);
    setCurrentPage(newPage);
  };

  const handleNext = async () => {
    const newPage = currentPage + 1;
    navigate(`${PATHS.POKEMON}?page=${newPage}`);
    setCurrentPage(newPage);
  };

  return (
    <div className="wrapper">
      <div className="pagination">
        <button className="paginationBtn" onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className="paginationBtn" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
