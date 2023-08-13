import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ThreadsPage from "../pages/threads.pages";
import LoginInput from "../components/form/loginInput.component";
import LeaderboardsPage from "../pages/leaderboard.pages";
import ThreadDetailPage from "../pages/threadsDetail.pages";

const Router = () => {
  const authedUser = useSelector((states) => states.authedUser);

  return (
    <Routes>
      {authedUser === null && <Route path="*" element={<LoginInput />} />}
      {authedUser && (
        <>
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="*" element={<ThreadsPage />} />
          <Route path="/threads/:id" element={<ThreadDetailPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
