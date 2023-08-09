import React from "react";

import { useSelector } from "react-redux";

const Navigation = () => {
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <nav className="w-full flex justify-between min-h-[100px] py-9 items-center">
      <h1 className="text-xl font-bold">ForumApp</h1>
      <div>
        {authedUser && (
          <ul className="flex flex-row gap-8 font-medium text-xl cursor-pointer">
            <li>Threads</li>
            <li>LeaderBoard</li>
            <li>Create</li>
            <li>LogOut</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
