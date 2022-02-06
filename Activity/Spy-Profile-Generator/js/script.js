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
  instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
  objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
  tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
  celebritiesData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/celebrities.json');

  selfdestructSFX = loadSound('assets/sounds/selfdestruct.wav'); // Loads selfdestruct sound effect

  explosionGif = loadImage("assets/images/explosion.gif");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem('data_spy'));
  if (data !== null) {
    let password = prompt('Password?');
    if (password === data.password) {
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
  spyProfile.name = prompt(`What is your name?`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.archNemisis = random(celebritiesData.celebrities);
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  localStorage.setItem('data_spy', JSON.stringify(spyProfile));

}

function draw() {
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

// Old music
// function music() {
//   if (!selfdestructSFX.isPlaying()) {
//     selfdestructSFX.play();
//   }
// }


function music() {
  if (!selfdestructSFX.isPlaying()) {
    selfdestructSFX.play();
  }
}


function showExplosion() {
  state = 'explosion';
}

function mousePressed() {
  if (mouseX < 10) {
    localStorage.removeItem('data_spy');
    spyProfile.name = undefined;

  }
}

function keyPressed() {
  if (keyCode === RETURN) {
    music();
    setTimeout(showExplosion, 8000);
  }
}

function drawExplosion() {
  image(explosionGif, 50, 50);

}
