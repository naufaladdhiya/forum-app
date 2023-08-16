import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

import LeaderboardsList from "../components/leaderboards/leaderboardsList";
import { getLeaderboards } from "../states/leaderboard/action";

const LeaderboardsPage = () => {
  const leaderboards = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaderboards());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Leaderboards
      </h1>
      <div className="flex justify-between mt-3">
        <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-400 flex items-center">
          <AiOutlineUser className="mr-2" />
          Pengguna
        </p>
        <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-400 flex items-center">
          <AiOutlineStar className="mr-2" />
          Poin
        </p>
      </div>
      <LeaderboardsList leaderboards={leaderboards} />
    </div>
  );
};
export default LeaderboardsPage;
