import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './containers/AppContainer.js';
import store from './store/store.js';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import style from '../css/main.css';


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
