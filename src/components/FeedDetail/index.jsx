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
