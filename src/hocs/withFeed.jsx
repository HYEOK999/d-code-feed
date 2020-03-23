import React, { useEffect } from 'react';
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFeeds } from '../redux/modules/feed';

// HOC에서는
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

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
}

export default withFeed;

// 관련없는 props는 패스해주어라.
// display 이름 설정을 해주어라. (디버깅시 이름을 유지시켜주기위함.)
