class Target1 {

  constructor(x, y, size) {
    this.x = 90;
    this.y = 90;
    this.size = 63;
    this.active = true;
  }

  display() {
    //Displays the elements as their repective images
    if (this.active = true) {
      push();

      ellipse(this.x, this.y, this.size)

      pop();
    }

  }
}
