// Get form elements
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const statusText = document.getElementById("status");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    statusText.textContent = "⚠️ Please fill in all fields.";
    statusText.style.color = "red";
  } else {
    statusText.textContent = "✅ Message sent successfully!";
    statusText.style.color = "green";

    // Reset form
    form.reset();
  }
});