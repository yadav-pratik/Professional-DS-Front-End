import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';

const store = configureStore()

console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState(), 'state changed')
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
