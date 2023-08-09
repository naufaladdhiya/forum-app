import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/home/home.pages";
import LoginInput from "../components/form/loginInput.component";

const Router = () => {
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <Routes>
      {authedUser === null && <Route path="*" element={<LoginInput />} />}
      {authedUser && (
        <>
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
