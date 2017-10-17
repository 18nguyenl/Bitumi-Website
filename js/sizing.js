$(document).ready(function() {
    var sigilSpace = Snap("#container-sigil");
    // Snap.load("./img/vectors/sigil.svg", function(vector) {
    //     sigilSpace.append(vector);
    // });
    var sigilGlow = sigilSpace.filter(Snap.filter.shadow(0, 0, 20, "#13C1C5", 1));
    sigilSpace.attr({
        filter: sigilGlow
    });

    //Transform Syntax = Raphael.js Rotate
    // sigilSpace.transform("r30, 0, 0");
    var rect1 = sigilSpace.select("#r1"),
    rect2 = sigilSpace.select("#r3"),
    rect3 = sigilSpace.select("#r2"),
    rect4 = sigilSpace.select("#r4");


    var circle1 = sigilSpace.select("#c1"), 
    circle2 = sigilSpace.select("#c2"), 
    circle3 = sigilSpace.select("#c3"), 
    circle4 = sigilSpace.select("#c4");

    // rect1.transform("r-50 629.8 114.6");
    rect1.animate({transform: "r-56 629.8 114.6"}, 1000, mina.easeinout());
});