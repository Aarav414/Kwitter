
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD_DNZdz0awGYYiiNSK9zO112RdQh20vZU",
      authDomain: "kwitter-5cba6.firebaseapp.com",
      databaseURL: "https://kwitter-5cba6-default-rtdb.firebaseio.com",
      projectId: "kwitter-5cba6",
      storageBucket: "kwitter-5cba6.appspot.com",
      messagingSenderId: "638305197400",
      appId: "1:638305197400:web:ec2341fa00afd0d86d992d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
