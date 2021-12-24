var firebaseConfig = {
    apiKey: "AIzaSyDvddQ1SAM-ggxHnfc8eQ9eQI0bZLw7JWc",
    authDomain: "twitter-3-4c1d4.firebaseapp.com",
    databaseURL: "https://twitter-3-4c1d4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twitter-3-4c1d4",
    storageBucket: "twitter-3-4c1d4.appspot.com",
    messagingSenderId: "628954145625",
    appId: "1:628954145625:web:819591fa82d6856791a248",
    measurementId: "G-4G9VYDXQSB"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.array.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onClick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name) {
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}