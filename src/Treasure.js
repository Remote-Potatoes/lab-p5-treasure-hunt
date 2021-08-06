class Treasure {
  constructor() {
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }
  setRandomPosition() {
    this.col = random(HEIGHT);
    this.row = random(WIDTH);
  }
  draw() {
    this.setRandomPosition();
    image(treasureImage, this.col, this.row, this.width, this.height);
  }
}
