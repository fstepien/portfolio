document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  let rawData = {
    name: name,
    email: email,
    comments: message,
    _subject: "Contact Form"
  };
  //   console.log(rawData);
  data = JSON.stringify(rawData);
  let formSend = new XMLHttpRequest();
  formSend.open("POST", "https://formspree.io/mgykdpvm", true);
  formSend.setRequestHeader("Content-type", "application/json");
  formSend.send(data);

  document.querySelector(".alert").style.display = "block";
  document.getElementById("contact-form").reset();
}

/////"Konami Code"
const pressed = [];
const konamicode = "whippet";
window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-konamicode.length - 1, pressed.length - konamicode.length);
  pressed.join("").includes(konamicode) ? konamiMatch() : "";
});

function konamiMatch() {
  const photo = document.querySelector(".about__wrap__photo");
  photo.style.backgroundImage = "url(./../assets/mika.jpg)";
  photo.style.filter = "grayscale(0%) brightness(1)";
  window.location.href = "#about";
}
