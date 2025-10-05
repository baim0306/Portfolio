// hamburger-menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    menu.classList.toggle("navbar-inactive");
    menu.classList.toggle("navbar-active");
    hamburger.classList.toggle("hamburger-active");
  }
});

document.body.addEventListener("click", function (e) {
  if (
    !e.target.closest("#menu") &&
    !e.target.closest("#hamburger") &&
    window.innerWidth < 768
  ) {
    menu.classList.remove("navbar-active");
    menu.classList.add("navbar-inactive");
    hamburger.classList.remove("hamburger-active");
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
const subTitles = document.querySelectorAll("section div h2");
let pendingTimeout = null;

function updateTitleOnScroll() {
  if (pendingTimeout) {
    clearTimeout(pendingTimeout);
    pendingTimeout = null;
  }

  if (window.scrollY === 0) {
    title.classList.add("animate");
    setTimeout(() => {
      title.innerHTML = "Home";
      pendingTimeout = null;
    }, 300);
    return;
  }

  let current = "";

  subTitles.forEach((subTitle) => {
    const top = subTitle.getBoundingClientRect().top;

    if (top < window.innerHeight / 2) {
      current = subTitle.innerHTML;
    }
  });

  if (current && title.innerHTML !== current) {
    title.classList.add("animate");
    setTimeout(() => {
      title.innerHTML = current;
      pendingTimeout = null;
    }, 300);

    setTimeout(() => {
      title.classList.remove("animate");
    }, 300);
  }
}

window.addEventListener("scroll", updateTitleOnScroll);
window.addEventListener("load", upsateTitleOnScroll);
