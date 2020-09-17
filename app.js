//navbar shrink and shadow
const navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 10) {
    navbar.classList.add("floating");
  } else {
    navbar.classList.remove("floating");
  }
});

//To-top button
const toTop = document.querySelector(".to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const scrolled = window.scrollY;
  if (scrolled > 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}

//mobile burger
// const burger = document.querySelector(".burger");
// const navelem = document.querySelector(".nav-elem");
// const body = document.querySelector("body");
// const navlinks = document.querySelector(".nav-links");
// burger.addEventListener("click", () => {
//   burger.classList.toggle("open");
//   navelem.classList.toggle("nav-visible");

//   if (navelem.classList.contains("nav-visible")) {
//     body.style.overflow = "hidden";
//     navlinks.addEventListener("click", () => {
//       navelem.classList.remove("nav-visible");
//       burger.classList.remove("open");
//       body.style.overflow = "visible";
//     });
//   } else {
//     body.style.overflow = "visible";
//   }
// });

const burger = document.querySelector(".burger");
const navelem = document.querySelector(".nav-elem");
const body = document.querySelector("body");
const main = document.querySelector("main");
const navlinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navelem.classList.toggle("nav-visible");

  if (navelem.classList.contains("nav-visible")) {
    main.style.display = "none";
    navlinks.addEventListener("click", () => {
      navelem.classList.remove("nav-visible");
      burger.classList.remove("open");
      main.style.display = "block";
    });
  } else {
    main.style.display = "block";
  }
});
