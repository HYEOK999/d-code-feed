# d.code 패션 피드 구현

## - Head 작성 및 Feed List 목록 구현 -

**목차**

1. [라이브러리 인스톨하기](#a1)
2. [Head 작성하기](#a2)
   - [Feed page에 Head 컴포넌트 삽입하기](#a3)
3. [파일 정리하기](#a4)
4. [FeedList  폴더 및 파일 스트럭쳐 구성하기](#a5)
   - [Styles.jsx](#a6)

   - [index.jsx](#a7)

   - [MainTitle.jsx](#a8)

   - [FeedHeader.jsx](#a9)

   - [FeedContent.jsx](#a10)

   - [FeedFooter.jsx](#a11)

---

### 라이브러리 인스톨하기 <a id="a1"></a>

```bash
cd d-code-feed
npm i react-helemt
```

<br/>

### Head 작성하기 <a id="a2"></a>

> 위치 : src/components/Head.jsx

- 요구사항 : 피드를 페이스북에 공유하는 기능 추가하기
- 페이스북에 공유하기 기능을 추가합니다.
- 페이스북이 제공하는 open graph 공유 기능을 이용하기 위해서 `<head>~</head>`  사이에 `meta`를 집어넣습니다.
- `url`의 위치에 따라서 `meta`가 변해야만 합니다. 따라서 `react-helmet`을 이용하여 동적으로 `meta`를 바꿔주도록 하겠습니다.

```jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ keywords, description, title, favicon }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={favicon} />
      <meta property="og:site_name" content="디코드(d.code) 패션 셀렉트샵" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};
export default Head;

```

<br/>

#### Feed page에 Head 컴포넌트 삽입하기 <a id="a3"></a>

> 위치 : src/components/Feed.jsx

```jsx
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import FeedListContainer from '../containers/FeedListContainer';
import Footer from '../components/Footer';

const Feed = () => {
  return (
    <>
      <Head
        keywords="d.code, Feed"
        description="최신 패션 뉴스를 전해드립니다."
        title="디코드(d.code) 패션 셀렉트샵"
        favicon="/static/favicon.ico"
      />
      <Header />
    </>
  );
};

export default Feed;
```

<br/>

### 파일 정리하기 <a id="a4"></a>

1. containers/FeedContainer.jsx -> containers/FeedListContainer 로 변경

2. Test.jsx 삭제

3. containers/FeedListContainer에 props로 줄 컴포넌트 변경하기

   ```jsx
   import { connect } from 'react-redux';
   import { getFeeds } from '../redux/modules/feed';
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
   });
   
   export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
   ```

4. pages/Feed.jsx 에서도 container 바꿔주기

   ```jsx
   import React from 'react';
   import Head from '../components/Head';
   import Header from '../components/Header';
   import FeedListContainer from '../containers/FeedListContainer';
   import Footer from '../components/Footer';
   
   const Feed = () => {
     return (
       <>
         <Head
           keywords="d.code, Feed"
           description="최신 패션 뉴스를 전해드립니다."
           title="디코드(d.code) 패션 셀렉트샵"
           favicon="/static/favicon.ico"
         />
         <Header />
         <FeedListContainer />
       </>
     );
   };
   
   export default Feed;
   ```

<br/>

### FeedList  폴더 및 파일 스트럭쳐 구성하기   <a id="a5"></a>

> 위치 : src/components/FeedList/

![FeedList-chart](https://user-images.githubusercontent.com/31315644/77220597-27c0f180-6b85-11ea-96c6-3bce609f6118.png)

![FeedList-Structure](https://user-images.githubusercontent.com/31315644/77220186-fc3c0800-6b80-11ea-9453-e4bbd1fe18cd.png)

#### Styles.jsx <a id="a6"></a>

- FeedList 영역에서 사용되는 모든 `style`을 `Stytled Components` 를 이용하여 관리하고 있습니다.

```scss
import styled from 'styled-components';

// FeedList/index.jsx
export const StyledMain = styled.main`
  padding-top: 7.2rem;
  width: 144rem;
  margin: 0 auto;
  margin-top: 10.7rem;
`;

// FeedList/MainTitle.jsx
export const StyledMainTitle = styled.div`
  h2 {
    font-size: 3.2rem;
    line-height: 1.5;
    font-weight: 900;
  }

  p {
    line-height: 1.5;
    font-weight: 700;
  }
`;

// FeedList/index.jsx
export const StyledFeedArticle = styled.article`
  display: inline-block;
  width: 32%;
  margin-top: 2.5rem;
`;

// FeedList/index.jsx
export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// FeedList/FeedContent.jsx
export const StyledFeedImg = styled.img`
  width: 100%;
`;

// FeedList/FeedContent.jsx
export const StyledFeedTagBox = styled.div`
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 900;
  margin: 1rem 0;

  span {
    margin-right: 1rem;
  }
`;

// FeedList/FeedContent.jsx
export const StyledFeedContent = styled.p`
  white-space: pre-line;
  line-height: 1.5;
  word-break: keep-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

// FeedList/FeedFooter.jsx
export const StyledCountSpan = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

// FeedList/FeedFooter.jsx
export const StyledFeedMdInfo = styled.figure`
  img {
    width: 10rem;
    float: left;
  }

  figcaption {
    line-height: 1.5;
    font-style: italic;
  }
`;

// FeedList/FeedFooter.jsx
export const StyledFeedFooter = styled.footer`
  color: #a6a7a9;
  margin-top: 1rem;
  padding-left: 25%;

  span {
    font-style: italic;
  }

  div {
    margin-bottom: 0.3rem;
  }
`;

// FeedList/FeedFooter.jsx
export const StyledShareButton = styled.a.attrs(({ id }) => ({
  role: 'button',
  target: '_blank',
  withoutrel: 'noopener noreferrer',
  href: `http://www.facebook.com/sharer/sharer.php?u=https://www.itsdcode.com/feed/${id}`,
}))`
  background: #1877f2;
  border-radius: 0.3rem;
  border: none;
  font-size: 11px;
  height: 2rem;
  padding: 0.3rem 0.6rem;
  color: white;

  svg {
    margin-bottom: 0.1rem;
  }

  span {
    font-style: normal;
    margin-left: 0.5rem;
  }
`;

```

<br/>

#### index.jsx <a id="a7"></a>

```jsx
import React, { useEffect } from 'react';
import { StyledMain, StyledContent, StyledFeedArticle } from './Styles';
import { v4 as uuidv4 } from 'uuid';
import MainTitle from './MainTitle';
import FeedHeader from './FeedHeader';
import FeedContent from './FeedContent';
import FeedFooter from './FeedFooter';

const FeedList = ({ feeds, loading, error, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, [getFeed]);

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

#### MainTitle.jsx  <a id="a8"></a>

```jsx
import React from 'react';
import { StyledMainTitle } from './Styles';

const MainTitle = () => {
  return (
    <StyledMainTitle>
      <h2>Feed</h2>
      <p>최신 패션 뉴스를 전해드립니다.</p>
    </StyledMainTitle>
  );
};

export default MainTitle;
```

<br/>

#### FeedHeader.jsx <a id="a9"></a>

```jsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedHeader = ({ feed }) => {
  return (
    <header>
      <h3 key={uuidv4()} className="a11y-hidden">
        {feed.tags.map(tag => `${tag} `)}
      </h3>
    </header>
  );
};

export default FeedHeader;
```

<br/>

#### FeedContent.jsx <a id="a10"></a>

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFeedImg, StyledFeedTagBox, StyledFeedContent } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedContent = ({ feed }) => {
  return (
    <Link to={`/feed/${feed.id}`}>
      <StyledFeedImg src={feed.mediaList[0].url} alt="images" />
      <StyledFeedTagBox>
        {feed.tags.map(tag => (
          <span key={uuidv4()}>{`#${tag}`}</span>
        ))}
      </StyledFeedTagBox>
      <StyledFeedContent>{feed.text}</StyledFeedContent>
    </Link>
  );
};

export default FeedContent;
```

<br/>

#### FeedFooter.jsx  <a id="a11"></a>

- 페이스북의 공유기능에서 `local`로 설정시 공유가 안되는 문제를 발견했습니다.
- 따라서 일단은 실제 `d.code`와 연결해서 공유를 해놓았고 링크는 선택한 피드의 id값을 토대로 url에 집어넣어 공유되도록 설정하였습니다.

```jsx
import React from 'react';
import { HeartIcon, CommentAltIcon, LinkIcon, FacebookIcon } from '../Icons';
import { StyledFeedFooter, StyledFeedMdInfo, StyledCountSpan, StyledShareButton } from './Styles';

const FeedFooter = ({ feed }) => {
  return (
    <StyledFeedFooter>
      <StyledFeedMdInfo>
        <img src={feed.mdInfo.mdThumb} alt="MD 사진" />
        <figcaption>MD : {feed.mdInfo.mdName}</figcaption>
      </StyledFeedMdInfo>
      <span>{feed.createdAt.split(' ')[0]}</span>
      <div>
        <HeartIcon />
        <StyledCountSpan>{feed.likedCount ? feed.likedCount : '0'}</StyledCountSpan>
        <CommentAltIcon />
        <StyledCountSpan>{feed.replyCount ? feed.replyCount : '0'}</StyledCountSpan>
        <LinkIcon />
        <StyledCountSpan>{feed.sharedCount ? feed.sharedCount : '0'}</StyledCountSpan>
      </div>
      <StyledShareButton id={feed.id}>
        <FacebookIcon />
        <span>공유하기</span>
      </StyledShareButton>
    </StyledFeedFooter>
  );
};

export default FeedFooter;
```

<br/>

