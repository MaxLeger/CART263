class Icon {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 90;
    this.opacity = 0;
    this.fadeDirection = 0;
    this.fadeSpeed = 30;
    this.active = false;
    this.collected = false;
  }

  show() {

    push();
    noStroke();
    fill(255, 0, 0, this.opacity);
    ellipse(this.x, this.y, this.size);
    pop();

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


  mousePressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.collected === false && this.mouseIsOver()) {
      if (this.opacity > 200) {
        score += 5;
      } else if (this.opacity > 127) {
        score += 1;
      }
    }
    this.collected = true
  }

}
