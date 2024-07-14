import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import ErrorBoundary from './components/errorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
