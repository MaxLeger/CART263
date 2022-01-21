/***********************************************
p5 exercise: Where's the Sausage-Dog
                        AKA Baby Bugs

By MGL

MAIN JS CODE:
************************************************/

"use strict";

const NUM_ANIMAL_IMAGES = 10; // Constant
const NUM_ANIMALS = 100; // 100 objects

let animalImages = []; // Empty anmimal images array
let animals = []; // Empty animal object array

let sausageDogImage = undefined;
let sausageDog = undefined;

let bugsSFX = undefined;



function preload() {
  // loads assets
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) { //Loop for each animal image (start from 0)
    let animalImage = loadImage(`assets/images/animal${i}.png`); // Loads images for the array
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`); // Loads Sausage-Dog image

  bugsSFX = loadSound('assets/sounds/whatsupdoc.mp3'); // Loads Sausage-Dog bark sound effect
}

function setup() {
  // Creates all the objectts
  createCanvas(windowWidth, windowHeight);
  spawnAnimals();
  spawnSausageDog();
}

function spawnAnimals() {
  // Create the animals at a random position
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
}

function spawnSausageDog() {
  //Positions the Sausage-Dog at a random location
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

function draw() {
  background(245, 129, 42); // Background colour
  createAnimal(); // Calls createRandomAnimal
  createSausageDog(); // Calls createSausageDog
}

function createAnimal() {
  for (let i = 0; i < animals.length; i++) { //Creates Animals given the amount indicated
    animals[i].update(); // Update "display" the animal at a random postion
  }
}

function createSausageDog() {
  sausageDog.update(); // Calls to display the Sausage-Dog on the canvas
}

function mousePressed() {
  sausageDog.mousePressed(); // Calls upon mouse press for the Sausage-Dog
}
