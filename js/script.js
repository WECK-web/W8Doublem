function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    event.preventDefault();
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  alert("Form submitted successfully!");
}
// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
