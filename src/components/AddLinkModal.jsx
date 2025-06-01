import React, { useState } from "react";

function AddLinkModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, url, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-[#6943FF] w-[90%] max-w-md p-6 rounded shadow-lg relative">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <header className="flex items-center justify-between bg-[#6943FF] pl-4 h-12 rounded-t">
          <h2 className="text-white text-xl font-semibold">Customize Link</h2>
          <button
          onClick={onClose}
          className="h-full px-4 text-white text-xl hover:bg-red-600 transition-colors border-none focus:outline-none"
        >
          &times;
        </button>
        </header>
          <div>
            <label htmlFor="title" className="block font-semibold">
              URL Title
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. LinkedIn"
            />
          </div>
          <div>
            <label htmlFor="url" className="block font-semibold">
              URL
            </label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. Portfolio"
            />
          </div>
          <div className="flex justify-center mt-6 gap-4">
          <button
            type="submit"
            className="bg-[#6943FF] text-white py-2 rounded hover:bg-[#5a38d6] transition w-40 h-12"
          >
            Save Link
          </button>
          <button
            className="bg-[#6943FF] text-white py-2 rounded hover:bg-[#5a38d6] transition w-60 h-12"
          >
            Save Link & Add Another
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLinkModal;
