import React, { useState } from 'react';
import { ResultsProps } from '../../store/interface';
import './results.css';
import fetchData from '../../services/fetchData';
import { LINK } from '../../store/enum';

function Results({ data }: ResultsProps) {
  const pageElements = 4;
  const totalPages = Math.ceil(data.length / pageElements);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(data);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = async () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const currentData = await fetchData(`${LINK.POKEAPI}?limit=5&offset=0`);
      setCards(currentData);
    }
  };

  return (
    <>
      <ul>
        {cards.map((item) => (
          <li key={item.name} className="fetchResults">
            <div>Name: {item.name}</div>
            <div> Description: {item.url}</div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Results;
