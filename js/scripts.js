// Business logic
var playerA = "";
var playerB = "";

var rollDice = function() {
return Math.floor(6 * Math.random()) + 1;
}

function Player(roll, tempscore, totalscore, turn) {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.turn = turn;
this.playerName;
}

// checking for roll  one
Player.prototype.rollCheck = function() {
if (this.roll === 1) {
this.tempscore = 0;
alert("Sorry " + this.playerName + "your is over!")
}

else {
this.tempscore += this.roll;
}
}

// checking for hold the dice
Player.prototype.holdCheck = function() {
this.totalscore += this.tempscore;
this.tempscore = 0;
alert(this.playerName + "sorry pass over");
}

// checking for winner
Player.prototype.winnerCheck = function() {
if (this.totalscore >= 100) {
alert(this.playerName + " your are the current winner!");
}
}

Player.prototype.newGame = function() {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.playerName = "";
}

var clearValues = function(){
$(".player1Name").val("");
$(".player2Name").val("");
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
    ClearValues();

    player1.newGame();
    player2.newGame();

    $("#dice-roll").empty();
    $("#round-total").empty();
    $("#total-score").empty();

    $("#die-roll-2").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();


    $(".start-menu").show();

});
    $("button#player-a-roll").click(function(event){
      player1.roll = rollDice();

    $("#dice-roll").text(player1.roll);
      player1.rollCheck();

    $("#round-total").text(player1.tempscore);
});
    $("button#player-b-roll").click(function(event){
      player2.roll = rollDice();

      $("#dice-roll-2").text(player2.roll);
      player2.rollCheck();

      $("#round-total-2").text(player2.tempscore);
});






  })
})
