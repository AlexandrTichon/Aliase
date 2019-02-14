import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Fragment>
    {/*
    <AppMenu />
    <AppGame />
    <AppSettings />
    <AppRules />
     */}
  </Fragment>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
