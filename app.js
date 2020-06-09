const burger = document.querySelector(".nav__burger");
const navMobile = document.querySelector(".nav-mobile");
const body = document.querySelector("body");

let i = 0;

burger.addEventListener("click", () => {
  i++;
  if (i % 2 != 0) {
    burger.setAttribute("src", "images/icon-close.svg");
    navMobile.style.display = "block";
    body.style.overflowY = "hidden";
  } else {
    burger.setAttribute("src", "images/icon-hamburger.svg");
    navMobile.style.display = "none";
    body.style.overflowY = "visible";
  }
});
