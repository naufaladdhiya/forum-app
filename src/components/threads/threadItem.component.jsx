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
    <li className="mt-5 hover:bg-blue-100 p-5 hover:opacity-90 transition delay-75 border border-black-1">
      <Link to={`threads/${id}`}>
        <article>
          <div className="font-bold text-base border-2 border-black inline-block p-2 md:text-2xl">
            {category}
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="mt-2 text-md font-bold md:text-xl xl:text-2xl">
              {title}
            </div>
            <p className="flex items-center gap-1 font-medium text-sm md:text-base">
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
              <div className="flex flex-col ml-3 text-sm md:text-base">
                <p className="font-bold">{owner.name}</p>
                <p className="text-gray-400 mt-2">{showFormattedDate(date)}</p>
              </div>
            </div>
            <section className="mt-4 line-clamp-1 text-sm md:text-base">
              {parser(body)}
            </section>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default ThreadItem;
