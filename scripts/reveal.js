var revealButton2020 = document.getElementById("reveal-button-2020");
var revealButton2019 = document.getElementById("reveal-button-2019");
var revealButton2018 = document.getElementById("reveal-button-2018");
var item2020 = document.getElementById("2020");
var item2019 = document.getElementById("2019");
var item2018 = document.getElementById("2018");

revealButton2020.onclick = function() {reveal2020()};
revealButton2019.onclick = function() {reveal2019()};
revealButton2018.onclick = function() {reveal2018()};

// reveal 2020
function reveal2020() {
  if(item2020.classList.contains("timeline-opened"))
  {
    // events passed because timeline is OPENED
    item2020.classList.remove("timeline-opened");
    item2020.classList.add("timeline-closed");
    // timeline item is now CLOSED
  }
  else
  {
    // events passed because timeline is CLOSED
    item2020.classList.remove("timeline-closed");
    item2020.classList.add("timeline-opened");
    // timeline item is now OPENED
  }
}

// reveal 2019
function reveal2019() {
  if(item2019.classList.contains("timeline-opened"))
  {
    // events passed because timeline is OPENED
    item2019.classList.remove("timeline-opened");
    item2019.classList.add("timeline-closed");
    // timeline item is now CLOSED
  }
  else
  {
    // events passed because timeline is CLOSED
    item2019.classList.remove("timeline-closed");
    item2019.classList.add("timeline-opened");
    // timeline item is now OPENED
  }
}

// reveal 2018
function reveal2018() {
  if(item2018.classList.contains("timeline-opened"))
  {
    // events passed because timeline is OPENED
    item2018.classList.remove("timeline-opened");
    item2018.classList.add("timeline-closed");
    // timeline item is now CLOSED
  }
  else
  {
    // events passed because timeline is CLOSED
    item2018.classList.remove("timeline-closed");
    item2018.classList.add("timeline-opened");
    // timeline item is now OPENED
  }
}
