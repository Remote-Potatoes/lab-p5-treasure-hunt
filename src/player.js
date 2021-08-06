// Are the two Parameters right or it should include width and height?
class Player {
  constructor(col, row, width, height) {
    this.col = 0; //x
    this.row = 0; //y
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }

  draw() {
    this.keyPressed();
    this.maintainBoundaries(); //revisar
    image(playerImage, this.col, this.row, this.width, this.height);
    // console.log(this.col, this.row);
  }

  keyPressed() {
    if (keyCode == DOWN_ARROW) {
      this.row += 1; //How to move the Viking square by square, not continuosly?
    }

    if (keyCode == UP_ARROW) {
      this.row -= SQUARE_SIDE;
    }
    if (keyCode == LEFT_ARROW) {
      this.col -= SQUARE_SIDE;
    }
    if (keyCode == RIGHT_ARROW) {
      this.col += SQUARE_SIDE;
    }
    clear();
  }

  maintainBoundaries() {
    // the rightside
    if (this.col >= this.rightBoundary) {
      this.col = this.rightBoundary;
    }
    // the bottom
    if (this.row >= this.bottomBoundary) {
      this.row = this.bottomBoundary;
    }
    // the leftside
    if (this.col <= 0) {
      this.col = 0;
    }
    //the topside
    if (this.row <= 0) {
      this.row = 0;
    }
  }

  // const player = new Player(0, 0, {
  //   left: "/assets/character-left.png",
  //   up: "/assets/character-up.png",
  //   right: "/assets/character-right.png",
  //   down: "/assets/character-down.png",
  // });
}
