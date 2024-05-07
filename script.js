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

function dialogueBox(x, y, message) {
  const diaBox = new Sprite(x, y);
  diaBox.layer = 5;
  diaBox.img = "Boxes/dialogue box.png";
  diaBox.w = diaBox.img.width;
  diaBox.draw = function () {
    image(diaBox.img, diaBox.x, diaBox.y);
    textSize(40);
    textAlign(CENTER);
    fill(158, 0, 142);
    text(message, diaBox.x, diaBox.y);
  };
  return diaBox;
}

class ChoiceBox {
  x = 680;
  y;
  choices;
  constructor(customY, customC) {
    this.y = customY;
    this.choices = customC;
  }
  show() {
    const choiceBox = new Sprite(this.x, this.y);
    choiceBox.img = "Boxes/choice box.png";
    textSize(40);
    fill(158, 0, 142);
    text(this.choices, choiceBox.x, choiceBox.y);
    choiceBox.layer = 6;
  }
}

class Alien {
  x = width / 2;
  y = 300;
  show() {
    // Creates the sprite and designates where it goes
    hotDate = new Sprite(this.x, this.y);
    hotDate.img = "Lover Sprites/hottie neutral.png";
    hotDate.layer = 3;
  }
  neutral() {
    hotDate.img = "Lover Sprites/hottie neutral.png";
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
  angry() {
    hotDate.img = "Lover Sprites/hottie angry.png";
  }
  shocked() {
    hotDate.img = "Lover Sprites/hottie shocked.png";
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
  dateStart();
  createCanvas(1366, 784);
  background(bg);
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
  let index = 0;
  dialogueBox(340, 280, introDia[index]);
  // When the dialogue box is clicked, it moves on the to next dialogue
  if (kb.presses(" ")) {
    index++;
    message = introDia[index];
  }
  // When the last bit of dialogue is clicked, it moves on to the next function
  if (index > 4) {
    appetizers();
  }
}

function appetizers(optionA, optionB) {
  // Ask the player which appetizer they want
  dialogueBox(340, 280, "So, what do you wanna get for appetizers?");
  // Good choice
  optionA = new ChoiceBox(150, "Yum'merz");
  optionA.show();
  // Alien gives their response and then moves on to the next question
  if (mouse.presses(optionA)) {
    affection++;
    message = "Yes! Those are sooo good!";
    whyDate();
  }
  // Bad choice
  optionB = new ChoiceBox(350, "Not'Chos");
  optionB.show();
  if (mouse.presses(optionB)) {
    affection--;
    message = "I think I'm gonna save room for the main course...";
    whyDate();
  }
}

function whyDate() {
  dialogueBox(
    340,
    280,
    "I gotta ask... what made you expand out to the cosmos for dating?"
  );
  optionA = new ChoiceBox(150, "Aliens are hot");
  optionA.show();
  affection++;
  lover.flirty();
  message = "Well aren't you adorable?";
  // If the player picks the wrong option
  optionB = new ChoiceBox(350, "Nobody on Earth wanted me");
  optionB.show();
  affection--;
  lover.disgust();
  message = "That's kind of depressing...";
}

function mainCourse() {
  // Ask the player which meal they want
  dialogueBox(340, 280, "What're you getting for your main course?");
  // Good choice
  optionA = new ChoiceBox(150, "Elusive Steak");
  optionA.show();
  // Bad choice
  optionB = new ChoiceBox(350, "Vegan Meat Lover");
  optionB.show();
  if (mouse.presses()) {
    if (mouse.presses()) {
      // If the player picks the correct option
      affection++;
      lover.happy();
      message =
        "Whoa, that looks delicious! Mind if I take a bite? Or two bites? Or three?";
    } else if (mouse.presses()) {
    } else if (mouse.presses()) {
      // If the player picks the wrong option
      affection--;
      lover.disgust();
      message = "Oh... that looks... interesting...";
    }
  }
}

function hobbies() {
  optionA = new ChoiceBox(150, "Gaming");
  optionA.show();
  affection--;
  message = "Oh. That's... cool... I guess...";
  // If the player picks the wrong option
  optionB = new ChoiceBox(350, "Killing people with rocks");
  optionB.show();
  affection++;
  message = "Damn... you must be pretty strong, huh?";
}

function dessert() {
  // Ask the player which dessert they want
  dialogueBox(340, 280, "Dessert time! What do you think we should get?");
  // Good choice
  optionA = new ChoiceBox(100, "Scorching Lava Cake");
  optionA.show();
  // Bad choice
  optionB = new ChoiceBox(100, "Astronaut Ice Cream");
  optionB.show();
  if (mouse.presses()) {
    if (mouse.presses()) {
      // If the player picks the correct option
      affection++;
      lover.happy();
      dialogueBox(x, y, "It's like you read my mind! Can humans read minds?");
    } else if (mouse.presses()) {
    } else if (mouse.presses()) {
      // If the player picks the wrong option
      affection--;
      lover.disgust();
      dialogueBox(
        x,
        y,
        "You can have it, I'm actually really full. And allergic. And it has gluten and I can't have that either."
      );
    }
  }
}

function theBill() {
  dialogueBox(
    340,
    280,
    "WHOA!!! THIS BILL IS OUTRAGEOUS!!! Ugh, don't worry, I'll pay for it."
  );
  optionB = new ChoiceBox(150, "Let them pay for it");
  optionB.show();
  affection--;
  optionA = new ChoiceBox(350, "Give them counterfeit money");
  optionA.show();
  affection++;
}

function theEnd() {
  // If the player has max affection
  if (affection === 6) {
    lover.happy();
    dialogueBox(340, 280, marriageDia);
    // If the player has high affection
  } else if (affection < 6 && affection > 3) {
    lover.neutral();
    dialogueBox(340, 280, lovinDia);
    // If the player has low affection
  } else if (affection < 4 && affection > 0) {
    lover.disgust();
    dialogueBox(340, 280, rejectDia);
    // If the player gains no affection
  } else {
    lover.angry();
    dialogueBox(340, 280, deathDia);
  }
}

let introDia = [
  `Hey, you're ${pName}, right?`,
  `Huh… I gotta say, you're a lot more… dehydrated… than you looked in your pictures.`,
  `Not that it matters or anything, I'm sure that's common for you humans.`,
  `I'm Philix, by the way. Though, I guess you already knew that, right? 
  It's nice to finally meet you in person and not planets and planets away, haha!`,
];

let marriageDia = [
  `Wow, I think you're my dream lover… You're so perfect in every way…`,
  `I- Let's get married. Right here, right now.`,
  `${pName}... I love you.`,
  `I have never met anyone in my life who has made me feel the way you do, and I really, truly think that you are 
  the one.`,
  `Now, let's ride off into the sunset and have a million children together.`,
];

let lovinDia = [
  `You know, I really enjoyed the night with you, ${pName}.`,
  `I feel really comfortable with you, and I can see us going further in this little relationship of ours.`,
  `Do you… wanna come over to my place? Maybe we could spend a little more time together…`,
];

let rejectDia = [
  `Listen, I'm sure you're a lovely, lovely, very dehydrated person.`,
  `You're just… not the one for me.`,
  `I appreciate you taking me out tonight, but I think this is the farthest I'm willing to take us.`,
  `Goodbye, ${pName}.`,
];

let deathDia = [
  `You are the most vile, disgusting, horrendous, dehydrated organism to ever exist not only on this planet or your own, but to ever be spat out by the cosmos.`,
  `You shame not only your birth giver, but your entire bloodline and entire race.`,
  `I have never met anyone in my life who has made me feel the way you do, and that's not a compliment.`,
  `In fact, you don't even deserve to live on any planet!`,
  `It's time to die, ${pName}.`,
];

function draw() {}
