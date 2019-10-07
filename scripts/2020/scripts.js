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

/* FAQ systems */
const faqItems = document.querySelectorAll(".faq-item-a");
const faqImgs = document.querySelectorAll(".faq-item-img");

function faqClicked(id) {
  var ref = document.getElementById(id);
  var refImg = document.getElementById(id+"image");
  if(ref.style.maxHeight != "200px") {
    faqItems.forEach(i => {
      i.style.maxHeight = "0";
    });
    faqImgs.forEach(i => {
      i.src = "../img/assets/2020/arrow-down.svg";
      i.style.marginTop = "20px";
    });
    refImg.src = "../img/assets/2020/exit-button.svg";
    refImg.style.marginTop = "15px";
    ref.style.maxHeight = "200px";
  }
  else {
    refImg.src = "../img/assets/2020/arrow-down.svg";
    refImg.style.marginTop = "20px";
    ref.style.maxHeight = "0";
  }
}

/* scroll reveal */
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});
