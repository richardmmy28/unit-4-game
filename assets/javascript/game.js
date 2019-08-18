var wins = 0;
var losses = 0;
var currentSessionTalliedValue = 0;
////////
var randomTargetScore = [0,1,2,]; //need 4 (one for each crystal)

for (i=0; i <3; i++){randomTargetScore[i] = Math.floor(Math.random()*12)}

console.log ("protoss value: " + randomTargetScore[0]);
console.log ("terran value: " + randomTargetScore[1]);
console.log ("zerg value: " + randomTargetScore[2]);

/////                                                       
var currentGameTargetScore = Math.floor(Math.random()*(120-19) + 19); //returns a random number in between 19 and 120 per this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in
console.log ("currentGameTargetScore: " + currentGameTargetScore);

//make it so that when each button/crystal is clicked (onClick/eventListener), the associated value is added to the user's value for that particualr game session (e.g. currentSessionTalliedValue);
//source for click jQuery found here: https://www.w3schools.com/jquery/event_click.asp
//NOTE: can I simplify/condense this? maybe turn it into a single function and loop the target array
$(".protoss").click(function(){
   currentSessionTalliedValue +=randomTargetScore[0];
 console.log("TalliedValue: " + currentSessionTalliedValue);
}); 
$(".terran").click(function(){
   currentSessionTalliedValue +=randomTargetScore[1];
 console.log("TalliedValue: " + currentSessionTalliedValue);
}); 
$(".zerg").click(function(){
   currentSessionTalliedValue +=randomTargetScore[2];
 console.log("TalliedValue: " + currentSessionTalliedValue);
}); 

//game begins when user clicks one of the buttons/crystals

//declare reset function that runs after game is either won or lost: function resetGame(){
  


//describe the conditon  of losing and consequences i.e if user valueTotal > currentGameTargetValue, then reset game and increase losses count by 1 (losses++; resetGame())

//describes the conditions of winning else if (userValueTotal === currentGameTargetValue) {wins++; resetGame()} 

/////////////////////////////////////////////////////////
var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var protoss = document.getElementById("protoss");
//red.setAttribute("value", "5");
console.log(protoss.value);

var terran = document.getElementById("terran");
//console.log(blue.value);
console.log(terran.value)

var zerg = document.getElementById("zerg");
//console.log(yellow.value);
console.log(zerg.value)



// add an event listener to elements
protoss.addEventListener('click', function() {
  //this refers to red
  addToScore(this.value);
  checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

terran.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

zerg.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});



//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

console.log(getRandomValue(10, 4));