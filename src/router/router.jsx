import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/home/home.pages";
import LoginInput from "../components/form/loginInput.component";
import LeaderboardsPage from "../pages/leaderboard.pages";

const Router = () => {
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <Routes>
      {authedUser === null && <Route path="*" element={<LoginInput />} />}
      {authedUser && (
        <>
          <Route path="*" element={<Home />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
