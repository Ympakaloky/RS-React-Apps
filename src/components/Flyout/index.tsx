import { useSelector } from 'react-redux';
import useRemovingPokemon from '../../utils/removingPokemon';
import { RootState } from '../../store/store';
import { PokemonProps } from '../../store/interface';
import './Flyout.css';

function Flyout() {
  const removingPokemon = useRemovingPokemon('');
  const pokemonArray = useSelector((state: RootState) => state.pokemon.array);

  const handleChange = () => {
    removingPokemon();
  };

  const download = () => {
    const csvContent = generateCSV(pokemonArray);
    downloadCSV(csvContent, `${pokemonArray.length}_pokemons.csv`);
  };

  const generateCSV = (data: PokemonProps[]): string => {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]);
    const csvRows: string[] = [headers.join(',')];

    data.forEach((item) => {
      const values = headers.map((header) => {
        const value = item[header as keyof PokemonProps];
        if (typeof value === 'object') {
          return JSON.stringify(value).replace(/"/g, '""');
        }
        return value === null ? '' : value.toString().replace(/"/g, '""');
      });
      csvRows.push(`"${values.join('","')}"`);
    });

    return csvRows.join('\n');
  };

  const downloadCSV = (csvContent: string, fileName: string) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const downloadLink = new Promise((resolve) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      link.dispatchEvent(new MouseEvent('click'));

      setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve('Downloaded');
      }, 0);
    });

    downloadLink.catch((error) => console.error('Error downloading file:', error));
  };

  return (
    <div className="selected">
      <button type="button" className="paginationBtn" onClick={download}>
        Download
      </button>
      <p>{pokemonArray.length} items are selected</p>
      <button className="paginationBtn" onClick={handleChange}>
        Unselect all
      </button>
    </div>
  );
}

export default Flyout;
