/***********************************************
p5 project #2: NIGHT AT THE MOVIE: THE MASTER

By MGL

MAIN JS CODE:
************************************************/

/***********************************************
Notes;

-Add a delay on sequence fight307



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



let state = `state3`;

let fight101
let fight102
let fight103

let fight201
let fight202
let fight203

let fight301
let fight302
let fight303
let fight304
let fight305
let fight306
let fight307

let fight401
let fight402
let fight403


// Sound effects

let punchsfx1
let punchsfx2
let punchsfx3
let punchsfx4
let punchsfx5
let lessonSfx
let sfx401
let sfx402
let sfx404


function preload() {

  targetImage = loadImage("assets/images/TargetIcon.png");

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

  // Sound effecs

  sfx401 = loadSound("assets/sounds/401SFX.wav");
  sfx402 = loadSound("assets/sounds/sfx402.wav");
  sfx403 = loadSound("assets/sounds/sfx403.wav");

  punchsfx1 = loadSound("assets/sounds/punchsfx1.wav");
  punchsfx2 = loadSound("assets/sounds/punchsfx2.wav");
  punchsfx3 = loadSound("assets/sounds/punchsfx3.wav");
  punchsfx4 = loadSound("assets/sounds/punchsfx4.wav");
  punchsfx5 = loadSound("assets/sounds/punchsfx5.wav");
  lessonSfx = loadSound("assets/sounds/lessonSfx.wav");

}

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
    console.log(results);
    predictions = results;
  });

  // The target101 definition
  target101 = {
    x: 384,
    y: 150,
    size: 72,
    collected: false
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

  target401 = {
    collected: false
  };


}


function state1() {
  image(introImage, 0, 0);
}


function state2() {
  sequence1()
  sequence2()
  sequence3()

}


function draw() {
  background(0);
  statemachine();
}

// Indication of the state
function statemachine() {
  if (state === `state1`) {
    state1()

  } else if (state === `state2`) {
    state2()

  } else if (state === 'state3') {
    sequence4()


  } else if (state === 'state4') {
    sequence5()

  } else if (state === 'state5') {
    sequence6()

  }


}

function sequence1() {


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

    //check if target101 Pop

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
    image(targetImage,target202.x, target202.y);
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

    //check if target101 Pop

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

    //check if target101 Pop

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

      state = 'state3'


    }
  }
}


function sequence4() {

  if (target401.collected === false) {
    background(fight401);
    setTimeout(switchToSequence5, 162)
    //

  }
}

function switchToSequence5() {
  state = 'state4'
  sfx402.play();
}

function sequence5() {
  background(fight402);
  setTimeout(switchToSequence6, 140)
}

function switchToSequence6() {
  state = 'state5'
  sfx403.play();
}

function sequence6() {
  background(fight403);
  // setTimeout(switchToSequence6, 2000)
}

// 00:00:00:14
