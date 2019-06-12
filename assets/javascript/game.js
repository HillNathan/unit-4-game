$(document).ready(function() {
    function makeAnimal (name, hitPoints, attack, counterAttack, imageName, myDiv) {
        return {
            name,
            hitPoints,
            attack,
            counterAttack,
            myImage: "assets/images/" + imageName,
            myDiv: $(myDiv)
        }
    }

    var theLion = makeAnimal("Lion", 161, 18, 21, "lion.gif", "#lion-card");
    var theTiger = makeAnimal("Tiger", 163, 19, 20, "tiger.png","#tiger-card");
    var theBear = makeAnimal("Bear", 159, 20, 22, "bear.png", "#bear-card");
    var theFox = makeAnimal("Fox", 167, 17, 19, "fox.png", "#fox-card");
    
    var gameObj = {
        enemyCA: 0,         // enemy counterattack
        enemyHP: 0,         // enemy hitpoints
        playerHP: 0,        // player hitpoins
        playerInitial: 0,   // player initial attack
        attack: 0,          // attack including any increases from previous fights
        numwins: 0,
        gameWins: 0,
        gameWins: 0,
        gameLosses: 0,
        stage: "initial",
        // this var might require some explanation: 
        // I am using this to control what the click functions do. At different places in the game I want them to do different things. So 
        // with this variable I can change it when the user clicks through to a different phase of the game, and that then controls what 
        // the click functions do. 
        displayWins: $(".game-wins"),
        displayLosses: $(".game-losses"),
        playerHPdiv: "",
        enemyHPdiv: "",
        instructions: $("#instructions"),
        lionHP: $("#lion-stats"),
        tigerHP: $("#tiger-stats"),
        foxHP: $("#fox-stats"),
        bearHP: $("#bear-stats"),
        fightButton: $(".clash"),
        winMsg: $("#congrats"),
        loseMsg: $("#loser"),
        oppDiv: $("#opp-battle"),
        playerDiv: $("#user-battle"),
        powImg: $("#pow"),

        restartGame: function() {
            this.stage = "initial";
            this.fightButton.hide();
            this.winMsg.hide();
            this.loseMsg.hide();
            this.instructions.show();
            this.oppDiv.empty();
            this.playerDiv.empty();
            this.lionHP.text(theLion.hitPoints);
            this.tigerHP.text(theTiger.hitPoints);
            this.foxHP.text(theFox.hitPoints);
            this.bearHP.text(theBear.hitPoints);
            this.playerHPdiv = "";
            this.enemyHPdiv = "";
            this.attack = 0;
            this.playerHP = 0;
            this.numwins = 0;
            this.playerInitial = 0;
            this.instructions.text("Please start by selecting your character:");
            //
            theLion.myDiv.show();
            theFox.myDiv.show();
            theBear.myDiv.show();
            theTiger.myDiv.show();

        }
    };
    // Set up some variables to be able to update the hit points as they go down

    // load the initial hit points into the HTML
    gameObj.lionHP.text(theLion.hitPoints);
    gameObj.tigerHP.text(theTiger.hitPoints);
    gameObj.foxHP.text(theFox.hitPoints);
    gameObj.bearHP.text(theBear.hitPoints);
    gameObj.displayWins.text("0");
    gameObj.displayLosses.text("0");

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
    gameObj.fightButton.click(function() {
        //play the fight animation
        fightAnimations()
        // Player does damage to the enemy

            gameObj.attack = gameObj.attack + gameObj.playerInitial;
            // Enemy does damage to the player
            gameObj.enemyHP = gameObj.enemyHP - gameObj.attack;
            // Increase the player's attack by the base attack
            gameObj.playerHP = gameObj.playerHP - enemyCA;

    animationsTest(function () { // <-- this will run once all the above animations are finished
            // Check to see if the player is dead
            if(gameObj.playerHP <1){
                gameObj.playerHP = 0;
                if(gameObj.enemyHP < 1) {
                    gameObj.enemyHP = 0; }
                // Hide the instructions section and fight button
                gameObj.gameLosses++;
                gameObj.displayLosses.text(gameObj.gameLosses);
                gameObj.instructions.toggle();
                gameObj.fightButton.toggle();
                // show the button for the lose condition
                gameObj.loseMsg.toggle();
            // If the player is NOT dead, check to see if the enemy is dead. 
            } else if(gameObj.enemyHP < 1) {
                // if the enemy s dead, mark a win 
                gameObj.enemyHP = 0;
                gameObj.numwins++
                // check to see if we have defeated all of the enemies
                if (gameObj.numwins == 3) {
                    // if we have won, close out the listening events and display button for the win-condition 
                    gameObj.gameWins++;
                    gameObj.displayWins.text(gameObj.gameWins);
                    gameObj.stage="game-over";
                    gameObj.fightButton.toggle();
                    gameObj.instructions.toggle();
                    gameObj.winMsg.toggle();
                } else {
                    // if we have not defeated all of the enemies, go back to the selection stage to pick the next
                    // enemy to fight
                    gameObj.stage = "enemy-pick";
                    gameObj.instructions.text("Now select your opponent by clicking on an animal.");
                    gameObj.fightButton.toggle();
                    $("#enemy").remove();
                }
            }   
            // If there is no winner or loser, update the hit Points for the player and the enemy and stay in the 
            // fight phase so that the fight button can be clicked again.
            gameObj.playerHPdiv.text(gameObj.playerHP);
            gameObj.enemyHPdiv.text(gameObj.enemyHP);
    });

    }); 

    // Runs the restart function, bringing everything back to square 1
    $(".restart").click(function() {
        gameObj.restartGame();
    });

    function fightAnimations(){
    // Just some fun animations to make it look like the animals are actually fighting
        gameObj.playerDiv.animate({left: '40%'},
            {easing: "swing",
            speed: 'fast',})
        gameObj.oppDiv.animate({right: '40%'},
            {easing: "swing",
            speed: 'fast'})
        animationsTest(function(){
            gameObj.powImg.css({opacity: '1'});
            gameObj.powImg.animate({opacity: '0'});
            gameObj.playerDiv.animate({left: '0%'},
                {easing: "swing",
                speed: 'fast'})
            gameObj.oppDiv.animate({right: '0%'},
                {easing: "swing",
                speed: 'fast'})
        });
    };

    function animationsTest (callback) {
        // Test if ANY/ALL page animations are currently active, and wait until they are done running
        // before beginning any of he animations that are included in it.
        var testAnimationInterval = setInterval(function () {
            if (! $.timers.length) { // any page animations finished
                clearInterval(testAnimationInterval);
                callback();
            }
        }, 25);
    };

    //Generic function for the card event listener
    function cardClick(theAnimal){
        //checks if this is being selected for the player or as an enemy
        if (gameObj.stage == "initial") {
            // if we are in the player selection, move to enemy seletion phase and move the selected animal to the
            // Player area and set the stats for the "Player" object. 
            gameObj.stage = "enemy-pick";
            gameObj.instructions.text("Now select your opponent by clicking on an animal.");
            theAnimal.myDiv.toggle();
            gameObj.playerDiv.append(drawCard(theAnimal, "player1"));
            gameObj.playerHP = theAnimal.hitPoints;
            gameObj.playerInitial = theAnimal.attack;
            gameObj.playerHPdiv = $("#player1-stats");
            gameObj.playerHPdiv.text(gameObj.playerHP);
        }
        else if (gameObj.stage == "enemy-pick") {
            // if we are in the enemy selection, move to the fighting phase of the game and move the selected anumal
            // to the enemy area and set the stats for the Enemy object. 
            gameObj.stage = "clash";
            gameObj.instructions.text("Click the red 'FIGHT' button until you or your opponent's Hit Points are reduced to 0");
            theAnimal.myDiv.toggle();
            gameObj.oppDiv.append(drawCard(theAnimal, "enemy"));
            gameObj.enemyHP = theAnimal.hitPoints;
            enemyCA = theAnimal.counterAttack;
            gameObj.enemyHPdiv = $("#enemy-stats");
            gameObj.enemyHPdiv.text(gameObj.enemyHP);
            gameObj.fightButton.toggle();
        }
    };

    //Generic function for the card drawing method. Takes in the ojbect to be drawn and where the object should go and 
    // dynamically re-draws the card into a new div and then returns that div to be appended to a parent. 
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
        newDiv.append($("<div>").addClass("card-body p-1").html("<h5>" + theObj.name + "</h5><P class='stats mb-0'><span id='" + myID2 + "'></span> HP</P>"));
        return newDiv;
    }

});    