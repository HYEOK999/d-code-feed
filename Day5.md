# d.code 패션 피드 구현

## - FeedDetail 완성 -

**목차**

- [FeedDetail 폴더 및 파일 스트럭쳐 구성하기](#a1)
  - [Styles.jsx](#a2)
  - [index.jsx](#a6)
  - [FeedDetailImg.jsx](#a3)
  - [FeedDetailHeader.jsx](#a4)
  - [FeedDetailContent.jsx](#a5)
  - [FeedComment](#a6)
  - [FeedCommentContent.jsx](#a7)

---



### FeedDetail  폴더 및 파일 스트럭쳐 구성하기   <a id="a1"></a>

> 위치 : src/components/FeedDetail/



<img src="https://user-images.githubusercontent.com/31315644/77394574-12e19980-6de3-11ea-82ab-5c7da423b87d.png" alt="Detail-Structure" style="zoom:50%;" />

#### Styles.jsx <a id="a2"></a>

- FeedDetail 영역에서 사용되는 모든 `style`을 `Stytled Components` 를 이용하여 관리하고 있습니다.

```jsx
import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: 7.2rem;
  min-width: 100.4rem;
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 10.7rem;
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
`;

export const StyledImgArea = styled.div`
  min-height: 20rem;
  width: 37.5%;
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
`;

export const StyledDescriptionArea = styled.div`
  padding-left: 6rem;
  width: 62.5%;
`;

export const StyledDescriptionArticle = styled.article`
  border-top: 0.2rem solid black;
  padding: 3.8rem 0;

  header {
    position: relative;
    padding-top: 3rem;
  }

  h3 {
    font-size: 3.2rem;
    line-height: 1.5;
    padding-right: 9rem;
    font-weight: 900;
  }
`;

export const StyledSmall = styled.small`
  margin-bottom: 1rem;
  display: block;
  position: absolute;
  top: 0;
`;

export const StyledLikeArea = styled.div`
  position: absolute;
  right: 0;
  top: 25%;

  p {
    font-size: 12px;
    color: #7f8185;
    text-align: center;
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
    transform: translate(-50%, -58%);
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
`;

export const StyledMdName = styled.span`
  font-weight: 900;
  font-size: 1.6rem;
  margin-right: 1rem;
`;

export const StyledCreatedDay = styled.span`
  font-size: 1.6rem;
`;

export const StyledMainText = styled.p`
  white-space: pre-wrap;
  font-size: 1.6rem;
  line-height: 1.6;
  padding: 1.8rem 0 2.4rem;
`;

export const StyledFeedTagBox = styled.div`
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 900;
  margin: 1rem 0;
  overflow-wrap: break-word;

  span {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const StyledCommentArea = styled.section`
  border-top: 0.1rem solid #e3e3e2;
  padding-top: 3.5rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 900;
    padding-bottom: 1rem;
  }
`;

export const StyledTextInputDiv = styled.div`
  width: 100%;
  height: 9rem;

  textarea {
    width: 84%;
    height: 100%;
    border-radius: 0;
    float: left;
  }

  button {
    display: inline-block;
    width: 16%;
    height: 100%;
    background: #1d1e21;
    border: 1px solid #1d1e21;
    color: #fff;
  }
`;

export const StyledComment = styled.ul`
  li {
    div {
      padding: 3rem 0;
      border-bottom: 0.1rem solid #e3e3e2;
    }

    h4 {
      svg {
        color: #a6a7a9;
        font-size: 25px;
        margin-right: 1rem;
      }
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .master {
      text-align: center;
      border-radius: 2rem;
      background: black;
      border: 1px solid black;
      line-height: 2;
      color: #fff;
    }

    span {
      display: inline-block;
      min-width: 6rem;
      margin-right: 6rem;
    }

    span:nth-last-child(1) {
      color: #a6a7a9;
    }

    p {
      margin-bottom: 1.4rem;
    }
  }
`;

export const StyledCommentButton = styled.button`
  border: 1px solid #a6a7a9;
  color: #29282d;
  font-size: 1.2rem;
  background: none;
  svg {
    color: #a6a7a9;
    margin-right: 0.5rem;
  }
`;

export const StyledReplyComment = styled.ul`
  padding-left: 1rem;
`;
```

<br/>

#### index.jsx  <a id="a6"></a>

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

#### FeedDetailImg.jsx <a id="a3"></a>

```jsx
// src/components/FeedDetail/FeedDetailImg.jsx
import React from 'react';
import { StyledImgArea, StyledImage } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedDetailImg = ({ feed }) => {
  return (
    <StyledImgArea>
      {feed && feed.mediaList.map(img => <StyledImage key={uuidv4()} src={img.url} alt={img.id} />)}
    </StyledImgArea>
  );
};

export default FeedDetailImg;
```

<br/>

#### FeedDetailHeader.jsx <a id="a4"></a>

- '좋아요' 기능을 구현하기 위해 `useState` 와 `useRef`를 사용 합니다.
- 지역상태(`likeState`)의 상태(true/false)에 따라 하트 모양이 바뀌게 설정 하였습니다.

``` jsx
// src/components/FeedDetail/FeedDetailHeader.jsx
import React, { useState, useRef } from 'react';
import {
  StyledSmall,
  StyledMdName,
  StyledCreatedDay,
  StyledLikeArea,
  StyledLikeButton,
} from './Styles';

const FeedDetailHeader = ({ feed, setFeedLike, feedId, feeds }) => {
  const [likeState, setLikeState] = useState(false);
  const likeRef = useRef();

  function likeToggle({ target }) {
    if (target.tagName !== 'DIV') {
      if (likeState) {
        setFeedLike(feeds, +feedId, -1);
      } else {
        setFeedLike(feeds, +feedId, 1);
      }
      setLikeState(!likeState);
    }
  }

  return (
    <header>
      <h3>{feed && feed.text.split('\n　\n')[0]}</h3>
      <StyledSmall>
        <StyledMdName>{feed && feed.mdInfo.mdName.toUpperCase()}</StyledMdName>
        <StyledCreatedDay>{feed && feed.createdAt.split(' ')[0]}</StyledCreatedDay>
      </StyledSmall>
      <StyledLikeArea>
        <StyledLikeButton onClick={e => likeToggle(e)}>
          <div className={likeState ? 'is-active' : ''} ref={likeRef} />
        </StyledLikeButton>
        <p>{feed && feed.likedCount ? feed.likedCount : '0'}</p>
      </StyledLikeArea>
    </header>
  );
};

export default FeedDetailHeader;
```

<br/>

#### FeedDetailContent.jsx <a id="a5"></a>

```jsx
// src/components/FeedDetail/FeedDetailContent.jsx
import React from 'react';
import { StyledMainText, StyledFeedTagBox } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedDetailContent = ({ feed }) => {
  return (
    <>
      <StyledMainText>{feed && feed.text}</StyledMainText>
      <StyledFeedTagBox>
        {feed && feed.tags.map(tag => <span key={uuidv4()}>{`#${tag}`}</span>)}
      </StyledFeedTagBox>
    </>
  );
};

export default FeedDetailContent;
```

<br/>

#### FeedComment <a id="a6"></a>

- 댓글을 전체적으로 관리할 틀 컴포넌트를 생성합니다.
- `comments`의 리스트 내에 `replies` 가 존재할 경우 댓댓글을 작성합니다.
- 해당 컴포넌트가 댓댓글인지 아닌지를 댓글 내용을 표시하는 하위 컴포넌트에게 알려주기 위해서 댓댓글인 컴포넌트의 경우에는 `reply=true`를 props로 전달해줍니다.

```jsx
// src/components/FeedDetail/FeedComment.jsx
import React from 'react';
import { StyledCommentArea, StyledTextInputDiv, StyledComment, StyledReplyComment } from './Styles';
import { v4 as uuidv4 } from 'uuid';
import FeedCommentContent from './FeedCommentContent';

const FeedComment = ({ comments }) => {
  return (
    <StyledCommentArea>
      <h3>COMMENTS</h3>
      <StyledTextInputDiv>
        <textarea />
        <button>댓글등록</button>
      </StyledTextInputDiv>
      <StyledComment>
        {comments &&
          comments.list.map(comment => (
            <li key={uuidv4()}>
              <FeedCommentContent comment={comment} />
              <StyledReplyComment>
                {comment.replies &&
                  comment.replies.list.map(replie => (
                    <li key={uuidv4()}>
                      <FeedCommentContent comment={replie} reply={true} />
                    </li>
                  ))}
              </StyledReplyComment>
            </li>
          ))}
      </StyledComment>
    </StyledCommentArea>
  );
};

export default FeedComment;
```

<br/>

### FeedCommentContent.jsx <a id="a7"></a>

- 댓글 내용을 담고있는 컴포넌트를 생성합니다.
- 댓댓글인 경우 Icon을 추가로 보여줍니다.
- 만약 댓글 작성자의 이름이 'd.code'일 경우 다른 css로 스타일을 처리하였습니다.

```jsx
// src/components/FeedDetail/FeedCommentContent.jsx

import React from 'react';
import { StyledCommentButton } from './Styles';
import { ReplyCommentIcon } from '../Icons';

const FeedCommentContent = ({ comment, reply }) => {
  return (
    <div>
      <h4>
        {reply && <ReplyCommentIcon />}
        <span className={comment.userName === 'd.code' ? 'master' : ''}>
          {comment.userName}
        </span>{' '}
        <span>{comment.createdAt.split(' ')[0]}</span>
      </h4>
      <p>{comment.comment}</p>
      <StyledCommentButton>
        <ReplyCommentIcon /> 답글
      </StyledCommentButton>
    </div>
  );
};

export default FeedCommentContent;
```

