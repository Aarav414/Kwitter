// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjm03i_w8ikixRAM2r9tQ2Hyo3THn4ESs",
    authDomain: "kwitter1-b35ed.firebaseapp.com",
    databaseURL: "https://kwitter1-b35ed-default-rtdb.firebaseio.com",
    projectId: "kwitter1-b35ed",
    storageBucket: "kwitter1-b35ed.appspot.com",
    messagingSenderId: "716086837612",
    appId: "1:716086837612:web:01301f092925c3c91ef349"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}