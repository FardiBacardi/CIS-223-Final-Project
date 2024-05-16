// The tool I used for this project is p5play. I learned that p5play is an extension of p5 that allows users to create games
// and utilizes many new tools, most notably sprites, which are objects that can be moved around the canvas. There are many
// functions that center around the use of sprites, such as update, which updates the sprite's animation,
// and p5play also allows a custom draw function for each sprite as well. This project includes several variables and constants that
// are used for storing information like the player's name, dialogue, sprites, and player choices. It also includes conditionals that
// are used to determine whether the player is pressing the space bar, clicking on a sprite, or if a variable has reached a specific
// number. Iteration is used while prompting the player for their name, where it will continue to ask the player for their name until
// they submit something. This project also demonstrates the use of defining functions as demonstrated with the dialogue and choice
// box functions, both of which contain parameters and return values. Arrays are used to contain the alien love interest's dialogue,
// where the text will change to the next line of dialogue after the player presses the space bar. Finally, the project also contains
// classes, which are used to customize the sprites, such as the alien and the furniture.

// Variables to store the sprites
let hotDate;
let bg;
let title;
let tbl;
let chair;
let glasses;
// For storing the players name
let pName;
// Used to check whether the player has correctly inputted their name
let correct = false;
// The amount of affection points the player has earned
let affection = 0;
// Stores the various alien dialogue
let introDial;
let queDial;
let yayDial;
let nayDial;
// Variables for the choices in the choice box
let optionA;
let optionB;
// Preloaded image variables
let choBo;
let romPartner;
let recliner;
let foodHolder;
let cup;
let talkBox;
// Variables that check to see if the round is done
let round1Done = false;
let round2Done = false;
let round3Done = false;
let round4Done = false;
let round5Done = false;
let finalRoundDone = false;

gameStart();

// Asks the player for their name
function gameStart() {
  // Repeats until the player confirms their name
  while (correct === false) {
    // Asks the player to input their name
    pName = prompt("Please enter your name.");
    // Asks the player for confirmation on name choice
    correct = confirm(`Is this correct?: \n${pName}`);
  }
}

// Intro dialogue
let dialogue = [
  `Hey, you're ${pName}, right?`,
  `Huh… I gotta say, you're a lot more… dehydrated… than you looked in your pictures.`,
  `Not that it matters or anything, I'm sure that's common for you humans.`,
  `I'm Philix, by the way. Though, I guess you already knew that, right? 
  It's nice to finally meet you in person and not planets and planets away, haha!`,
];

// The different questions the alien asks the player
let questionDia = [
  `So, what do you wanna get for appetizers?`,
  `I gotta ask... what made you expand out to the cosmos for dating?`,
  `What're you getting for the main course?`,
  `So what do you do for fun?`,
  `Dessert time! What do you think we should get?`,
  `WHOA!!! THIS BILL IS OUTRAGEOUS!!! Ugh, don't worry, I'll pay for it.`,
];

// Dialogue the player gets if the alien approves their choices
let approvalDia = [
  `I order those all the time when I go here! I totally agree with you.`,
  `Well aren't you adorable?`,
  `Whoa, that looks delicious! Mind if I take a bite? Or two bites? Or three?`,
  `Ooh, I like them a little crazy...`,
  `It's like you read my mind! Can humans read minds?`,
  `Yo, is this a forgery?! You're so smart!`,
];

// Dialogue the player gets if the alien disapproves their choices
let disapprovalDia = [
  `I think I'm actually gonna save room for the main course...`,
  `That's kind of depressing...`,
  `Oh... that looks... interesting...`,
  `Oh. That's... cool... I guess...`,
  `You can have it, I'm actually really full. And allergic.
  And it has gluten and I can't have that either.`,
  `Shit... I'm totally broke now...`,
];

// Dialogue if the player selects all correct choices
let marriageDia = [
  `What a wonderful date, ${pName}! This is probably the greatest
  date I've ever been on!`,
  `In fact, I think you're my dream lover! You're so perfect in every way…`,
  `I- Let's get married. Right here, right now.`,
  `${pName}... I love you.`,
  `I have never met anyone in my life who has made me feel the way you do, 
  and I really, truly think that you are the one.`,
  `Now, let's ride off into the sunset and have a million children together.`,
];

// Dialogue if the player selects mostly correct choices
let lovinDia = [
  `That was a nice date, I really enjoyed getting to know you, ${pName}!`,
  `You're really interesting and pretty cute for a human, even if
  there are a few things I think you could improve on...`,
  `I feel really comfortable with you, and I can definitely see us going further 
  in this little relationship of ours if you'd like.`,
  `Do you… wanna come over to my place? Maybe we could spend a little more time together…`,
];

// Dialogue if the player selects mostly incorrect choices
let rejectDia = [
  `Well, that was quite the date huh, ${pName}?`,
  `Listen, I'm sure you're a lovely, lovely, very dehydrated person.`,
  `You're just… not the one for me.`,
  `I appreciate you taking me out tonight, but I think this is the farthest 
  I'm willing to take us.`,
  `Goodbye, ${pName}.`,
];

// Dialogue of the player selects all incorrect choices
let deathDia = [
  `I'm gonna be completely honest when I say this; this is the absolute
  WORST date I have ever been on in my life!`,
  `You are the most vile, disgusting, horrendous, dehydrated organism to ever exist 
  not only on this planet or your own, but to ever be spat out by the cosmos.`,
  `You shame not only your birth giver, but your entire bloodline and entire race.`,
  `I have never met anyone in my life who has made me feel the way you do, 
  and that's not a compliment.`,
  `In fact, you don't deserve to live on any planet at all!`,
  `It's time to die, ${pName}.`,
];

// Defines the alien's sprite
class Alien {
  x = width / 2;
  y = 300;
  constructor() {
    // Creates the sprite and designates where it goes
    this.hotDate = new Sprite(this.x, this.y, "static");
    this.hotDate.img = "Lover Sprites/hottie neutral.png";
    this.hotDate.layer = 3;
  }
  // Different expressions of alien
  neutral() {
    this.hotDate.img = "Lover Sprites/hottie neutral.png";
  }
  happy() {
    this.hotDate.img = "Lover Sprites/hottie happy.png";
  }
  disgust() {
    this.hotDate.img = "Lover Sprites/hottie disgust.png";
  }
  flirty() {
    this.hotDate.img = "Lover Sprites/hottie flirty.png";
  }
  angry() {
    this.hotDate.img = "Lover Sprites/hottie angry.png";
  }
  shocked() {
    this.hotDate.img = "Lover Sprites/hottie shocked.png";
  }
}

function dialogueBox(x, y, message) {
  // Creates the dialogue box sprite
  const diaBox = new Sprite(x, y, "static");
  diaBox.layer = 5;
  diaBox.img = "Boxes/dialogue box.png";
  diaBox.w = diaBox.img.width;
  diaBox.index = 0;
  diaBox.draw = function () {
    image(diaBox.img, diaBox.x, diaBox.y);
    // Text properties
    textSize(30);
    textAlign(CENTER);
    fill(158, 0, 142);
    text(message[this.index], diaBox.x, diaBox.y);
  };
  return diaBox;
}

function choiceBox(customY, customC, opinion) {
  // Creates the choice box sprite
  const choiceSprite = new Sprite(340, customY, "static");
  choiceSprite.choices = customC;
  choiceSprite.img = choBo;
  choiceSprite.width = choBo.width;
  choiceSprite.height = choBo.height;
  choiceSprite.draw = function () {
    // Create the sprite
    image(choiceSprite.img, choiceSprite.x, 0);
    // Text properties
    textSize(40);
    textAlign(CENTER);
    fill(158, 0, 142);
    text(choiceSprite.choices, choiceSprite.x, 0);
    choiceSprite.layer = 6;
  };
  // When the player presses one of the choice boxes, the alien will respond
  choiceSprite.update = function () {
    if (choiceSprite.mouse.presses()) {
      opinion();
    }
  };
  return choiceSprite;
}

class Chair {
  x = width / 2;
  y = 480;
  constructor() {
    // Creates the sprite and designates where it goes
    this.chair = new Sprite(this.x, this.y, "static");
    this.chair.img = "Background and objects/chair.png";
    this.chair.layer = 1;
  }
}

class Tbl {
  x = width / 2;
  y = 665;
  constructor() {
    // Creates the sprite and designates where it goes
    this.tbl = new Sprite(this.x, this.y, "static");
    this.tbl.layer = 2;
    this.tbl.img = "Background and objects/table.png";
  }
}

class Glasses {
  x = 600;
  y = 620;
  constructor() {
    // Creates the sprite and designates where it goes
    this.glasses = new Sprite(this.x, this.y, "static");
    this.glasses.img = "Background and objects/glasses.png";
    this.glasses.layer = 4;
  }
}

// Makes sure the images are loaded in time
function preload() {
  title = loadImage("ph title.png");
  bg = loadImage("Background and objects/background.png");
  choBo = loadImage("Boxes/choice box.png");
  romPartner = loadImage("Lover Sprites/hottie neutral.png");
  recliner = loadImage("Background and objects/chair.png");
  foodHolder = loadImage("Background and objects/table.png");
  cup = loadImage("Background and objects/glasses.png");
  talkBox = loadImage("Boxes/dialogue box.png");
}

function setup() {
  dateStart();
  createCanvas(1366, 784);
  background(bg);
  // Setting up the sprites in their set locations
  lover = new Alien();
  seat = new Chair();
  surface = new Tbl();
  glass = new Glasses();
}

// Starts the date with alien
function dateStart() {
  // Create a dialogue box
  introDial = dialogueBox(340, 280, dialogue);
}

let loveDial;

function marriageEnd() {
  finalRoundDone = false;
  lover.happy();
  loveDial = dialogueBox(340, 280, marriageDia);
}

let likeDial;

function lovinEnd() {
  finalRoundDone = false;
  lover.flirty();
  likeDial = dialogueBox(340, 280, lovinDia);
}

let dislikeDial;

function rejectEnd() {
  finalRoundDone = false;
  lover.disgust();
  dislikeDial = dialogueBox(340, 280, rejectDia);
}

let hateDial;

function deathEnd() {
  finalRoundDone = false;
  lover.angry();
  hateDial = dialogueBox(340, 280, deathDia);
}

function appetizers() {
  lover.neutral();
  queDial = dialogueBox(340, 280, questionDia);
  // Good choice
  optionA = choiceBox(150, "Yum'merz", function () {
    affection++;
    lover.happy();
    // Gets rid of both choice boxes after a choice is picked so the player can't press them again
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 0;
    // Allows the next function to call after pressing the space bar
    round1Done = true;
  });
  // Bad choice
  optionB = choiceBox(350, "Not'Chos", function () {
    affection--;
    lover.disgust();
    // Gets rid of both choice boxes after a choice is picked so the player can't press them again
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 0;
    // Allows the next function to call after pressing the space bar
    round1Done = true;
  });
}

function whyDate() {
  lover.neutral();
  round1Done = false;
  queDial = dialogueBox(340, 280, questionDia);
  queDial.index = 1;
  // Good choice
  optionA = choiceBox(150, "Aliens are hot", function () {
    affection++;
    lover.flirty();
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 1;
    round2Done = true;
  });
  // Bad choice
  optionB = choiceBox(350, "Nobody on Earth wanted me", function () {
    affection--;
    lover.disgust();
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 1;
    round2Done = true;
  });
}

function mainCourse() {
  lover.neutral();
  round2Done = false;
  // Ask the player which meal they want
  queDial = dialogueBox(340, 280, questionDia);
  queDial.index = 2;
  // Good choice
  optionA = choiceBox(150, "Elusive Steak", function () {
    affection++;
    lover.happy();
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 2;
    round3Done = true;
  });
  // Bad choice
  optionB = choiceBox(350, "Vegan Meat Lover's Meatball Supreme", function () {
    affection--;
    lover.disgust();
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 2;
    round3Done = true;
  });
}

function hobbies() {
  lover.neutral();
  round3Done = false;
  queDial = dialogueBox(340, 280, questionDia);
  queDial.index = 3;
  // Bad choice
  optionA = choiceBox(150, "Gaming", function () {
    affection--;
    lover.disgust();
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 3;
    round4Done = true;
  });
  // Good choice
  optionB = choiceBox(350, "Kill people with rocks", function () {
    affection++;
    lover.flirty();
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 3;
    round4Done = true;
  });
}

function dessert() {
  lover.neutral();
  round4Done = false;
  // Ask the player which dessert they want
  queDial = dialogueBox(340, 280, questionDia);
  queDial.index = 4;
  // Good choice
  optionA = choiceBox(150, "Scorching Lava Cake", function () {
    affection++;
    lover.happy();
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 4;
    round5Done = true;
  });
  // Bad choice
  optionB = choiceBox(350, "Astronaut Ice Cream", function () {
    affection--;
    lover.disgust();
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 4;
    round5Done = true;
  });
}

function theBill() {
  lover.shocked();
  round5Done = false;
  queDial = dialogueBox(340, 280, questionDia);
  queDial.index = 5;
  // Bad choice
  optionA = choiceBox(150, "Let them pay for it", function () {
    affection--;
    lover.angry();
    optionA.remove();
    optionB.remove();
    nayDial = dialogueBox(340, 280, disapprovalDia);
    nayDial.index = 5;
    finalRoundDone = true;
  });
  // Good choice
  optionB = choiceBox(350, "Give them counterfeit money", function () {
    affection++;
    lover.happy();
    optionA.remove();
    optionB.remove();
    yayDial = dialogueBox(340, 280, approvalDia);
    yayDial.index = 5;
    finalRoundDone = true;
  });
}

function keyPressed() {
  // When the space bar is pressed, it moves on the to next dialogue
  if (key == " ") {
    introDial.index++;
    // When the last bit of dialogue is reached, it moves on to the next function
    if (introDial.index === 5) {
      appetizers();
    }
    // Calls the next function once the previous round is completed
    if (round1Done === true) {
      whyDate();
    }
    if (round2Done === true) {
      mainCourse();
    }
    if (round3Done === true) {
      hobbies();
    }
    if (round4Done === true) {
      dessert();
    }
    if (round5Done === true) {
      theBill();
    }
    // Ending if the player reaches max affection points
    if (finalRoundDone === true && affection === 6) {
      marriageEnd();
    }
    // Ending if the player reaches high affection points
    if (finalRoundDone === true && affection < 6 && affection >= 3) {
      lovinEnd();
    }
    // Ending if the player reaches low affection points
    if (finalRoundDone === true && affection < 3 && affection >= -5) {
      rejectEnd();
    }
    // Ending if the player reaches min affection points
    if (finalRoundDone === true && affection === -6) {
      deathEnd();
    }
  }
}

function draw() {
  background(bg);
}
