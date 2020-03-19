# d.code 패션 피드 구현

## - 초기 셋팅 하기-

**목차**

1. [프로젝트 생성](#a1)
2. [라이브러리 인스톨하기](#a2)
3. [nvm 설정파일 생성하기](#a3)
4. [package.json 설정 추가하기](#a4)
5. [prettier 설정파일 생성하기](#a5)
6. [라우터 설정하기](#a6)
7. [pages 폴더 만들고 컴포넌트 설정하기](#a7)
8. [Redux 셋팅하기](#a8)
9. [상위 컴포넌트에 Provider 셋팅 하기](#a9)
   - [redux 모듈 작성하기](#a10)
     - create 함수 작성하기
     - combineReducer 작성하기
     - rootSaga 작성하기
10. [index.js Reset.css 적용하기](#a11)

---

### 프로젝트 생성 <a id="a1"></a>

```bash
npx create-react-app d-code-feed
```

<br/>

### 라이브러리 인스톨하기 <a id="a2"></a>

```bash
cd d-code-feed
npm i react-error-boundary react-helmet
npm i react-router-dom connected-react-router
npm i redux react-redux redux-saga
npm i uuid axios styled-components
npm i prettier eslint-config-prettier husky lint-staged redux-devtools-extension -D
```

<br/>

### nvm 설정파일 생성하기 <a id="a3"></a>

**.nvmrc** 파일 생성 (위치 : .gitignore 랑 같은 위치)

```js
12.11.1
```

<br/>

### package.json 설정 추가하기 <a id="a4"></a>

`"scripts": {...}` 아래에 삽입

```json
"eslintConfig": {
  "extends": [
    "react-app",
    "prettier"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "**/*.{js,jsx}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ]
},
```

<br/>

### prettier 설정파일 생성하기 <a id="a5"></a>

**.prettierrc** 파일 생성 (위치 : .gitignore 랑 같은 위치)

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

<br/>

### 라우터 설정하기 <a id="a6"></a>

1. `path` 에러가 날 경우 특정 컴포넌트로 이동하도록 `<ErrorBoundary FallbackComponent={ErrorFallbackComponent}>`를 설정합니다. 추후 `Redux`를 사용할 것이고, `error`에 관한 `state`는 차후 반드시 필요하기에 미리 설정합니다.

2. 지금은 상세보기(`FeedDatail`)에 관한 REST API가 주어져있기 때문에 상관없지만, 차후에는 선택된 `Feed`에 대하여 상세보기의 주소가 `feed/:feedId`형식으로 적용될 것으로 예상됩니다. 따라서 `ConnectedRouter`를 이용하여 현재 url의 `history`객체를 `Redux store`에 저장합니다.

3. `exact` : 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다.

4. `Switch` 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않습니다.

```jsx
// App.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Feed from './pages/Feed';
import NotFound from './pages/NotFound';
import ErrorBoundary from 'react-error-boundary';
import { history } from './redux/create';

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/" component={Feed} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default App;
```

<br/>

### pages 폴더 만들고 컴포넌트 만들기 <a id="a7"></a>

pages
-- Feed.jsx
-- NotFound.jsx

```jsx
// Feed.jsx
import React from 'react';

const Feed = () => {
  return <>Feed 입니다.</>;
};

export default Feed;
```

```jsx
// NotFound.jsx
import React from 'react';

const NotFound = props => {
  return <div>NotFound</div>;
};

export default NotFound;
```

<br/>

### Redux 셋팅하기 <a id="a8"></a>

#### 상위 컴포넌트에 Provider 셋팅 하기 <a id="a9"></a>

1. `Provider` 는 `react-redux` 라이브러리에 내장되어있는, 리액트 앱에 `store` 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.
2. `store` 선언 및 `create()` 함수 호출

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import create from './redux/create';
import { Provider } from 'react-redux';

const store = create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

<br/>

#### redux 모듈 작성하기 <a id="a10"></a>

##### create 함수 작성하기

1. 현재 url에 관한 `history` 객체를 `store`에 저장합니다.
2. 리덕스 개발자 도구를 사용하기 위한 코드를 추가합니다.
3. 비동기 처리는 `redux-saga`를 이용할 것이기 때문에 `createSagaMiddle`를 이용하여 `Redux Store`에 연결합니다.

```jsx
// src/redux/create.js
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
```

<br/>

##### combineReducer 작성하기

- 흩어진 리듀서를 모아 하나의 리듀서로 통합시키는 `combinerReducer`를 작성합니다.
- 우선 틀만 작성해두었습니다.

```jsx
// src/redux/modules/reducer.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    router: connectRouter(history),
  });

export default reducer;
```

<br/>

##### rootSaga 작성하기

- `combineReducer` 와 같이 모든 Saga를 통합관리하기 위한 `rootSaga` 를 작성합니다.
- 우선 틀만 작성해두었습니다.

```jsx
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([]);
}
```

<br/>

### index.js Reset.css 적용하기 <a id="a11"></a>

- 개발하기 앞서 CSS를 초기화 하고 시작합니다.
- [reset.css](https://gist.github.com/DavidWells/18e73022e723037a50d6) 를 참고 하였습니다.
