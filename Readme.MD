
# LinkSaver Chrome Extension

## Overview

LinkSaver is a lighweight and intutitive chrome extension designed to help users save and organize important links for easy access later. Whether it's a research article, a tutorial, or a favorite, LinkSaver ensure your valuable links are always at your fingertips

## Features
- **Saves Links Manually**: Add and categorize links using a clean, user-friendly interface.
- **Save Current Tab**: Quickly save the URL of the currently open tab.
- **View Saved Links:** Access all your stored links in one convenient location.
- **Local Storage:** Stores all data locally to ensure user privacy



### Chrome Extension
"default_pop" key in the "action" key declares the HTML page to show in a popup when the extension's action icon is clicked

"action" key: what happens when a user clicks the action icon 

The only required keys are "Manifest_version", "name", "version"

The only file formats not accepted for images are svg files 

Content script are files that run in the context of the web pages 
- register a content script called content.js
- work in isolation

"Icons" key:16x16 ==> Favicon
            32x32 ==> Windows computers often require this size
            48x48 ==> Displays on the Extensions page
            128x128 ==> Displays on installation and in the chrome web store

"Active Tab": preserves user privacy 
- grants the extension temporary ability to execute code on the active tab
- also allows temporary access to sensitive properties of the current tab
