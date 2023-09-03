import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPreload } from "../states/preLoad/action";

import ThreadsPage from "../pages/threads.pages";
import LoginInput from "../components/form/loginInput.component";
import RegisterInput from "../components/form/registerInput.component";
import LeaderboardsPage from "../pages/leaderboard.pages";
import ThreadDetailPage from "../pages/threadsDetail.pages";
import AddThreadsPage from "../pages/addThreads.pages";

const Router = () => {
  const { authedUser = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPreload());
  }, [dispatch]);

  return (
    <Routes>
      {authedUser === null && (
        <>
          <Route path="*" element={<LoginInput />} />
          <Route path="/register" element={<RegisterInput />} />
        </>
      )}
      {authedUser && (
        <>
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="*" element={<ThreadsPage />} />
          <Route path="/threads/:id" element={<ThreadDetailPage />} />
          <Route path="/threads/new" element={<AddThreadsPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
