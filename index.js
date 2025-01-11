/*import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.1.0/database-app.js";
*/
//elements
const addNewLink = document.getElementById("add-new-link");
const saveCurrentTab = document.getElementById("save-current-tab");
const seeSavedLinks = document.getElementById("see-saved-links");
/*
const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-d1124-default-rtdb.firebaseio.com/",
};
*/


console.log(document.getElementById("categories")); // Should print the select element
console.log(document.getElementById("new-category")); // Should print the input element

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("categories");
  selectElement.addEventListener("change", function () {
    const newCategoryInput = document.getElementById("new-category");

    //show or hide the input based on selected value
    if (this.value === "add-new") {
      newCategoryInput.style.display = "block";
    } else {
      newCategoryInput.style.display = "none";
    }
  });
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

//connect the app with the database
//const app = initializeApp(firebaseConfig);

//setting up the database
//const database = getDatabase(app);
//create a reference under which we can start pushing data
//const referenceInDB = ref(database, "birthdays");

//get a snapshot of the database
/*onValue(referenceInDB, function (snapshot) {
  console.log(snapshot);
});
*/

//main page eventListeners and function definitions
addNewLink.addEventListener("click", function () {});

saveCurrentTab.addEventListener("click", function () {});

seeSavedLinks.addEventListener("click", function () {});
