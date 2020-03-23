import React from 'react';
import { StyledImgArea, StyledImage } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedDetailImg = ({ feed }) => {
  return (
    <StyledImgArea>
      {feed && feed.mediaList.map(img => <StyledImage key={uuidv4()} src={img.url} alt={img.id} />)}
    </StyledImgArea>
  );
};

export default FeedDetailImg;
