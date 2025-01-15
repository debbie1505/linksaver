//elements
const addNewLink = document.getElementById("add-new-link");
const saveCurrentTab = document.getElementById("save-current-tab");
const seeSavedLinks = document.getElementById("see-saved-links");
const selectElement = document.getElementById("categories");
const newCategoryInput = document.getElementById("new-category");


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
  let firstLetterCapitalInput = newCategoryInput.value.charAt(0).toUpperCase() + newCategoryInput.value.slice(1)
  console.log(firstLetterCapitalInput)
  selectElement.add(new Option(firstLetterCapitalInput));
  newCategoryInput.value = ""
})

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
addNewLink.addEventListener("click", function () {});

saveCurrentTab.addEventListener("click", function () {});

seeSavedLinks.addEventListener("click", function () {});
