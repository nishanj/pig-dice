// Business logic
var playerA = "";
var playerB = "";

var rollDice = function() {
return Math.floor(6 * Math.random()) + 1;
}

// use of constructor: roll,tempscore& totalscore is equal 0 since am applying
// math.floor to generate rondom number
function Player(roll, tempscore, totalscore, turn) {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.turn = turn;
this.playerName;
}

// prototype Logic
// checking for roll  one using new object (rollCheck)
Player.prototype.rollCheck = function() {
if (this.roll === 1) {
this.tempscore = 0;
alert("Sorry " + this.playerName + " " + "your turn is over!")
}

else {
this.tempscore += this.roll;
}
}

// checking for hold the dice
Player.prototype.holdCheck = function() {
this.totalscore += this.tempscore;
this.tempscore = 0;
alert(this.playerName + " " + "sorry pass over");
}

// checking for winner
Player.prototype.winnerCheck = function() {
if (this.totalscore >= 100) {
alert(this.playerName +  " " +" your are the current winner!");
}
}

// new game is target to 0
Player.prototype.newGame = function() {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.playerName = "";
}

var newValues = function(){
$(".player-name-1").val("");
$(".player-name-2").val("");
}


// UI Logic
$(document).ready(function(){
  $("#start").click(function(event){
    event.preventDefault();

    playerA = new Player(true);
    playerB = new Player(false);

    $("#game-selector").show();
    $("#bdy").hide();

    var player1Name = $(".player-name-1").val();
    $("#player-name-1").text(player1Name);

    var player2Name = $(".player-name-2").val();
    $("#player-name-1").text(player2Name);

    playerA.playerName=player1Name;
    playerB.playerName=player2Name;

});
    $("#new-game").click(function(event){
    $("#game-selector").hide();
    newValues();

    playerA.newGame();
    playerB.newGame();

    $("#dice-roll").empty();
    $("#round-total").empty();
    $("#total-score").empty();

    $("#dice-roll-b").empty();
    $("#round-total-b").empty();
    $("#total-score-b").empty();


    $("#game-selector").show();

});
    $("button#player-a-roll").click(function(event){
      playerA.roll = rollDice();
    $("#dice-roll").text(playerA.roll);
      playerA.rollCheck();
    $("#round-total").text(playerA.tempscore);
});


    $("button#player-b-roll").click(function(event){
      playerB.roll = rollDice();
    $("#dice-roll-b").text(playerB.roll);
      playerB.rollCheck();
    $("#round-total-b").text(playerB.tempscore);
});


      $("button#player-a-hold").click(function(event){
      playerA.holdCheck();
      $("#total-score").text(playerA.totalscore);
      $("#round-total").empty();
      $("#dice-roll").empty();
      playerA.winnerCheck();
});


      $("#player-b-hold").click(function(event){
        playerB.holdCheck();
        $("#total-score-b").text(playerB.totalscore);
        $("#round-total-b").empty();
        $("#dice-roll-b").empty();
        playerB.winnerCheck();

  });
});
