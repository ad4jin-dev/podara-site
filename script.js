// 滚动隐藏导航
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


// 🔥 汉堡菜单
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
