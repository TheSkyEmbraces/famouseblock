const headerTag = document.querySelector(".header");
const headerRight = document.querySelector(".nav");
const mNavMenu = document.querySelector(".mobile-nav");
const mNavMenuBg = document.querySelectorAll(".burger");
const mNavMenuWrap = document.querySelector(".nav-m");

const logo = document.querySelector(".logo-top-img");
const headerHeight = headerTag.offsetHeight;

// console.log(headerHeight);

// console.log(mNavMenuBg);

const header = () => {
  if (window.pageYOffset >= headerHeight) {
    headerTag.style.background = "#ffffff";
    logo.setAttribute("src", "assets/images/logo.png");
    headerRight.classList.add("navAction");
    for (i = 0; i < mNavMenuBg.length; i++) {
      mNavMenuBg[i].classList.add("blackNav");
    }
  } else {
    headerTag.style.background = "none";
    logo.setAttribute("src", "assets/images/logo-w.png");
    headerRight.classList.remove("navAction");
    for (i = 0; i < mNavMenuBg.length; i++) {
      mNavMenuBg[i].classList.remove("blackNav");
    }
  }
};

const mNav = () => {
  mNavMenu.addEventListener("click", () => {
    // console.log("toggle");
    mNavMenuWrap.classList.toggle("activeNav");
  });
};

const init = () => {
  mNav();
  window.addEventListener("scroll", header);
};

init();
