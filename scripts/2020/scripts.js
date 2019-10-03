/* tab navigations NOT UPDATED FOR 2020 */
// const homeTab = document.getElementById("home-tab");
// const aboutTab = document.getElementById("about-tab");
// const newestTab = document.getElementById("newest-tab");
// const archiveTab = document.getElementById("archive-tab");
// const contactTab = document.getElementById("contact-tab");
//
// homeTab.onclick = function() {jump("")};
// aboutTab.onclick = function() {jump("about")};
// newestTab.onclick = function() {jump("newest")};
// archiveTab.onclick = function() {jump("archive")};
// contactTab.onclick = function() {jump("contact")};
//
// function jump(h) {
//   var url = location.href;
//   location.href = "#" + h;
//   history.replaceState(null,null,url);
// }

/* manages hamburger menu */
const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".hamburger .line");
const navLinks = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach(i => {
    i.classList.toggle("open");
  });
});

// makes sure the hamburger menu is closed when entering mobile view
addEventListener("resize", () => {
  if(window.innerWidth > 720 && navLinks.classList.contains("open")) {
    navLinks.classList.toggle("open");
    lines.forEach(i => {
      i.classList.toggle("open");
    });
  }
});

/* scroll reveal */
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});
