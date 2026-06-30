// Apparition des sections au défilement
const sections = document.querySelectorAll("section");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 150;

    if (sectionTop < trigger) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Animation des cartes
const cards = document.querySelectorAll(".card, .skill-card, .project");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Animation des boutons
const buttons = document.querySelectorAll(".btn, .btn2, button");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// Défilement fluide
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Formulaire
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Merci ! Votre message a été envoyé avec succès.");

    form.reset();
  });
}