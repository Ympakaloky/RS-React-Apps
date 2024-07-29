import { useDispatch, useSelector } from 'react-redux';
import { LINK } from '../store/enum';
import { PokemonProps } from '../store/interface';
import { RootState, setPokemon } from '../store/store';
import { useState } from 'react';

const useFetchPokemon = () => {
  const dispatch = useDispatch();
  const pokemonArray = useSelector((state: RootState) => state.pokemon.array);
  const [errorStatus, setErrorStatus] = useState(false);

  const fetchPokemon = async (name: string) => {
    try {
      const response = await fetch(`${LINK.POKEAPI}/${name}`);
      const data: PokemonProps = await response.json();

      const newPokemonArray = [
        ...pokemonArray,
        {
          name: data.name,
          sprites: {
            front_default: data.sprites.front_default,
          },
          abilities: data.abilities.map((item) => ({
            ability: { name: item.ability.name },
          })),
        },
      ];
      dispatch(setPokemon(newPokemonArray));
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setErrorStatus(true);
    }

    if (errorStatus) {
      throw new Error('Simulated error from App component');
    }
  };

  return fetchPokemon;
};

export default useFetchPokemon;
