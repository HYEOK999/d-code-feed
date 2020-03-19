import { connect } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';
import Test from '../components/Test';

const mapStateToProps = state => ({
  feeds: state.feed.feeds,
  loading: state.feed.loading,
  error: state.feed.error,
});

const mapDispatchToProps = dispatch => ({
  getFeeds: () => {
    dispatch(getFeeds());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
