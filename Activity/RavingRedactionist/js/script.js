/***********************************************
p5 exercise: NEWnew

By MGL


MAIN JS CODE:
************************************************/

"use strict";

let state = 'state0'


let sfx0

function preload() {

  sfx0 = loadSound("assets/sounds/sfx0.wav");
}

if (state === 'state0') {
  fadeInHeadings();
  playSfx0();
}

// setTimeout(fadeInHeadings, 2000);

function fadeInHeadings() {
  if (state === 'state0')
    $('#v1')
    .animate({
      opacity: 1
    });

}

function playSfx0() {
  sfx0.play()
}
