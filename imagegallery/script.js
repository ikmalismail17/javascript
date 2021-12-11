const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
  //check apakah yg si click adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    thumb.forEach((thumb) => {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
