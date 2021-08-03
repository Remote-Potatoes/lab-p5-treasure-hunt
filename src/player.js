// i've read about the "load/preload function" but i didn't know where to set it and how to do that because i've tried so many things that didn't work to display the "character-down.png" image.
const playerDown = new Player(0, 0, "/assets/character-down.png");
let col = 0;
let row = 0;
let playerX = SQUARE_SIDE;
let playerY = SQUARE_SIDE;

// Are the two Parameters right or it should include width and height?
class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = playerX;
    this.height = playerY;
  }

  drawImage(image) {
    image(playerDown, this.col, this.row, this.width, this.height);
  }
  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }
}

// const player = new Player(0, 0, {
//   left: "/assets/character-left.png",
//   up: "/assets/character-up.png",
//   right: "/assets/character-right.png",
//   down: "/assets/character-down.png",
// });
