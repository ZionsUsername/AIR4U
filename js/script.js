console.log("JavaScript connected successfully!");

function addSafeEventListener(element, event, callback) {
  if (element) {
    element.addEventListener(event, callback);
  }
}

// Dark/Light Mode Toggle
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

// Contact Form Submission Feedback
const contactForm = document.getElementById("contactForm");
const MessageResponse = document.getElementById("MessageResponse");
const SubmitFormBtn = document.getElementById("SubmitFormBtn");
const nameInput = document.getElementById("nameInput");



// Checks what theme is currently active and applies it to the page
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Dark/Light Mode Toggle
addSafeEventListener(themeToggleButton, "click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "");
  }
});

// Contact Form
if (contactForm && MessageResponse) {
  addSafeEventListener(contactForm, "submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value.trim();
    const emailInput = document.getElementById("emailInput").value.trim();
    const orderInput = document.getElementById("orderInput").value.trim();
    const messageInput = document.getElementById("messageInput").value.trim();

    if (nameInput === "" || emailInput === "" || messageInput === "") {
      MessageResponse.textContent = "Please complete all fields.";
      MessageResponse.className = "error";
      return;
    }

    if (!emailInput.includes("@")) {
      MessageResponse.textContent = "Enter a valid email address.";
      MessageResponse.className = "error";
      return;
    }

    MessageResponse.textContent = "Thank you for reaching out, " + nameInput + "!";
    MessageResponse.classList.remove("error");
    contactForm.reset();
  });

}