

$(document).ready(function() {
    var theLion = {
        hitPoints: 161,
        attack: 18,
        counterAttack: 21,
        myImage: "assets/images/lion.gif",
        imageClass: "game-pic",
        myDiv: $("#lion-card"),
    };
    
    var theTiger = {
        hitPoints: 163,
        attack: 19,
        counterAttack: 20,
        myImage: "assets/images/tiger.png",
        imageClass: "game-pic",
        myDiv: $("#tiger-card"),
    };
    
    var theBear = {
        hitPoints: 159,
        attack: 20,
        counterAttack: 22,
        myImage: "assets/images/bear.png",
        imageClass: "game-pic",
        myDiv: $("#bear-card"),
    };
    
    var theFox = {
        hitPoints: 167,
        attack: 17,
        counterAttack: 19,
        myImage: "assets/images/fox.png",
        imageClass: "game-pic",
        myDiv: $("#fox-card"),
    };
    
    var player1 = {
        hitPoints: 0,
        initialAttack: 0,
        attack: 0,
        numwins: 0,
        gameWins: 0,
        gameLosses: 0,
        displayWins: $(".game-wins"),
        displayLosses: $(".game-losses")
    };
    
    var enemy = {
        hitPoints: 0,
        counterAttack: 0,
    };
    // Declaring some global variables fot displaying information and buttons
    var instructions = $("#instructions");
    var lionHP = $("#lion-stats");
    var tigerHP = $("#tiger-stats");
    var foxHP = $("#fox-stats");
    var bearHP = $("#bear-stats");
    var fightButton = $(".clash");
    var winMsg = $("#congrats");
    var loseMsg = $("#loser");
    var oppDiv = $("#opp-battle");
    var playerDiv = $("#user-battle");
    var powImg = $("#pow");
    // here are variables to show the hit points of the two characters that are fighting right now
    var playerHP = "";
    var enemyHP = "";

    var instructions = $("#instructions");
    var lionHP = $("#lion-stats");
    var tigerHP = $("#tiger-stats");
    var foxHP = $("#fox-stats");
    var bearHP = $("#bear-stats");
    // here are variables to show the hit points of the two characters that are fighting right now
    var playerHP = "";
    var enemyHP = "";
    
    
    var stage = "initial";
    // this var might require some explanation: 
    // I am using this to control what the click functions do. At different places in the game I want them to do different things. So 
    // with this variable I can change it when the user clicks through to a different phase of the game, and that then controls what 
    // the click functions do. 
    
    function restartGame() {
        stage = "initial";
        fightButton.hide();
        winMsg.hide();
        loseMsg.hide();
        instructions.show();
        oppDiv.empty();
        playerDiv.empty();
        theLion.myDiv.show();
        theFox.myDiv.show();
        theBear.myDiv.show();
        theTiger.myDiv.show();

        lionHP.text(theLion.hitPoints);
        tigerHP.text(theTiger.hitPoints);
        foxHP.text(theFox.hitPoints);
        bearHP.text(theBear.hitPoints);
        playerHP = "";
        enemyHP = "";
        player1.attack = 0;
        player1.hitPoints = 0;
        player1.numwins = 0;
        player1.initialAttack = 0;

        instructions.text("Please start by selecting your character:");
        console.log(stage);
    }
    
    // Set up some variables to be able to update the hit points as they go down

    console.log(theLion.myDiv)
    // load the initial hit points into the HTML
    lionHP.text(theLion.hitPoints);
    tigerHP.text(theTiger.hitPoints);
    foxHP.text(theFox.hitPoints);
    bearHP.text(theBear.hitPoints);
    player1.displayWins.text("0");
    player1.displayLosses.text("0");

    // Click Listener for the Lion DIV
    theLion.myDiv.click(function() {        
        cardClick(theLion);
    });

    // Click Listener for the Fox DIV    
    theFox.myDiv.click(function() {
        cardClick(theFox);
    });    

    // Click Listener for the Tiger DIV
    theTiger.myDiv.click(function() {
        cardClick(theTiger);
    });

    // Click Listener for the Bear DIV
    theBear.myDiv.click(function() {
        cardClick(theBear)
    });

    // Click event listener for the "fight" button
    fightButton.click(function() {
        //play the fight animation
        fightAnimations()
        // Player does damage to the enemy

            player1.attack = player1.attack + player1.initialAttack
            // Enemy does damage to the player
            enemy.hitPoints = enemy.hitPoints - player1.attack;
            // Increase the player's attack by the base attack
            player1.hitPoints = player1.hitPoints - enemy.counterAttack;

    animationsTest(function () { // <-- this will run once all the above animations are finished
            // Check to see if the player is dead
            if(player1.hitPoints <1){
                player1.hitPoints = 0;
                if(enemy.hitPoints < 1) {
                    enemy.hitPoints = 0; }
                // Hide the instructions section and fight button
                player1.gameLosses++;
                player1.displayLosses.text(player1.gameLosses);
                instructions.toggle();
                fightButton.toggle();
                // show the button for the lose condition
                loseMsg.toggle();
            // If the player is NOT dead, check to see if the enemy is dead. 
            } else if(enemy.hitPoints < 1) {
                // if the enemy s dead, mark a win 
                enemy.hitPoints = 0;
                player1.numwins++
                // check to see if we have defeated all of the enemies
                if (player1.numwins == 3) {
                    // if we have won, close out the listening events and display button for the win-condition 
                    player1.gameWins++;
                    player1.displayWins.text(player1.gameWins);
                    stage="game-over";
                    fightButton.toggle();
                    instructions.toggle();
                    winMsg.toggle();
                } else {
                    // if we have not defeated all of the enemies, go back to the selection stage to pick the next
                    // enemy to fight
                    stage = "enemy-pick";
                    instructions.text("Now select your opponent by clicking on an animal.");
                    fightButton.toggle();
                    $("#enemy").remove();
                }
            }   
            // If there is no winner or loser, update the hit Points for the player and the enemy and stay in the 
            // fight phase so that the fight button can be clicked again.
            playerHP.text(player1.hitPoints);
            enemyHP.text(enemy.hitPoints);
    });

    }); 
    // restarts the game by reloading the page. This should probably be done a different way, but I will leave this 
    // here for now until I can get that to work. 
    $(".restart").click(function() {
        restartGame();
        // location.reload();
    });

    function fightAnimations(){
        playerDiv.animate({left: '40%'},
            {easing: "swing",
            speed: 'fast',})
        oppDiv.animate({right: '40%'},
            {easing: "swing",
            speed: 'fast'})
        animationsTest(function(){
            powImg.css({opacity: '1'});
            powImg.animate({opacity: '0'});
            playerDiv.animate({left: '0%'},
                {easing: "swing",
                speed: 'fast'})
            oppDiv.animate({right: '0%'},
                {easing: "swing",
                speed: 'fast'})
        });
    };

    function animationsTest (callback) {
        // Test if ANY/ALL page animations are currently active
    
        var testAnimationInterval = setInterval(function () {
            if (! $.timers.length) { // any page animations finished
                clearInterval(testAnimationInterval);
                callback();
            }
        }, 25);
    };

    function cardClick(theAnimal){
        //checks if this is being selected for the player or as an enemy
        if (stage == "initial") {
            // if we are in the player selection, move to enemy seletion phase and move the selected animal to the
            // Player area and set the stats for the "Player" object. 
            stage = "enemy-pick";
            instructions.text("Now select your opponent by clicking on an animal.");
            theAnimal.myDiv.toggle();
            playerDiv.append(drawCard(theAnimal, "player1"));
            player1.hitPoints = theAnimal.hitPoints;
            player1.initialAttack = theAnimal.attack;
            playerHP = $("#player1-stats");
            playerHP.text(player1.hitPoints);
        }
        else if (stage == "enemy-pick") {
            // if we are in the enemy selection, move to the fighting phase of the game and move the selected anumal
            // to the enemy area and set the stats for the Enemy object. 
            stage = "clash";
            instructions.text("Click the red 'FIGHT' button until you or your opponent's Hit Points are reduced to 0");
            theAnimal.myDiv.toggle();
            oppDiv.append(drawCard(theAnimal, "enemy"));
            enemy.hitPoints = theAnimal.hitPoints;
            enemy.counterAttack = theAnimal.counterAttack;
            enemyHP = $("#enemy-stats");
            enemyHP.text(enemy.hitPoints);
            fightButton.toggle();
        }
    };

    function drawCard(theObj, theChoice) {
        var newDiv = $("<div>");
        if (theChoice == "player1") {
            var myFloat = "float-left";
            var myID = "player1";
            var myID2 = "player1-stats";
        }
        else {
            var myFloat = "float-right";
            var myID = "enemy";
            var myID2 = "enemy-stats";
        } 

        newDiv.addClass("card m-2 " + myFloat);
        newDiv.attr("id", myID);
        newDiv.append($("<img>").attr("src", theObj.myImage).addClass("game-pic"));
        newDiv.append($("<div>").addClass("card-body p-1").html("<h5>Fox</h5><P class='stats mb-0'><span id='" + myID2 + "'></span> HP</P>"));
        return newDiv;
    }

});    