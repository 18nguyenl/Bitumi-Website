$(document).ready(function() {
    const mainWidth = screen.width;
    const mainHeight = screen.height;
    var sigilImage = $("#container-sigil");
    $(window).resize(function() {
        var currentWidth = $(window).width();
        var currentHeight = $(window).height();
        sigilImage.css("transform", "scale(" + currentWidth/mainWidth +"," + currentHeight/mainHeight + ")");
        jQuery.effects.scaledDimensions(sigilImage,
        currentWidth/mainWidth * 100, 
        direction);
    });
});




