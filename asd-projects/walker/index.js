/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
      "ENTER": 13,
      "UP" : 38,
      "DOWN" : 40,
      "LEFT" : 37,
      "RIGHT" : 39,
      }

  
  // Game Item Objects
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      speedY = -5;
      console.log("left pressed");
  } if (event.which === KEY.RIGHT) {
    speedY = 5;
    console.log("right pressed");
  }if (event.which === KEY.UP) {
    speedX = -5;
    console.log("up pressed");
  } if (event.which === KEY.DOWN) {
    speedX = 5;
    console.log("down pressed");
  }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      speedY = 0;
      console.log("left released");
  } if (event.which === KEY.RIGHT) {
    speedY = 0;
    console.log("right released");
  }if (event.which === KEY.UP) {
    speedX = 0;
    console.log("up released");
  } if (event.which === KEY.DOWN) {
    speedX = 0;
    console.log("down released");
  }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function keyUp () {
    var speedX = 0;
    var speedY = 0;
  }
  function repositionGameItem () {
    positionX += speedX;
    positionY += speedY;

  } 
  function redrawGameItem () {
    $("#walker").css("top", positionX);
    $("#walker").css("left", positionY);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}