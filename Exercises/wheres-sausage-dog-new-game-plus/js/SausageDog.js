class SausageDog extends Animal {
  // Calls the constructor
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update() {
    super.update();
    // For rotation
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    // Checks if Sausage-Dog was clicked
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      bugsSFX.play();
    }
  }
}
