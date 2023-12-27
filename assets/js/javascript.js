const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav__links");

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  const selection = e.target;

  if (selection.classList.contains("close")) {
    navLinks.style.display = "none";
    // navLinks.style.opacity = "0";
  }

  if (selection.classList.contains("hamburger")) {
    navLinks.style.display = "flex";
    // navLinks.style.opacity = "1";
  }
});

window.addEventListener("resize", function () {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 600) {
    navLinks.style.display = "flex";
    // navLinks.style.opacity = "1";
  } else {
    navLinks.style.display = "none";
    // navLinks.style.opacity = "0";
  }
});
