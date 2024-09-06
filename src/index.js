import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redex/stor';
import ContextApi from './ConApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ContextApi >
        <App />
      </ContextApi>
    </Provider>
  </BrowserRouter>
);


