const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const onReveal = () => {
  const items = document.querySelectorAll(".reveal");
  items.forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) {
      setTimeout(() => el.classList.add("visible"), idx * 90);
    }
  });
};

window.addEventListener("scroll", onReveal);
window.addEventListener("load", onReveal);
onReveal();

const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
