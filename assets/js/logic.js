// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkvt1qvr4ffpF-rps-qW8DxzYMwFEtjqQ",
    authDomain: "livemusicfinder-d1e8a.firebaseapp.com",
    databaseURL: "https://livemusicfinder-d1e8a.firebaseio.com",
    storageBucket: "livemusicfinder-d1e8a.appspot.com",
    messagingSenderId: "422966048796"
  };
  firebase.initializeApp(config);
// make variables
var location;
// on submit
$(".submitBtn").on("click", function(event) {
// grab input values and set to variables
location = $("#location").val();
// push to database
// if already in database increase searchCount by 1
}
// display info on top 5 most searched genre or artist in sidebar
// if artist input grab artists genre and change variable
// search for events with matching genre and location
// display first 5 results
// on loadMore button clicked append next 5 results to page