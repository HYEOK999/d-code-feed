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
