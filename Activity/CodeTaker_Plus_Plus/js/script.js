/***********************************************
p5 exercise: NEWnew

By MGL


MAIN JS CODE:
************************************************/

"use strict";

var audioElement = new Audio("assets/sounds/enemy.mp3"); //Prepares the audio

const HALF_SECOND = 500; // Assigns 500 milliseconds to HALF_SECOND constant.
const ENEMY = `enemy`; // Assigns Enemy to Enemy constant.


$(`#solved-dialog`).dialog({ // Method that creates a dialog box.
  autoOpen: false, // Prevents the dialog box from opening upon initialization.
  buttons: { // Button option that allows the user to click an option.
    "Spare the sympathy": function() { // Displayed text in modal.
      $(this).dialog(`close`); // Closes the dialog box upon the user clicking the "I know." button.

    }
  }
});

$(`.secret`).one(`mouseover`, function(event) { // Selects secrets class by mouseover which is listened via one.
  $(this).addClass(`found`, HALF_SECOND); // Highlihts specfifc letter that was mouseover and adds to found class over 0.5 second.
  cloneDrag(); // Defines the cloneDrag function.
});

$(`#answer`).droppable({
  drop: function(event, ui) { // drop event handler, that calls function with event and ui
    let letter = ui.draggable.text(); // Assigns text of dragged text to letter variable.
    $(this).append(letter); // Adds the draged letter into the answer id.
    ui.draggable.draggable(`disable`); // Prevents the original letter from being draggable once droped in answer id.
    ui.draggable.removeClass(`found`); // Letter returns to black as found class is removed once letter has been dragged and dropped.

    if ($(this).text() === ENEMY) { // If the text within #answer is equal to the answer of "Enemy", then...
      $(`#solved-dialog`).dialog(`open`); // Opens the dialog box upon droping the last letter.
      audioElement.play(); //Plays the audio
    }
  }
});


function cloneDrag() {
  $(`.secret`).draggable({ // Allows element to be draggable only when once found.
    helper: `clone` // Clones the dragged letters.
  });
}
