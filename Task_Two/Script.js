
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");


  function blockNumbers(event) {
    const num = /[0-9]/;
    if (num.test(event.key)) {
      event.preventDefault();
    }
  }

  firstName.addEventListener("keypress", blockNumbers);
  lastName.addEventListener("keypress", blockNumbers);


  form.addEventListener("submit", function (e) {
    let errors = [];

    if (firstName.value.trim() === "") {
      errors.push("First name is required");
    }
    if (lastName.value.trim() === "") {
      errors.push("Last name is required");
    }
    if (email.value.trim() === "") {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.push("Enter a valid email address");
    }
    if (subject.value.trim() === "") {
      errors.push("Subject is required");
    }
    if (message.value.trim() === "") {
      errors.push("Message is required");
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
    }
  });
});
