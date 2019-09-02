// TODO: separate nav logo size from bottom/offset

const NAV_LOGO_BOTTOM = 60;
const MAX_SPLASH_SIZE = 400;

const debug = false;

var lastScrollY = -1;

var splash_logo = null;
var nav_logo = null;

var nav_logo_img = null;
var should_slide = true;

var max_logo_offset = 0;
var min_scale_factor = 1;

x_move_factor = 1;
y_move_factor = 1;

var raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

window.onload = function () {
    handle_resize();

    if (raf) {
        handle_scroll();
    }
}

window.onresize = function () {
    if(window.innerHeight >= 1060) {
        handle_resize();
    }
}

function slide_setup() {
    should_slide = true;
    // if js is not available, we fall back to displaying both logos
    // by not hiding the one in the splash page
    splash_logo = document.querySelector(".splash-logo");
    nav_logo = document.querySelector(".navbar-logo-link");
    nav_logo_img = nav_logo.querySelector(".navbar-logo");

    if (window.innerWidth <= 1060) {
        should_slide = false;
        splash_logo.style.visibility = "visible";
        nav_logo.style.visibility = "hidden";
    } else {
        if (splash_logo == null) {
            should_slide = false;
            splash_logo.style.visibility = "visible";
            console.warn("Splash logo not found.");
        } else {
            splash_logo.style.visibility = "hidden";
        }
        if (nav_logo == null || nav_logo_img == null) {
            should_slide = false;
            console.warn("Navbar logo or img not found.");
        }
    }

    if (should_slide) {
        nav_logo.style.position = "fixed";
        nav_logo.style.left = "0";
        nav_logo.style.right = "0";
        nav_logo.style.margin = "auto";
        nav_logo.style.width = "100%";
        nav_logo.style.max_height = "";
        nav_logo_img.style.maxWidth = "none";
        nav_logo_img.style.width = "100%";
        nav_logo_img.style.maxHeight = "none";
        nav_logo_img.style.height = "100%";
    } else {
        nav_logo.style.position = "relative";
        nav_logo.style.left = "";
        nav_logo.style.right = "";
        nav_logo.style.margin = "";
        nav_logo.style.width = "auto";
        nav_logo.style.height = "auto";
        nav_logo.style.maxHeight = "80px";
        nav_logo_img.style.maxWidth = "";
        nav_logo_img.style.width = "";
        nav_logo_img.style.maxHeight = "";
        nav_logo_img.style.height = "";
    }
}

function handle_resize() {
    bee_1_x = Math.random() * document.body.clientWidth;
    bee_2_x = Math.random() * document.body.clientWidth;
    bee_1_y = Math.random() * window.innerHeight;
    bee_2_y = Math.random() * window.innerHeight;

    // TODO: this is a hack, fix the underlying problem with the code that determines
    // the base parallax positions
    window.scrollTo(0, 0)

    slide_setup();
    if (should_slide) {
        // difference in distances between the bottoms of the splash and nav logos and the top of the page
        splash_client_rect = splash_logo.getBoundingClientRect();
        logo_offset = splash_client_rect.bottom - NAV_LOGO_BOTTOM;
        max_logo_offset = logo_offset + window.scrollY;
        min_scale_factor = NAV_LOGO_BOTTOM / splash_client_rect.width;

        logo_width = splash_client_rect.width;
        nav_logo.style.width = logo_width + "px";

        logo_height = splash_client_rect.height;        
        nav_logo.style.height = logo_height + "px";
    } else {
        console.warn("A logo was not found, not applying animation.");
    }
}

function handle_scroll() {
    var currentScrollY = window.scrollY;
    if (lastScrollY !== currentScrollY) {
        if (should_slide) {
            splash_client_rect = splash_logo.getBoundingClientRect();
            logo_offset = splash_client_rect.bottom - NAV_LOGO_BOTTOM;

            nav_logo.style.transform = "scale(" + Math.max(min_scale_factor, (logo_offset / max_logo_offset)) + ") translate(0px, " + Math.round(Math.max((logo_offset / max_logo_offset) * NAV_LOGO_BOTTOM, 0)) + "px)";
        }

        lastScrollY = currentScrollY;
    }

    raf(handle_scroll);
}

// always positive (as it should be!)
function mod(n, m) {
    return ((n % m) + m) % m;
}
