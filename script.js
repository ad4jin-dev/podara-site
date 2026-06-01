let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // 向下滚 → 隐藏
    navbar.classList.add("hide");
  } else {
    // 向上滚 → 显示
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
