import { LINK } from '../store/enum';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return url === LINK.POKEAPI ? data.results : [data.species];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [{ name: 'Not Found', url: 'Not Found' }];
  }
}

export default fetchData;
