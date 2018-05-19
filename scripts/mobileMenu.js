// handles the mobile menu's icon animations
window.onload = function(){

    var switches = {
        "hamburger": "arrow",
        "arrow": "hamburger",
    };

    $("#menu-trigger-label").on("click", function (argument) {
        var $el = $(this).find(".menu-box").find(".menu-icon"),
        icon = $el.data("icon"),
        newIcon = switches[icon];

        if (newIcon) {
            $el.removeClass(icon).addClass(newIcon).data("icon", newIcon);
        }
    });
}

// move the menu off the page when closed
// I gave up on the pure CSS implementation (idk why it doesn't work)
// TODO: move the whole page when menu is open
$('#menu-trigger').change( function () {
    $('#navWrapper').toggleClass("menuClosed");
    $('#navBar').removeClass("fixed");
});
