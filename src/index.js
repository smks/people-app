import React from 'react';
import { Router } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
