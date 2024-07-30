"use strict";

// Set current year
const yearCopy = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearCopy.textContent = currentYear;

// Navbar Scroll
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
