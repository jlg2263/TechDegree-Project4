/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Global variable for keys, new game object
 */
let game;
const overlay = document.getElementById('overlay');
const keyButtons = document.querySelectorAll('.key');

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

// Use for loop to loop through all key buttons
for (let i = 0; i < keyButtons.length; i++)
{
    keyButtons[i].addEventListener('click', (e) =>
    {
        // Call handleInteraction method once key is clicked
        game.handleInteraction(e.target);
    });
}

document.addEventListener('keyup', (e)=>
{
    // If key pressed is between **Research from MDN webdocs**
    if (e.keyCode >= 65 && e.keyCode <= 90)
    {
        for (let char of keyButtons)
        {
            if (char.textContent === e.key)
            {
                // Call handleInteraction method once key is clicked
                game.handleInteraction(char);
            }
        }
    }   
});