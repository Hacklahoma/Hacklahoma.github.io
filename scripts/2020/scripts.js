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
const participants2020 = "~350";
const projects2020 = "~100";
const sponsors2020 = "~30";
const participants2019 = "217";
const projects2019 = "52";
const sponsors2019 = "32";
const participants2018 = "208";
const projects2018 = "47";
const sponsors2018 = "18";

const archive = document.getElementById("archive-info");
const year = document.getElementById("year");
const participants = document.getElementById("participants");
const projects = document.getElementById("projects");
const sponsors = document.getElementById("sponsors");
const newestButton = document.getElementById("newest-button");
const newestCard = document.getElementById("newest-card");
const card2019 = document.getElementById("year2019");
const card2018 = document.getElementById("year2018");
const website = document.getElementById("archive-website");
var opened = "";

newestButton.onclick = function() {newest()};
newestCard.onclick = function() {newest()};
card2019.onclick = function() {year2019()};
card2018.onclick = function() {year2018()};

function newest() {
  if(opened == "") {
    year.innerHTML ="2020";
    participants.innerHTML = participants2020;
    projects.innerHTML = projects2020;
    sponsors.innerHTML = sponsors2020;
    website.removeAttribute('target');
    website.removeAttribute('href');
    website.getElementsByClassName("button")[0].style.cursor = "not-allowed";
    // archive.style.height = "300px";
    archive.style.height = "235px";
    archive.style.opacity = "1";
    jump("archive-info-anchor");
  }
  if(opened != "2020" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2020";
      participants.innerHTML = participants2020;
      projects.innerHTML = projects2020;
      sponsors.innerHTML = sponsors2020;
      website.removeAttribute('target');
      website.removeAttribute('href');
      website.getElementsByClassName("button")[0].style.cursor = "not-allowed";
    }, 333);
    setTimeout(function (){
      // archive.style.height = "300px";
      archive.style.height = "235px";
      archive.style.opacity = "1";
    }, 267);
  }
  opened = "2020";
}

function year2019() {
  if(opened == "") {
    year.innerHTML ="2019";
    participants.innerHTML = participants2019;
    projects.innerHTML = projects2019;
    sponsors.innerHTML = sponsors2019;
    website.href = "../" + year.innerHTML;
    website.target = "_blank";
    website.getElementsByClassName("button")[0].style.cursor = "pointer";
    // archive.style.height = "300px";
    archive.style.height = "235px";
    archive.style.opacity = "1";
  }
  if(opened != "2019" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2019";
      participants.innerHTML = participants2019;
      projects.innerHTML = projects2019;
      sponsors.innerHTML = sponsors2019;
      website.href = "../" + year.innerHTML;
      website.target = "_blank";
      website.getElementsByClassName("button")[0].style.cursor = "pointer";
    }, 333);
    setTimeout(function (){
      // archive.style.height = "300px";
      archive.style.height = "235px";
      archive.style.opacity = "1";
    }, 267);
  }
  opened = "2019";
}
function year2018() {
  if(opened == "") {
    year.innerHTML ="2018";
    participants.innerHTML = participants2018;
    projects.innerHTML = projects2018;
    sponsors.innerHTML = sponsors2018;
    website.href = "../" + year.innerHTML;
    website.target = "_blank";
    website.getElementsByClassName("button")[0].style.cursor = "pointer";
    // archive.style.height = "300px";
    archive.style.height = "235px";
    archive.style.opacity = "1";
  }
  if(opened != "2018" && opened != "") {
    archive.style.height = "0";
    archive.style.opacity = "0";
    setTimeout(function (){
      year.innerHTML ="2018";
      participants.innerHTML = participants2018;
      projects.innerHTML = projects2018;
      sponsors.innerHTML = sponsors2018;
      website.href = "../" + year.innerHTML;
      website.target = "_blank";
      website.getElementsByClassName("button")[0].style.cursor = "pointer";
    }, 333);
    setTimeout(function (){
      // archive.style.height = "300px";
      archive.style.height = "235px";
      archive.style.opacity = "1";
    }, 267);
  }
  opened = "2018";
}
