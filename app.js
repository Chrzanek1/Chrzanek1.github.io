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

//View more projects
const vm = document.querySelector(".view-more");
const pcard = document.querySelectorAll(".project-card");
const allworks = document.querySelector(".allworks");
const vmt = document.getElementById("view-more-tabs");

vm.addEventListener("click", () => {
  if (vmt.innerText === "Zobacz więcej") {
    vmt.innerText = "Zobacz mniej";
  } else {
    vmt.innerText = "Zobacz więcej";
  }
  document.querySelectorAll(".project-card").forEach(function (element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("visible");
      // vmt.innerText = "Zobacz mniej";
    } else if (element.classList.contains("visible")) {
      element.classList.remove("visible");
      element.classList.add("hidden");
      // vmt.innerText = "Zobacz Więcej";
    }
  });
});
{
}
