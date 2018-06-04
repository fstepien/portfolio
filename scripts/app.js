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
  formSend.open("POST", "https://formspree.io/mdzewapm", true);
  formSend.setRequestHeader("Content-type", "application/json");
  formSend.send(data);

  document.querySelector(".alert").style.display = "block";
  document.getElementById("contact-form").reset();
}
