import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedHeader = ({ feed }) => {
  return (
    <header>
      <h3 key={uuidv4()} className="a11y-hidden">
        {feed.tags.map(tag => `${tag} `)}
      </h3>
    </header>
  );
};

export default FeedHeader;
