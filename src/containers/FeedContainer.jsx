import { connect } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';
// import Body from '../components/Body';
import Test from '../components/Test';

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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
