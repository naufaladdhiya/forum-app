import React from "react";

import CommentItem from "./commentItem";

const CommentList = ({
  threadId,
  comments,
  authedUser,
  onUpVote,
  onDownVote,
  onNeutralizeVote,
}) => {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-xl">Komentar ({comments.length})</h1>
      <ul>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            threadId={threadId}
            authedUser={authedUser}
            upVotes={comment.upVotesBy}
            downVotes={comment.downVotesBy}
            onUpVote={onUpVote}
            onDownVote={onDownVote}
            onNeutralizeVote={onNeutralizeVote}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
