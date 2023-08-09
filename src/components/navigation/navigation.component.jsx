import React from "react";
import { Link } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";

import { useSelector } from "react-redux";

const Navigation = () => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <nav className="w-full flex justify-between min-h-[100px] py-9 items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">ForumApp</Link>
      </h1>
      <div>
        {authedUser && (
          <ul className="flex flex-row gap-8 text-xl font-medium cursor-pointer">
            <li>Threads</li>
            <li className="flex items-center">
              <MdLeaderboard className="mr-1" />
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li>Create</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
