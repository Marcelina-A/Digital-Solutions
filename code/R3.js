const close = document.querySelectorAll(".close")[0];
const open = document.querySelectorAll(".open")[0];
const modal = document.querySelectorAll(".modal")[0];
const modalC = document.querySelectorAll(".modal-container")[0];

open.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});
close.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.visibility = "hidden";
  }, 1000);
});
