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

let tubeMusicData = [
  {
    cue: 8.20,
    startX: 556,
    startY: 171,
    endX: 787,
    endY: 171
  },

  {
    cue: 14.94,
    startX: 526,
    startY: 223,
    endX: 787,
    endY: 171
  },

  {
    cue: 18.29,
    startX: 189,
    startY: 137,
    endX: 93.4,
    endY: 430
  },

  {
    cue: 22.00,
    startX: 731,
    startY: 380,
    endX: 866,
    endY: 277
  },



]


let musicData = [
  {
    cue: 5.21,
    x: 110,
    y: 131
  },
  {
    cue: 5.8,
    x: 234,
    y: 131
  },
  {
    cue: 6.16,
    x: 337,
    y: 185
  },
  {
    cue: 7.04,
    x: 390,
    y: 245
  },
  {
    cue: 7.12,
    x: 433,
    y: 284
  },
  {
    cue: 7.20,
    x: 480,
    y: 321
  },
  {
    cue: 8.02,
    x: 520,
    y: 263
  },
  {
    cue: 9.90 ,
    x: 787,
    y: 297
  },
  {
    cue: 10.37 ,
    x: 787,
    y: 396

  },
  {
    cue: 10.56 ,
    x: 787,
    y: 513
  },
  {
    cue: 10.73,
    x: 693,
    y: 513
  },
  {
    cue: 11.26 ,
    x: 612,
    y: 513
  },
  {
    cue: 11.39,
    x: 531,
    y: 513
  },


  {
    cue: 13.08,
    x: 230,
    y: 420
  },
  {
    cue: 13.96,
    x: 230,
    y: 300
  },
  {
    cue: 14.04,
    x: 316,
    y: 300
  },
  {
    cue: 14.12,
    x: 397,
    y: 300
  },

  {
    cue: 16.25,
    x: 659,
    y: 117
  },
  {
    cue: 17.16,
    x: 529,
    y: 117
  },
  {
    cue: 17.36,
    x: 449,
    y: 117
  },
  {
    cue: 17.56,
    x: 389,
    y: 117
  },
  {
    cue: 18.14,
    x: 259,
    y: 117
  },

  {
    cue: 20.04,
    x: 179,
    y: 500
  },
  {
    cue: 20.44,
    x: 341,
    y: 500
  },
  {
    cue: 20.64,
    x: 421,
    y: 500
  },
  {
    cue: 20.84,
    x: 501,
    y: 500
  },
  {
    cue: 21.16,
    x: 639,
    y: 450
  },

  {
    cue: 23.16,
    x: 866,
    y: 170
  },
  {
    cue: 23.46,
    x: 722,
    y: 170
  },
  {
    cue: 23.66,
    x: 646,
    y: 170
  },
  {
    cue: 23.86,
    x: 566,
    y: 170
  },
  {
    cue: 25.06,
    x: 436,
    y: 170
  },
  {
    cue: 25.76,
    x: 326,
    y: 170
  },




];

let icons = [];

let tubes = [];

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

  for (let i = 0; i < musicData.length; i++) {
    let data = musicData[i];
    let icon = new Icon(data.x, data.y);
    music.addCue(data.cue, function () {
      icon.fadeDirection = 1;
    })
    icons.push(icon);
  }

  for (let i = 0; i < tubeMusicData.length; i++) {
    let data = tubeMusicData[i];
    let tube = new Tube(data.startX, data.startY, data.endX, data.endY);
    music.addCue(data.cue, function () {
      tube.fadeDirection = 1;
    })
    tubes.push(tube);
  }

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
  for (let i = 0; i < icons.length; i++) {
    icons[i].update();
  }
  for (let i = 0; i < tubes.length; i++) {
    tubes[i].update();
  }


  // icon1.update()

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
    for (let i = 0; i < icons.length; i++) {
      icons[i].mousePressed();
    }
    for (let i = 0; i < tubes.length; i++) {
      tubes[i].mousePressed();
    }
    // icon1.mousePressed();

  }
}

function keyPressed() {
  if (state === "game") {
    for (let i = 0; i < icons.length; i++) {
      icons[i].keyPressed();
    }

  }
}

function mouseReleased() {
  if (state === "game") {
    for (let i = 0; i < tubes.length; i++) {
      tubes[i].mouseReleased();
    }
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
