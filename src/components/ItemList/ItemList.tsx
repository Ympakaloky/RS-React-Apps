import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { pageElements, totalPages } from '../../store/const';
import { ResultsProps } from '../../store/interface';
import { useLocation } from 'react-router-dom';
import Loading from '../loading';
import { LINK } from '../../store/enum';
import fetchData from '../../services/fetchData';
import './ItemList.css';
import CheckBox from '../CheackBox/CheackBox';

function ItemList({ data, setSelectedName, click, setClick }: ResultsProps) {
  const [cards, setCards] = useState(data);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const pageFromAddress = +location.search.slice(6);
  const searchFromAddress = location.search.slice(8);

  useEffect(() => {
    const url = location.search.includes('page')
      ? `${LINK.POKEAPI}?limit=${pageElements}&offset=${pageElements * (pageFromAddress - 1)}`
      : `${LINK.POKEAPI}/${searchFromAddress}`;

    const newData = async () => {
      setIsLoading(true);
      try {
        const newData = await fetchData(url);
        setCards(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    newData();
  }, [pageFromAddress, location.search, searchFromAddress]);

  const handleItemClick = (name: string) => {
    if (click) {
      setClick(click + 1);
      setSelectedName(name);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="results">
      <ul className="part">
        {cards.map((item) => (
          <li className="checkItem" key={item.name}>
            <div className="fetchResults" onClick={() => handleItemClick(item.name)}>
              <div>Name: {item.name}</div>
              <div> Description: {item.url}</div>
            </div>
            <CheckBox name={item.name} />
          </li>
        ))}
      </ul>
      {cards.length > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}

export default ItemList;
