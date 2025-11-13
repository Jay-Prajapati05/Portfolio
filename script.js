// 🌙 Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const mode = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  toggle.textContent = mode;
  localStorage.setItem("theme", mode);
});
if (localStorage.getItem("theme") === "☀️") {
  document.body.classList.add("light-mode");
  toggle.textContent = "☀️";
}

// 🎞 Scroll Fade-In Effect
const fades = document.querySelectorAll(".fade-in");
function showOnScroll() {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// 📬 Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  e.target.reset();
});
