import React from "react";

import LeaderboardsItem from "./leaderboardsItem";

const LeaderboardsList = ({ leaderboards }) => {
  return (
    <ul className="mt-7">
      {leaderboards.map((leaderboard) => (
        <LeaderboardsItem
          key={leaderboard.user.id}
          user={leaderboard.user}
          score={leaderboard.score}
        />
      ))}
    </ul>
  );
};

export default LeaderboardsList;
