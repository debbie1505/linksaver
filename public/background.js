// public/background.js

/*Purpose of file: 

When the extension is installed, it adds a right-click option called "Save this link to LinkSaver"
When clicked, it stores the link in chrome.storage.local
You can later view it in popup UI(React app)

*/


chrome.runtime.onInstalled.addListener(() => {
  console.log("LinkSaver background service worker installed.");

  // Optional: Set up context menu item
  chrome.contextMenus.create({
    id: "save-link",
    title: "Save this link to LinkSaver",
    contexts: ["link"]
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "save-link") {
    const linkData = {
      url: info.linkUrl,
      title: tab.title || "Untitled",
      category: "Uncategorized"
    };

    chrome.storage.local.get(["links"], (data) => {
      const links = data.links || [];
      links.push(linkData);
      chrome.storage.local.set({ links });
    });
  }
});
