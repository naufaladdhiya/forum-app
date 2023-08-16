import React from "react";

const LeaderboardsItem = ({ user, score }) => {
  return (
    <li>
      <div className="flex flex-row items-center justify-between border p-9 border-1">
        <div className="flex items-center gap-5">
          <img src={user.avatar} alt={user.name} className="rounded-full" />
          <p className="text-base md:text-xl lg:text-2xl font-bold text-left">
            {user.name}
          </p>
        </div>
        <p className="text-base md:text-xl lg:text-3xl font-medium">{score}</p>
      </div>
    </li>
  );
};

export default LeaderboardsItem;
