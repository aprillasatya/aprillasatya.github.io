const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 50) {
    nav.classList.add("nav-bar");
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("nav-bar");
    nav.classList.remove("shadow");
  }
});
