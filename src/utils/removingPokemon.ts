import { useDispatch, useSelector } from 'react-redux';
import { RootState, setPokemon } from '../store/store';

const useRemovingPokemon = (name: string) => {
  const dispatch = useDispatch();
  const pokemonArray = useSelector((state: RootState) => state.pokemon.array);

  return () => {
    const newPokemonArray =
      name === ''
        ? pokemonArray.filter((item) => item.name === name)
        : pokemonArray.filter((item) => item.name !== name);
    dispatch(setPokemon(newPokemonArray));
  };
};

export default useRemovingPokemon;
