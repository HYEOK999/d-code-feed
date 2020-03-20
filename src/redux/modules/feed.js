import FeedService from '../../services/FeedService';
import { createAction, createActions, handleActions } from 'redux-actions';
import { put, call, takeEvery } from 'redux-saga/effects';

const options = {
  prefix: 'd-code/feed',
};

// 액션 타입 및 생성자를 한번에 모아서 사용한다. - redux-actions
// const success = feeds => ({ type: SUCCESS, feeds });
const { success, pending, fail } = createActions(
  {
    SUCCESS: feeds => ({ feeds }),
  },
  'PENDING',
  'FAIL',
  options
);

// ACTIONS
export const getFeeds = createAction('GET_FEEDS');

// 비동기 처리 redux-saga
function* fetchFeedLists() {
  try {
    yield put(pending());
    const { data: feeds } = yield call(FeedService.getList);
    yield put(success(feeds.data));
  } catch (error) {
    console.log('error : ', error);
    yield put(fail(error));
  }
}

// FEED ROOT SAGA
export function* feedSaga() {
  yield takeEvery(getFeeds, fetchFeedLists);
}

// INIITIAL STATE
const initialState = {
  feeds: null,
  loading: false,
  error: null,
};

const feed = handleActions(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      feeds: action.payload.feeds,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options
);

export default feed;
