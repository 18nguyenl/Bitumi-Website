var sigilAnimTime = 5000;
$(document).ready(function() {
    var sigilSpace = Snap("#container-sigil");
    // Snap.load("./img/vectors/sigil.svg", function(vector) {
    //     sigilSpace.append(vector);
    // });
    var sigilGlow = sigilSpace.filter(Snap.filter.shadow(0, 0, 20, "#13C1C5", 1));
    sigilSpace.attr({
        filter: sigilGlow
    });
    var rect1 = sigilSpace.select("#r1"),
    rect2 = sigilSpace.select("#r3"),
    rect3 = sigilSpace.select("#r2"),
    rect4 = sigilSpace.select("#r4");

    var circle1 = sigilSpace.select("#c1"), 
    circle2 = sigilSpace.select("#c2"), 
    circle3 = sigilSpace.select("#c3"), 
    circle4 = sigilSpace.select("#c4");
    
    var flip = false;
    animateMainSigil()
    setInterval(animateMainSigil, sigilAnimTime);
    function animateMainSigil() {
        if (!flip) {
            circle4.animate({
                // transform: "t656.9 216.8"
                cx: 848.2,
                cy: 600.8
            }, sigilAnimTime, mina.easeinout);
            circle4.animate({r: 150}, sigilAnimTime / 2, mina.easeinout, function() {
                circle4.animate({r: 108.2}, sigilAnimTime / 2, mina.easeinout);
            });
            rect1.animate({
                x1: 848.2,
                y1: 600.8
            }, sigilAnimTime, mina.easeinout);
            rect1.animate({"stroke-width": 130}, sigilAnimTime / 2, mina.easeinout, function() {
                rect1.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            rect2.animate({
                x1: 848.2,
                y1: 600.8
            }, sigilAnimTime, mina.easeinout);
            rect2.animate({"stroke-width": 130}, sigilAnimTime / 2, mina.easeinout, function() {
                rect2.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            circle3.animate({
                cx: 191.3,
                cy: 384
            }, sigilAnimTime, mina.easeinout);
            circle3.animate({r:80}, sigilAnimTime / 2, mina.easeinout, function() {
                circle3.animate({r:108.2}, sigilAnimTime / 2, mina.easeinout);
            });
            rect3.animate({
                x2: 191.3,
                y2: 384
            }, sigilAnimTime, mina.easeinout);
            rect3.animate({"stroke-width": 70}, sigilAnimTime / 2, mina.easeinout, function() {
                rect3.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            rect4.animate({
                x2: 191.3,
                y2: 384
            }, sigilAnimTime, mina.easeinout);
            rect4.animate({"stroke-width": 70}, sigilAnimTime / 2, mina.easeinout, function() {
                rect4.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            flip = true;
        } else if (flip) {
            circle4.animate({
                cx: 191.3,
                cy: 384
            }, sigilAnimTime, mina.easeinout);
            circle4.animate({r:80}, sigilAnimTime / 2, mina.easeinout, function() {
                circle4.animate({r:108.2}, sigilAnimTime / 2, mina.easeinout);
            });
            rect1.animate({
                x1: 191.3,
                y1: 384
            }, sigilAnimTime, mina.easeinout);
            rect1.animate({"stroke-width": 70}, sigilAnimTime / 2, mina.easeinout, function() {
                rect1.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            rect2.animate({
                x1: 191.3,
                y1: 384
            }, sigilAnimTime, mina.easeinout);
            rect2.animate({"stroke-width": 70}, sigilAnimTime / 2, mina.easeinout, function() {
                rect2.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            circle3.animate({
                cx: 848.2,
                cy: 600.8
            }, sigilAnimTime, mina.easeinout);
            circle3.animate({r: 150}, sigilAnimTime / 2, mina.easeinout, function() {
                circle3.animate({r: 108.2}, sigilAnimTime / 2, mina.easeinout);
            });
            rect3.animate({
                x2: 848.7,
                y2: 600.8
            }, sigilAnimTime, mina.easeinout);
            rect3.animate({"stroke-width": 130}, sigilAnimTime / 2, mina.easeinout, function() {
                rect3.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            rect4.animate({
                x2: 848.2,
                y2: 600.8
            }, sigilAnimTime, (mina.easeinout));
            rect4.animate({"stroke-width": 130}, sigilAnimTime / 2, mina.easeinout, function() {
                rect4.animate({"stroke-width": 100}, sigilAnimTime / 2, mina.easeinout);
            });
            flip = false;
        }
    }
});

