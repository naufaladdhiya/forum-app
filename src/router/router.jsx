import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPreload } from "../states/preLoad/action";

import ThreadsPage from "../pages/threads.pages";
import LoginInput from "../components/form/loginInput.component";
import LeaderboardsPage from "../pages/leaderboard.pages";
import ThreadDetailPage from "../pages/threadsDetail.pages";

const Router = () => {
  const { authedUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPreload());
  }, [dispatch]);

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
