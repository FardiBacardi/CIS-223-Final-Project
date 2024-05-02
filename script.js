let hotDate;
let bg;
let title;
let tbl;
let chair;
let glasses;
let pName;
let correct = false;
let affection = 0;

// Makes sure the background is loaded in time
function preload() {
  title = loadImage("ph title.png");
  bg = loadImage("Background and objects/background.png");
}

class DialogueBox {
  x;
  y;
  show() {
    diaBox = new Sprite(this.x, this.y);
    diaBox.img = "Boxes/dialogue box.png";
  }
  hide() {}
}

class ChoiceBox {
  x;
  y;
  show() {
    choiceBox = new Sprite(this.x, this.y);
    choiceBox.img = "Boxes/choice box.png";
  }
  hide() {}
}

class Alien {
  x = width / 2;
  y = 300;
  // The sprite's neutral expr
  show() {
    // Creates the sprite and designates where it goes
    hotDate = new Sprite(this.x, this.y);
    hotDate.img = "Lover Sprites/hottie neutral.png";
    hotDate.layer = 3;
  }
  happy() {
    hotDate.img = "Lover Sprites/hottie happy.png";
  }
  disgust() {
    hotDate.img = "Lover Sprites/hottie disgust.png";
  }
  flirty() {
    hotDate.img = "Lover Sprites/hottie flirty.png";
  }
}

class Chair {
  x = width / 2;
  y = 480;
  show() {
    chair = new Sprite(this.x, this.y);
    chair.img = "Background and objects/chair.png";
    chair.layer = 1;
  }
}

class Tbl {
  x = width / 2;
  y = 665;
  show() {
    tbl = new Sprite(this.x, this.y);
    tbl.layer = 2;
    tbl.img = "Background and objects/table.png";
  }
}

class Glasses {
  x = 600;
  y = 620;
  show() {
    glasses = new Sprite(this.x, this.y);
    glasses.img = "Background and objects/glasses.png";
    glasses.layer = 4;
  }
}

function setup() {
  gameStart();
  createCanvas(1366, 784);
  background(bg);
  imageMode(CENTER);
  lover = new Alien();
  lover.show();
  seat = new Chair();
  seat.show();
  surface = new Tbl();
  surface.show();
  glass = new Glasses();
  glass.show();
}

function gameStart() {
  // Repeats until the player confirms their name
  while (correct === false) {
    // Asks the player to input their name
    pName = prompt("Please enter your name.");
    // Asks the player for confirmation on name choice
    correct = confirm(`Is this correct?: \n${pName}`);
  }
}

function dateStart() {
  // Create a dialogue box
  chat = new DialogueBox();
  chat.show();
  // Add text to the dialogue box
  text(introDia);
  // Change the text every time the player clicks on the box
}

function appetizers() {
  // Ask the player which appetizer they want
  // Good choice
  let optionA;
  // Bad choice
  let optionB;
  if (mouseClicked(optionA)) {
    // If the player picks the correct option
    affection++;
  } else if (mouseClicked(optionB)) {
    // If the player picks the wrong option
    affection--;
  }
}

function whyDate() {
  affection++;
  // If the player picks the wrong option
  affection--;
}

function mainCourse() {
  // Ask the player which meal they want
  // If the player picks the correct option
  affection++;
  // If the player picks the wrong option
  affection--;
}

function hobbies() {
  affection++;
  // If the player picks the wrong option
  affection--;
}

function dessert() {
  // Ask the player which dessert they want
  // If the player picks the correct option
  affection++;
  // If the player picks the wrong option
  affection--;
}

function theBill() {
  affection++;
  // If the player picks the wrong option
  affection--;
}

let introDia = [
  `Hey, you're ${name}, right?`,
  `Huh… I gotta say, you're a lot more… dehydrated… than you looked in your pictures.`,
  `Not that it matters or anything, I'm sure that's common for you humans.`,
  `I'm Philix, by the way. Though, I guess you already knew that, right? 
  It's nice to finally meet you in person and not planets and planets away, haha!`,
];

let marriageDia = [
  `Wow, I think you're my dream lover… You're so perfect in every way…`,
  `I- Let's get married. Right here, right now.`,
  `[Name]... I love you.`,
  `I have never met anyone in my life who has made me feel the way you do, and I really, truly think that you are 
  the one.`,
  `Now, let's ride off into the sunset and have a million children together.`,
];

let lovinDia = [
  `You know, I really enjoyed the night with you, [name].`,
  `I feel really comfortable with you, and I can see us going further in this little relationship of ours.`,
  `Do you… wanna come over to my place? Maybe we could spend a little more time together…`,
];

let rejectDia = [
  `Listen, I'm sure you're a lovely, lovely, very dehydrated person.`,
  `You're just… not the one for me.`,
  `I appreciate you taking me out tonight, but I think this is the farthest I'm willing to take us.`,
  `Goodbye, [name].`,
];

let deathDia = [
  `You are the most vile, disgusting, horrendous, dehydrated organism to ever exist not only on this planet or your own, but to ever be spat out by the cosmos.`,
  `You shame not only your birth giver, but your entire bloodline and entire race.`,
  `I have never met anyone in my life who has made me feel the way you do, and that's not a compliment.`,
  `In fact, you don't even deserve to live on any planet!`,
  `It's time to die.`,
];

function draw() {}
