// reveals background of nav bar on scroll
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


// manages hamburger menu
var open = false;
var menu = document.getElementsByClassName("hamburger-menu-item");
var navbar = document.getElementById("navbar");
addEventListener("resize", handleResize);

function handleResize() {
  if(window.innerWidth > 720)
    if(open = true)
      hamburger()
}

function hamburger() {
  if(open) { // if currently opened
    menu[0].classList.remove("hamburger-open-top");
    menu[1].classList.remove("hamburger-open-center");
    menu[2].classList.remove("hamburger-open-bottom");
    navbar.classList.add("hamburger-navbar-close");
    open = false;
  }
  else { // if currently closed
    menu[0].classList.add("hamburger-open-top");
    menu[1].classList.add("hamburger-open-center");
    menu[2].classList.add("hamburger-open-bottom");
    navbar.classList.remove("hamburger-navbar-close");
    open = true;
  }

}
