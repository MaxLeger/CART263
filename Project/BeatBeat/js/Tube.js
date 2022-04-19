class Tube {

  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.following = false;
    // this.color = color(250, 0, 0);
    this.opacity = 0;
    this.fadeDirection = 0;
    this.fadeSpeed = 99;
    this.active = true;
    this.collected = false;
    this.sizeSpeed = 0;

    this.numCircles = 20;
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
    this.display();
    this.opacity += this.fadeSpeed * this.fadeDirection;
    this.size += this.sizeSpeed
    if (this.fadeDirection === 1 && this.opacity >= 255) {
      this.fadeDirection = -1; //Change of directione
      this.fadeSpeed = 1.71 // Slower fade out
      this.sizeSpeed = -1;
    } else if (this.fadeDirection === -1 && this.opacity <= 0) {
      this.fadeDirection = 0;
      this.sizeSpeed = 0;
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
    if(keyIsPressed){
      return true;
    } else {
      return false;
    }
  }

// How to make indicate tude = missed? To reset the the multiplier?

// if (this.active === true && this opacity = 1 && this.fadeDirection = -1) {
//   tube.missed = true
// }

  checkDragging() {
    if (this.dragging || this.mouseIsOver() && this.isKeyDown()) {
      console.log(this.mouseIsOver());
      console.log(this.isKeyDown());


      for (let i = 0; i < this.circles.length; i++) {
        let c = this.circles[i];
        let d = dist(mouseX, mouseY, c.x, c.y);
        if (d < c.size / 2) {
          if (i === this.circles.length - 1) {
            // scorePerTube += 10;
            // currentMultiplier += 1;
            score += 10;
            this.dragging = false;
            this.fadeSpeed = 99
          }
          return;
        }
      }
      this.dragging = false;
      console.log("DRAGGED OUTSIDE SHAPE!")
    }


  }

  display() {
    for (let i = 0; i < this.circles.length; i++) {
      let c = this.circles[i];
      push();
      noStroke();
      fill(255, 0, 0, this.opacity);
      ellipse(c.x, c.y, c.size);
      pop();
    }
  }

  mousePressed() {
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
    let firstCircle = this.circles[0];
    let d = dist(mouseX, mouseY, firstCircle.x, firstCircle.y);
    if (d < firstCircle.size / 2) {
      this.dragging = true;
    } else {
      this.dragging = false;
    }
  }

  mouseReleased() {
    this.dragging = false;
  }

}
