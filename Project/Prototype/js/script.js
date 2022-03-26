/***********************************************
Project 1: CYBORG MONKEY
MGL

This monkey is running out of battery.
Quick!
Help him charge up by collecting energy bolts.
************************************************/

// Monkey image
let cyberMonkeyImage;
let titleCardImage;
let sleepImage;
let winImage;
let zapImage;
let chargeSFX;
let shockMonkey;

let score = 0;

let circle1 = {
  x: 51,
  y: 51,
  size: 50,
  opacity: 0,
  fadeDirection: 0,
  fadeSpeed: 10,
  collected: false

};

let circle2 = {
  x: 51,
  y: 449,
  size: 50,
  opacity: 0,
  fadeDirection: 0,
  fadeSpeed: 10,
  collected: false

};

let circle3 = {
  x: 449,
  y: 51,
  size: 50,
  opacity: 0,
  fadeDirection: 0,
  fadeSpeed: 10,
  collected: false

};

let circle4 = {
  x: 449,
  y: 449,
  size: 50,
  opacity: 0,
  fadeDirection: 0,
  fadeSpeed: 10,
  collected: false

};

let state = `simulation`;

function preload() {
  titleCardImage = loadImage("assets/images/titlecard.png");
  cyborgMonkeyImage = loadImage("assets/images/CyborgMonkey.png");
  sleepImage = loadImage("assets/images/Sleep.png");
  winImage = loadImage("assets/images/WorkingMonkey.png");
  zapImage = loadImage("assets/images/ZAP.png");

  // ** The sound functions are playing irregularly **

  chargeSFX = loadSound("assets/sounds/Charge.m4a");
  // shockMonkey = loadSound("assets/sounds/MonkeyAudio.m4a");

}

// //SOUND ON OFF//
// function toggleMusic(){
//   if (state === 'title' || state === 'simulation') {
//   shockMonkey.loop();
// }
// else {
//   shockMonkey.stop();
// }
// }

// function mousePressed() {
//   if (!shockMonkey.isPlaying()) {
//     shockMonkey.loop();
//   }
// }

function setup() {
  createCanvas(960, 600);

  setTimeout(fadeIn, 500);
  setTimeout(fadeIn, 1200);
  setTimeout(fadeIn, 1600);
  setTimeout(fadeIn, 2100);
  setTimeout(fadeIn, 2500);


  circle1.x = width / 13.5;
  circle2.x = width / 13.5
  circle3.x = 12 * width / 13.5
  circle4.x = 12 * width / 13.5


}

function draw() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  }

  // ** This state is currently not running **
  else if (state === 'sleep') {
    sleep();
  } else if (state === 'gathered') {
    win();
  }
}

function win() {
  image(winImage, 250, 250);
}

function title() {
  // Display the image of the title card
  image(titleCardImage, 0, 0);

}

//This fuction is currently not running
function sleep() {
  // Display sleep image
  image(sleepImage, 250, 250);

}

function simulation() {
  display();
  checkOverlap1();
  checkOverlap2();
  checkOverlap3();
  checkOverlap4();
  gathered();
  fadeIn()
}

function fadeIn() {
  circle4.fadeDirection = 1;
}



function display() {
  background(90);


  if (circle1.collected === false) {

    image(zapImage, circle1.x, circle1.y, circle1.size)

  }

  if (circle2.collected === false) {

    image(zapImage, circle2.x, circle2.y, circle2.size)

  }

  if (circle3.collected === false) {

    image(zapImage, circle3.x, circle3.y, circle3.size)

  }

  if (circle4.collected === false) {

    noStroke();
    fill(255, 0, 0, circle4.opacity);
    ellipse(circle4.x, circle4.y, circle4.size);



  }

  circle4.opacity += circle4.fadeSpeed * circle4.fadeDirection;
  if (circle4.fadeDirection === 1 && circle4.opacity >= 255) {
    circle4.fadeDirection = -1;
  } else if (circle4.fadeDirection === -1 && circle4.opacity <= 0) {
    circle4.fadeDirection = 0;
  }

  // The Ellispse is an Actor for collision
  ellipse(mouseX, mouseY, 27);

  // imageMode(CENTER)
  // image(cyborgMonkeyImage, mouseX, mouseY, 0, 0);

  text(score, 0, height);

}

//Check if the circles are overlapping
function checkOverlap1() {
  let d = dist(circle1.x, circle1.y, mouseX, mouseY);
  if (circle1.collected === false && d < circle1.size / 2 + cyborgMonkeyImage.width / 2) {
    circle1.collected = true;
    chargeSFX.play();
  }
}

function checkOverlap2() {
  let d = dist(circle2.x, circle2.y, mouseX, mouseY);
  if (circle2.collected === false && d < circle2.size / 2 + cyborgMonkeyImage.width / 2) {
    circle2.collected = true;
    chargeSFX.play();
  }
}

function checkOverlap3() {
  let d = dist(circle3.x, circle3.y, mouseX, mouseY);
  if (circle3.collected === false && d < circle3.size / 2 + cyborgMonkeyImage.width / 2) {
    circle3.collected = true;
    chargeSFX.play();
  }
}

function checkOverlap4() {
  let d = dist(circle4.x, circle4.y, mouseX, mouseY);
  if (circle4.collected === false && d < circle4.size / 2 + cyborgMonkeyImage.width / 2) {
    circle4.collected = true;
    chargeSFX.play();
  }
}

function mousePressed() {
  if (state === "title") {
    state = 'simulation';
  }
  if (state === "simulation") {
    if (circle4.opacity > 200) {
     score += 5;
   }
  else if (circle4.opacity > 127) {
    score += 1;
  }
}
}



function gathered() {
  if (circle1.collected === true && circle2.collected === true && circle3.collected === true && circle4.collected === true) {
    state = 'gathered'
  }
}
