class Treasure {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
        this.image;
      }

      drawTreasure() {
        image(this.image, this.col, this.row, this.width, this.height);
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

      setRandomPosition() {
        this.col = Math.floor(random(gridArray));
        this.row = Math.floor(random(gridArray));
      }
}