import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddLinkModal from "./components/AddLinkModal";
import LinksList from "./components/LinksList";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const addLink = (newLink) => {
    setLinks((prev) => [...prev, newLink]);
  };
  function handleSaveCurrentTab(){
     chrome.tabs &&
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
              const url = tabs[0].url;
              const title = tabs[0].title;
              addLink({ url, title, category: "Uncategorized" });
            }
          })
  }
  return (
    <main className="main">
      <Header />
      <p className=" text-[#FFFFFF] text-3xl font-thin mb-8">Your links, saved for later</p>
      <button onClick={() => setShowModal(true)} className="bg-white text-[#6943FF] font-semibold px-5 py-3 rounded shadow hover:bg-[#6943FF] hover:text-white transition min-w-[250px] min-h-[56px]">
        🔗 Save Link
      </button>
      <button
        className="bg-white text-[#6943FF] font-semibold px-5 py-3 rounded shadow hover:bg-[#6943FF] hover:text-white transition mt-4 mb-4 min-w-[250px] min-h-[56px]"
        onClick={handleSaveCurrentTab}>
        🗂️ Save Current Tab
      </button>
      {links.length > 0 ? <LinksList links={links} /> : <p>No saved links.</p>}
      {showModal && (
        <AddLinkModal onClose={() => setShowModal(false)} onSave={addLink} />
      )}
    </main>
  );
}

export default App;
