import React from 'react';
import { StyledImgArea, StyledImage } from './Styles';

const FeedDetailImg = React.memo(({ feed }) => {
  return (
    <StyledImgArea>
      {feed && feed.mediaList.map(img => <StyledImage key={img.id} src={img.url} alt={img.id} />)}
    </StyledImgArea>
  );
});

export default FeedDetailImg;
