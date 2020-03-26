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
            <StyledFeedArticle key={feed.id}>
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
