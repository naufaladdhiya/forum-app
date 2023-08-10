import React from "react";
import ThreadItem from "./threadItem.component";

const ThreadList = ({ threads }) => {
  return (
    <ul>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </ul>
  );
};

export default ThreadList;
