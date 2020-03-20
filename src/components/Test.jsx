import React, { useEffect } from 'react';

const Test = ({ feeds, loading, error, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  return <div>{feeds && feeds.list[0].text} 임</div>;
};

export default Test;
