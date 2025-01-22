//elements
const dialog = document.querySelector("dialog");
const addNewLink = document.getElementById("add-new-link");
const saveCurrentTab = document.getElementById("save-current-tab");
const seeSavedLinks = document.getElementById("see-saved-links");
const selectElement = document.getElementById("categories");
const newCategoryInput = document.getElementById("new-category");
const form = document.getElementById("form");

//Initialize categories and links

async function initializeData() {
  const result = await chrome.storage.local.get(["categories", "links"]);
  const categories = result.categories || [];
  const links = result.links || [];
}

function updateCategoriesDropdown(newCategories) {
  newCategories.forEach((category) => {
    // Add the category to the dropdown before the last option
    const position = selectElement.options.length - 1;
    selectElement.add(
      new Option(category, category),
      selectElement.options[position]
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  selectElement.addEventListener("change", function () {
    //show or hide the input based on selected value
    if (this.value === "add-new") {
      newCategoryInput.style.display = "inline-block";
    } else {
      newCategoryInput.style.display = "none";
    }
  });

  //for the category feature
  newCategoryInput.addEventListener("change", async function () {
    try {
      // Trim extra spaces from input
      const newCategory = newCategoryInput.value.trim();

      // Capitalize the first letter of the input
      const formattedCategory =
        newCategory.charAt(0).toUpperCase() + newCategory.slice(1);

      // Retrieve categories from storage
      const result = await chrome.storage.local.get("categories");
      const categories = result.categories || [];

      // Check if the category already exists in the stored categories
      if (
        !categories.some(
          (category) =>
            category.toLowerCase() === formattedCategory.toLowerCase()
        )
      ) {
        // Add the new category to storage
        categories.push(formattedCategory);
        await chrome.storage.local.set({ categories });

        // Update the dropdown with the new category
        updateCategoriesDropdown([formattedCategory]); // Pass only the new category
      } else {
        console.log("Category already exists!");
      }

      // Clear the input field
      newCategoryInput.value = "";
    } catch (error) {
      console.error("Error updating categories:", error);
    }
  });

  //main page eventListeners and function definitions

  //when we click the save link button the dialog elemnent is shown as a modal
  if (addNewLink && dialog) {
    addNewLink.addEventListener("click", function () {
      dialog.showModal();
    });
  }

  // when we click the x button, the modal is closed
  document.getElementById("closeModal").addEventListener("click", function () {
    dialog.close();
  });

  //the current tab is saved when we click the current tab button
  saveCurrentTab.addEventListener("click", async function () {
    try {
      const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        console.log("Current tab url: ", currentTab.url);
      } else {
        console.error("No active tab found.");
      }
    } catch (error) {
      console.error("Error fetching current tab URL:", error);
    }
  });

  seeSavedLinks.addEventListener("click", function () {});
});

//Dialog

//Elements
const saveLink = document.getElementById("save-link");
const saveLinkAndMore = document.getElementById("save-and-add-one");

//when save link button is click, the dialog is closed and the input is saved locally
