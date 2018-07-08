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




// prototype


// UI Logic
