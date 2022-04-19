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
    startX: 119,
    startY: 117,
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

  {
    cue: 39.4,
    startX: 800,
    startY: 500,
    endX: 800,
    endY: 170
  },


  {
    cue: 53.26,
    startX: 800,
    startY: 320,
    endX: 680,
    endY: 480
  },


  {
    cue: 63.,
    startX: 525,
    startY: 450,
    endX: 400,
    endY: 390
  },


]


let musicData = [
  {
    cue: 5.21,
    x: 110,
    y: 131,
    size: 117
  },
  {
    cue: 5.8,
    x: 234,
    y: 131,
    size: 117
  },
  {
    cue: 6.16,
    x: 337,
    y: 185,
    size: 117
  },
  {
    cue: 7.04,
    x: 390,
    y: 245,
    size: 117
  },
  {
    cue: 7.12,
    x: 433,
    y: 284,
    size: 117
  },
  {
    cue: 7.20,
    x: 480,
    y: 321,
    size: 117
  },
  {
    cue: 8.02,
    x: 520,
    y: 263,
    size: 117
  },
  {
    cue: 9.90 ,
    x: 787,
    y: 297,
    size: 117
  },
  {
    cue: 10.37 ,
    x: 787,
    y: 396,
    size: 117

  },
  {
    cue: 10.56 ,
    x: 787,
    y: 513,
    size: 117
  },
  {
    cue: 10.73,
    x: 693,
    y: 513,
    size: 117
  },
  {
    cue: 11.26 ,
    x: 612,
    y: 513,
    size: 117
  },
  {
    cue: 11.39,
    x: 531,
    y: 513,
    size: 117
  },


  {
    cue: 13.08,
    x: 230,
    y: 420,
    size: 117
  },
  {
    cue: 13.96,
    x: 230,
    y: 300,
    size: 117
  },
  {
    cue: 14.04,
    x: 316,
    y: 300,
    size: 117
  },
  {
    cue: 14.12,
    x: 397,
    y: 300,
    size: 117
  },

  {
    cue: 16.25,
    x: 659,
    y: 90,
    size: 117
  },
  {
    cue: 17.16,
    x: 529,
    y: 117,
    size: 117
  },
  {
    cue: 17.36,
    x: 449,
    y: 117
  },
  {
    cue: 17.56,
    x: 389,
    y: 117,
    size: 117
  },
  {
    cue: 18.14,
    x: 259,
    y: 117,
    size: 117
  },

  {
    cue: 20.04,
    x: 179,
    y: 500,
    size: 117
  },
  {
    cue: 20.44,
    x: 341,
    y: 500,
    size: 117
  },
  {
    cue: 20.64,
    x: 421,
    y: 500,
    size: 117
  },
  {
    cue: 20.84,
    x: 501,
    y: 500,
    size: 117
  },
  {
    cue: 21.16,
    x: 639,
    y: 450,
    size: 117
  },

  {
    cue: 23.16,
    x: 866,
    y: 170,
    size: 117
  },
  {
    cue: 23.46,
    x: 722,
    y: 170,
    size: 117
  },
  {
    cue: 23.66,
    x: 646,
    y: 170,
    size: 117
  },
  {
    cue: 23.86,
    x: 566,
    y: 170,
    size: 117
  },
  {
    cue: 25.06,
    x: 436,
    y: 170,
    size: 117
  },
  {
    cue: 25.76,
    x: 326,
    y: 170,
    size: 117
  },

  {
    cue: 27.09,
    x: 126+40,
    y: 458,
    size: 180
  },
  {
    cue: 28.09,
    x: 722+90,
    y: 458,
    size: 180
  },
  {
    cue: 29.09,
    x: 126+40,
    y: 258,
    size: 180
  },
  {
    cue: 29.79,
    x: 722+90,
    y: 257,
    size: 180
  },
  {
    cue: 30.72,
    x: 126+40,
    y: 458,
    size: 180
  },
  {
    cue: 31.74,
    x: 722+90,
    y: 458,
    size: 180
  },
  {
    cue: 32.63,
    x: 126+40,
    y: 117,
    size: 180
  },
  {
    cue: 33.00,
    x: 722+90,
    y: 117,
    size: 180
  },

  {
    cue: 34,
    x: 660,
    y: 200,
    size: 140
  },
  {
    cue: 34.19,
    x: 565,
    y: 297,
    size: 128
  },
  {
    cue: 34.59,
    x: 500,
    y: 297,
    size: 128
  },
  {
    cue: 35.15,
    x: 494,
    y: 200,
    size: 117
  },
  {
    cue: 35.34,
    x: 381+30,
    y: 200,
    size: 117
  },
  {
    cue: 35.54,
    x: 297+30,
    y: 200,
    size: 117
  },
  {
    cue: 35.74,
    x: 217+30,
    y: 200,
    size: 117
  },
  {
    cue: 36.09,
    x: 127+40,
    y: 270,
    size: 117
  },

  {
    cue: 37.19,
    x: 360,
    y: 500,
    size: 140
  },
  {
    cue: 37.40,
    x: 480,
    y: 380,
    size: 128
  },
  {
    cue: 37.85,
    x: 560,
    y: 380,
    size: 120
  },
  {
    cue: 38.3,
    x: 640,
    y: 380,
    size: 117
  },
  {
    cue: 39,
    x: 640,
    y: 500,
    size: 117
  },
  {
    cue: 39.2,
    x: 720,
    y: 500,
    size: 117
  },


  {
    cue: 40.4,
    x: 700,
    y: 120,
    size: 117
  },
  {
    cue: 41.1,
    x: 620,
    y: 120,
    size: 117
  },
  {
    cue: 41.8,
    x: 520,
    y: 200,
    size: 117
  },
  {
    cue: 42.3,
    x: 450,
    y: 200,
    size: 117
  },
  {
    cue: 42.5,
    x: 380,
    y: 200,
    size: 117
  },
  {
    cue: 42.7,
    x: 310,
    y: 200,
    size: 117
  },
  {
    cue: 43.5,
    x: 310,
    y: 340,
    size: 117
  },
  {
    cue: 44.1,
    x: 450,
    y: 340,
    size: 117
  },
  {
    cue: 44.8,
    x: 520,
    y: 340,
    size: 117
  },
  {
    cue: 45.2,
    x: 590,
    y: 340,
    size: 117
  },
  {
    cue: 45.8,
    x: 660,
    y: 340,
    size: 117
  },
  {
    cue: 46.2,
    x: 730,
    y: 340,
    size: 117
  },
  {
    cue: 46.6,
    x: 800,
    y: 340,
    size: 117
  },

  {
    cue: 47.27,
    x: 680,
    y: 490,
    size: 117
  },
  {
    cue: 48.16,
    x: 570,
    y: 390,
    size: 117
  },
  {
    cue: 48.35,
    x: 460,
    y: 390,
    size: 117
  },
  {
    cue: 49.1,
    x: 390,
    y: 490,
    size: 117
  },
  {
    cue: 49.55,
    x: 320,
    y: 490,
    size: 117
  },
  {
    cue: 49.8,
    x: 250,
    y: 490-40,
    size: 117
  },

  {
    cue: 50.13,
    x: 400,
    y: 360-40,
    size: 117
  },
  {
    cue: 51,
    x: 550,
    y: 230-40,
    size: 117
  },
  {
    cue: 51.5,
    x: 660,
    y: 140-40,
    size: 117
  },
  {
    cue: 52.04,
    x: 730,
    y: 200-40,
    size: 117
  },
  {
    cue: 52.4,
    x: 730,
    y: 260-40,
    size: 117
  },
  {
    cue: 52.8,
    x: 800,
    y: 320-40,
    size: 117
  },
  {
    cue: 52.8,
    x: 800,
    y: 320-40,
    size: 117
  },

  {
    cue: 54.14,
    x: 570,
    y: 510,
    size: 117
  },
  {
    cue: 54.64,
    x: 490,
    y: 510,
    size: 117
  },
  {
    cue: 55.34,
    x: 400,
    y: 390,
    size: 117
  },
  {
    cue: 55.64,
    x: 340,
    y: 390,
    size: 117
  },
  {
    cue: 55.94,
    x: 280,
    y: 390,
    size: 117
  },
  {
    cue: 56.74,
    x: 170,
    y: 320,
    size: 117
  },
  {
    cue: 57.44,
    x: 160,
    y: 260,
    size: 117
  },
  {
    cue: 58,
    x: 170,
    y: 220,
    size: 117
  },

  {
    cue: 58.25,
    x: 285,
    y: 150,
    size: 117
  },
  {
    cue: 58.75,
    x: 366,
    y: 70,
    size: 117
  },
  {
    cue: 59.05,
    x: 446,
    y: 150,
    size: 117
  },
  {
    cue: 59.35,
    x: 535,
    y: 70,
    size: 117
  },
  {
    cue: 59.70,
    x: 625,
    y: 150,
    size: 117
  },
  {
    cue: 60,
    x: 713,
    y: 70,
    size: 117
  },
  {
    cue: 60.28,
    x: 799,
    y: 150,
    size: 117
  },

  {
    cue: 61.28,
    x: 799,
    y: 250,
    size: 117
  },
  {
    cue: 61.9,
    x: 799,
    y: 370,
    size: 117
  },
  {
    cue: 62.13,
    x: 799,
    y: 450,
    size: 117
  },
  {
    cue: 62.4,
    x: 615,
    y: 390,
    size: 117
  },

  {
    cue: 64.04,
    x: 480,
    y: 300,
    size: 180
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
    let icon = new Icon(data.x, data.y, data.size);
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



  // Displays the current score
  text(score, 0, height);

}

function game2() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].update();
  }
  for (let i = 0; i < tubes.length; i++) {
    tubes[i].update();
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
    for (let i = 0; i < icons.length; i++) {
      icons[i].mousePressed();
    }
    for (let i = 0; i < tubes.length; i++) {
      tubes[i].mousePressed();
    }

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

// function which display a reference for the mouse location
  function displayMouseEllipse() {
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, mouseEllipse.size);
  pop();
}
