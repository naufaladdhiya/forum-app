import React from "react";
import { showFormattedDate } from "../../utils/date";
import parser from "html-react-parser";
import { Link } from "react-router-dom";

import { BsChat } from "react-icons/bs";

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt: date,
  owner,
  totalComments,
}) => {
  return (
    <li className="mt-5 hover:bg-blue-100 p-5 hover:opacity-90 transition delay-75">
      <Link to={`threads/${id}`}>
        <article>
          <div className="font-bold text-xl border-2 border-black inline-block p-2">
            {category}
          </div>

          <div className="flex justify-between">
            <h1 className="mt-2 text-2xl font-bold">{title}</h1>
            <p className="flex items-center gap-1 font-medium">
              <BsChat />
              {totalComments}
            </p>
          </div>
          <div className="mt-5">
            <div className="flex">
              <img
                src={owner.avatar}
                alt={owner.name}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3">
                <p className="font-bold">{owner.name}</p>
                <p className="text-gray-400 mt-2">{showFormattedDate(date)}</p>
              </div>
            </div>
            <section className="mt-4 line-clamp-1">{parser(body)}</section>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default ThreadItem;
