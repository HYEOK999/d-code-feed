import React, { useState, useRef, useEffect } from 'react';
import { ReplyCommentIcon } from '../Icons';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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

const FeedDetail = ({ feedId, feeds, comments, loading, error, getFeedComments, setFeedLike }) => {
  const feed = feeds && feeds.list.filter(feed => feed.id === +feedId)[0];
  const [likeState, setLikeState] = useState(false);
  const likeRef = useRef();

  useEffect(() => {
    getFeedComments();
  }, [getFeedComments]);

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
    <StyledMain>
      <h2 className="a11y-hidden">Feed Detail</h2>
      <StyledImgArea>
        {feed &&
          feed.mediaList.map(img => <StyledImage key={uuidv4()} src={img.url} alt={img.id} />)}
      </StyledImgArea>
      <StyledDescriptionArea>
        <StyledDescriptionArticle>
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
          <StyledMainText>{feed && feed.text}</StyledMainText>
          <StyledFeedTagBox>
            {feed && feed.tags.map(tag => <span key={uuidv4()}>{`#${tag}`}</span>)}
          </StyledFeedTagBox>
        </StyledDescriptionArticle>
        <StyledCommentArea>
          <h3>COMMENTS</h3>
          <StyledTextInputDiv>
            <textarea />
            <button>댓글등록</button>
          </StyledTextInputDiv>
          <StyledComment>
            {comments &&
              comments.list.map(comment => (
                <li>
                  <div>
                    <h4>
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
                  <StyledReplyComment>
                    {comment.replies &&
                      comment.replies.list.map(replie => (
                        <li>
                          <div>
                            <h4>
                              <ReplyCommentIcon />
                              <span className={replie.userName === 'd.code' ? 'master' : ''}>
                                {replie.userName}
                              </span>{' '}
                              <span>{replie.createdAt.split(' ')[0]}</span>
                            </h4>
                            <p>{replie.comment}</p>
                            <StyledCommentButton>
                              <ReplyCommentIcon /> 답글
                            </StyledCommentButton>
                          </div>
                        </li>
                      ))}
                  </StyledReplyComment>
                </li>
              ))}
          </StyledComment>
        </StyledCommentArea>
      </StyledDescriptionArea>
    </StyledMain>
  );
};

export default FeedDetail;
