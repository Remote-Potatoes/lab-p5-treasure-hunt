const game = new Game();

function preload() {
  playerImage = loadImage("./assets/character-down.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.draw();
}
