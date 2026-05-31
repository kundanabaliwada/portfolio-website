const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

function setStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `form-status ${type}`.trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector("button");
  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  if (!formData.name || !formData.email || !formData.message) {
    setStatus("Please fill in all fields.", "error");
    return;
  }

  if (!isValidEmail(formData.email)) {
    setStatus("Please enter a valid email address.", "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  setStatus("Sending your message...");

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Something went wrong.");
    }

    form.reset();
    setStatus("Message sent successfully. Thank you!", "success");
  } catch (error) {
    setStatus("Unable to send right now. Please make sure the backend server is running.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});
