var theLion = {
    hitPoints: 160,
    attack: 18,
    counterAttack: 21,
};

var theTiger = {
    hitPoints: 170,
    attack: 19,
    counterAttack: 21,
};

var theBear = {
    hitPoints: 160,
    attack: 20,
    counterAttack: 22,
};

var theFox = {
    hitPoints: 165,
    attack: 17,
    counterAttack: 19,
};

var player1 = {
    hitPoints: 0,
    initialAttack: 0,
    attack: 0,
    numwins: 0,
};

var enemy = {
    hitPoints: 0,
    counterAttack: 0,
};

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
    var enemyHP = "";

    lionHP.text(theLion.hitPoints);
    tigerHP.text(theTiger.hitPoints);
    foxHP.text(theFox.hitPoints);
    bearHP.text(theBear.hitPoints);

    $("#lion-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#lion-card").remove();
            $("#user-battle").append($("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/lion.gif' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Lion</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" ));
            player1.hitPoints = theLion.hitPoints;
            player1.initialAttack = theLion.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
        else if (stage == "enemy-pick") {
            stage = "clash";
            $("#lion-card").remove();
            $("#opp-battle").append($("<div>").attr("class", "card m-2 float-right").attr("id", "enemy").html("<img src='assets/images/lion.gif' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Lion</h5><P class='stats mb-0'><span id='enemy-stats'></span> HP</P>" ));
            enemy.hitPoints = theLion.hitPoints;
            enemy.counterAttack = theLion.counterAttack;
            enemyHP = $("#enemy-stats");
            enemyHP.text(enemy.hitPoints);
            $(".clash").toggle();
        }
    });

    $("#fox-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#fox-card").remove();
            $("#user-battle").append($("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/fox.png' class='game-pic' alt='fox'><div class='card-body p-1'><h5>Fox</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" ));
            player1.hitPoints = theFox.hitPoints;
            player1.initialAttack = theFox.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);      
        } 
        else if (stage == "enemy-pick") {
            stage = "clash";
            $("#fox-card").remove();
            $("#opp-battle").append($("<div>").attr("class", "card m-2 float-right").attr("id", "enemy").html("<img src='assets/images/fox.png' class='game-pic' alt='fox'><div class='card-body p-1'><h5>Fox</h5><P class='stats mb-0'><span id='enemy-stats'></span> HP</P>" ));
            enemy.hitPoints = theFox.hitPoints;
            enemy.counterAttack = theFox.counterAttack;
            enemyHP = $("#enemy-stats");
            enemyHP.text(enemy.hitPoints);
            $(".clash").toggle();
        }
    });    

    $("#tiger-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#tiger-card").remove();
            $("#user-battle").append($("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/tiger.png' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Tiger</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" ));
            player1.hitPoints = theTiger.hitPoints;
            player1.initialAttack = theTiger.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
        else if (stage == "enemy-pick") {
            stage = "clash";
            $("#tiger-card").remove();
            $("#opp-battle").append($("<div>").attr("class", "card m-2 float-right").attr("id", "enemy").html("<img src='assets/images/tiger.png' class='game-pic' alt='lion'><div class='card-body p-1'><h5>Tiger</h5><P class='stats mb-0'><span id='enemy-stats'></span> HP</P>" ));
            enemy.hitPoints = theTiger.hitPoints;
            enemy.counterAttack = theTiger.counterAttack;
            enemyHP = $("#enemy-stats");
            enemyHP.text(enemy.hitPoints);
            $(".clash").toggle();
        }
    });

    $("#bear-card").on("click", function() {
        if (stage == "initial") {
            stage = "enemy-pick";
            $("#bear-card").remove();
            $("#user-battle").append($("<div>").attr("class", "card m-2 float-left").attr("id", "player1").html("<img src='assets/images/bear.png' class='game-pic' alt='bear'><div class='card-body p-1'><h5>Bear</h5><P class='stats mb-0'><span id='player1-stats'></span> HP</P>" ));
            player1.hitPoints = theBear.hitPoints;
            player1.initialAttack = theBear.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
        else if (stage == "enemy-pick") {
            stage = "clash";
            $("#bear-card").remove();
            $("#opp-battle").append($("<div>").attr("class", "card m-2 float-right").attr("id", "enemy").html("<img src='assets/images/bear.png' class='game-pic' alt='bear'><div class='card-body p-1'><h5>Bear</h5><P class='stats mb-0'><span id='enemy-stats'></span> HP</P>" ));
            enemy.hitPoints = theBear.hitPoints;
            enemy.counterAttack = theBear.counterAttack;
            enemyHP = $("#enemy-stats");
            enemyHP.text(enemy.hitPoints);
            $(".clash").toggle();
        }
    });


    $("#fight").on("click", function() {
        player1.attack = player1.attack + player1.initialAttack
        enemy.hitPoints = enemy.hitPoints - player1.attack;
        player1.hitPoints = player1.hitPoints - enemy.counterAttack;
        if(player1.hitPoints <1){
            player1.hitPoints = 0;
            $(".clash").toggle();
            $("#loser").toggle();
        } else if(enemy.hitPoints < 1) {
            enemy.hitPoints = 0;
            player1.numwins++
            if (player1.numwins == 3) {
                stage="game-over";
                $(".clash").toggle();
                $("#congrats").toggle();
            } else {
                stage = "enemy-pick";
                $(".clash").toggle();
                $("#enemy").remove();
            }
         }   
        playerHP.text(player1.hitPoints);
        enemyHP.text(enemy.hitPoints);
    });

    $("#congrats").on("click", function() {
        location.reload();
    });

    $("#loser").on("click", function() {
        location.reload();
    });
});    