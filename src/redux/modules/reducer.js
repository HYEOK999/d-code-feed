import { combineReducers } from 'redux';
import feed from './feed';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    feed,
    router: connectRouter(history),
  });

export default reducer;
