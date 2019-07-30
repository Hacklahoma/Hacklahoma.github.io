// this applies a class (underline) to all 'a' with the same href when any
// element with that href is hovered
// give your 'a' class: noUnderline
// give things you don't want underlined this class
neverUnderline = "neverUnderline";
active = "active";
// you can hardcode the CSS here if you want instead of replacing the classes.

$(function() {
    // vvv selects the elements to be affected
    $('a, iframe').hover(function() {
        var href = $(this).attr('href');
        $('a[href="' + href + '"][class!="' + neverUnderline + '"]').addClass("underline").removeClass("noUnderline");
    }, function() {
        // on mouseout, change the class back
        $('a[class!="' + neverUnderline + '"]:not([class*="' + active + '"])').removeClass("underline");
    });
});
