import React from "react";

function LinksList({ links }) {
  return (
    <div className="w-full max-w-md mt-6 space-y-4">
      {links.map((link, index) => (
        <div
          key={index}
          className="bg-white text-gray-800 p-4 rounded shadow hover:shadow-md transition"
        >
          <h3 className="font-bold mb-1">{link.title || "Untitled"}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 break-words underline"
          >
            {link.url}
          </a>
          <p className="text-sm text-[#6943FF] mt-1">{link.category}</p>
        </div>
      ))}
    </div>
  );
}

export default LinksList;
