//elements
const dialog = document.querySelector("dialog")
const addNewLink = document.getElementById("add-new-link");
const saveCurrentTab = document.getElementById("save-current-tab");
const seeSavedLinks = document.getElementById("see-saved-links");
const selectElement = document.getElementById("categories");
const newCategoryInput = document.getElementById("new-category");
const form = document.getElementById("form");

console.log(document.getElementById("categories")); // Should print the select element
console.log(document.getElementById("new-category")); // Should print the input element

document.addEventListener("DOMContentLoaded", function () {
  selectElement.addEventListener("change", function () {
    //show or hide the input based on selected value
    if (this.value === "add-new") {
      newCategoryInput.style.display = "inline-block";
    } else {
      newCategoryInput.style.display = "none";
    }
  });
});

newCategoryInput.addEventListener("change", function () {
  //trim extra spaces from input
  const newCategory = newCategoryInput.value.trim()

  
  //check if the category already exists in the select options
  const optionExists = Array.from(selectElement.options).some((option) => option.value.toLowerCase() === newCategory.toLowerCase())
  
  if(!optionExists){
    //capitalize the first letter of the input
    let firstLetterCapitalInput =
    newCategory.value.charAt(0).toUpperCase() +
    newCategory.value.slice(1);
  console.log(firstLetterCapitalInput);
  
  //Add the new category as an option before the last position
  const position = selectElement.options.length - 1;
  selectElement.add(
    new Option(firstLetterCapitalInput),
    selectElement.options[position]
  );
  }
  //clear the input field
  newCategoryInput.value = "";
});

function handleSubmit(event) {
  //prevent the default behavior where the form refresh
  event.preventDefault();
  //getting the form element from the current target of the event
  const formEl = event.currentTarget;
  //creating a set of form data
  //gives us access to the form input
  const formData = new FormData(formEl);
  //getiing information from the data
  const email = formData.get("");
  //allows us to reset the form
  formEl.removeEventListener();
  //gather info from the forms
  //submit it to a backend
}

//main page eventListeners and function definitions
addNewLink.addEventListener("click", function () {
  dialog.showModal()
});

document.getElementById("closeModal").addEventListener("click", function(){
  dialog.close();
})


saveCurrentTab.addEventListener("click", function () {});

seeSavedLinks.addEventListener("click", function () {});
