import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../scss/styles.scss";


// Active nav link on scroll (simple + propre)
const links = Array.from(document.querySelectorAll(".navbar .nav-link"));
const sections = Array.from(document.querySelectorAll("header[id], section[id]"));

function setActiveById(id) {
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
}

function onScroll() {
  const y = window.scrollY + 200;
  let current = "home";

  sections.forEach((s) => {
    if (y >= s.offsetTop) current = s.id;
  });

  setActiveById(current);
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
onScroll();

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const form = document.querySelector('.contact-form');
const statusMsg = document.getElementById('contactStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      if (statusMsg) statusMsg.style.display = 'block';
    } else {
      alert("Oops, something went wrong. Try again.");
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();


const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Hover effect on clickable elements
document.querySelectorAll('a, button, .project-card, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});