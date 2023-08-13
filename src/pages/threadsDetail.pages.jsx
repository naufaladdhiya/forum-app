import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getThreadDetail,
  createComment,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  upVoteThreadComment,
  downVoteThreadComment,
  neutralizeVoteThreadComment,
} from "../states/threadsDetail/action";

import ThreadDetail from "../components/threads/threadDetail/threadDetail.component";
import CommentList from "../components/comment/commentList";
import CommentForm from "../components/form/commentInput.component";

const ThreadDetailPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authedUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThreadDetail(id));
  }, [dispatch, id]);

  if (!threadDetail) {
    return <div>Loading...</div>;
  }

  const handleCommentCreate = (content) => {
    dispatch(createComment({ threadId: id, content }));
  };

  const handleUpVoteDetail = (threadId) => {
    dispatch(
      upVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: "up-vote",
      })
    );
  };

  const handleDownVoteDetail = (threadId) => {
    dispatch(
      downVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: "down-vote",
      })
    );
  };

  const neutralizeVoteDetail = (threadId) => {
    dispatch(
      neutralizeVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: "neutral-vote",
      })
    );
  };

  const handleUpVoteComment = ({ threadId, commentId }) => {
    dispatch(
      upVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: "up-vote",
      })
    );
  };

  const handleDownVoteComment = ({ threadId, commentId }) => {
    dispatch(
      downVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: "down-vote",
      })
    );
  };

  const handleNeutralizeVoteComment = ({ threadId, commentId }) => {
    dispatch(
      neutralizeVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: "neutral-vote",
      })
    );
  };

  const {
    id: threadId,
    title,
    createdAt: date,
    body,
    category,
    owner,
    comments,
    upVotesBy: upVotes,
    downVotesBy: downVotes,
  } = threadDetail;

  return (
    <div>
      <ThreadDetail
        id={id}
        title={title}
        date={date}
        body={body}
        category={category}
        owner={owner}
        authedUser={authedUser.id}
        upVotes={upVotes}
        downVotes={downVotes}
        onUpVote={handleUpVoteDetail}
        onDownVote={handleDownVoteDetail}
        onNeutralizeVote={neutralizeVoteDetail}
      />

      <CommentForm onCommentCreate={handleCommentCreate} />

      <CommentList
        threadId={threadId}
        comments={comments}
        authedUser={authedUser.id}
        onUpVote={handleUpVoteComment}
        onDownVote={handleDownVoteComment}
        onNeutralizeVote={handleNeutralizeVoteComment}
      />
    </div>
  );
};

export default ThreadDetailPage;
