/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Game Class
 */
class Game
{
    constructor()
    {
        this.missed = 0;
        this.phrases = this.cretePhase();
        this.activePhrase = null;
    }

    /**
     * startGame method
     * Hides start screen overlay, calls getRandomPhrase() method and sets 
     * the activePhrase property to chosen/true
     */
    startGame()
    {
        // Set Overlay Div element to not be displayed
        overlay.style.display = 'none';

        // Call getRandomPhrase then addPhraseToDisplay method
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    };

    /**
     * createPhrase method
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in game
     */
    cretePhase()
    {
        const phrases = [new Phrase(`Go ahead make my day`),
                         new Phrase(`Toto I have a feeling we are not in Kansas anymore`),
                         new Phrase(`I will be back`),
                         new Phrase(`Love means never having to say you are sorry`),
                         new Phrase(`We do not need no sticking badges`)
                        ];
        
        return phrases;
    };

    /**
     * getRandomPhrase method
     * Randomly retrieves a phrase stored in the phrases array and returns it
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase()
    {
        let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase;
    };

    /**
     * handleInteraction method
     * Controls most of the game logic
     */
    handleInteraction(e)
    {
        // If phrase is active or not null
        // Iterate through the array of keys in keyButtons
        // if (this.activePhrase) 
        // {
        //     for (let key of keyButtons)
        //     {
        //         if (e.key ===)
        //         {
        //             this.phrases.activePhrase.checkLetter();
        //         }
        //     }
        // }

    };

    /**
     * checkForWin method
     * Checks to see if player has revealed all letters in active phrase
     * @return {boolean} True if game is won, false if not won
     */
    checkForWin()
    {
        // Create variable for all letter DOM elements
        const lettersInDom = document.querySelectorAll('ul li');

        // For of loop to traverse array of elements
        for (let char of lettersInDom)
        {
            // If char includes hide as a className
            if (char.classList.value.includes('hide'))
            {
                return false;  
            }
        }

        return true;
    };

    /**
     * removeLife method
     * Removes a life from the scoreboard. Replaces one img with another img
     * and increments the missed property
     */
    removeLife()
    {
        // Create variable for all img DOM elements
        const lives = document.getElementsByClassName('tries');

        // Change src for img
        lives[this.missed].src = 'images/lostHeart.png';

        // Increment missed
        this.missed += 1;

        // If statement to determine if any lives left
        if (this.missed === 5)
        {
            // Call gameOver method 
            this.gameOver(false);
        }
    };

    /**
     * gameOver method
     * Displays original start screen overlay, and updates the overlay h1 element
     * with winning/lossing message
     * @param {boolean} gameWon - Whether or not the user won 
     */
    gameOver(gameWon)
    {
        // Create variable for message DOM element 
        let gameOverMessage = document.getElementsById('game-over-message');

        // If statement to determine message to be displayed
        if (gameWon)
        {
            overlay.style.display = '';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            overlay.style.backgroundColor = 'green';
            gameOverMessage.textContent = `You Win!`;
        }
        else
        {
            overlay.style.display = '';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            overlay.style.backgroundColor = 'red';
            gameOverMessage.textContent = `You Lose!`;
        }

        // Reset game
        this.reset();

    };
}