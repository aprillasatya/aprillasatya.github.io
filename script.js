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

/*************
 Contact Form
 *************/
const scriptURL = "https://script.google.com/macros/s/AKfycbxL1AO1fvSIx4VRsItakTyqsWkXSlIHyWpPgXqn3ASoxULZhPaiRTYworM-uFGDyYJF/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // when submit clicked
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // show alert
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
