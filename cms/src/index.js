import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/index.css';
import { Provider } from "react-redux"
import App from './App';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
);
