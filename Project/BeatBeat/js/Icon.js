class Icon {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = 0;
    this.fadeDirection = 0;
    this.fadeSpeed = 99;

    this.color = color(255, 206, 0);


    this.active = true;
    this.collected = false;
    this.sizeSpeed = 0;
  }

  show() {
    //Displays the elements as their repective images
    if (this.collected === false){
    push();
    frameRate(27)

    drawingContext.shadowBlur = 11.7;
    drawingContext.shadowColor = this.color;
    strokeWeight(5.4);
    stroke(255, 255, 255, this.opacity);
    noFill();
    // fill(220, this.opacity);
    ellipse(this.x, this.y, this.size);
    pop();

  }
}


  // displayScore1() {
  //   if (this.collected === true) {
  //     text(5 * currentMultiplier, mouseX+30, mouseY+30);
  //     textSize(22.5);
  //   }
  // }


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
      this.sizeSpeed = -1.17;
    } else if (this.fadeDirection === -1 && this.opacity <= 0) {
      this.fadeDirection = 0;
      this.sizeSpeed = 0;

      if (!this.collected) {
        currentMultiplier = 1;
        success = 0;
      }
    }
    this.show();
    this.colorSwitch();
  }


  mousePressed() {



    // to make an icon = active if opacity > 0


    // How to make Icon = missed?
    // I have this way potentianaly:

    // if (this.active === true && this opacity = 1 && this.fadeDirection = -1) {
    //   icon.missed = true
    // }


    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.opacity > 0 && this.collected === false && this.mouseIsOver()) {
        console.log("click")
      if (this.opacity > 144) {
        score += 5 * currentMultiplier;

        success += 1;

        theGoat = 5 * currentMultiplier;




        // displayScore1();


      } else if (this.opacity > 90) {
        score += 1 * currentMultiplier;

      }
      this.collected = true
    }
    // Makes the object collected
    // If Icon = missed -> reset multiplier

  }

  keyPressed() {


    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active === true && this.opacity > 0 && this.collected === false && this.isKeyDown()  && this.mouseIsOver()) {
        console.log("click")
      if (this.opacity > 180) {
        score += 5 * currentMultiplier;

        success += 1;

      } else if (this.opacity > 90) {
        score += 1 * currentMultiplier;
        // scorePerIcon += 1;
      }
      this.collected = true
    }
    // Makes the object collected

  }

  colorSwitch() {
    if (currentMultiplier >= 1 && currentMultiplier < 10){
      this.color = color(255, 114, 12);
    } if (currentMultiplier >= 10 && currentMultiplier < 20){
      this.color = color(233,15,169);
    } else if (currentMultiplier >= 20 && currentMultiplier < 40) {
      this.color = color(165, 119, 249);
    }  else if (currentMultiplier >= 40 && currentMultiplier < 60) {
      this.color = color(0, 255, 255);
    }  else if (currentMultiplier >= 60 && currentMultiplier < 80) {
      this.color = color(0, 255, 0);
    } else if (currentMultiplier >= 80 && currentMultiplier < 100) {
      this.color = color(192, 255, 0);
    }

  }
}
