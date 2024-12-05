import React from 'react';
import { Pokemon } from '../../store/interface';
import './results.css';

interface ResultsProps {
  data: Pokemon[];
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index} className="fetchResults">
          <div>Name: {item.name}</div>
          <div> Description: {item.url}</div>
        </li>
      ))}
    </ul>
  );
};

export default Results;
