import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ThreadsPage from "../pages/threads.pages";
import LoginInput from "../components/form/loginInput.component";
import LeaderboardsPage from "../pages/leaderboard.pages";

const Router = () => {
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <Routes>
      {authedUser === null && <Route path="*" element={<LoginInput />} />}
      {authedUser && (
        <>
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="*" element={<ThreadsPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
