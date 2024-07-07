import React from 'react';
import { Pokemon } from '../../store/Interface';
import './results.css';

interface ResultsProps {
  data: Pokemon[];
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <div className="resultField">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="fetchResults">
            <div className="name">Name: {item.name}</div>
            <div className="description"> Description: {item.url}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
