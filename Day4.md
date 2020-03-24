# d.code 패션 피드 구현

## - FeedList 일부 수정 및 FeedDetail 구현1 -

**목차**

1. [FeedList useEffect 수정](#a1)
3. [FeedList Link 태그 수정](#a2)
3. [HOC 작성](#a3)
4. [Detail 관련 Redux 추가하기](#a4)
5. [FeedDetailContainer 만들기 + 좋아요 로직 구성](#a5)
6. [Detail 페이지 구현하기 - 틀 작성](#a6)

---

### FeedList useEffect 수정 <a id="a1"></a>

- 사용자가 feed Detail의 url만 가지고서 Detail 페이지에 접근할 경우를 대비해 만약 store에 `feed`가 존재한다면 dispatch를 막아야 하는 코드를 작성합니다.

```jsx
// src/components/FeedList/index.jsx
import React, { useEffect } from 'react';
import { StyledMain, StyledContent, StyledFeedArticle } from './Styles';
import { v4 as uuidv4 } from 'uuid';
import MainTitle from './MainTitle';
import FeedHeader from './FeedHeader';
import FeedContent from './FeedContent';
import FeedFooter from './FeedFooter';

const FeedList = ({ feeds, loading, error, getFeed }) => {
  // 수정 부분
  useEffect(() => { 
    if (!feeds) getFeed();
  }, [feeds, getFeed]);

  return (
    <StyledMain>
      <MainTitle />
      <StyledContent>
        {feeds &&
          feeds.list.map(feed => (
            <StyledFeedArticle key={uuidv4()}>
              <FeedHeader feed={feed} />
              <FeedContent feed={feed} />
              <FeedFooter feed={feed} />
            </StyledFeedArticle>
          ))}
      </StyledContent>
    </StyledMain>
  );
};

export default FeedList;
```

<br/>

### FeedList Link 태그 수정  <a id="a2"></a>

- 기존에 `<Link>`태그로 작성되어있던 부분을 `<button role="link">` 로 변경합니다.
- `useDispatch()` 를 이용해 route 를 하기 위함입니다.
- 이제 `store`에 url path가 저장됩니다.

````jsx
// src/components/FeedList/FeedContent.jsx
import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { StyledButton, StyledFeedImg, StyledFeedTagBox, StyledFeedContent } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedContent = ({ feed }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton role="link" onClick={() => dispatch(push(`/feed/${feed.id}`))}>
      <StyledFeedImg src={feed.mediaList[0].url} alt="images" />
      <StyledFeedTagBox>
        {feed.tags.map(tag => (
          <span key={uuidv4()}>{`#${tag}`}</span>
        ))}
      </StyledFeedTagBox>
      <StyledFeedContent>{feed.text}</StyledFeedContent>
    </StyledButton>
  );
};

export default FeedContent;
````

<br/>

### HOC 작성 <a id="a3"></a>

- `Detail`페이지를 구현하기 앞서 HOC를 작성합니다.
- 해당 HOC의 역할은 사용자가 `/feed/:feedId`와 같은 url로 접속을 하였을 경우 store에 feed데이터가 존재하지 않으므로 그 때 feed의 상태를 조건으로 하여 getFeeds를 dispath하여 추가합니다.

```jsx
// src/hocs/withFeed.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';

function withFeed(Component) {
  function WrappedComponent(props) {
    const { feeds } = useSelector(state => state.feed);
    const dispatch = useDispatch();
    const { feedId } = props.match.params;
    useEffect(() => {
      if (feeds === null) {
        dispatch(getFeeds());
      }
    }, [dispatch, feeds]);
    return <Component {...props} feedId={feedId} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
}

export default withFeed;
```

<br/>

 ### Detail 관련 Redux 추가하기 <a id="a4"></a>

- `feed.js`모듈을 수정합니다.
- COMMENTS(댓글)을 추가하는 액션을 만듭니다.
- 초기 state르 수정합니다.
- 초기 상태가 변경되었으니 handleAction 부분도 수정합니다.

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
const { successList, successComments, pending, fail } = createActions(
  {
    SUCCESS_LIST: feeds => ({ feeds }),
    SUCCESS_COMMENTS: comments => ({ comments }),
  },
  'PENDING',
  'FAIL',
  options
);

// ACTIONS
export const getFeeds = createAction('GET_FEEDS');
export const getFeedComments = createAction('GET_FEED_COMMENTS');
export const setFeedLike = successList;

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
      feeds: action.payload.feeds,
      loading: false,
      error: null,
    }),
    SUCCESS_COMMENTS: (state, action) => ({
      ...state,
      comments: action.payload.comments,
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

### FeedDetailContainer 만들기 + 좋아요 로직 구성  <a id="a5"></a>

- Detail 페이지에서 사용할 컨테이너를 만들도록 하겠습니다.
- 또한 좋아요 버튼을 누를 경우 현재 상태에 저장되어있는 좋아요 수도 올라가야 하기 때문에 해당 로직을 같이 작성합니다.

```jsx
// src/containers/FeedDetailContainer.jsx
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

### Detail 페이지 구현하기 - 틀 작성 <a id="a6"></a>

> 위치 : src/components/FeedDetail/index.jsx

- 요구사항 : 피드 상세보기 페이지 , 댓글 , 좋아요 기능 추가하기
- 상세페이지를 작성합니다.
- 현재 store에 있는 로딩의 상태를 반영합니다.

```jsx
// src/components/FeedDetail/index.jsx
import React, { useEffect } from 'react';
import { StyledMain, StyledDescriptionArea, StyledDescriptionArticle } from './Styles';
import FeedDetailImg from './FeedDetailImg';
import FeedDetailHeader from './FeedDetailHeader';
import FeedDetailContent from './FeedDetailContent';
import FeedComment from './FeedComment';
import Loading from '../Loading';

const FeedDetail = ({ feedId, feeds, comments, loading, error, getFeedComments, setFeedLike }) => {
  const feed = feeds && feeds.list.filter(feed => feed.id === +feedId)[0];
  useEffect(() => {
    getFeedComments();
  }, [getFeedComments]);

  return (
    <StyledMain>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="a11y-hidden">Feed Detail</h2>
          <FeedDetailImg feed={feed} />
          <StyledDescriptionArea>
            <StyledDescriptionArticle>
              <FeedDetailHeader
                feed={feed}
                setFeedLike={setFeedLike}
                feeds={feeds}
                feedId={feedId}
              />
              <FeedDetailContent feed={feed} />
              <FeedComment comments={comments} />
            </StyledDescriptionArticle>
          </StyledDescriptionArea>
        </>
      )}
    </StyledMain>
  );
};

export default FeedDetail;
```

<br/>