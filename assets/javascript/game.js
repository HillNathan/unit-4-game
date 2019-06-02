var theLion = {
    hitPoints: 150,
    attack: 8,
    counterAttack: 5,
};

var theTiger = {
    hitPoints: 125,
    attack: 8,
    counterAttack: 8,
};

var theBear = {
    hitPoints: 150,
    attack: 8,
    counterAttack: 6,
};

var theFox = {
    hitPoints: 125,
    attack: 8,
    counterAttack: 4,
};








$(document).ready(function() {








    $("#lion-card").on("click", function() {
        alert("you clicked the lion");
        console.log("lion's attack is " + theLion.attack)
    });

    $("#fox-card").on("click", function() {
        alert("you clicked the fox");
    });    

    $("#tiger-card").on("click", function() {
        alert("you clicked the tiger");
    });

    $("#bear-card").on("click", function() {
        alert("you clicked the bear");
    });







    
});    