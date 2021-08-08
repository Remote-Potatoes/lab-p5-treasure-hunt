class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
        this.image;
    }

    draw() {
        image(this.image, this.col, this.row, this.width, this.height);
        this.col = constrain(this.col, 0, (HEIGHT - SQUARE_SIDE));
        this.row = constrain(this.row, 0, (WIDTH - SQUARE_SIDE));
    }    

    moveUp() {
        this.row -= SQUARE_SIDE;
        this.image = loadImage('assets/character-up.png');
      }
    moveDown() {
        this.row += SQUARE_SIDE;
        this.image = loadImage('assets/character-down.png');
      }
    moveLeft() {
        this.col -= SQUARE_SIDE;
        this.image = loadImage('assets/character-left.png');
      }
    moveRight() {
        this.col += SQUARE_SIDE;
        this.image = loadImage('assets/character-right.png');
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
        return this.col + this.width;
      }
}