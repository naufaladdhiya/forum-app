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
      <h1 className="text-xl md:text-2xl font-bold">Buat Thread Baru</h1>
      <form
        className="flex flex-col mt-8 w-full md:w-1/2 "
        onSubmit={handleSibmit}
      >
        <p className="font-bold text-base md:text-lg">Judul</p>
        <input
          type="text"
          id={title}
          value={title}
          onChange={onTitleChange}
          placeholder="Judul"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-50 text-sm rounded-md"
        />
        <p className="mt-4 font-bold text-md md:text-lg">Kategori</p>
        <input
          type="text"
          id={category}
          value={category}
          onChange={onCategoryChange}
          placeholder="Kategori"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-70 text-sm rounded-md"
        />
        <p className="mt-4 font-bold text-base md:text-lg">Isi</p>
        <input
          type="text"
          value={body}
          onChange={onBodyChange}
          placeholder="Isi"
          className="input input-lg input-bordered border-gray-600 min-h-[200px] border border-black-1 pb-40 px-2 bg-blue-100 bg-opacity-70 rounded-md"
        />
        <button
          type="submit"
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold my-4"
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
};

export default ThreadInput;
