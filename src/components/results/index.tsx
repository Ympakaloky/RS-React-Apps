import React from 'react';
import { ResultsProps } from '../../store/interface';
import './results.css';

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.name} className="fetchResults">
          <div>Name: {item.name}</div>
          <div> Description: {item.url}</div>
        </li>
      ))}
    </ul>
  );
};

export default Results;
