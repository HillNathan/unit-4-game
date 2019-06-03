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

var player1 = {
    hitPoints: 0,
    attack: 0,
}

var stage = "initial";
// this var might require some explanation: 
// I am using this to control what the click functions do. At different places in the game I want them to do different things. So 
// with this variable I can change it when the user clicks through to a different phase of the game, and that then controls what 
// the click functions do. 

$(document).ready(function() {

    var lionHP = $("#lion-stats");
    var tigerHP = $("#tiger-stats");
    var foxHP = $("#fox-stats");
    var bearHP = $("#bear-stats");
    var playerHP = "";

    lionHP.text(theLion.hitPoints);
    tigerHP.text(theTiger.hitPoints);
    foxHP.text(theFox.hitPoints);
    bearHP.text(theBear.hitPoints);

    $("#lion-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#lion-card").remove();
            $("#user-battle").append("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/lion.gif' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Lion</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" );
            player1.hitPoints = theLion.hitPoints;
            player1.attack = theLion.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
    });

    $("#fox-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#fox-card").remove();
            $("#user-battle").append("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/fox.png' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Fox</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" );
            player1.hitPoints = theFox.hitPoints;
            player1.attack = theFox.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);      
        } 
    });    

    $("#tiger-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#tiger-card").remove();
            $("#user-battle").append("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/tiger.png' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Tiger</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" );
            player1.hitPoints = theTiger.hitPoints;
            player1.attack = theTiger.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
    });

    $("#bear-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#bear-card").remove();
            $("#user-battle").append("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/bear.png' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Bear</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" );
            player1.hitPoints = theBear.hitPoints;
            player1.attack = theBear.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
    });







    
});    