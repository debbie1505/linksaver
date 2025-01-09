import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.1.0/database-app.js";

//elements
const addNewLink = document.getElementById("add-new-link");
const saveCurrentTab = document.getElementById("saved-current-tab");
const seeSavedLinks = document.getElementById("see-saved-link")
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


addNewLink.addEventListener("click", function(){


})

saveCurrentTab.addEventListener("click", function(){
   

})

seeSavedLinks.addEventListener("click", function(){


})
