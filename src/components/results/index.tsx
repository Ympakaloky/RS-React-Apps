import React, { useState } from 'react';
import './results.css';
import { ResultsProps } from '../../store/interface';
import Details from '../Details';
import ItemList from '../ItemList/ItemList';

function Results({ data }: ResultsProps) {
  const [selectedName, setSelectedName] = useState('');
  const [click, setClick] = useState(1);

  return (
    <div className="wrapper">
      <ItemList data={data} setSelectedName={setSelectedName} click={click} setClick={setClick} />
      {selectedName && <Details name={selectedName} click={click} />}
    </div>
  );
}

export default Results;
