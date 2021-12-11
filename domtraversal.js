//Cara biasa

// const close = document.querySelector(".close");
// const container = document.querySelector(".container");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   container.removeChild(card);
// });

//DOM Traversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const card = document.querySelectorAll(".card");
// card.forEach((cards) => {
//   cards.addEventListener("click", (e) => {
//     alert("OK");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if ((e.target.className = "close")) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
