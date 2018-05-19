//
//  This file contains any scripts that will be run on the Hacklahoma website.
//
//  scripts.js
//  HacklahomaWebsite
//

const mobileMaxWidth = 1000; // screens smaller than this will be considered mobile.

// Global variable for the top of the nav bar.
// (Needs to be global to enable changes when the window resizes).
var stickyNavTop = $('#navBar').offset().top;

$(window).load(function() {
    traces();
});

/**
	Fixes the navBar at the top of the screen when the user's screen is
	in the content section, and at the bottom of the header when it isn't.
*/
$(document).ready(function() {
	// Get the position of the top of the navbar.
	stickyNavTop = $('#navBar').offset().top;

	var stickyNav = function() {
		// The number of pixels the window has been scrolled vertically.
		var scrollTop = $(window).scrollTop();

		// If the width of the web page is less than 1000px, ulimately the pattern needs
		// to stop tracing down the page. Doing absolutely nothing stops the navbar from
		// sticking to the top of the page though, so we have to check a few more conditions
		// before we choose to do nothing.
		if (window.innerWidth <= mobileMaxWidth) {
			// If the width of the web page is greater than 750px and the user
			// has scrolled past the top of the navbar, make the navbar stick
			// to the top of the page.
			if(window.innerWidth > 750 && scrollTop > stickyNavTop) {
				$('#navBar').addClass('fixed');

			// If the user hasn't scrolled past the top of the navbar, use the navbar's default positioning.
			} else if(!(scrollTop > stickyNavTop)) {
				$('#navBar').removeClass('fixed');
			} else {
				// do nothing (stops pattern from being traced)
			}

		// If the user has scrolled past the top of the navbar, make the navbar stick to
		// the top of the page.
        } else if (scrollTop > stickyNavTop) {
			$('#navBar').addClass('fixed');

		// If the user hasn't scrolled past the top of the navbar, use the navbar's default positioning.
		} else {
			$('#navBar').removeClass('fixed');
		}
	};

	$(window).on({
		// When the user scrolls, call the stickyNav() function to determine where the navbar should be positioned.
		scroll: function() {
			// Call the stickyNav() function.
			stickyNav();

			// If the width of the window is greater than 1000 px, traces should run down the screen.
            if (window.innerWidth > mobileMaxWidth) {
                tracesScroll(); // in traces.js  Perf is better with one onscroll
            }

        // When the window is resized, we need to clear the traces and regenerate them, and check the position
        // of the navbar to know if we should leave it there, or if we need to redetermine the position of the
        // top of the navbar.
		}, resize: function() {
            // If the navbar is already fixed on the top of the screen, then we just need to leave it there.
            clearTraces();
            traces(); // in traces.js.  rip frames.
			if( $('#navBar').attr('class') == "absolute fixed") {
				// do nothing

			// If it isn't, redetermine the position of the top of the navbar.
			} else {
				stickyNavTop = $('#navBar').offset().top;
			}

			// Clear the traces and regenerate them.
            clearTraces();
            generateTraces(); // in traces.js.  rip frames.
		}
	});
});

/**
	Highlights the link in the navbar of the section currently displayed on the
	user's screen.

	Code from Melvin de Jong.
	https://theme.co/apex/forums/topic/one-page-navigation-navbar-to-highlight-section/#post-718740
*/
$(document).ready(function($) {
	/*
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */

    // Get all links with div IDs that end in "Link" (should be only nav bar links).
    var aChildren = $("a[id$='Link']").toArray();

	// Create the empty aArray.
    var aArray = [];

    // Get the href attributes of those links.
    for(var i = 0; i < aChildren.length; i++) {
    	var aChild = aChildren[i];
    	var ahref = $(aChild).attr('href');
    	aArray.push(ahref);
    }

	// When the user scrolls
    $(window).scroll(function() {
    	// Get the offset of the window from the top of the page.
    	var windowPos = $(window).scrollTop();

    	// Get the height of the window.
    	var windowHeight = $(window).height();

    	// Can we delete this?
    	var docHeight = $(document).height();

		// Loop through all nav bar links.
    	for(var i = 0; i < aArray.length; i++) {
    		// Get the link from the array.
    		var theID = aArray[i];

    		// Get the offset of the div from the top of the page.
    		var divPos = $(theID).offset().top;

    		// Fix for navBar height.
    		divPos = divPos - 50;

    		// Get the height of the div in question.
    		var divHeight = $(theID).height();

    		// Correction for our previous adjustment so that the end of the div is calculated properly.
    		divHeight = divHeight + 50;

    		// $('#test').text("scroll: " + windowPos + " win height: " + windowHeight + " doc height: " + docHeight);

			/*
				If the user has scrolled to the bottom of the screen, highlight and underline the contact link in the nav bar
				and remove the highlight and underline from all the other links.

				Otherwise, remove the highlight and underline from the contact link in the nav bar. Futhermore, if the view port
				is between the top and bottom of the div, highlight and underline its nav bar link. Remove the highlight and underline
				from all the other links whose corresponding divs are not shown on the screen.
			*/
			if((windowPos + windowHeight) == docHeight) {
				$("a[href=" + theID + "]").removeClass("active");
    			$("a[href=" + theID + "]").removeClass("underline");

				$("a[href='#footer']").addClass("active");
				$("a[href='#footer']").addClass("underline");
			} else {
				$("a[href='#footer']").removeClass("active");
				$("a[href='#footer']").removeClass("underline");

    			if(windowPos >= divPos && windowPos < (divPos + divHeight)) {
    				$("a[href=" + theID + "]").addClass("active");
    				$("a[href=" + theID + "]").addClass("underline");
    			} else {
    				$("a[href=" + theID + "]").removeClass("active");
    				$("a[href=" + theID + "]").removeClass("underline");
    			}
			}
    	}
    });
});

/**
	Animates scrolling to each section.

	Code from Valentin Sarychev.
	http://jsfiddle.net/dizel3d/1eamwt4e/
*/

// Handle links starting with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
	// Target element ID
	var id = $(this).attr('href');

	// Target element
	var $id = $(id);
	if($id.length == 0) {
		return;
	}

	// Prevent standard hash navigation (avoid blinking in IE)
	e.preventDefault();

	// Top position relative to the document
	var pos = $id.offset().top;
	
	if(id == '#floorPlans') {
		pos = pos - 50;
	}

	// Animated top scrolling
	$('body, html').animate({scrollTop: pos}, 500);
});

// Changes the boostrap carousel to a grid for mobile devices.
$(document).ready(function() {
	$(window).on("load", function() {
		var width = $(window).width();

		if(width < 750) {
			$("#floorPlans").carousel('pause'); //pause any transition animation
			$("#floorPlans .carousel-item").css("display", "block"); //show hidden slides
			$("#floorPlans .carousel-control-prev").css("display", "none"); //hide left arrows
			$("#floorPlans .carousel-control-next").css("display", "none"); //hide right arrows
			$("#floorPlans .carousel-indicators").css("display", "none"); //hide thumbnails at the bottoms
		}
	});
});
