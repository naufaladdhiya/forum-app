import React from "react";
import parser from "html-react-parser";

import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

import { showFormattedDate } from "../../utils/date";

const CommentItem = ({
  threadId,
  id: commentId,
  content,
  owner,
  createdAt: date,
  upVotes,
  downVotes,
  authedUser,
  onUpVote,
  onDownVote,
  onNeutralizeVote,
}) => {
  const isUpVoted = upVotes.includes(authedUser);
  const isDownVoted = downVotes.includes(authedUser);
  return (
    <li className="border border-black-1 p-6 mt-2">
      <article>
        <div className="mt-5">
          <div className="flex items-start">
            <img src={owner.avatar} alt={owner.name} className="rounded-full" />
            <div className="flex flex-col ml-3">
              <p className="font-bold">{owner.name}</p>
              <p className="text-gray-400">{showFormattedDate(date)}</p>
              <section className="mt-2">{parser(content)}</section>
            </div>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer text-xl font-bold mt-3">
          <div
            className="flex gap-1 items-center"
            onClick={() =>
              isUpVoted
                ? onNeutralizeVote({ threadId, commentId })
                : onUpVote({ threadId, commentId })
            }
          >
            {isUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}{" "}
            <span>{upVotes.length}</span>
          </div>
          <div
            className="flex gap-1 items-center"
            onClick={() =>
              isDownVoted
                ? onNeutralizeVote({ threadId, commentId })
                : onDownVote({ threadId, commentId })
            }
          >
            {isDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}{" "}
            <span>{downVotes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
};

export default CommentItem;
