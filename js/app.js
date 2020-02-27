/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /**
  * global variable for keys
  */
 const keyButtons = document.getElementsByClassName('key');


/**
 * Event Listener for start button & keyboard button/s
 */
document.getElementById('btn__reset').addEventListener('click', () =>
{
    // Create new game object & phrase object
    const game = new Game();
    const phrase = new Phrase();

    // Call startGame method
    game.startGame();

});

keyButtons.addEventListener('click', (e) =>
{
    // Call handleInteraction method once key is clicked
    handleInteraction(e.target.value);


});

