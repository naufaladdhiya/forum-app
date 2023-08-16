import React from "react";

import useInput from "../../hooks/useInput";

const CommentForm = ({ onCommentCreate }) => {
  const [comment, onCommentChange] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCommentCreate(comment);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form
        className="flex flex-col gap-4 mt-8 w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id={comment}
          value={comment}
          onChange={onCommentChange}
          placeholder="Berikan Komentar"
          className="input input-lg input-bordered border-gray-600 min-h-[200px] border border-black-1 pb-40 px-2 bg-blue-100 bg-opacity-50"
        />
        <button
          type="submit"
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
