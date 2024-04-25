let hotDate;
let bg;
let tbl;
let chair;
let glasses;

// Makes sure the background is loaded in time
function preload() {
  bg = loadImage("Background and objects/background.png");
}

class Alien {
  x = width / 2;
  y = 300;
  // The sprite's neutral expr
  show() {
    // Creates the sprite and designates where it goes
    hotDate = loadImage("Lover Sprites/hottie neutral.png");
    hotDate = new Sprite(width / 2, 300);
    hotDate.img = "Lover Sprites/hottie neutral.png";
    hotDate.layer = 3;
  }
}

function setup() {
  createCanvas(1366, 784);
  background(bg);
  imageMode(CENTER);
  lover = new Alien();
  lover.show();
  chair = loadImage("Background and objects/chair.png");
  chair = new Sprite(width / 2, 480);
  chair.img = "Background and objects/chair.png";
  chair.layer = 1;
  tbl = loadImage("Background and objects/table.png");
  tbl = new Sprite(width / 2, 665);
  tbl.layer = 2;
  tbl.img = "Background and objects/table.png";
  glasses = loadImage("Background and objects/glasses.png");
  glasses = new Sprite(600, 620);
  glasses.img = "Background and objects/glasses.png";
  glasses.layer = 4;
}

function draw() {}
