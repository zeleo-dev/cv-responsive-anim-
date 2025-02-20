let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("open")) {
    //fermer le menu
    body.classList.remove("open");
  } else {
    //ouvrir le menu
    body.classList.add("open");
  }
});
