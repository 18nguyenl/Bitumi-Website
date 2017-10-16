$(document).ready(function() {
    var sigilSpace = Snap("#container-sigil");
    Snap.load("./img/vectors/sigil.svg", function(vector) {
        sigilSpace.append(vector);
    });
    var sigilGlow = sigilSpace.filter(Snap.filter.shadow(0, 0, 20, "#13C1C5", 1));
    sigilSpace.attr({
        filter: sigilGlow
    });
});