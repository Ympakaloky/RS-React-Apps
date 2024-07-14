import InputForm from '../components/inputForm';
import Results from '../components/results';
import './App.css';
import { LINK } from '../store/enum';
import { useEffect, useState } from 'react';
import fetchData from '../services/fetchData';
import Loading from '../components/loading';

function App() {
  const [errorStatus, setErrorStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsData, setResultData] = useState([]);

  async function fetch(searchingWord: string = '') {
    const response = async () => {
      setIsLoading(true);
      const data = await fetchData(`${LINK.POKEAPI}${searchingWord}`);
      setResultData(data);
      setIsLoading(false);
    };
    response().catch(() => setErrorStatus(true));
  }

  useEffect(() => {
    fetch();
  }, []);

  function handleError(error: Error, info: { componentStack: string }) {
    console.error('Error caught in App: ', error, info);
    setErrorStatus(true);
  }

  if (errorStatus) {
    throw new Error('Simulated error from App component');
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      Hello world
      <InputForm onSearch={fetch} onError={handleError} />
      <Results data={resultsData} />
    </>
  );
}

export default App;
