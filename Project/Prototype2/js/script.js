/***********************************************
Project 1: CYBORG MONKEY
MGL

This monkey is running out of battery.
Quick!
Help him charge up by collecting energy bolts.
************************************************/

let state = 'title'


let gamestart

let music

let score = 0;

let icon1

// Icon1 was tranfered to an object-oriented programming set-up

// let icon1 = {
//   x: 100,
//   y: 200,
//   size: 90,
//   opacity: 0,
//   fadeDirection: 0,
//   fadeSpeed: 30,
//   collected: false
// }

let icon2 = {
  x: 640,
  y: 300,
  size: 90,
  opacity: 0,
  fadeDirection: 0,
  fadeSpeed: 18,
  collected: false
}

// point of reference for the mouse location
let mouseEllipse = {
  size: 20
}

//Preloads the assets

function preload() {
  music = loadSound("assets/sounds/GorillazFeelGoodInc.mp3");

  gamestart = loadImage("assets/images/gamestart.png");

}

function setup() {
  createCanvas(960, 600);

  // Activates a function on a chosen timeframe of the music piece

  music.addCue(5.39, fadeIn1);
  music.addCue(6.14, fadeIn2);

  // Icon1 as an object-oriented
  icon1 = new Icon(320, 300)

}

// Indication of the state
function statemachine() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();

    // ** Stops displaying when specifying if icon is collected **

    // if (icon1.collected === false && icon1.active === true)

    if (icon1.active === true) {

      icon1.show();
    }

    displayMouseEllipse();

    checkOverlap2();
  }
}

function title() {
  imageMode(CENTER);
  image(gamestart, 480, 300);
}

// Game state function
function game() {

  // Rules for the fade in and the the fade out of the icon
  icon1.opacity += icon1.fadeSpeed * icon1.fadeDirection;
  if (icon1.fadeDirection === 1 && icon1.opacity >= 255) {
    icon1.fadeDirection = -1; //Change of direction
    icon1.fadeSpeed = 5 // Slower fade out
  } else if (icon1.fadeDirection === -1 && icon1.opacity <= 0) {
    icon1.fadeDirection = 0;
  }

  //Displays the icon
  if (icon2.collected === false) {
    push();
    noStroke();
    fill(255, 0, 0, icon2.opacity);
    ellipse(icon2.x, icon2.y, icon2.size);
    pop();
  }

  icon2.opacity += icon2.fadeSpeed * icon2.fadeDirection;
  if (icon2.fadeDirection === 1 && icon2.opacity >= 255) {
    icon2.fadeDirection = -1;
    icon2.fadeSpeed = 4;
  } else if (icon2.fadeDirection === -1 && icon2.opacity <= 0) {
    icon2.fadeDirection = 0;
  }

  // Displays the current score
  text(score, 0, height);

}

function draw() {
  background(220);

  statemachine();

}

function mousePressed() {
  //Click to transition to the next state
  if (state === "title") {
    state = 'game';
  }
  if (!music.isPlaying()) {
    music.loop();
  }

  if (state === "game") {
    icon1.mousePressed();
  }
}

// function which displays a reference for the mouse location
function displayMouseEllipse() {
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, mouseEllipse.size);
  pop();
}
//Fade section

// Cue activation function
function fadeIn1() {
  icon1.fadeDirection = 1; // Makes the icon fade in
  icon1.active = true // Makes the icon active
}

function fadeIn2() {
  icon2.fadeDirection = 1;
}

//Check if the circles are overlapping
function checkOverlap2() {
  let d = dist(icon2.x, icon2.y, mouseX, mouseY);
  if (icon2.collected === false && icon2.fadeDirection === -1 && d < icon2.size / 2 + mouseEllipse.size / 2) {
    //Current integration of a point system:
    if (icon2.opacity > 180) {
     score += 5;
   }
  else if (icon2.opacity > 90) {
    score += 1;
  }
  // Removes the icon
    icon2.collected = true;
  }
}
