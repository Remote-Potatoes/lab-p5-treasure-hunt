class Game {
  // Iteration 1
  // Draw the grid

  drawGrid() {
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}

//do we need a constructor hier?
