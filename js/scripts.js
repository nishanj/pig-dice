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
Player.prototype.rollone = function() {
if (this.roll === 1) {
this.tempscore = 0;
alert("Sorry " + this.playerName + "your is over!")
}

else {
this.tempscore += this.roll;
}




// UI Logic
