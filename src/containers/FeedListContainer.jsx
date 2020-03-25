import { connect } from 'react-redux';
import { getFeeds, setFeedLike } from '../redux/modules/feed';
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
  setFeedLike: (feed, feedId, likeCount) => {
    dispatch(
      setFeedLike({
        ...feed,
        list: feed.list.map(item =>
          item.id === feedId
            ? {
                ...item,
                like: !item.like,
                likedCount:
                  likeCount === 1
                    ? item.likedCount
                      ? item.likedCount + likeCount
                      : 1
                    : item.likedCount
                    ? item.likedCount + likeCount
                    : -1,
              }
            : item
        ),
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
