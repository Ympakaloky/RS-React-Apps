export interface Pokemon {
  name: string;
  url: string;
}

export interface InputFormProps {}

export interface InputFormState {
  textValue: string;
  error: boolean;
}

export interface AppState {
  resultsData: Pokemon[];
}

export interface InputFormPropsExtended extends InputFormProps {
  onSearch: (pokemonName?: string) => void;
}
