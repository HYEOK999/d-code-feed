import FeedService from '../../services/FeedService';
import { createAction, createActions, handleActions } from 'redux-actions';
import { put, call, takeEvery } from 'redux-saga/effects';

const options = {
  prefix: 'd-code/feed',
};

// 액션 타입 및 생성자를 한번에 모아서 사용한다. - redux-actions
// const success = feeds => ({ type: SUCCESS, feeds });
const { successList, successComments, successLike, pending, fail } = createActions(
  {
    SUCCESS_LIST: feeds => ({ feeds }),
    SUCCESS_COMMENTS: comments => ({ comments }),
    SUCCESS_LIKE: feeds => ({ feeds }),
  },
  'PENDING',
  'FAIL',
  options
);

// ACTIONS
export const getFeeds = createAction('GET_FEEDS');
export const getFeedComments = createAction('GET_FEED_COMMENTS');
export const setFeedLike = successLike;

// 비동기 처리 redux-saga
function* fetchFeedLists() {
  try {
    yield put(pending());
    const { data: feeds } = yield call(FeedService.getList);
    yield put(successList(feeds.data));
  } catch (error) {
    console.log('error : ', error);
    yield put(fail(error));
  }
}

function* fetchFeedComments() {
  try {
    yield put(pending());
    const { data: feeds } = yield call(FeedService.getComments);
    yield put(successComments(feeds.data));
  } catch (error) {
    console.log('error : ', error);
    yield put(fail(error));
  }
}

// FEED ROOT SAGA
export function* feedSaga() {
  yield takeEvery(getFeeds, fetchFeedLists);
  yield takeEvery(getFeedComments, fetchFeedComments);
}

// INIITIAL STATE
const initialState = {
  feeds: null,
  comments: null,
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
    SUCCESS_LIST: (state, action) => ({
      ...state,
      feeds: {
        ...action.payload.feeds,
        list: action.payload.feeds.list.map(feedList => {
          // 분리작업
          const {
            [feedList.sCount || feedList.sharedCount]: renameSharedCount,
            ...feed
          } = feedList;

          return {
            ...feed,
            sharedCount: renameSharedCount,
            like: false,
          };
        }),
      },
      loading: false,
      error: null,
    }),
    SUCCESS_COMMENTS: (state, action) => ({
      ...state,
      comments: action.payload.comments,
      loading: false,
      error: null,
    }),
    SUCCESS_LIKE: (state, action) => ({
      ...state,
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
