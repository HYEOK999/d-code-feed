import React, { useEffect } from 'react';
import { StyledMain, StyledContent, StyledFeedArticle } from './Styles';
import MainTitle from './MainTitle';
import FeedHeader from './FeedHeader';
import FeedContent from './FeedContent';
import FeedFooter from './FeedFooter';
import Like from '../Like';

const FeedList = ({ feeds, loading, error, getFeed, setFeedLike }) => {
  useEffect(() => {
    if (!feeds) getFeed();
  }, [feeds, getFeed]);

  return (
    <StyledMain>
      <MainTitle />
      <StyledContent>
        {feeds &&
          feeds.list.map(feed => (
            <StyledFeedArticle key={feed.id}>
              <FeedHeader feed={feed} />
              <FeedContent feed={feed} feeds={feeds} setFeedLike={setFeedLike} />
              <Like
                feed={feed}
                feeds={feeds}
                feedId={feed.id}
                setFeedLike={setFeedLike}
                list={true}
              />
              <FeedFooter feed={feed} />
            </StyledFeedArticle>
          ))}
      </StyledContent>
    </StyledMain>
  );
};

export default FeedList;
