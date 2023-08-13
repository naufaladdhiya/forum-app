import React from "react";
import useInput from "../../hooks/useInput";

const ThreadInput = ({ onCreate }) => {
  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  const [category, onCategoryChange] = useInput("");

  const handleSibmit = (event) => {
    event.preventDefault();

    const newThread = { title, category, body };
    onCreate(newThread);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold">Buat Thread Baru</h1>
      <form className="flex flex-col gap-4 mt-8 w-1/2" onSubmit={handleSibmit}>
        <input
          type="text"
          id={title}
          value={title}
          onChange={onTitleChange}
          placeholder="Judul"
          className="px-2 py-3 border-2 border-gray-600"
        />
        <input
          type="text"
          id={category}
          value={category}
          onChange={onCategoryChange}
          placeholder="Kategori"
          className="px-2 py-3 border-2 border-gray-600"
        />
        <input
          type="text"
          value={body}
          onChange={onBodyChange}
          placeholder="Isi"
          className="input input-lg input-bordered border-gray-600 min-h-[200px] border border-black-1 pb-40 px-2"
        />
        <button
          type="submit"
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold"
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
};

export default ThreadInput;
