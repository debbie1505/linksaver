import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.1.0/database-app.js";

//elements
const addButton = document.getElementById("add-button");
const seeSavedLinks = document.getElementById("saved-links-button");
const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-d1124-default-rtdb.firebaseio.com/",
};

//connect the app with the database 
const app = initializeApp(firebaseConfig);

//setting up the database
const database = getDatabase(app);
//create a reference under which we can start pushing data
const referenceInDB = ref(database, "birthdays");

//get a snapshot of the database
onValue(referenceInDB, function (snapshot) {
  console.log(snapshot);
});

//using an anonymous function
addButton.addEventListener("click", function(){
    

})
