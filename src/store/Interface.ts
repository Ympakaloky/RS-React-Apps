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
}

export interface PaginationProps {
  count: number;
  page: number;
  onChange: (newPage: number) => void;
}
