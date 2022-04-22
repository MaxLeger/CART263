/***********************************************
FINAL Project: BEAT-BEAT
MGL

This is the Icon class oject class for the game.
Collecting them or not influences the poins system
************************************************/

class Icon {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = 0; // Invisble
    this.fadeDirection = 0; // Doesn't spawn
    this.fadeSpeed = 99; // Makes it spawn fast
    this.color = color(255, 206, 0); // Starting color
    this.active = true;
    this.collected = false;
    this.sizeSpeed = 0;
  }

  show() {
    //Displays the Icons at location and oopacity
    if (this.collected === false) {
      push();
      frameRate(27)
      //Glow effect
      drawingContext.shadowBlur = 11.7;
      drawingContext.shadowColor = this.color;
      strokeWeight(5.4);
      stroke(255, 255, 255, this.opacity);
      noFill();
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }

  mouseIsOver() {
    // Get the distance between the mouse and the shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    // If it's smaller than the radius of the shape (circle)
    // then the mouse is inside the shape! Otherwise not!
    if (d < this.size / 2) {
      return true;
    } else {
      return false;
    }
  }

  isKeyDown() {
    //Checks if key is pressed
    if (keyIsPressed) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    // Rules for the fade in and the the fade out of the this
    this.opacity += this.fadeSpeed * this.fadeDirection;
    this.size += this.sizeSpeed
    if (this.fadeDirection === 1 && this.opacity >= 255) {
      this.fadeDirection = -1; //Change of directione
      this.fadeSpeed = 5 // Slower fade out
      this.sizeSpeed = -1.17; // Icons become smaller
    } else if (this.fadeDirection === -1 && this.opacity <= 0) {
      // when opacity hits zero, the icons dissapears and is considered missed
      this.fadeDirection = 0;
      this.sizeSpeed = 0;

      if (!this.collected) {
        currentMultiplier = 1; // resets the multiplier upon miss
        success = 0; // resets the amount of consecutive upon miss
      }
    }
    this.show();
    this.colorSwitch();
  }

  mousePressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.opacity > 0 && this.collected === false && this.mouseIsOver()) {
      console.log("click")
      if (this.opacity > 144) {

        // When opcaity is above 144: It is considered a perfect score and:
        score += 5 * currentMultiplier; // Increases the score

        success += 1; // Increases the amount of consecutive success

        scoreIndicator = 5 * currentMultiplier; // Influences the displayed score

      } else if (this.opacity > 90) {
        // When opcaity is above 90: It is considered a good score and:
        score += 1 * currentMultiplier; // Increases the score

        scoreIndicator = 1 * currentMultiplier; // Influences the displayed score
      }
      this.collected = true
    }
  }

  keyPressed() {

    //Gives the option for the player to collect icona using keys as well
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.opacity > 0 && this.collected === false && this.isKeyDown() && this.mouseIsOver()) {
      console.log("click")
      if (this.opacity > 180) {
        score += 5 * currentMultiplier;

        success += 1;

      } else if (this.opacity > 90) {
        score += 1 * currentMultiplier;
      }
      this.collected = true
    }
  }

  // Changes the Icon's hue for different thresholds of multiplying factors.
  colorSwitch() {
    if (currentMultiplier >= 1 && currentMultiplier < 10) {
      this.color = color(255, 114, 12);
    }
    if (currentMultiplier >= 10 && currentMultiplier < 20) {
      this.color = color(233, 15, 169);
    } else if (currentMultiplier >= 20 && currentMultiplier < 40) {
      this.color = color(165, 119, 249);
    } else if (currentMultiplier >= 40 && currentMultiplier < 60) {
      this.color = color(0, 255, 255);
    } else if (currentMultiplier >= 60 && currentMultiplier < 80) {
      this.color = color(0, 255, 0);
    } else if (currentMultiplier >= 80 && currentMultiplier < 100) {
      this.color = color(192, 255, 0);
    }
  }
}
