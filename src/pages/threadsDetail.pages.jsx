import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getThreadDetail, createComment } from "../states/threadsDetail/action";

import ThreadDetail from "../components/threads/threadDetail/threadDetail.component";

const ThreadDetailPage = () => {
  const { id } = useParams();
  const { threadDetail = [], authedUser } = useSelector((states) => states);
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
        authedUser={authedUser}
        upVotes={upVotes}
        downVotes={downVotes}
        key={id}
      />
    </div>
  );
};

export default ThreadDetailPage;
