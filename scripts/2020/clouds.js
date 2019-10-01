var cloudRefs = document.getElementsByClassName("cloud");

var clouds = [];

for(var i = 0; i < cloudRefs.length; i++) {
  var cloud = {
    v: Math.random() * (.25 - .1) + .1, // velocity at which cloud moves
    pos: Math.random() * (window.innerWidth - (-140)) + (-140), // position of cloud from the left
    ref: cloudRefs[i] // the reference
  };
  clouds.push(cloud);
}

function step(timestamp) { // each frame
  for(var i = 0; i < clouds.length; i++) {
    if(clouds[i].pos > window.innerWidth) {
      clouds[i].pos = -140;
    }
    clouds[i].pos += clouds[i].v;
    clouds[i].ref.style.left = "" + clouds[i].pos + "px";
  }
  window.requestAnimationFrame(step); // tick tock
}

window.requestAnimationFrame(step);

handleResize();
function handleResize() {
}


function Point(x,y) {

}
