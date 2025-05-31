
# LinkSaver Chrome Extension

## Overview

LinkSaver is a lighweight and intutitive chrome extension designed to help users save and organize important links for easy access later. Whether it's a research article, a tutorial, or a favorite, LinkSaver ensure your valuable links are always at your fingertips

## Features
- **Saves Links Manually**: Add and categorize links using a clean, user-friendly interface.
- **Save Current Tab**: Quickly save the URL of the currently open tab.
- **View Saved Links:** Access all your stored links in one convenient location.
- **Local Storage:** Stores all data locally to ensure user privacy

## How to Install
1. Clone this repository to your local machine
```
git clone https://github.com/yourusername/linksaver.git
```
2. Open Chrome and navigate ``Chrome://extensions/``
3. Enable Developer mode(toggle in the top-right corner)
4. Click Load **load unpacked** and select the directory where you cloned the repository

## How to use

1. **Save a Link Manually:**
- Click on the LinkSave extension icon.
- Fill in the URL, title, and category in the provided form, then save it
2. **Save the Current Tab:**
- Click the Save Current Tab button t store the link of the currenly open tab.
3. **Organize Links:**
- Use categories to organize your saved links for easy navigation
4. **Access Saved Links:**
- Click on **See Saved Links** button to view all store links.

## Tech Stack
- HTML, CSS, JavaScript: For the frontend-end interface
- Chrome Storage API: For Saving data locally

## Project Structure 
```
LinkSaver/
├── index.html         # Main HTML file for the extension
├── index.js           # Core JavaScript logic
├── styles.css         # Styling for the extension
├── manifest.json      # Chrome extension configuration
├── Designer.png       # Extension icon
```

## Future enhancements
1. **Backend Integration**:
- Transition from local storage to a cloud-based backend to enable cross device synchronization of saved links
- Use technologies like Node.js and Express.js for the backend and a database like MongoDB for storing links securely
2. **Improved User Interface:**
- Enhance the UI/UX with modern designed principles
- Add animations and improve accesibility features 
3. **Search and Filter:**
- Enable users to search and filter links by title, category, or date added
4. **Export/Import Functionality:**
- Allow users to export their saved links as a JSON file and import them into another browser or account 
5. **Authetication System:**
- Add user authetication to manage personal accounts securely

# Contributing 
COntributions are welcome! If you'd like to improve LinkSaver, feel free to fork the repository and submit a pull request

# License
This project is licensed under the [MIT License]()


## Notes related to Chrome extension.

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
