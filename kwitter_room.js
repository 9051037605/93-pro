// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkZtl-Jx3sT8lkOSeMXG4fgTj_mVFwKqg",
    authDomain: "c93-pro.firebaseapp.com",
    projectId: "c93-pro",
    storageBucket: "c93-pro.appspot.com",
    messagingSenderId: "1012341689648",
    appId: "1:1012341689648:web:da10adbdea12854f71ccf5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";
 

 function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="Kwitter_page.html";
 }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML+= room;


  //End code
  });});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}