import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdLeaderboard, MdLogout } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Navigation = ({ onLogOut }) => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <nav className="w-full flex justify-between min-h-[100px] py-9 items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">ForumApp</Link>
      </h1>
      <div>
        {authedUser && (
          <ul className="flex flex-row gap-8 text-lg font-bold cursor-pointer ">
            <li className="flex items-center transition transform hover:scale-125">
              <BsChatLeft className="mr-1" />
              <Link to="/">Threads</Link>
            </li>
            <li className="flex items-center transition transform hover:scale-125">
              <MdLeaderboard className="mr-1" />
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li className="flex items-center transition transform hover:scale-125">
              <AiOutlinePlusSquare className="mr-1" />
              Create
            </li>
            <li className="transition transform hover:scale-125">
              <button
                onClick={() => {
                  onLogOut();
                }}
                className="flex items-center"
              >
                <MdLogout className="mr-1" />
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
