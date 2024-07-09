# Basketball Scorecard
![Basketball Scorecard UI](/Basketball.PNG)

This app is created with html, css and javascript. 
## Index.html
The app interface is house in a div with a class of container that has two nested div with a class player inside the index.html.

Each player div has an h3 element that display the player and a nested div with class screen which is reponsible for displaying the player's scores.

Below the screen div is three buttons that can be used to add scores
## Index.css
The css control the styling of the page adding beauty

## index.js
This is where all the action is taking place like reponding to button clicked and updating the dom
to display the current time we make use of new Date()
and global function setInterval() pass the function that print the current time to local string at an inter of 1000 miliseconds i.e one seconds
```javascript
let timeEl = document.getElementById("time-el")
let timeInterval = setInterval(printTime, 1000); // Run printTime() every second

function printTime() {
   let currentTime = new Date();
   let currentLocalTime = currentTime.toLocaleTimeString();
   timeEl.innerText = currentLocalTime
}
```