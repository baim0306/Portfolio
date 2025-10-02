const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    menu.classList.toggle("navbar-inactive");
    menu.classList.toggle("navbar-active");
    hamburger.classList.toggle("hamburger-active");
  }
});

// navbar-fixed
window.onscroll = function () {
  const header = document.getElementById("header");
  const headerNav = header.offsetTop;
  const nav = document.getElementById("nav");

  if (window.pageYOffset > headerNav) {
    header.classList.add("header-fixed");
    nav.classList.remove("hidden");
  } else {
    header.classList.remove("header-fixed");
    nav.classList.add("hidden");
  }
};

// hover-animation
const spans = document.querySelectorAll("#span span");

document.addEventListener("mousemove", function (e) {
  spans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    const isHovering =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (isHovering) {
      span.style.backgroundColor = "oklch(75% 0.183 55.934)";
      span.style.transition = "0s ease";
    } else {
      span.style.backgroundColor = "black";
      span.style.transition = "1.5s ease-out";
    }
  });
});

// Title change
const title = document.querySelector("#header div h2");
