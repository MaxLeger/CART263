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
    cue: 5.1,
    startX: 450,
    startY: 515,
    endX: 320,
    endY: 485
  },
  {
    cue: 5.6,
    startX: 216,
    startY: 450,
    endX: 135,
    endY: 385
  },

  {
    cue: 12.2,
    startX: 560,
    startY: 270,
    endX: 560,
    endY: 510
  },

  {
    cue: 19.9,
    startX: 685,
    startY: 470,
    endX: 430,
    endY: 470
  },

  {
    cue: 26.6,
    startX: 268,
    startY: 269,
    endX: 480,
    endY: 300
  },


]


let musicData = [
  {
    cue: 1.41,
    x: 341,
    y: 207,
    size: 117
  },
  {
    cue: 1.9,
    x: 480,
    y: 126,
    size: 117
  },
  {
    cue: 2.15,
    x: 613,
    y: 207,
    size: 117
  },
  {
    cue: 2.9,
    x: 667,
    y: 264,
    size: 117
  },
  {
    cue: 3.1,
    x: 700,
    y: 341,
    size: 117
  },
  {
    cue: 3.75,
    x: 639,
    y: 423,
    size: 117
  },
  {
    cue: 4.5,
    x: 575,
    y: 490,
    size: 117
  },

  {
    cue: 7.5,
    x: 135,
    y: 265,
    size: 117
  },
  {
    cue: 8.2,
    x: 135,
    y: 190,
    size: 117
  },
  {
    cue: 8.4,
    x: 135,
    y: 90,
    size: 117
  },
  {
    cue: 8.8,
    x: 264,
    y: 90,
    size: 117
  },

  {
    cue: 9.1,
    x: 264,
    y: 190,
    size: 117
  },

  {
    cue: 9.38,
    x: 320,
    y: 300,
    size: 137
  },
  {
    cue: 9.68,
    x: 400,
    y: 430,
    size: 147
  },
  {
    cue: 9.85,
    x: 520,
    y: 490,
    size: 157
  },

  {
    cue: 10.95,
    x: 810,
    y: 90,
    size: 180
  },
  {
    cue: 11.3,
    x: 730,
    y: 125,
    size: 117
  },
  {
    cue: 11.7,
    x: 650,
    y: 180,
    size: 117
  },
  {
    cue: 12,
    x: 560,
    y: 220,
    size: 117
  },

  {
    cue: 15,
    x: 417,
    y: 487,
    size: 117
  },
  {
    cue: 15.3,
    x: 417,
    y: 387,
    size: 117
  },
  {
    cue: 15.6,
    x: 417,
    y: 267,
    size: 117
  },
  {
    cue: 15.8,
    x: 417,
    y: 207,
    size: 117
  },
  {
    cue: 16.17,
    x: 340,
    y: 155,
    size: 117
  },
  {
    cue: 16.55,
    x: 500,
    y: 155,
    size: 117
  },
  {
    cue: 16.9,
    x: 580,
    y: 155,
    size: 117
  },
  {
    cue: 17.15,
    x: 640,
    y: 155,
    size: 117
  },
  {
    cue: 17.43,
    x: 720,
    y: 155,
    size: 117
  },
  {
    cue: 17.83,
    x: 790,
    y: 195,
    size: 117
  },
  {
    cue: 18.27,
    x: 640,
    y: 255,
    size: 117
  },
  {
    cue: 18.67,
    x: 660,
    y: 330,
    size: 117
  },
  {
    cue: 19.07,
    x: 720,
    y: 400,
    size: 117
  },
  {
    cue: 19.47,
    x: 780,
    y: 470,
    size: 117
  },

  {
    cue: 21.4,
    x: 252,
    y: 390,
    size: 117
  },
  {
    cue: 22.06,
    x: 323,
    y: 324,
    size: 117
  },
  {
    cue: 22.76,
    x: 252,
    y: 232,
    size: 117
  },
  {
    cue: 23.17,
    x: 152,
    y: 232,
    size: 117
  },
  {
    cue: 23.55,
    x: 90,
    y: 210,
    size: 117
  },
  {
    cue: 23.95,
    x: 90,
    y: 130,
    size: 117
  },
  {
    cue: 24.35,
    x: 217,
    y: 75,
    size: 117
  },
  {
    cue: 25,
    x: 90,
    y: 130,
    size: 117
  },
  {
    cue: 25.5,
    x: 90,
    y: 210,
    size: 117
  },
  {
    cue: 26.1,
    x: 170,
    y: 232,
    size: 117
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
  music = loadSound("assets/sounds/MusicPart2.wav");

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
