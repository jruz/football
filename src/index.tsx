import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './app';
import 'bulma';
import './index.scss';

const onLoaded = (): void => {
  const container = document.getElementById('app');
  if (!container) throw Error('App container not found');
  render(
    <Provider store={Store}>
      <App />
    </Provider>,
    container,
  );
};

document.addEventListener('DOMContentLoaded', onLoaded);
