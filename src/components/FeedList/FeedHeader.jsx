import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedHeader = React.memo(({ tags }) => {
  return (
    <header>
      <h3 key={uuidv4()} className="a11y-hidden">
        {tags.map(tag => `${tag} `)}
      </h3>
    </header>
  );
});

export default FeedHeader;
