$(document).ready(function() {
    var sigilSpace = Snap("#container-sigil");
    Snap.load("./img/vectors/sigil.svg", function(vector) {
        sigilSpace.append(vector);
    });
    var sigilGlow = sigilSpace.filter(Snap.filter.shadow(0, 0, 20, "#13C1C5", 1));
    sigilSpace.attr({
        filter: sigilGlow
    });

    //Transform Syntax = Raphael.js Rotate
    // sigilSpace.transform("r30, 0, 0");
    sigilSpace.select("#Layer_2:nth-child(1)");
});