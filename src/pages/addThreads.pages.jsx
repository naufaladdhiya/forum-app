import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUsersAndThreads } from "../states/shared/action";
import { createThread } from "../states/thread/action";
import ThreadInput from "../components/form/threadInput.component";

const AddThreadsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (thread) => {
    dispatch(createThread(thread));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUsersAndThreads());
  }, [dispatch]);

  return <ThreadInput onCreate={handleSubmit} />;
};

export default AddThreadsPage;
