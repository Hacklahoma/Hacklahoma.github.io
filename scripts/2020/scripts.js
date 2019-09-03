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
    if(window.innerWidth < 720)
      document.getElementById("nav-background").style.top = "-10px";
    else
      document.getElementById("nav-background").style.top = "0px";
  }
}
