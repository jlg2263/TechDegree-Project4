/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Global variable for keys & new game object
 */
let game;
const keyButtons = document.getElementsByClassName('key');

// Test 1
//const game = new Game();
// game.phrases.forEach((phrase, index) =>
// {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);

// });

// Test 2
// const logPhrase = (phrase) =>
// {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }
// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// Test 3
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// Test 4
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

/**
 * Event Listener for start button & keyboard button/s
 */
document.getElementById('btn__reset').addEventListener('click', () =>
{
    // Create new game object
    game = new Game();

    // Call startGame method
    game.startGame();
});

// keyButtons.addEventListener('keydown', (e) =>
// {
//     // Call handleInteraction method once key is clicked
//     game.handleInteraction(e);


// });

