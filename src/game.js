class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage('assets/character-down.png');
    this.treasure.image = loadImage('assets/treasure.png');
  }

  draw() {
    this.player.draw();
    this.treasure.drawTreasure();

    if (this.collisionCheck(this.player, this.treasure)) {
      this.treasure.setRandomPosition();
    }
  }

  drawGrid() {
    for (let x = 0; x < WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT; y += SQUARE_SIDE ) {
        rect (x, y , 100 , 100);
      }
    }
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }

  collisionCheck(player, treasure) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < treasure.topSide) {
      return false;
    }

    if (player.rightSide < treasure.leftSide) {
      return false;
    }

    if (player.leftSide > treasure.rightSide) {
      return false;
    }

    if (player.topSide > treasure.bottomSide) {
      return false;
    }

    return true;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      game.player.moveUp()
  }
  if (keyCode === DOWN_ARROW) {
      game.player.moveDown()
  }
  if (keyCode === LEFT_ARROW) {
      game.player.moveLeft()
  }
  if (keyCode === RIGHT_ARROW) {
      game.player.moveRight()
  }
} 

