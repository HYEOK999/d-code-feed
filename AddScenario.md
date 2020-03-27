# d.code 패션 피드 구현

## - 추가 시나리오 : 목록에서 '좋아요' 기능 추가 및 프로퍼티 키 변경 해결하기 -

**목차**

- [시나리오 : 목록에서 '좋아요' 기능 추가](#a1)
- [최적화 적용](#a2)
- [일부 `key` 변경하기](#a3)
- [시나리오 : FEED 데이터 중 sharedCount -> sCount로 변경될 경우](#a4)

---

### 목록에서 '좋아요' 기능 추가 + 최적화 <a id="a1"></a>

- 기존에 `FeedDetail` 에 있던 `좋아요` 기능을 공용으로 사용 가능하도록 별도의 컴포넌트로 생성합니다.
- `FeedDetail` 에서 사용되던 좋아요 관련 로직을 각각의 Container에서 행해야 합니다.
- 리덕스 스토어로 관리되고 있는 `feeds.list` 내에 `좋아요` 가 선택되어 있는 상태를 관리해 줄 상태를 하나 생성해야 합니다.
- `좋아요` 로 인해 Store의 상태가 변경되야하므로 액션과 액션생성자를 생성합니다.

<br/>

####좋아요 기능을 다루는 컴포넌트 추가하기 

> 위치 : src/components/Like.jsx

```jsx
// src/components/Like.jsx

import React from 'react';
import styled from 'styled-components';

const StyledLikeArea = styled.div`
  position: absolute;
  right: 0;
  top: 25%;

  p {
    font-size: 12px;
    color: #7f8185;
    text-align: center;
  }

  &.list {
    z-index: 99;
    top: 2rem;
    right: 2rem;

    p {
      color: #fff;
    }
  }
`;

export const StyledLikeButton = styled.button`
  background: transparent;
  border: none;
  cursor: default;
  outline: none;
  width: 50px;
  height: 50px;
  border: 1px solid #c1c2c4;
  border-radius: 50%;

  div {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 100px;
    height: 100px;
    background: url('/heart.png') no-repeat;
    background-position: 0 0;
    transition: background-position 1s steps(28);
    transition-duration: 0s;

    &.is-active {
      transition-duration: 1s;
      background-position: -2800px 0;
    }
  }
  &.list {
    div {
      transform: translate(-50%, -57%);
    }
  }
`;

const Like = React.memo(({ feed, setFeedLike, feeds, feedId, list }) => {
  function likeToggle({ target }) {
    if (target.tagName !== 'DIV') {
      if (feed.like) {
        setFeedLike(feeds, +feedId, -1);
      } else {
        setFeedLike(feeds, +feedId, 1);
      }
    }
  }

  return (
    <>
      <StyledLikeArea className={list && 'list'}>
        <StyledLikeButton className={list && 'list'} onClick={e => likeToggle(e)}>
          <div className={feed && feed.like ? 'is-active' : ''} />
        </StyledLikeButton>
        <p>{feed && feed.likedCount ? feed.likedCount : '0'}</p>
      </StyledLikeArea>
    </>
  );
});

export default Like;
```

<br/>

#### Container에서 Dispatch할 피드 설정해주기

> 위치 : src/containers/FeedListContainer.jsx

```jsx
import { connect } from 'react-redux';
import { getFeeds, setFeedLike } from '../redux/modules/feed';
import FeedList from '../components/FeedList';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
  loading: state.feed.loading,
  error: state.feed.error,
});

const mapDispatchToProps = dispatch => ({
  getFeed: () => {
    dispatch(getFeeds());
  },
  setFeedLike: (feed, feedId, likeCount) => {
    dispatch(
      setFeedLike({
        ...feed,
        list: feed.list.map(item =>
          item.id === feedId
            ? {
                ...item,
                like: !item.like,
                likedCount:
                  likeCount === 1
                    ? item.likedCount
                      ? item.likedCount + likeCount
                      : 1
                    : item.likedCount
                    ? item.likedCount + likeCount
                    : -1,
              }
            : item
        ),
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
```

<br/>

> 위치 : src/containers/FeedDetailContainer.jsx

```jsx
import { connect } from 'react-redux';
import { getFeedComments, setFeedLike } from '../redux/modules/feed';
import FeedDetail from '../components/FeedDetail';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
  comments: state.feed.comments,
  loading: state.feed.loading,
  error: state.feed.error,
});

const mapDispatchToProps = dispatch => ({
  getFeedComments: () => {
    dispatch(getFeedComments());
  },
  setFeedLike: (feed, feedId, likeCount) => {
    dispatch(
      setFeedLike({
        ...feed,
        list: feed.list.map(item =>
          item.id === feedId
            ? {
                ...item,
                like: !item.like,
                likedCount:
                  likeCount === 1
                    ? item.likedCount
                      ? item.likedCount + likeCount
                      : 1
                    : item.likedCount
                    ? item.likedCount + likeCount
                    : -1,
              }
            : item
        ),
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetail);
```

<br/>

#### modules/feed.js 에 액션/액션생성자/리듀서 각각 수정해주기

> 위치 : src/redux/modules/feed.js

```jsx
// src/redux/modules/feed.js

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
```

<br/>

### 최적화 적용 <a id="a2"></a>

각각의 컴포넌트에 `React.memo()`를 추가합니다.

`React.memo()`를 추가할 컴포넌트 목록들

- FeedList/FeedContent.jsx
- FeedList/FeedFooter.jsx
- FeedList/FeedHeader.jsx
- FeedList/MainTitle.jsx
- FeedDetail/FeedComment.jsx
- FeedDetail/FeedCommentContent.jsx
- FeedDetail/FeedDetailContent.jsx
- FeedDetail/FeedDetailHeader.jsx
- FeedDetail/FeedDetailImg.jsx
- FeedDetail/index.jsx

```jsx
// 예
const 컴포넌트명 = React.memo(() => {
  return (
    ....
  );
});
```

<br/>



### 일부 key 변경 <a id="a3"></a>

- 기존에는 전부 `uuid`로 `key` 를 지정했지만, `key` 값을 매번 임의생성되는 값으로 설정하면 리렌더링시 렌더링 최적화를 이룰 수 없는 문제로 인하여 `key`를 각 리스트에 지정된 `Id`로 변경합니다.

```jsx
// src/components/FeedList/index.jsx

import React, { useEffect } from 'react';
import { StyledMain, StyledContent, StyledFeedArticle } from './Styles';
import MainTitle from './MainTitle';
import FeedHeader from './FeedHeader';
import FeedContent from './FeedContent';
import FeedFooter from './FeedFooter';
import Like from '../Like';

const FeedList = React.memo(({ feeds, loading, error, getFeed, setFeedLike }) => {
  useEffect(() => {
    if (!feeds) getFeed();
  }, [feeds, getFeed]);

  return (
    <StyledMain>
      <MainTitle />
      <StyledContent>
        {feeds &&
          feeds.list.map(feed => (
            <StyledFeedArticle key={feed.id}> // 이부분
              <FeedHeader tags={feed.tags} />
              <FeedContent
                id={feed.id}
                url={feed.mediaList[0].url}
                tags={feed.tags}
                text={feed.text}
              />
              <Like
                feed={feed}
                feeds={feeds}
                feedId={feed.id}
                setFeedLike={setFeedLike}
                list={true}
              />
              <FeedFooter
                mdThumb={feed.mdInfo.mdThumb}
                mdName={feed.mdInfo.mdName}
                createdAt={feed.createdAt.split(' ')[0]}
                id={feed.id}
                count={[feed.likedCount, feed.replyCount, feed.sharedCount]}
              />
            </StyledFeedArticle>
          ))}
      </StyledContent>
    </StyledMain>
  );
});

export default FeedList;
```

<br/>

### 시나리오 : FEED 데이터 중 sharedCount -> sCount로 변경될 경우 <a id="a4"></a>

> 위치 : src/redux/modules/feed.js

```jsx
// src/redux/modules/feed.js

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
```

