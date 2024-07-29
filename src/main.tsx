import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/errorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/loading';
import myRouter from './utils/router';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter(myRouter);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
