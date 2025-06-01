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
      <p className="bg-white text-[#6943FF] px-4 py-2 rounded shadow font-semibold hover:underline">Your links, saved for later</p>
      <button onClick={() => setShowModal(true)} className="links-btn">
        🔗 Save Link
      </button>
      <button
        className="links-btn"
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
