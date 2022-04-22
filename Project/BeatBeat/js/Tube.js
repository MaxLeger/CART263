class Tube {

  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.following = false;
    this.color = color(0, 0, 255);
    this.opacity = 0;
    this.fadeDirection = 0;
    this.fadeSpeed = 99;
    this.active = true;
    this.collected = false;
    this.sizeSpeed = 0;
    this.numCircles = 18;

    // Sets up the array for the circles that create the tube.
    this.circles = [];
    for (let i = 0; i < this.numCircles; i++) {
      let newCircle = {
        x: lerp(this.startX, this.endX, i / this.numCircles),
        y: lerp(this.startY, this.endY, i / this.numCircles),
        size: 99
      }
      this.circles.push(newCircle);
    }
  }



  update() {
    this.checkDragging();
    this.displayUnderTube();
    this.displayUpperTube();
    this.opacity += this.fadeSpeed * this.fadeDirection;
    this.size += this.sizeSpeed
    if (this.fadeDirection === 1 && this.opacity >= 255) {
      this.fadeDirection = -1; //Change of directione
      this.fadeSpeed = 5.4 // Slower fade out
      this.sizeSpeed = -1; // Makes it smaller
    } else if (this.fadeDirection === -1 && this.opacity <= 0) { // Indicator of if the circle was missed
      this.fadeDirection = 0;
      this.sizeSpeed = 0;

      if (!this.collected) { // Resets the values from the miss
        currentMultiplier = 1;
        success = 0;
      }
    }
    this.colorSwitch();
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
    // verifies if key is down
    if (keyIsPressed) {
      return true;
    } else {
      return false;
    }
  }

  checkDragging() {
    // Verifies if the player is dragging inside the circles
    if (this.dragging || this.mouseIsOver() && this.isKeyDown()) {
      console.log(this.mouseIsOver());
      console.log(this.isKeyDown());

      for (let i = 0; i < this.circles.length; i++) {
        let c = this.circles[i];
        let d = dist(mouseX, mouseY, c.x, c.y);
        if (d < c.size / 2) {
          if (i === this.circles.length - 1) { // If the player reaches the laster circle while dragging inside the circle:

            score += 10 * currentMultiplier; // Increses the score

            scoreIndicator = 10 * currentMultiplier; // Influences the displayed score
            success += 1; // Increases the amount of consecutive success

            this.dragging = false; // Done dragging
            this.fadeSpeed = 99; // Fades away quickly
            this.collected = true; // Tube is collected
          }
          return;
        }
      }
      this.dragging = false;
      console.log("DRAGGED OUTSIDE SHAPE!")
    }
  }

  // Displays the Tube's core

  displayUpperTube() {
    for (let i = 0; i < this.circles.length; i++) {
      let c = this.circles[i];
      push();
      noStroke();
      fill(255, 255, 255, this.opacity);
      ellipse(c.x, c.y, c.size);
      pop();
    }
  }

  // Displays the Tube's exterior glow

  displayUnderTube() {
    for (let i = 0; i < this.circles.length; i++) {
      let c = this.circles[i];
      push();
      drawingContext.shadowBlur = 22.5;
      drawingContext.shadowColor = this.color;
      noStroke();
      fill(255, 255, 255, this.opacity);
      ellipse(c.x, c.y, c.size + 4.5);
      pop();
    }
  }

  mousePressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    let firstCircle = this.circles[0];
    let d = dist(mouseX, mouseY, firstCircle.x, firstCircle.y);
    if (d < firstCircle.size / 2) {
      this.dragging = true;
      // this.color = color(170, 0, 255);
    } else {
      this.dragging = false;
    }
  }

  keyPressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    let firstCircle = this.circles[0];
    let d = dist(mouseX, mouseY, firstCircle.x, firstCircle.y);
    if (d < firstCircle.size / 2) {
      this.dragging = true;
    } else {
      this.dragging = false;
    }
  }

  // checks if mouse is released, if so, this is not dragging
  mouseReleased() {
    this.dragging = false;
  }

  // Changes a Tube's hue for different thresholds of multiplying factors.
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
