import { PayloadAction, createSlice, configureStore } from '@reduxjs/toolkit';
import { PokemonProps } from './interface';

interface ArrayState {
  array: PokemonProps[];
}

const initialState: ArrayState = {
  array: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonProps[]>) => {
      state.array = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
