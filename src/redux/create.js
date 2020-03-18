import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './modules/rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const store = createStore(
    reducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
