/* tab navigations */
const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const newestTab = document.getElementById("newest-tab");
const archiveTab = document.getElementById("archive-tab");
const contactTab = document.getElementById("contact-tab");

homeTab.onclick = function() {jump("")};
aboutTab.onclick = function() {jump("about")};
newestTab.onclick = function() {jump("newest")};
archiveTab.onclick = function() {jump("archive")};
contactTab.onclick = function() {jump("contact")};

function jump(h) {
  var url = location.href;
  location.href = "#" + h;
  history.replaceState(null,null,url);
}
/* reveals background of nav bar on scroll */
update();
window.onscroll = function() {
  update();
}
addEventListener("resize", update);


function update() {
  var currentScrollPos = window.pageYOffset;
  if (30 > currentScrollPos) {
    document.getElementById("nav-background").style.top = "-55px";
  } else {
      document.getElementById("nav-background").style.top = "0px";
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


/* archive functions */
const archive = document.getElementById("archive-info");
const year = document.getElementById("year");
const participants = document.getElementById("participants");
const projects = document.getElementById("projects");
const sponsors = document.getElementById("sponsors");
const newestButton = document.getElementById("newest-button");
const newestCard = document.getElementById("newest-card");
const card2019 = document.getElementById("year2019");
const card2018 = document.getElementById("year2018");
var opened = "";

newestButton.onclick = function() {newest()};
newestCard.onclick = function() {newest()};
card2019.onclick = function() {year2019()};
card2018.onclick = function() {year2018()};

function newest() {
  if(opened == "") {
    year.innerHTML ="2020";
    participants.innerHTML ="N/A";
    projects.innerHTML ="N/A";
    sponsors.innerHTML ="N/A";
    archive.style.height = "300px";
    archive.style.opacity = "1";
  }
  if(opened != "2020" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2020";
      participants.innerHTML ="N/A";
      projects.innerHTML ="N/A";
      sponsors.innerHTML ="N/A";
    }, 333);
    setTimeout(function (){
      archive.style.height = "300px";
      archive.style.opacity = "1";
    }, 267);
  }
  jump("archive-info-anchor");
  opened = "2020";
}

function year2019() {
  if(opened == "") {
    year.innerHTML ="2019";
    participants.innerHTML ="N/A";
    projects.innerHTML ="N/A";
    sponsors.innerHTML ="N/A";
    archive.style.height = "300px";
    archive.style.opacity = "1";
  }
  if(opened != "2019" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2019";
      participants.innerHTML ="N/A";
      projects.innerHTML ="N/A";
      sponsors.innerHTML ="N/A";
    }, 333);
    setTimeout(function (){
      archive.style.height = "300px";
      archive.style.opacity = "1";
    }, 267);
  }
  opened = "2019";
}
function year2018() {
  if(opened == "") {
    year.innerHTML ="2018";
    participants.innerHTML ="N/A";
    projects.innerHTML ="N/A";
    sponsors.innerHTML ="N/A";
    archive.style.height = "300px";
    archive.style.opacity = "1";
  }
  if(opened != "2018" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2018";
      participants.innerHTML ="N/A";
      projects.innerHTML ="N/A";
      sponsors.innerHTML ="N/A";
    }, 333);
    setTimeout(function (){
      archive.style.height = "300px";
      archive.style.opacity = "1";
    }, 267);
  }
  opened = "2018";
}
