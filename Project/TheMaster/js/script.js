/***********************************************
p5 project #2: NIGHT AT THE MOVIE: THE MASTER

By MGL

MAIN JS CODE:
************************************************/


// The user's webcam
let video = undefined;

// The handpose model
let handpose = undefined;

// Current set of predictions
let predictions = [];

// The targets for cutscene 1
let target101 = undefined;
let target102 = undefined;
let target103 = undefined;

let target201 = undefined;
let target202 = undefined;
let target203 = undefined;

// Key images defined

let introImage
let instructions
let introSequence

// The Stating state
let state = `state1`;


// All the fighting sequence gif definitions


// Sequence 1

let fight101
let fight102
let fight103

// Sequence 2

let fight201
let fight202
let fight203

// Sequence 3

let fight301
let fight302
let fight303
let fight304
let fight305
let fight306
let fight307

// Sequence 4

let fight401
let fight402
let fight403

// Sequence 5

let fight501
let fight502
let fight503
let fight504

// Sequence 6

let fight601

// Sequence 7

let fight701
let fight702
let fight703

// Final image

let finalScreenImage


// Sound effects

let backgroundAudio

let punchsfx1
let punchsfx2
let punchsfx3
let punchsfx4
let punchsfx5
let lessonSfx
let sfx401
let sfx402
let sfx404

let endS1Audio
let endS2Audio
// let endS3Audio



function preload() {

  // Preloads the images

  targetImage = loadImage("assets/images/TargetIcon.png");
  introImage = loadImage("assets/images/ShaolinIntroImage.png");
  introSequence = loadImage("assets/images/IntroSequence.gif");
  instructions = loadImage("assets/images/instructions.png");
  finalScreenImage = loadImage("assets/images/finalScreen.png");


  // Preloads the gif animations

  fight101 = loadImage("assets/images/fight101.gif");
  fight102 = loadImage("assets/images/fight102.gif");
  fight103 = loadImage("assets/images/fight103.gif");

  fight201 = loadImage("assets/images/fight201.gif");
  fight202 = loadImage("assets/images/fight202.gif");
  fight203 = loadImage("assets/images/fight203.gif");

  fight301 = loadImage("assets/images/fight301.gif");
  fight302 = loadImage("assets/images/fight302.gif");
  fight303 = loadImage("assets/images/fight303.gif");
  fight304 = loadImage("assets/images/fight304.gif");
  fight305 = loadImage("assets/images/fight305.gif");
  fight306 = loadImage("assets/images/fight306.gif");
  fight307 = loadImage("assets/images/fight307.gif");

  fight401 = loadImage("assets/images/fight401.gif");
  fight402 = loadImage("assets/images/fight402.gif");
  fight403 = loadImage("assets/images/fight403.gif");

  fight501 = loadImage("assets/images/fight501.gif");
  fight502 = loadImage("assets/images/fight502.gif");
  fight503 = loadImage("assets/images/fight503.gif");
  fight504 = loadImage("assets/images/fight504.gif");

  fight601 = loadImage("assets/images/fight601.gif");

  endSequence1 = loadImage("assets/images/EndSequence1.gif");

  fight701 = loadImage("assets/images/fight701.gif");
  fight702 = loadImage("assets/images/fight702.gif");
  fight703 = loadImage("assets/images/fight703.gif");

  endSequence2 = loadImage("assets/images/EndSequence2.gif");
  endSequence3 = loadImage("assets/images/EndSequence3.gif");


  // Preloads the Sound effecs

  sfx401 = loadSound("assets/sounds/401SFX.wav");
  sfx402 = loadSound("assets/sounds/sfx402.wav");
  sfx403 = loadSound("assets/sounds/sfx403.wav");


  punchsfx1 = loadSound("assets/sounds/punchsfx1.wav");
  punchsfx2 = loadSound("assets/sounds/punchsfx2.wav");
  punchsfx3 = loadSound("assets/sounds/punchsfx3.wav");
  punchsfx4 = loadSound("assets/sounds/punchsfx4.wav");
  punchsfx5 = loadSound("assets/sounds/punchsfx5.wav");
  lessonSfx = loadSound("assets/sounds/lessonSfx.wav");


  introSequenceAudio = loadSound("assets/sounds/IntroSequenceAudio.wav");


  endS1Audio = loadSound("assets/sounds/EndS1Audio.wav");
  endS2Audio = loadSound("assets/sounds/EndS2Audio.wav");
  endS3Audio = loadSound("assets/sounds/EndS3Audio.wav");

  backgroundAudio = loadSound("assets/sounds/EpicMusic.mp3");


}

// Sets up all the variables of the program
function setup() {
  createCanvas(640, 480);

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
    // console.log(results);
    predictions = results;
  });

  //Intro Target Icon

  introTarget = {
    x: 555, // x location
    y: 410, // y location
    size: 72, // Target size
    collected: true // Verifies is the taarget is active
  };

  // The targets for their respective sequences

  // Sequence 1 targets

  target101 = {
    x: 384,
    y: 150,
    size: 72,
    collected: true
  };

  target102 = {
    x: 486,
    y: 120,
    size: 72,
    collected: true
  };

  target103 = {
    x: 377,
    y: 36,
    size: 72,
    collected: true
  };

  // Sequence 2 targets

  target201 = {
    x: 441,
    y: 366,
    size: 72,
    collected: true
  };

  target202 = {
    x: 441,
    y: 225,
    size: 72,
    collected: true
  };

  target203 = {
    x: 315,
    y: 215,
    size: 72,
    collected: true
  };

  // Sequence 3 targets

  target301 = {
    x: 460,
    y: 430,
    size: 72,
    collected: true
  };

  target302 = {
    x: 354,
    y: 82,
    size: 72,
    collected: true
  };

  target303 = {
    x: 312,
    y: 212,
    size: 72,
    collected: true
  };

  target304 = {
    x: 265,
    y: 309,
    size: 72,
    collected: true
  };

  target305 = {
    x: 500,
    y: 400,
    size: 72,
    collected: true
  };

  target306 = {
    x: 300,
    y: 320,
    size: 72,
    collected: true
  };

  target307 = {
    x: 174,
    y: 189,
    size: 72,
    collected: true
  };

  // Sequence 4 targets

  target401 = {
    collected: true
  };

  // Sequence 5 targets

  target501 = {
    x: 380,
    y: 190,
    size: 72,
    collected: true
  };

  target502 = {
    x: 496,
    y: 352,
    size: 72,
    collected: true
  };

  target503 = {
    x: 407,
    y: 249,
    size: 72,
    collected: true
  };

  target504 = {
    x: 450,
    y: 140,
    size: 72,
    collected: true
  };

  // Sequence 6 targets

  target601 = {
    x: 380,
    y: 163,
    size: 72,
    collected: true
  };

  // Sequence 7 targets

  target701 = {
    x: 323,
    y: 221,
    size: 72,
    collected: true
  };

  target702 = {
    x: 351,
    y: 145,
    size: 72,
    collected: true
  };

  target703 = {
    x: 361,
    y: 69,
    size: 72,
    collected: true
  };

}

// Beginning state
function state1() {
  background(introImage) // Displays the image as the background


}

// Activates the transition towards the next state once the mouse is pressed
function mousePressed() {
  if (state === 'state1') {
    state = 'introScene' // Sets the state to introScene
    introSequenceAudio.play() //Plays the audio of the fist non-interactive sequence

    setTimeout(switchToInstructions, 8000) // Prepares the transition function towards the next state, in the background, for the exact duration of the intro scene.
  }
}

function introScene() {
  background(introSequence) // Plays the intro scene

}

// serves as a transitionnal function to activate the background music and the instruction state.
function switchToInstructions() {

  introTarget.collected = false; // Make the first target active.

  state = 'instructionScene' // Sets the state to instructionScene

  // Activates the background music to be played during the entirety of the program
  if (!backgroundAudio.isPlaying()) {
    backgroundAudio.loop();
    backgroundAudio.setVolume(0.2); // Lowers the volume of the music
  }

}


function instructionScene() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (introTarget.collected === false) {
    background(instructions);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, introTarget.x, introTarget.y)
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand

    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    // Displays the needle base at the base of the user's hand

    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20)
    pop();

    //checks if target is collected

    let d1 = dist(tipX, tipY, introTarget.x, introTarget.y); // Establishe the distance limit
    if (introTarget.collected === false && d1 < introTarget.size / 2) {
      introTarget.collected = true; // De-activates the target
      target101.collected = false; // Activates the next target

      // Transitions to the next state
      state = 'state2'

      //Plays a sound effect
      punchsfx1.play();

    }
  }
}

// The function of the second state and its sequences
function state2() {
  sequence1()
  sequence2()
  sequence3()

}

// Draws what is displayed on screen
function draw() {
  background(0);
  statemachine(); // The state machine function creates multiple states and indicates to the draw function what should be displayed according to the currently active state.
}

// Indication of the state
function statemachine() {
  if (state === `state1`) {
    state1()

  } else if (state === `introScene`) {
    introScene()

  } else if (state === `instructionScene`) {
    instructionScene()

  } else if (state === `state2`) {
    state2()

  } else if (state === 'state3') {
    sequence4()

  } else if (state === 'state4') {
    sequence5()

  } else if (state === 'state5') {
    sequence6()

  } else if (state === 'state6') {
    sequence7()

  } else if (state === 'state7') {
    displayEndSequence1()

  } else if (state === 'state8') {
    sequence8()

  } else if (state === 'state9') {
    displayEndSequence2()

  } else if (state === 'state10') {
    sequence9()

  } else if (state === 'state11') {
    displayEndSequence3()

  } else if (state === 'state12') {
    finalScreen()

  }

}

function sequence1() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target101.collected === false) {
    background(fight101);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target101.x, target101.y);
    pop();
  }

  if (target102.collected === false) {
    background(fight102);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target102.x, target102.y);
    pop();
  }

  if (target103.collected === false) {
    background(fight103);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target103.x, target103.y);
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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

    //checks if target is collected

    let d1 = dist(tipX, tipY, target101.x, target101.y);
    if (target101.collected === false && d1 < target101.size / 2) {
      target101.collected = true;
      target102.collected = false;

      punchsfx1.play();

    }

    let d2 = dist(tipX, tipY, target102.x, target102.y);
    if (target102.collected === false && d2 < target102.size / 2) {
      target102.collected = true;
      target103.collected = false;

      punchsfx2.play();
    }

    let d3 = dist(tipX, tipY, target103.x, target103.y);
    if (target103.collected === false && d3 < target103.size / 2) {
      target103.collected = true;
      target201.collected = false;

      punchsfx1.play();
    }
  }
}

function sequence2() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target201.collected === false) {
    background(fight201);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target201.x, target201.y);
    pop();
  }

  if (target202.collected === false) {
    background(fight202);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target202.x, target202.y);
    pop();
  }

  if (target203.collected === false) {
    background(fight203);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target203.x, target203.y);
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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

    //checks if target is collected

    let d1 = dist(tipX, tipY, target201.x, target201.y);
    if (target201.collected === false && d1 < target201.size / 2) {
      target201.collected = true;
      target202.collected = false;

      punchsfx3.play();

    }
    let d2 = dist(tipX, tipY, target202.x, target202.y);
    if (target202.collected === false && d2 < target202.size / 2) {
      target202.collected = true;
      target203.collected = false;

      punchsfx1.play();
    }

    let d3 = dist(tipX, tipY, target203.x, target203.y);
    if (target203.collected === false && d3 < target203.size / 2) {
      target203.collected = true;
      target301.collected = false;

      punchsfx3.play();
    }
  }
}

function sequence3() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target301.collected === false) {
    background(fight301);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target301.x, target301.y);
    pop();
  }

  if (target302.collected === false) {
    background(fight302);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target302.x, target302.y);
    pop();
  }

  if (target303.collected === false) {
    background(fight303);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target303.x, target303.y)
    pop();
  }

  if (target304.collected === false) {
    background(fight304);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target304.x, target304.y)
    pop();
  }

  if (target305.collected === false) {
    background(fight305);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target305.x, target305.y)
    pop();
  }

  if (target306.collected === false) {
    background(fight306);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target306.x, target306.y)
    pop();
  }

  if (target307.collected === false) {
    background(fight307);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target307.x, target307.y)
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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

    //checks if target is collected

    let d1 = dist(tipX, tipY, target301.x, target301.y);
    if (target301.collected === false && d1 < target301.size / 2) {
      target301.collected = true;
      target302.collected = false;

      punchsfx1.play();

    }
    let d2 = dist(tipX, tipY, target302.x, target302.y);
    if (target302.collected === false && d2 < target202.size / 2) {
      target302.collected = true;
      target303.collected = false;

      punchsfx1.play();
    }

    let d3 = dist(tipX, tipY, target303.x, target303.y);
    if (target303.collected === false && d3 < target303.size / 2) {
      target303.collected = true;
      target304.collected = false;

      punchsfx2.play();
    }

    let d4 = dist(tipX, tipY, target304.x, target304.y);
    if (target304.collected === false && d4 < target304.size / 2) {
      target304.collected = true;
      target305.collected = false;

      punchsfx4.play();

    }

    let d5 = dist(tipX, tipY, target305.x, target305.y);
    if (target305.collected === false && d5 < target305.size / 2) {
      target305.collected = true;
      target306.collected = false;

      lessonSfx.play();
      punchsfx5.play();
    }

    let d6 = dist(tipX, tipY, target306.x, target306.y);
    if (target306.collected === false && d6 < target306.size / 2) {
      target306.collected = true;
      target307.collected = false;

      punchsfx2.play();
    }

    let d7 = dist(tipX, tipY, target307.x, target307.y);
    if (target307.collected === false && d7 < target307.size / 2) {
      target307.collected = true;
      target401.collected = false;

      sfx401.play();

      state = 'state3' // Moves on to the next state

      setTimeout(switchToSequence5, 162) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.

    }
  }
}


function sequence4() {

  // Veryfies if the target is active, then displays it with its respective background

  if (target401.collected === false) {
    background(fight401);

  }
}

function switchToSequence5() {
  state = 'state4' // Moves on to the next state
  sfx402.play(); // Starts the next animation's sound effect
  setTimeout(switchToSequence6, 140) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.
}

function sequence5() {
  background(fight402); // Displays the scene's background

}

function switchToSequence6() {
  state = 'state5' // Moves on to the next state
  sfx403.play(); // Starts the next animation's sound effect
  setTimeout(switchToSequence7, 2000) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.
}

function sequence6() {
  background(fight403); // Displays the scene's background

}

function switchToSequence7() {
  state = 'state6' // Moves on to the next state

  target501.collected = false; // Make the target of the next scene active.

}

function sequence7() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target501.collected === false) {
    background(fight501);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target501.x, target501.y);
    pop();
  }

  if (target502.collected === false) {
    background(fight502);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target502.x, target502.y);
    pop();
  }

  if (target503.collected === false) {
    background(fight503);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target503.x, target503.y);
    pop();
  }

  if (target504.collected === false) {
    background(fight504);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target504.x, target504.y);
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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


    //checks if target is collected

    let d1 = dist(tipX, tipY, target501.x, target501.y);
    if (target501.collected === false && d1 < target501.size / 2) {
      target501.collected = true;
      target502.collected = false;

      punchsfx1.play();

    }

    let d2 = dist(tipX, tipY, target502.x, target502.y);
    if (target502.collected === false && d2 < target502.size / 2) {
      target502.collected = true;
      target503.collected = false;

      punchsfx1.play();

    }

    let d3 = dist(tipX, tipY, target503.x, target503.y);
    if (target503.collected === false && d3 < target503.size / 2) {
      target503.collected = true;
      target504.collected = false;

      punchsfx1.play();

    }

    let d4 = dist(tipX, tipY, target504.x, target504.y);
    if (target504.collected === false && d4 < target504.size / 2) {
      target504.collected = true;

      punchsfx2.play();

      state = 'state7' // Moves on to the next state

      backgroundAudio.setVolume(0.01); // Lowers the volume of the background music

      endS1Audio.play(); // Starts the next animation's sound effect

      setTimeout(switchToEndSequence1, 10160) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.

    }

  }
}

function displayEndSequence1() {
  background(endSequence1) // Displays the scene's background

}

function switchToEndSequence1() {
  state = 'state8' // Moves on to the next state

  backgroundAudio.setVolume(0.2); // Returns the background music's volume back to normal

  target601.collected = false; // Activates the next scene's target

}

function sequence8() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target601.collected === false) {
    background(fight601);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target601.x, target601.y);
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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

    //checks if target is collected

    let d1 = dist(tipX, tipY, target601.x, target601.y);
    if (target601.collected === false && d1 < target601.size / 2) {
      target601.collected = true;

      punchsfx1.play();

      state = 'state9' // Moves on to the next state

      backgroundAudio.setVolume(0.01); // Lowers the volume of the background music

      endS2Audio.play(); // Starts the next animation's sound effect

      setTimeout(switchToEndSequence2, 15190) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.


    }
  }
}

function displayEndSequence2() {
  background(endSequence2) // Displays the scene's background

}

function switchToEndSequence2() {
  state = 'state10' // Moves on to the next state

  backgroundAudio.setVolume(0.2); // Returns the background music's volume back to normal

  target701.collected = false; // Activates the next scene's target

}

function sequence9() {

  // Veryfies if the target is active, then displays it with its respective background at its x and y location

  if (target701.collected === false) {
    background(fight701);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target701.x, target701.y);
    pop();
  }

  if (target702.collected === false) {
    background(fight702);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target702.x, target702.y);
    pop();
  }

  if (target703.collected === false) {
    background(fight703);
    push();
    fill(0, 255, 0);
    noStroke();
    imageMode(CENTER)
    image(targetImage, target703.x, target703.y);
    pop();
  }

  // Establishes the location of the hand and fingers using the ml5 script

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Displays the pointing needle at the location of the users hand and the needle base at the base of the user's hand

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

    //checks if target is collected

    let d1 = dist(tipX, tipY, target701.x, target701.y);
    if (target701.collected === false && d1 < target701.size / 2) {
      target701.collected = true;
      target702.collected = false;

      punchsfx1.play();

    }

    let d2 = dist(tipX, tipY, target702.x, target702.y);
    if (target702.collected === false && d2 < target702.size / 2) {
      target702.collected = true;
      target703.collected = false;

      punchsfx1.play();

    }

    let d3 = dist(tipX, tipY, target703.x, target703.y);
    if (target703.collected === false && d3 < target703.size / 2) {
      target703.collected = true;

      punchsfx2.play();

      state = 'state11' // Moves on to the next state

      backgroundAudio.setVolume(0.01); // Lowers the volume of the background music

      endS3Audio.play(); // Starts the next animation's sound effect

      setTimeout(goToFinalScreen, 12060) // Prepares the transition function towards the next state, in the background, for the exact duration of the scene.

    }

  }
}

function displayEndSequence3() {
  background(endSequence3) // Displays the scene's background

}

function goToFinalScreen() {
  state = 'state12' // Moves on to the next state

  backgroundAudio.setVolume(0.2); // Returns the background music's volume back to normal

}

function finalScreen() {
  background(finalScreenImage) // Displays the final screen
}
