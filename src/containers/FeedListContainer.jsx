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
