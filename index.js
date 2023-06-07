var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// // Header Scroll
// let div = document.querySelector("sidebar-wrapper");
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 29) {
//     div.classList.add("sidebar-wrapper");
//   } else {
//     div.classList.remove("sidebar-wrapper");
//   }
// };
