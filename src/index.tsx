import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bulma';

import Store from './store';
import App from './app';
import { setPage } from './actions';
import Error from './shared/error';
import './index.scss';

const onLoaded = (): void => {
  const container = document.getElementById('app');
  if (!container) throw Error('App container not found');

  window.onpopstate = () => {
    const page = window.location.pathname.replace('/', '');
    Store.dispatch(setPage(page));
  };

  render(
    <Error>
      <Provider store={Store}>
        <App />
      </Provider>
    </Error>,
    container,
  );
};

document.addEventListener('DOMContentLoaded', onLoaded);
