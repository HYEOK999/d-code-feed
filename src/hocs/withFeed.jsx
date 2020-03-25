import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';

function withFeed(Component) {
  function WrappedComponent(props) {
    const { feeds } = useSelector(state => state.feed);
    const dispatch = useDispatch();
    const { feedId } = props.match.params;
    useEffect(() => {
      if (feeds === null) {
        dispatch(getFeeds());
      }
    }, [dispatch, feeds]);
    return <Component {...props} feedId={feedId} />;
  }

  WrappedComponent.displayName = `withFeed(${Component.name})`;

  return WrappedComponent;
}

export default withFeed;
