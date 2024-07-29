import { ReactNode } from 'react';

export interface Pokemon {
  name: string;
  url: string;
}

export interface InputFormState {
  textValue: string;
  error: boolean;
}

export interface AppState {
  resultsData: Pokemon[];
  error: boolean;
  isLoading: boolean;
}

export interface InputFormProps {
  onSearch: (searchingWord?: string) => Promise<void>;
  onError: (error: Error, info: { componentStack: string }) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export interface InputFormPropsExtended extends InputFormProps {
  onError: (error: Error, info: { componentStack: string }) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null;
}

export interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

export interface ResultsProps {
  data: Pokemon[];
  setSelectedName?: (value: string) => void;
  click?: number;
  setClick?: (click: number) => void;
}

export interface PaginationProps {
  totalPages: number;
}

export interface DetailsProps {
  name: string;
  click: number;
}

export interface PokemonProps {
  name: string;
  sprites: {
    front_default: string | null | undefined;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export interface ToggleSwitchProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CheckBoxProps {
  name: string;
}
