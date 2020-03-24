# d.code 패션 피드 구현

## - header 꾸미기, Store에 feed 저장 테스트 하기 -

**목차**

1. [라이브러리 인스톨하기](#a2)

2. [전역적으로 사용할 Icons 파일 작성하기](#a6)

3. [Feed.jsx 에 Header 컴포넌트 추가하기](#a1)

4. [Header 폴더 및 파일 스트럭쳐 구성하기](#a3)

   - [Styles.jsx](#a4)
   - [HeaderLogo.jsx](#a5)
   - [MainMenu.jsx](#a7)
   - [Member.jsx](#a8)
   - [index.jsx (Feed - Header 컴포넌트)](#a9)

5. [Feed List 데이터를 받아서 Redux Store 저장 테스트 하기](#a10)

   - [modules/feed.js 작성하기](#a11)

   - [Combine Reducer에 리듀서 추가하기](#a12)

   - [Root Saga에 사가함수 추가하기](#a13)
   - [Container, Test Component 작성하기](#a14)

---

### 라이브러리 인스톨하기 <a id="a2"></a>

```bash
cd d-code-feed
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome
npm i redux-actions
```

<br/>

### 전역적으로 사용할 Icons 파일 작성하기 <a id="a6"></a>

> 위치 : src/components/Icons.jsx

```jsx
import React from 'react';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchIcon() {
  return <FontAwesomeIcon icon={faSearch} size="lg" />;
}

export function ShoppingCartIcon() {
  return <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
}
```

<br/>

### Feed.jsx 에 Header 컴포넌트 추가하기 <a id="a1"></a>

> 위치 : src/pages/Feed.jsx

- 작성할 Header 컴포넌트를 미리 작성 해둡니다.

```jsx
import React from 'react';
import Header from '../components/Header';

const Feed = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Feed;
```

<br/>

### Header 폴더 및 파일 스트럭쳐 구성하기 <a id="a3"></a>

> 위치 : src/components/Header/

![Header-chart](https://user-images.githubusercontent.com/31315644/77140948-8f603980-6abe-11ea-957a-f822a7e2b36c.jpeg)

![Header_Structure](https://user-images.githubusercontent.com/31315644/77140028-8883f780-6abb-11ea-931a-b3f2bfcd52d2.png)

#### Styles.jsx <a id="a4"></a>

- Header 영역에서 사용되는 모든 `style`을 `Stytled Components` 를 이용하여 관리하고 있습니다.

```scss
import styled from 'styled-components';

// Header/index.jsx
export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  min-width: 114.8rem;
  top: 0;
`;

// Header/HeaderLogo.jsx
export const StyledHeaderLogo = styled.h1`
  position: absolute;
  width: 9rem;
  height: 3.7rem;
  top: 5.4rem;
  left: 5.4rem;

  a,
  img {
    width: inherit;
  }
`;

// Header/Member.jsx
export const StyledMember = styled.ul`
  text-align: right;
  position: relative;
  padding: 0.8rem 5.6rem;
  height: 3.5rem;
  border-bottom: 0.1rem solid #e3e3e2;
  color: #707070;
  background: #fff;

  li {
    display: inline-block;
    font-size: 1.2rem;
  }

  a {
    display: inline-block;
    padding-right: 3.7rem;
  }
`;

// Header/MainMenu.jsx
export const StyledMainMenu = styled.section`
  height: 7.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e3e3e2;
  padding: 1.6rem 5.4rem;
  padding-left: 15rem;
  background: #fff;
`;

// Header/MainMenu.jsx
export const StyledNav = styled.nav`
  font-size: 1.7rem;
  font-weight: 900;
  width: 68rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Header/MainMenu.jsx
export const StyledSearchBox = styled.div`
  width: 28rem;

  div {
    display: inline-block;
    border-bottom: 0.1rem solid black;
  }

  input {
    font-size: 1.6rem;
    width: 17rem;
    height: 3.8rem;
    border: none;
  }

  button {
    border: none;
    background: transparent;
  }

  .shoppin-cart {
    padding-left: 4.4rem;
  }
`;
```

<br/>

#### HeaderLogo.jsx <a id="a5"></a>

```jsx
import React from 'react';
import { StyledHeaderLogo } from './Styles';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Link to="/">
        <img src="/logo/d-code-logo.png" alt="디코드" />
      </Link>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
```

<br/>

#### MainMenu.jsx <a id="a7"></a>

```jsx
import React from 'react';
import { StyledMainMenu, StyledNav, StyledSearchBox } from './Styles';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon } from '../Icons';

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <h2 className="a11y-hidden">메인 메뉴</h2>
      <div className="logo-area" />
      <StyledNav>
        <Link to="/pre-order">PRE-ORDER</Link>
        <Link to="/brand">BRAND</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/feed">FEED</Link>
      </StyledNav>
      <StyledSearchBox>
        <div>
          <input type="text" placeholder="검색" />
          <button type="button">
            <SearchIcon />
          </button>
        </div>
        <button className="shoppin-cart" type="button">
          <ShoppingCartIcon />
        </button>
      </StyledSearchBox>
    </StyledMainMenu>
  );
};

export default MainMenu;
```

<br/>

#### Member.jsx <a id="a8"></a>

```jsx
import React from 'react';
import { StyledMember } from './Styles';
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <StyledMember>
      <li>
        <Link to="/sign-in">로그인</Link>
      </li>
      <li>
        <Link to="/sign-up">회원가입</Link>
      </li>
      <li>
        <Link to="/service-center">고객센터</Link>
      </li>
    </StyledMember>
  );
};

export default Member;
```

<br/>

#### index.jsx (Feed - Header 컴포넌트) <a id="a9"></a>

```jsx
import React from 'react';
import { StyledHeader } from './Styles';
import HeaderLogo from './HeaderLogo';
import Member from './Member';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <Member />
      <MainMenu />
    </StyledHeader>
  );
};

export default Header;
```

<br/>

### Feed List 데이터를 받아서 Redux Store 저장 테스트 하기 <a id="a10"></a>

본격적으로 Feed List를 불러오고 Store에 저장하는 테스팅 코드를 작성하겠습니다.
API는 기존에 작성해둔 services/FeedService.js에 모아두었습니다.

<br/>

#### modules/feed.js 작성하기 <a id="a11"></a>

> 위치 : src/redux/modules/feed.js

1. 모듈을 작성합니다.
2. 액션, 액션생성자(크리에이터), 리듀서 등을 보다 관리하기 쉽고 가독성, 유지보수성을 위해 `redux-actions` 라이브러리를 사용합니다.
3. 3개의 리듀서로 나눕니다. (PENDING, SUCCESS, FAIL) - `switch문` 대신 `redux-actions의 handleActions를 시용`
   - PENDING : 리덕스 사가가 비동기처리를 시작하면서 데이터 결과를 확인 전까지 Pending 상태로 둡니다. 기본적으로 추후에만들 Spinner 나 Gray-scale 등을 사용하기 위해 만들었습니다.
   - SUCCESS: 리덕스 사가를 통해 데이터를 안전하게 반환받았다면 SUCCESS를 통해서 데이터를 store에 저장합니다.
   - FAIL : 불특정의 이유로 인해 데이터를 받아오지 못했을 경우 해당 에러 메시지를 store에 저장합니다.
4. 초기 상태를 생성합니다.
5. 비동기 처리를 실행할 redux-saga 함수를 만듭니다. (우선 Feed List 부분만)

```jsx
import FeedService from '../../services/FeedService';
import { createAction, createActions, handleActions } from 'redux-actions';
import { put, call, takeEvery } from 'redux-saga/effects';

const options = {
  prefix: 'd-code/feed',
};

// 액션 타입 및 생성자를 한번에 모아서 사용함. - redux-actions
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

// FEED SAGA
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
```

<br/>

#### Combine Reducer에 리듀서 추가하기 <a id="a12"></a>

> 위치 : src/redux/modules/reducer.js

- 위에서 작성한 feed 리듀서를 `Combine Reducer`에 추가합니다.

```jsx
import { combineReducers } from 'redux';
import feed from './feed';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    feed,
    router: connectRouter(history),
  });

export default reducer;
```

<br/>

#### Root Saga에 사가함수 추가하기 <a id="a13"></a>

> 위치 : src/redux/modules/saga.js

- 위에서 작성한 feedSaga 함수를 `rootSaga`에 추가합니다.

```jsx
import { all } from 'redux-saga/effects';
import { feedSaga } from './feed';

export default function* rootSaga() {
  yield all([feedSaga()]);
}
```

<br/>

#### Container, Test Component 작성하기 <a id="a14"></a>

> Container 위치 : src/containers/FeedContainer.jsx
>
> Test Component 위치 : src/components/Test.jsx

- Container

```jsx
import { connect } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';
import Test from '../components/Test';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
  loading: state.feed.loading,
  error: state.feed.error,
});

const mapDispatchToProps = dispatch => ({
  getFeed: () => {
    dispatch(getFeeds());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
```

- Test Component

```jsx
import React, { useEffect } from 'react';

const Test = ({ feeds, loading, error, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  return <div>{feeds && feeds.list[0].text}</div>;
};

export default Test;
```
