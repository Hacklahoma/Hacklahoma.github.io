// TODO: separate nav logo size from bottom/offset

NAV_LOGO_BOTTOM = 80;
MAX_SPLASH_SIZE = 400;

splash_logo = null;
nav_logo = null;
nav_logo_img = null;
should_slide = true;

max_logo_offset = 0;

window.onload = function () {
    handle_resize();
    handle_scroll();
}

window.onscroll = function () {
    handle_scroll();
}

window.onresize = function () {
    handle_resize();
    handle_scroll();
}

slide_setup = function () {
    should_slide = true;
    // if js is not available, we fall back to displaying both logos
    // by not hiding the one in the splash page
    splash_logo = document.querySelector(".splash-logo");
    nav_logo = document.querySelector(".navbar-logo-link");
    nav_logo_img = nav_logo.querySelector(".navbar-logo");

    if (window.innerWidth <= 1060) {
        should_slide = false;
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
        nav_logo_img.style.maxWidth = "none";
        nav_logo_img.style.width = "100%";
        nav_logo_img.style.maxHeight = "none";
        nav_logo_img.style.height = "100%";
    } else {
        nav_logo.style.position = "";
        nav_logo.style.left = "";
        nav_logo.style.right = "";
        nav_logo.style.margin = "";
        nav_logo_img.style.maxWidth = "";
        nav_logo_img.style.width = "";
        nav_logo_img.style.maxHeight = "";
        nav_logo_img.style.height = "";
    }
}

handle_resize = function () {
    slide_setup();
    if (should_slide) {
        // difference in distances between the bottoms of the splash and nav logos and the top of the page
        splash_client_rect = splash_logo.getBoundingClientRect();
        logo_offset = splash_client_rect.bottom - NAV_LOGO_BOTTOM;
        max_logo_offset = logo_offset + window.scrollY;

        logo_width = splash_client_rect.width;
        nav_logo.style.width = logo_width + "px";

        logo_height = splash_client_rect.height;        
        nav_logo.style.height = logo_height + "px";

        nav_logo.style.top = (logo_offset - logo_height) + "px";
    } else {
        console.warn("A logo was not found, not applying animation.");
    }
}

handle_scroll = function () {
    if (should_slide) {
        splash_client_rect = splash_logo.getBoundingClientRect();
        logo_offset = splash_client_rect.bottom - NAV_LOGO_BOTTOM;

        nav_logo.style.top = Math.max((logo_offset / max_logo_offset) * NAV_LOGO_BOTTOM, 0) + "px";

        logo_size = Math.max((logo_offset / max_logo_offset) * (MAX_SPLASH_SIZE - NAV_LOGO_BOTTOM) + NAV_LOGO_BOTTOM, NAV_LOGO_BOTTOM) + "px";

        nav_logo.style.width = logo_size;
        nav_logo.style.height = logo_size;
    }
}
