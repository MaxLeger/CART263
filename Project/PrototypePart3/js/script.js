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
    cue: 6.6,
    startX: 700,
    startY: 135,
    endX: 700,
    endY: 465
  },

  {
    cue: 13.19,
    startX: 825,
    startY: 190,
    endX: 595,
    endY: 317
  },

]


let musicData = [
  {
    cue: 0.09,
    x: 655,
    y: 230,
    size: 144
  },
  {
    cue: 0.27,
    x: 870,
    y: 120,
    size: 144
  },
  {
    cue: 1.14,
    x: 870,
    y: 480,
    size: 144
  },
  {
    cue: 2.08,
    x: 655,
    y: 370,
    size: 144
  },
  {
    cue: 3,
    x: 510,
    y: 311,
    size: 117
  },
  {
    cue: 3.15,
    x: 430,
    y: 311,
    size: 117
  },
  {
    cue: 3.35,
    x: 350,
    y: 311,
    size: 117
  },
  {
    cue: 3.8,
    x: 270,
    y: 311,
    size: 117
  },
  {
    cue: 4,
    x: 190,
    y: 245,
    size: 117
  },
  {
    cue: 4.17,
    x: 190,
    y: 380,
    size: 117
  },

  {
    cue: 4.63,
    x: 232,
    y: 311,
    size: 117
  },
  {
    cue: 4.95,
    x: 310,
    y: 245,
    size: 117
  },
  {
    cue: 5.3,
    x: 380,
    y: 380,
    size: 117
  },
  {
    cue: 5.5,
    x: 430,
    y: 311,
    size: 117
  },
  {
    cue: 5.85,
    x: 480,
    y: 240,
    size: 117
  },
  {
    cue: 6.15,
    x: 520,
    y: 170,
    size: 117
  },
  {
    cue: 6.3,
    x: 570,
    y: 100,
    size: 117
  },

  {
    cue: 8.05,
    x: 570+30,
    y: 4850,
    size: 127
  },
  {
    cue: 8.2,
    x: 520+30,
    y: 430,
    size: 127
  },
  {
    cue: 8.35,
    x: 480+30,
    y: 360,
    size: 127
  },
  {
    cue: 8.5,
    x: 430+30,
    y: 290,
    size: 135
  },
  {
    cue: 8.65,
    x: 380+30,
    y: 220,
    size: 135
  },
  {
    cue: 8.8,
    x: 330+30,
    y: 150,
    size: 135
  },
  {
    cue: 8.95,
    x: 260,
    y: 220,
    size: 155
  },
  {
    cue: 9.3,
    x: 160,
    y: 290,
    size: 155
  },
  {
    cue: 10.10,
    x: 160,
    y: 360,
    size: 125
  },
  {
    cue: 10.25,
    x: 160,
    y: 430,
    size: 117
  },
  {
    cue: 10.4 ,
    x: 160,
    y: 500,
    size: 117
  },
  {
    cue: 10.55 ,
    x: 220,
    y: 500,
    size: 117
  },
  {
    cue: 10.7 ,
    x: 280,
    y: 500,
    size: 117
  },

  {
    cue: 11.2 ,
    x: 600,
    y: 500,
    size: 117
  },
  {
    cue: 12 ,
    x: 740,
    y: 500,
    size: 117
  },
  {
    cue: 12.17 ,
    x: 825,
    y: 500,
    size: 117
  },
  {
    cue: 13.05 ,
    x: 825,
    y: 384,
    size: 117
  },
  {
    cue: 13.13 ,
    x: 825,
    y: 314,
    size: 117
  },

  {
    cue: 14.45 ,
    x: 200,
    y: 317,
    size: 160
  },
  {
    cue: 15.04 ,
    x: 320,
    y: 317,
    size: 117
  },
  {
    cue: 15.17 ,
    x: 380,
    y: 317,
    size: 117
  },
  {
    cue: 15.23 ,
    x: 480,
    y: 317,
    size: 117
  },
  {
    cue: 16.1 ,
    x: 540,
    y: 317,
    size: 117
  },
  {
    cue: 16.25 ,
    x: 640,
    y: 317,
    size: 117
  },
  {
    cue: 17.04 ,
    x: 700,
    y: 317,
    size: 117
  },

  {
    cue: 18.18 ,
    x: 800,
    y: 155,
    size: 117
  },

  {
    cue: 19 ,
    x: 800,
    y: 430,
    size: 117
  },

  {
    cue: 20 ,
    x: 675,
    y: 293,
    size: 117
  },
  {
    cue: 20.3 ,
    x: 540,
    y: 293,
    size: 117
  },
  {
    cue: 21.06 ,
    x: 450,
    y: 293,
    size: 117
  },
  {
    cue: 21.12 ,
    x: 350,
    y: 193,
    size: 132
  },
  {
    cue: 21.2 ,
    x: 350,
    y: 393,
    size: 132
  },

  {
    cue: 21.75 ,
    x: 568,
    y: 293,
    size: 117
  },
  {
    cue: 22.12 ,
    x: 700,
    y: 293,
    size: 117
  },
  {
    cue: 22.27 ,
    x: 822,
    y: 123,
    size: 140
  },
  {
    cue: 23.1 ,
    x: 822,
    y: 460,
    size: 140
  },

  {
    cue: 24 ,
    x: 620,
    y: 460,
    size: 140
  },
  {
    cue: 24.17,
    x: 450,
    y: 370,
    size: 140
  },
  {
    cue: 24.17,
    x: 320,
    y: 320,
    size: 140
  },
  {
    cue: 25,
    x: 220,
    y: 280,
    size: 140
  },
  {
    cue: 25.17,
    x: 320,
    y: 190,
    size: 140
  },
  {
    cue: 26,
    x: 385,
    y: 135,
    size: 140
  },
  {
    cue: 26.25,
    x: 460,
    y: 80,
    size: 140
  },

  {
    cue: 27,
    x: 700,
    y: 145,
    size: 140
  },
  {
    cue: 27.18,
    x: 425,
    y: 222,
    size: 210
  },
  {
    cue: 27.39,
    x: 600,
    y: 327,
    size: 210
  },
  {
    cue: 27.67,
    x: 453,
    y: 407,
    size: 210
  },
  {
    cue: 28,
    x: 550,
    y: 502,
    size: 140
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
  music = loadSound("assets/sounds/MusicPart3.wav");

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
