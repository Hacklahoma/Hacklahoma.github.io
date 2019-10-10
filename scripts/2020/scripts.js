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
  if(h == "top") {
    scroll(0,0);
  }
  else {
    var url = location.href;
    location.href = "#" + h;
    history.replaceState(null,null,url);
  }
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
const faqAnswers = document.querySelectorAll(".faq-item-a");
const faqImgs = document.querySelectorAll(".faq-item-img");

function faqClicked(ref) {
  var refChildren = ref.childNodes;
  // getting references from children
  for (var i = 0; i < ref.childNodes.length; i++) {
      if (ref.childNodes[i].className == "faq-item-img") {
        var refImg = ref.childNodes[i];
        continue;
      }
      if (ref.childNodes[i].className == "faq-item-a") {
        var refAns = ref.childNodes[i];
        continue;
      }
  }
  // setting values
  if(refAns.style.maxHeight != "200px") {
    faqAnswers.forEach(i => {
      i.style.maxHeight = "0";
    });
    faqImgs.forEach(i => {
      i.style.transform = "rotate(0)"
      i.style.marginTop = "18px";
    });
    refImg.style.transform = "rotate(180deg)"
    refAns.style.maxHeight = "200px";
  }
  else {
    refImg.style.transform = "rotate(0)"
    refAns.style.maxHeight = "0";
  }
}

// assign to columns
const faqColumns = document.querySelectorAll(".faq-column");
const faqItems = document.querySelectorAll(".faq-item");

faqUpdate();
window.addEventListener("resize", faqUpdate);
function faqUpdate() {
  var columns;
  if(window.innerWidth > 907) {
    columns = 3;
  }
  else if((window.innerWidth >= 600) || (window.innherWidth <= 907)) {
    columns = 2;
  }
  else {
    columns = 1;
  }

  for(var i = 0; i < faqItems.length; i++) {
    faqColumns[i%columns].appendChild(faqItems[i]);
  }
}

/* scroll reveal */
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});
