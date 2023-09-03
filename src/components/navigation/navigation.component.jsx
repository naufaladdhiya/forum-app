import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdLeaderboard, MdLogout } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Navigation = ({ onLogOut }) => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <nav className="w-full flex flex-col justify-between min-h-[100px] py-9 items-center md:flex-row container mx-auto">
      <h1 className="text-xl font-bold text-center">
        <Link to="/">TalksSpace</Link>
      </h1>
      <div>
        {authedUser && (
          <ul className="flex flex-row gap-2 md:gap-6 text-[11px] font-bold cursor-pointer mt-6 md:text-lg xl:gap-8 md:mt-0">
            <li className="flex items-center transition transform hover:scale-110 md:hover:scale-125">
              <BsChatLeft className="mr-1" />
              <Link to="/">Threads</Link>
            </li>
            <li className="flex items-center transition transform hover:scale-110 md:hover:scale-125">
              <MdLeaderboard className="mr-1" />
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li className="flex items-center transition transform hover:scale-110 md:hover:scale-125">
              <AiOutlinePlusSquare className="mr-1" />
              <Link to="/threads/new">Create</Link>
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
