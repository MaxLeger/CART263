class Icon {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 117;
    this.opacity = 0;
    this.fadeDirection = 0;
    this.fadeSpeed = 30;
    this.active = true;
    this.collected = false;
    this.sizeSpeed = 0;
  }

  show() {
    //Displays the elements as their repective images
    if (this.collected === false){
    push();
    strokeWeight(5.4);
    stroke(255, 0, 0, this.opacity);
    fill(220, this.opacity);
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
    if(keyIsPressed){
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
      this.sizeSpeed = -1.44;
    } else if (this.fadeDirection === -1 && this.opacity <= 0) {
      this.fadeDirection = 0;
      this.sizeSpeed = 0;
    }
    this.show()
  }


  mousePressed() {


    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.collected === false && this.mouseIsOver()) {
        console.log("click")
      if (this.opacity > 180) {
        score += 5;
      } else if (this.opacity > 90) {
        score += 1;
      }
      this.collected = true
    }
    // Makes the object collected

  }

  keyPressed() {


    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.collected === false && this.isKeyDown()  && this.mouseIsOver()) {
        console.log("click")
      if (this.opacity > 180) {
        score += 5;
      } else if (this.opacity > 90) {
        score += 1;
      }
      this.collected = true
    }
    // Makes the object collected

  }

}
