// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAFrNVtDzqmQLIZyroMjLGgp4BUUR2PzHE",
   authDomain: "filipstepien-com-contact-form.firebaseapp.com",
   databaseURL: "https://filipstepien-com-contact-form.firebaseio.com",
   projectId: "filipstepien-com-contact-form",
   storageBucket: "filipstepien-com-contact-form.appspot.com",
   messagingSenderId: "932120606875"
 };
 firebase.initializeApp(config);

//Reference messsages collections

var messagesRef = firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  saveMessage(name, email, message);
  document.querySelector('.alert').style.display = "block";
  document.getElementById('contact-form').reset();
}

function saveMessage(name, email, message){
  var newMEssageRef = messagesRef.push();
  newMEssageRef.set({
    name: name,
    email: email,
    message: message
  });
}


//Home Nav

document.addEventListener('scroll', homeNav);

var intro = document.querySelector('#intro');
var introHeight = getComputedStyle(intro).height.split('px')[0];
var home = document.querySelector('nav').children[0].children[0];
console.log(home);
console.log(introHeight);


function homeNav(e) {
  if(window.pageYOffset > introHeight){
    home.style.display = "inline-block";
  }
  if(window.pageYOffset < introHeight){
    home.style.display = "none";
  }
}
