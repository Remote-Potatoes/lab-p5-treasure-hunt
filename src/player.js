// Are the two Parameters right or it should include width and height?
class Player {
  constructor(col, row) {
    this.col = 0; //x
    this.row = 0; //y
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.rightBoundary = WIDTH - this.width;
    this.bottomBoundary = HEIGHT - this.height;
  }

  draw() {
    this.move();
    this.maintainBoundaries(); //revisar
    image(playerImage, this.col, this.row, this.width, this.height);
    // console.log(this.col, this.row);
  }

  maintainBoundaries() {
    //Until the rightside
    if (this.col >= this.rightBoundary) {
      this.col = this.rightBoundary;
    }
    //Until the bottom
    if (this.row >= this.bottomBoundary) {
      this.row = this.bottomBoundary;
    }
    //Until the leftside
    if (this.col <= 0) {
      this.col = 0;
    }
    //Until the topside
    if (this.row <= 0) {
      this.row = 0;
    }
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.row += SQUARE_SIDE;
    }
    if (keyIsDown(UP_ARROW)) {
      this.row -= SQUARE_SIDE;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.col -= SQUARE_SIDE;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.col += SQUARE_SIDE;
    }
  }
  // get bottomSide() {
  //   return this.row + this.height;
  // }

  // get topSide() {
  //   return this.row;
  // }

  // get leftSide() {
  //   return this.col;
  // }
  // get rightSide() {
  //   return (this.col = this.rightBoundary);
  // }
}

// const player = new Player(0, 0, {
//   left: "/assets/character-left.png",
//   up: "/assets/character-up.png",
//   right: "/assets/character-right.png",
//   down: "/assets/character-down.png",
// });
