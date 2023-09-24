function instagram() {
  window.open("https://www.instagram.com/zoila_childcare/");
}

function facebook() {
  window.open(
    "https://www.facebook.com/profile.php?id=61551035442788&checkpoint_src=any"
  );
}

function whatsaap() {
  window.open("https://wa.me/5102659453");
}

function igpersonal() {
  window.open("https://www.instagram.com/zoila_liriano/");
}

function fbpersonal() {
  window.open("https://www.facebook.com/zoila.liriano.1");
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function emailsend() {
  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  var messageBody =
    "Name: " +
    userName +
    "<br/> Email: " +
    email +
    "<br/> Phone: " +
    number +
    "<br/> Subject: " +
    subject +
    "<br/> Message: " +
    message;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "EnmanuelleML@outlook.com",
    Password: "9B0E5E8C871D90797F0C7FDB6C3A058A0CF8",
    To: "childlovers@outlook.com",
    From: "EnmanuelleML@outlook.com",
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => {
    if (message === "OK") {
      swal(
        "Successful Message",
        "We will receive your message immediately",
        "success"
      );
    } else {
      swal("Try Again :(", "Message Didn't go through", "error");
    }
  });
}
