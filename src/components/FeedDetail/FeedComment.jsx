import React from 'react';
import { StyledCommentArea, StyledTextInputDiv, StyledComment, StyledReplyComment } from './Styles';
import { v4 as uuidv4 } from 'uuid';
import FeedCommentContent from './FeedCommentContent';

const FeedComment = ({ comments }) => {
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
              <FeedCommentContent comment={comment} />
              <StyledReplyComment>
                {comment.replies &&
                  comment.replies.list.map(replie => (
                    <li key={uuidv4()}>
                      <FeedCommentContent comment={replie} reply={true} />
                    </li>
                  ))}
              </StyledReplyComment>
            </li>
          ))}
      </StyledComment>
    </StyledCommentArea>
  );
};

export default FeedComment;
