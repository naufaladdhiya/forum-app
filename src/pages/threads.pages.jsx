import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsersAndThreads } from "../states/shared/action";

import ThreadList from "../components/threads/threadList.component";

const ThreadsPage = () => {
  const { threads, users, authedUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authedUser,
  }));

  useEffect(() => {
    dispatch(getUsersAndThreads());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center text-2xl my-6 font-bold md:text-2xl">
        Diskusi Tersedia
      </h1>
      <ThreadList threads={threadList} />
    </div>
  );
};

export default ThreadsPage;
