let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("homeScore-el");
let guestScoreEl = document.getElementById("gestScore-el");
let timeEl = document.getElementById("time-el")
let timeBtn = document.getElementById("btn-time")

let timeInterval = setInterval(printTime, 1000); // Run printTime() every second

function myStopFunction() {
   clearInterval(printTime);
  }
 

function printTime() {
   let currentTime = new Date();
   let currentLocalTime = currentTime.toLocaleTimeString();
   timeEl.innerText = currentLocalTime
}



function addOneH() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
  return homeScore;
}
function addOneG() {
   guestScore += 1
  guestScoreEl.innerText = guestScore;
  return guestScore;
 }

function addTwoH() {
   homeScore += 2
   homeScoreEl.innerText = homeScore;
   return homeScore;
}
function addTwoG() {
   guestScore += 2
   guestScoreEl.innerText = guestScore;
   return guestScore;
}

function addThreeH() {
   homeScore += 2
   homeScoreEl.innerText = homeScore;
   return homeScore;
}
function addThreeG() {
   guestScore += 3;
   guestScoreEl.innerText = guestScore;
   return guestScore;
}

function reset(){
   homeScore = 0;
   guestScore = 0;
   homeScoreEl.innerText = homeScore;
   guestScoreEl.innerText = guestScore;
   myStopFunction()
   timeEl.innerText = ""
}


