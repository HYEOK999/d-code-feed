import { connect } from 'react-redux';
import { getFeedComments, setFeedLike } from '../redux/modules/feed';
import FeedDetail from '../components/FeedDetail';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
  comments: state.feed.comments,
  loading: state.feed.loading,
  error: state.feed.error,
});

const mapDispatchToProps = dispatch => ({
  getFeedComments: () => {
    dispatch(getFeedComments());
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetail);
