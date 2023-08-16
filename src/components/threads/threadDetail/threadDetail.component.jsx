import React from "react";
import { showFormattedDate } from "../../../utils/date";
import parser from "html-react-parser";

import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

const ThreadDetail = ({
  id,
  title,
  date,
  body,
  category,
  owner,
  authedUser,
  upVotes,
  downVotes,
  onUpVote,
  onDownVote,
  onNeutralizeVote,
}) => {
  const isUpVoted = upVotes.includes(authedUser);
  const isDownVoted = downVotes.includes(authedUser);

  return (
    <article className="mt-7">
      <div className="flex justify-center">
        <div className="font-bold text-2xl border-2 border-black inline-block p-2 ">
          {category}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <h1 className="mt-2 text-md font-bold md:text-xl xl:text-2xl">
          {title}
        </h1>
      </div>
      <div className="mt-5">
        <div className="flex">
          <img src={owner.avatar} alt={owner.name} className="rounded-full" />
          <div className="flex flex-col ml-3 text-sm md:text-base">
            <p className="font-bold">{owner.name}</p>
            <p className="text-gray-400 mt-2">{showFormattedDate(date)}</p>
          </div>
        </div>
        <section className="mt-4 font-medium text-sm md:text-base">
          {parser(body)}
        </section>
        <div className="flex gap-3 mt-4 cursor-pointer text-base md:text-xl font-bold">
          <div
            className="flex gap-1 items-center "
            onClick={() => (isUpVoted ? onNeutralizeVote(id) : onUpVote(id))}
          >
            {isUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}{" "}
            <span>{upVotes.length}</span>
          </div>
          <div
            className="flex gap-1 items-center"
            onClick={() =>
              isDownVoted ? onNeutralizeVote(id) : onDownVote(id)
            }
          >
            {isDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}{" "}
            <span>{downVotes.length}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadDetail;
