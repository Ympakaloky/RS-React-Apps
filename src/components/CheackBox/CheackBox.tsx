import React, { useEffect, useState } from 'react';
import { CheckBoxProps } from '../../store/interface';
import useRemovingPokemon from '../../utils/removingPokemon';
import useFetchPokemon from '../../services/fetchPokemon';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function CheckBox({ name }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);
  const removingPokemon = useRemovingPokemon(name);
  const fetchPokemon = useFetchPokemon();
  const pokemonArray = useSelector((state: RootState) => state.pokemon.array);

  useEffect(() => {
    const isPokemonInArray = pokemonArray.some((pokemon) => pokemon.name === name);
    setChecked(isPokemonInArray);
  }, [pokemonArray, name]);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      fetchPokemon(name);
    } else {
      removingPokemon();
    }
  };

  return <input type="checkbox" className="checkBox" checked={checked} onChange={handleChange} />;
}

export default CheckBox;
