import React, { useCallback } from 'react';
import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK, PATHS } from '../store/enum';
import { useEffect, useState } from 'react';
import fetchData from '../services/fetchData';
import Loading from '../components/loading';
import { useNavigate } from 'react-router-dom';
import { pageElements } from '../store/const';
import { ThemeContext } from '../utils/themeContext';
import Flyout from '../components/Flyout';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function App() {
  const [errorStatus, setErrorStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsData, setResultData] = useState([]);
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const pokemonArray = useSelector((state: RootState) => state.pokemon.array);

  const fetch = useCallback(
    async (searchingWord: string = '') => {
      setIsLoading(true);

      const fetchPath = searchingWord
        ? `${LINK.POKEAPI}/${searchingWord}`
        : `${LINK.POKEAPI}?limit=${pageElements}&offset=0`;

      const addressPath = searchingWord ? `${PATHS.POKEMON}?search=${searchingWord}` : `${PATHS.POKEMON}?page=1`;

      try {
        const data = await fetchData(fetchPath);
        navigate(addressPath);
        setResultData(data);
      } catch {
        setErrorStatus(true);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  function handleError(error: Error, info: { componentStack: string }) {
    console.error('Error caught in App: ', error, info);
    setErrorStatus(true);
  }

  if (errorStatus) {
    throw new Error('Simulated error from App component');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
        <InputForm onSearch={fetch} onError={handleError} theme={theme} setTheme={setTheme} />
        {isLoading ? <Loading /> : <Results data={resultsData} />}
        {pokemonArray.length > 0 && <Flyout />}
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
