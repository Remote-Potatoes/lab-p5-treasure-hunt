class Game {
  constructor() {
    this.player = new Player();
    //this.player2 = new Player(50, 60, image);
  }
  // Iteration 1
  // Draw the grid

  draw() {
    this.player.draw();
    //Canvas vertical lines
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    //Canvas horizontal lines
    for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
  get bottomSide() {
    return this.row + this.height;
  }

  get topSide() {
    return this.row;
  }

  get leftSide() {
    return this.col;
  }
  get rightSide() {
    return (this.col = this.rightBoundary);
  }
}
