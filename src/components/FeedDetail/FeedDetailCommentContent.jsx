import React from 'react';
import { StyledCommentButton } from './Styles';
import { ReplyCommentIcon } from '../Icons';

const FeedDetailCommentContent = ({ comment, reply }) => {
  return (
    <div>
      <h4>
        {reply && <ReplyCommentIcon />}
        <span className={comment.userName === 'd.code' ? 'master' : ''}>
          {comment.userName}
        </span>{' '}
        <span>{comment.createdAt.split(' ')[0]}</span>
      </h4>
      <p>{comment.comment}</p>
      <StyledCommentButton>
        <ReplyCommentIcon /> 답글
      </StyledCommentButton>
    </div>
  );
};

export default FeedDetailCommentContent;
