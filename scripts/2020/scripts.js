/* tab navigations NOT UPDATED FOR 2020 */
// const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const tracksTab = document.getElementById("tracks-tab");
const faqTab = document.getElementById("faq-tab");
const scheduleTab = document.getElementById("schedule-tab");
const sponsorsTab = document.getElementById("sponsors-tab");
const registerButton = document.getElementById("register-button");

// homeTab.onclick = function() {jump("")};
aboutTab.onclick = function() {jump("about")};
tracksTab.onclick = function() {jump("tracks")};
faqTab.onclick = function() {jump("faq")};
scheduleTab.onclick = function() {jump("schedule")};
sponsorsTab.onclick = function() {jump("sponsors")};
registerButton.onclick = function() {jump("register")};

function jump(h) {
  var url = location.href;
  location.href = "#" + h;
  history.replaceState(null,null,url);
}

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
      // i.src = "../img/assets/2020/arrow-down.svg";
      i.style.transform = "rotate(0)"
      i.style.marginTop = "18px";
    });
    // refImg.src = "../img/assets/2020/exit-button.svg";
    // refImg.style.marginTop = "15px";
    refImg.style.transform = "rotate(180deg)"
    ref.style.maxHeight = "200px";
  }
  else {
    // refImg.src = "../img/assets/2020/arrow-down.svg";
    // refImg.style.marginTop = "18px";
    refImg.style.transform = "rotate(0)"
    ref.style.maxHeight = "0";
  }
}

/* scroll reveal */
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});
