import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { getFeeds } from './modules/feed';
import saga from './modules/saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initFeed = () => {
  getFeeds();
};

const create = () => {
  const store = createStore(
    reducer(history),
    {
      feed: {
        feeds: initFeed(),
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(saga);

  return store;
};

export default create;
