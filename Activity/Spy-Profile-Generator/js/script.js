/***********************************************
p5 exercise: Spy profile generator

By MGL

Generates a ra  ndomized spy profilr for te user,
and password protects it.

MAIN JS CODE:
************************************************/

"use strict";

let state = `register`;

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  archNemisis: `**REDACTED**`,
  password: `*REDACTED**`
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let celebritiesData = undefined;
let explosionGif;

let selfdestructSFX;

function preload() {
  // Loads the JSON data lists
  instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
  objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
  tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
  celebritiesData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/celebrities.json');

  selfdestructSFX = loadSound('assets/sounds/selfdestruct.wav'); // Loads selfdestruct sound effect

  explosionGif = loadImage("assets/images/explosion.gif");


}

function setup() {
  // Creates the canvas
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem('data_spy')); //Stores data for the profile
  if (data !== null) {
    let password = prompt('Password?'); //Ask the password prompt
    if (password === data.password) { // Verifies if the password is correct
      // Associates the data
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.archNemisis = data.archNemisis
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  } else {
    generateSpyProfile();
  }
}

// Indication of the state
function statemachine() {
  if (state === `register`) {
    draw();
    keyPressed()


  } else if (state === `explosion`) {
    drawExplosion();
  }
}



function generateSpyProfile() {
  selfdestructSFX.play();
  spyProfile.name = prompt(`What is your name?`); //Ask the Name prompt
  let instrument = random(instrumentData.instruments); // Associate a random data point of the instrument data base
  spyProfile.alias = `The ${instrument}`;
  spyProfile.archNemisis = random(celebritiesData.celebrities); // Associate a random data point of the celebrity data base
  spyProfile.secretWeapon = random(objectData.objects); // Associate a random data point of the objects data base
  let card = random(tarotData.tarot_interpretations); // Associate a random data point of the Tarot data base
  spyProfile.password = random(card.keywords);
  localStorage.setItem('data_spy', JSON.stringify(spyProfile));

}

function draw() {
  // function which draws the spy profile
  background(255);

  let profile = `**CONFIDENTIAL!**
  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Arch Nemesis: ${spyProfile.archNemisis}
  Password: ${spyProfile.password}
  Press: 'RETURN'`;

  push();
  textFont(`Bold, monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();


}

function music() {
  // fuction which plays thr music
  if (!selfdestructSFX.isPlaying()) {
    selfdestructSFX.play();
  }
}


function showExplosion() {
  // function that changes the state
  state = 'explosion';
}

function mousePressed() {
  // function that allows the user to reset the profile by redifining the spy name.
  if (mouseX < 10) {
    localStorage.removeItem('data_spy');
    spyProfile.name = undefined;

  }
}

function keyPressed() {
  // Activates the SFX and countdown to the changed state.
  if (keyCode === RETURN) {
    music();
    setTimeout(showExplosion, 8000);
  }
}

function drawExplosion() {
  // Draws the explosion
  image(explosionGif, 50, 50);

}
