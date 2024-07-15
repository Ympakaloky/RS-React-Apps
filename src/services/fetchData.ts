import { LINK } from '../store/enum';

async function fetchData(url: string) {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return url === LINK.POKEAPI || url.includes('?limit=') ? data.results : [data.species];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [{ name: 'Not Found', url: 'Not Found' }];
  }
}

export default fetchData;
