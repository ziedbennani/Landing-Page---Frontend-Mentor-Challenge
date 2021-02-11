const overlay = document.getElementById("overlay");
const menuBar = document.querySelector(".menu-bars");

const toggleNav = () => {
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("hide-overlay", "show-overlay");
  } else {
    overlay.classList.replace("show-overlay", "hide-overlay");
  }
};
menuBar.addEventListener("click", toggleNav);
