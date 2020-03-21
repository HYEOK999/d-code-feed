import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFeedImg, StyledFeedTagBox, StyledFeedContent } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedContent = ({ feed }) => {
  return (
    <Link to={`/feed/${feed.id}`}>
      <StyledFeedImg src={feed.mediaList[0].url} alt="images" />
      <StyledFeedTagBox>
        {feed.tags.map(tag => (
          <span key={uuidv4()}>{`#${tag}`}</span>
        ))}
      </StyledFeedTagBox>
      <StyledFeedContent>{feed.text}</StyledFeedContent>
    </Link>
  );
};

export default FeedContent;
