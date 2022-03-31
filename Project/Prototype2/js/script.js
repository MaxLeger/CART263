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

// let icon2 = {
//   x: 640,
//   y: 300,
//   size: 90,
//   opacity: 0,
//   fadeDirection: 0,
//   fadeSpeed: 18,
//   collected: false
// }

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

  music.addCue(5.21  , function() {
    icon1.fadeDirection = 1;
  });
  music.addCue(5.8, function() {
    icon2.fadeDirection = 1;
  });
  music.addCue(6.16, function() {
    icon3.fadeDirection = 1;
  });
  music.addCue(7.04, function() {
    icon4.fadeDirection = 1;
  });
  music.addCue(7.12, function() {
    icon5.fadeDirection = 1;
  });
  music.addCue(7.20, function() {
    icon6.fadeDirection = 1;
  });
  music.addCue(8.02, function() {
    icon7.fadeDirection = 1;
  });
  music.addCue(8.20, function() {
    icon8.fadeDirection = 1;
  });


  // Icon1 as an object-oriented

  // template = iconX = new Icon(x, y)
  icon1 = new Icon(90, 81)

  icon2 = new Icon(288, 81)

  icon3 = new Icon(337, 135)

  icon4 = new Icon(390, 195)

  icon5 = new Icon(433, 234)

  icon6 = new Icon(480, 271)

  icon7 = new Icon(520, 213)

  icon8 = new Icon(556, 161)

}

// Indication of the state
function statemachine() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();

    displayMouseEllipse();

  }
}

function title() {
  imageMode(CENTER);
  image(gamestart, 480, 300);
}

// Game state function
function game() {

  icon1.update()

  icon2.update()

  icon3.update()

  icon4.update()

  icon5.update()

  icon6.update()

  icon7.update()

  icon8.update()

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
    icon2.mousePressed();
    icon3.mousePressed();
    icon4.mousePressed();
    icon5.mousePressed();
    icon6.mousePressed();
    icon7.mousePressed();
    icon8.mousePressed();
  }
}

function keyPressed() {
  if (state === "game") {
    icon1.keyPressed();
    icon2.keyPressed();
    icon3.keyPressed();
    icon4.keyPressed();
    icon5.keyPressed();
    icon6.keyPressed();
    icon7.keyPressed();
    icon8.keyPressed();
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
