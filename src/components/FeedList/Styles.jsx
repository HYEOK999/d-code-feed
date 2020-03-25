import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: 7.2rem;
  width: 144rem;
  margin: 0 auto;
  margin-top: 10.7rem;
`;

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

export const StyledFeedArticle = styled.article`
  display: inline-block;
  width: 32%;
  margin-top: 2.5rem;
  position: relative;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 0;
  cursor: initial;
  outline: none;
  border: none;
  text-align: inherit;
`;

export const StyledFeedImg = styled.img`
  width: 100%;
`;

export const StyledFeedTagBox = styled.div`
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 900;
  margin: 1rem 0;
  overflow-wrap: break-word;

  span {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const StyledFeedContent = styled.p`
  white-space: pre-line;
  line-height: 1.5;
  word-break: keep-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export const StyledCountSpan = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

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

export const StyledShareButton = styled.a.attrs(({ id }) => ({
  role: 'button',
  target: '_blank',
  withoutrel: 'noopener noreferrer',
  href: `http://www.facebook.com/sharer/sharer.php?u=https://www.itsdcode.com/feed/${id}`,
  // href: `http://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/feed`,
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
