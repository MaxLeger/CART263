/***********************************************
p5 exercise: Bubble Popper

By MGL

Pop bubbles with your index finger as a pin!

MAIN JS CODE:
************************************************/

"use strict";


// The user's webcam
let video = undefined;

// The handpose model
let handpose = undefined;

// Current set of predictions
let predictions = [];

// The bubble
let bubble = undefined;

// Balloon image
let balloon

// Arm image
let arm

// explosion
let explosion

// Backgroound music

let balloonBeat

// explosion popSFX

let popSFX

function preload() {
  explosion = loadImage("assets/images/explosion-icegif-19.gif");
  balloon = loadImage("assets/images/ballon.png");

  popSFX = loadSound("assets/sounds/pop.mp3");
  balloonBeat = loadSound("assets/sounds/Bloons.mp3");
}

// Setup Description
function setup() {
  createCanvas(640, 480);

  //AngleMode and RectoMode
  angleMode(DEGREES)
  rectMode(CENTER)


  // Access user's webcame
  video = createCapture(VIDEO);
  video.hide();

  // load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log('Model loaded.');
  });

  //Lisent for predictions
  handpose.on('predict', function(results) {
    console.log(results);
    predictions = results;
  });

  // The bubble definition
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -3
  };

}

// Draw Description

function draw() {
  background(0);

  music();

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20)
    pop();

    //check if bubble Pop
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;

      image(explosion, tipX, tipY, 200);

      popSFX.play();

    }
  }

//Moves the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 255, 0);
  noStroke();
  image(balloon, bubble.x, bubble.y, bubble.size);
  pop();
}

function music() {
  if (!balloonBeat.isPlaying()) {
      balloonBeat.loop();
    }
}
