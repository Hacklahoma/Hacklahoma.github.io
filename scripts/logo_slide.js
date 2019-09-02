// TODO: separate nav logo size from bottom/offset

const NAV_LOGO_BOTTOM = 60;
const MAX_SPLASH_SIZE = 400;
const BASE_SPEED_FACTOR = 0.6;
const BEE_BORDER_WIDTH = 200;


class Perlin {
    constructor() {
        // Quick and dirty permutation table
        this.perm = (() => {
        const tmp = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
        return tmp.concat(tmp)
        })();
    }

    grad(i, x) {
        const h = i & 0xf;
        const grad = 1 + (h & 7);
        
        if ((h & 8) !== 0) {
            return -grad * x;
        }
        
        return grad * x;
    }

    getValue(x) {
        const i0 = Math.floor(x);
        const i1 = i0 + 1;
        
        const x0 = x - i0;
        const x1 = x0 - 1;
        
        let t0 = 1 - x0 * x0;
        t0 *= t0;
        
        let t1 = 1 - x1 * x1;
        t1 *= t1;
        
        const n0 = t0 * t0 * this.grad(this.perm[i0 & 0xff], x0);
        const n1 = t1 * t1 * this.grad(this.perm[i1 & 0xff], x1);
        
        return 0.395 * (n0 + n1);
    }
}
 

const debug = false;

var lastScrollY = -1;

var splash_logo = null;
var nav_logo = null;
var parallax_components = null;
var max_parallax_offsets = [];

var nav_logo_img = null;
var should_slide = true;

var max_logo_offset = 0;
var min_scale_factor = 1;

var bee_1;
var bee_1_img;
var bee_1_source = 0;
var bee_1_rot = 0;
var bee_1_x = 0;
var bee_1_y = 0;
const noise_1 = new Perlin();

var bee_2;
var bee_2_img;
var bee_2_source = 0;
var bee_2_rot = 0;
var bee_2_x = 0;
var bee_2_y = 0;
const noise_2 = new Perlin();

x_move_factor = 1;
y_move_factor = 1;

var raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

window.onload = function () {
    bee_1 = document.querySelector("#bee-1");
    bee_1_img = document.querySelector("#bee-1 img");
    bee_2 = document.querySelector("#bee-2");
    bee_2_img = document.querySelector("#bee-2 img");

    bee_1.style.display = "block";
    bee_2.style.display = "block";

    if (debug) {
        document.querySelector("#bee-1-speed-indicator").style.display = "block";
        document.querySelector("#bee-1-stats").style.display = "block";
        document.querySelector("#bee-1-restr").style.display = "block";
        document.querySelector("#bee-2-speed-indicator").style.display = "block";
        document.querySelector("#bee-2-stats").style.display = "block";
        document.querySelector("#bee-2-restr").style.display = "block";
    }

    handle_resize();

    if (raf) {
        handle_scroll();
    }
}

window.onresize = function () {
    handle_resize();
}

function parallax_setup() {
    if (window.innerWidth > 1060) {
        lastScrollY = -1; // make sure scroll position will be "different", triggering handle_scroll
        splash = document.querySelector(".splash");
        splash.style.backgroundColor = "transparent";
        parallax_components = document.querySelectorAll(".parallax");
        for (i = 0; i < parallax_components.length; i++) {
            parallax_components[i].style.display = "block";
            offset_top = (splash.getBoundingClientRect().height - parallax_components[i].getBoundingClientRect().height);
            max_parallax_offsets[i] = offset_top;
            parallax_components[i].style.top = offset_top + "px";
        }
    } else {
        splash = document.querySelector(".splash");
        splash.style.backgroundColor = "#a9d9bc";
        parallax_components = document.querySelectorAll(".parallax");
        for (i = 0; i < parallax_components.length; i++) {
            parallax_components[i].style.display = "none";
            offset_top = (splash.getBoundingClientRect().bottom - parallax_components[i].getBoundingClientRect().height);
            max_parallax_offsets[i] = offset_top;
            parallax_components[i].style.top = offset_top + "px";
        }
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

    parallax_setup();
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
        
            for (i = 0; i < parallax_components.length; i++) {
                offset_top = Math.round((i / parallax_components.length) * window.scrollY) + "px";
                parallax_components[i].style.transform = "translate(0px, -" + offset_top + ")";
            }
        }

        lastScrollY = currentScrollY;
    }

    // update rotation and position for bees
    bee_1_source++;
    bee_1_rot = noise_1.getValue(bee_1_source * 0.001) * 2;
    speed_factor_1 = scale_speed(mod(bee_1_rot, 1), bee_1_x, bee_1_y);
    document.querySelector("#bee-1-speed").style.height = "" + (100 * speed_factor_1 / 0.6) + "%";
    document.querySelector("#bee-1-stats").innerHTML = "x: " + bee_1_x.toFixed(2) + ", y: " + bee_1_y.toFixed(2) + ", rot: " + (mod(bee_1_rot, 1)).toFixed(2);
    bee_1_x += Math.cos(bee_1_rot * Math.PI) * speed_factor_1;
    bee_1_y += Math.sin(bee_1_rot * Math.PI) * speed_factor_1;
    bee_1_img.style.transform = "rotate(" + (bee_1_rot / 2) + "turn)";
    bee_1.style.transform = "translate(" + bee_1_x + "px, " + bee_1_y + "px)";

    bee_2_source++;
    bee_2_rot = noise_2.getValue(bee_2_source * 0.001);
    speed_factor_2 = scale_speed(mod(bee_2_rot, 1), bee_2_x, bee_2_y);
    document.querySelector("#bee-2-speed").style.height = "" + (100 * speed_factor_2 / 0.6) + "%";
    document.querySelector("#bee-2-stats").innerHTML = "x: " + bee_2_x.toFixed(2) + ", y: " + bee_2_y.toFixed(2) + ", rot: " + (mod(bee_2_rot, 1)).toFixed(2);
    bee_2_x += Math.cos(bee_2_rot * Math.PI * 2) * speed_factor_2;
    bee_2_y += Math.sin(bee_2_rot * Math.PI * 2) * speed_factor_2;
    bee_2_img.style.transform = "rotate(" + (bee_2_rot) + "turn)";
    bee_2.style.transform = "translate(" + bee_2_x + "px, " + bee_2_y + "px)";

    raf(handle_scroll);
}

// slows movement of bees approaching the edge of the page
function scale_speed(rot, x, y) {
    x_speed_scale = 1;
    y_speed_scale = 1;

    x_bound_high = document.body.clientWidth - BEE_BORDER_WIDTH

    if (x < BEE_BORDER_WIDTH && rot > 0.25 && rot < 0.75) {
        border_proportion = x / BEE_BORDER_WIDTH;
        x_speed_scale = (Math.abs(0.5 - rot) / 0.25) * (1 - border_proportion) + border_proportion;
    }
    else if (x > x_bound_high && (rot < 0.25 || rot > 0.75)) {
        border_proportion = (document.body.clientWidth - x) / BEE_BORDER_WIDTH
        x_speed_scale = (Math.min(rot, 1 - rot) / 0.25) * (1 - border_proportion) + border_proportion;
    }

    if ((y < BEE_BORDER_WIDTH && (rot > 0.5))) {
        y_speed_scale = (Math.abs(0.25 - mod(rot, 0.5)) / 0.25) * ((BEE_BORDER_WIDTH - y) / BEE_BORDER_WIDTH) + y / BEE_BORDER_WIDTH;
    }
    else if (y > document.body.clientHeight - BEE_BORDER_WIDTH && rot < 0.5) {
        // TODO (lol)
    }
    //return ((x_speed_scale + y_speed_scale) / 2) * BASE_SPEED_FACTOR;
    return Math.min(x_speed_scale, y_speed_scale) * BASE_SPEED_FACTOR;
}

// always positive (as it should be!)
function mod(n, m) {
    return ((n % m) + m) % m;
}
  