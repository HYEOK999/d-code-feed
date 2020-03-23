import React from 'react';
import { StyledCommentArea, StyledTextInputDiv, StyledComment, StyledReplyComment } from './Styles';
import { v4 as uuidv4 } from 'uuid';
import FeedDetailCommentContent from './FeedDetailCommentContent';

const FeedDetailComment = ({ comments }) => {
  return (
    <StyledCommentArea>
      <h3>COMMENTS</h3>
      <StyledTextInputDiv>
        <textarea />
        <button>댓글등록</button>
      </StyledTextInputDiv>
      <StyledComment>
        {comments &&
          comments.list.map(comment => (
            <li key={uuidv4()}>
              <FeedDetailCommentContent comment={comment} />
              <StyledReplyComment>
                {comment.replies &&
                  comment.replies.list.map(replie => (
                    <li key={uuidv4()}>
                      <FeedDetailCommentContent comment={replie} reply={true} />
                    </li>
                  ))}
              </StyledReplyComment>
            </li>
          ))}
      </StyledComment>
    </StyledCommentArea>
  );
};

export default FeedDetailComment;
