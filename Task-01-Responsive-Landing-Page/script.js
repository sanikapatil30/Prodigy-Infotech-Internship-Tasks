const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".nav-link");
const reveals = document.querySelectorAll(".reveal");

/* Navbar style change on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  /* Active menu link */
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector(`nav a[href="#${id}"]`)
          .classList.add("active");
      });
    }
  });

  /* Reveal animation */
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* Smooth scroll */
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
