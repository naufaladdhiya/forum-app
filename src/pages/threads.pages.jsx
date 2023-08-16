import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsersAndThreads } from "../states/shared/action";

import ThreadList from "../components/threads/threadList.component";

const ThreadsPage = () => {
  const { threads, users, authedUser } = useSelector((states) => states);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authedUser,
  }));

  const filteredThreadList =
    selectedCategory.length === 0
      ? threadList
      : threadList.filter((thread) => thread.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  useEffect(() => {
    dispatch(getUsersAndThreads());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-xl font-bold md:text-2xl mt-12">Pilih Kategori</h1>
      <div className="flex gap-4">
        {threads.map((thread, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(thread.category)}
            className="p-2 border-2 border-gray-600 rounded-xl bg-blue-100 opacity-70 text-black font-bold cursor-pointer mt-4 hover:bg-blue-400 hover:opacity-90"
          >
            {thread.category}
          </div>
        ))}
      </div>
      <h1 className="text-center text-2xl my-6 font-bold md:text-3xl mt-10">
        Diskusi Tersedia
      </h1>
      <ThreadList threads={filteredThreadList} />
    </div>
  );
};

export default ThreadsPage;
