import React, { useState } from 'react';
import { ResultsProps } from '../../store/interface';
import './results.css';
import fetchData from '../../services/fetchData';
import { LINK } from '../../store/enum';
import Loading from '../loading';

function Results({ data }: ResultsProps) {
  const pageElements = 4;
  const totalPages = 100;
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrevious = async () => {
    setIsLoading(true);
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      const currentData = await fetchData(
        `${LINK.POKEAPI}?limit=${pageElements}&offset=${pageElements * (newPage - 1)}`,
      );
      setCards(currentData);
    }
    setIsLoading(false);
  };

  const handleNext = async () => {
    setIsLoading(true);
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      const currentData = await fetchData(
        `${LINK.POKEAPI}?limit=${pageElements}&offset=${pageElements * (newPage - 1)}`,
      );
      setCards(currentData);
    }
    setIsLoading(false);
  };
  if (isLoading) {
    return <Loading />;
  }

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
      {cards.length > 1 && (
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
      )}
    </>
  );
}

export default Results;
