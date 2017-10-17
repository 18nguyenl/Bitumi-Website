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
    var flip = false;
    setInterval(function() {
        setTimeout(function() {
            circle4.animate({
                cx: 191.3,
                cy: 384
            }, 1000, mina.easeinout());
            rect1.animate({
                x1: 191.3,
                y1: 384
            }, 1000, mina.easeinout());
            rect2.animate({
                x1: 409.7,
                y1: 876.7
            }, 1000, mina.easeinout());
            circle3.animate({
                cx: 848.2,
                cy: 600.8
            }, 1000, mina.easeinout());
            rect3.animate({
                x2: 409.7,
                y2: 876.7
            }, 1000, mina.easeinout());
            rect4.animate({
                x2: 848.2,
                y2: 600.8
            }, 1000, mina.easeinout());
        }, 2000);
        circle4.animate({
            // transform: "t656.9 216.8"
            cx: 848.2,
            cy: 600.8
        }, 1000, mina.easeinout());
        rect1.animate({
            x1: 848.2,
            y1: 600.8
        }, 1000, mina.easeinout());
        rect2.animate({
            x1: 848.2,
            y1: 600.8
        }, 1000, mina.easeinout());
        circle3.animate({
            cx: 191.3,
            cy: 384
        }, 1000, mina.easeinout());
        rect3.animate({
            x2: 191.3,
            y2: 384
        }, 1000, mina.easeinout());
        rect4.animate({
            x2: 191.3,
            y2: 384
        }, 1000, mina.easeinout());
        // var cTmp1 = circle3;
        // circle3 = circle4;
        // circle4 = cTmp1;
        // var rTmp1 = rect1;
        // rect1 = rect3;
        // rect3 = rTmp1;
        // var rTmp2 = rect2;
        // rect2 = rect4;
        // rect4 = rTmp2;
    });
});