const navbar = document.getElementById("navbar");
let lastScroll = 0;

/* scroll hide */
window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = current;
});

/* mobile menu */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
