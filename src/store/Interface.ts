export interface Pokemon {
  name: string;
  url: string;
}

export interface InputFormProps {}

export interface InputFormState {
  textValue: string;
}

export interface AppState {
  resultsData: Pokemon[];
}
