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

// 1. tangkap element dengan class menu
const menu = document.querySelector(".navbar-nav");

// 2. jika element dengan class menu diklik
menu.addEventListener("click", function (e) {
  // 3. maka ambil element apa yang diklik oleh user
  const targetMenu = e.target;

  // 4. lalu cek, jika element itu adalah link dengan class nav-link
  if (targetMenu.classList.contains("nav-link")) {
    // 5. maka ambil menu link yang aktif
    const menuLinkActive = document.querySelector("ul li a.active");

    // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
    if (menuLinkActive !== null && targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")) {
      // 7. maka hapus class active pada menu yang sedang aktif
      menuLinkActive.classList.remove("active");
    }

    // 8. terakhir tambahkan class active pada menu yang di klik oleh user
    targetMenu.classList.add("active");
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
