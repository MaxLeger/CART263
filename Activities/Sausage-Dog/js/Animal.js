class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = 0;
  }

  update() {
    // Calls the display method
    this.display();
  }

  display() {
    // Displays the Animal images on the canvas
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    // Transalte the image postion
    rotate(this.angle);
    // Image rotation
    image(this.image, 0, 0);
    pop();
  }

  overlap(x, y) {
    // Checks if images are overlapping
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2) {
      return true;
    } else {
      return false;
    }
  }
}
