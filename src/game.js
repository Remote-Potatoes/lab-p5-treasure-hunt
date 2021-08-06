class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }
  // Iteration 1
  // Draw the grid

  draw() {
    this.player.draw();
    this.treasure.draw();
    //Canvas vertical lines
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    //Canvas horizontal lines
    for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}
