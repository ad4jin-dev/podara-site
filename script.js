let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
