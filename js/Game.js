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
                         new Phrase(`We do not need no stinking badges`)
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
     * @param (HTMLButtonElement) button - The clicked key button element
     */
    handleInteraction(button)
    {
        // Disable selected letter's onscreen keyboard button
        button.disabled = true;

        // If selected letter/key button is not included in phrase
        // add wrong css class and call removeLife method...
        // Otherwise call the showMatchedLetter method if its a match
        if (this.activePhrase.checkLetter(button.textContent))
        {
            button.setAttribute('class', 'chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            
            // If checkForWin returns true call gameOver method
            if (this.checkForWin())
            {
                this.gameOver(true);
            }
        }
        else
        {
            button.setAttribute('class', 'wrong');
            this.removeLife();
        }
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
        // Change src for img
        lives[this.missed].src = "images/lostHeart.png";

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
        let gameOverMessage = document.getElementById('game-over-message');

        // If statement to determine message to be displayed
        if (gameWon)
        {
            overlay.style.display = '';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            overlay.style.backgroundColor = 'green';
            gameOverMessage.textContent = `You Win! Great Job!`;
        }
        else
        {
            overlay.style.display = '';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            overlay.style.backgroundColor = 'red';
            gameOverMessage.textContent = `Sorry, You Lose! Try Again.`;
        }

        // Call Reset game
        this.reset();
    };

    /**
     * reset method
     * Resets the gameboard between games
     */
    reset()
    {
        // // Use for of loop to traverse array
        // for (let char of this.activePhrase)
        // {
        //     // Remove all li elements from Phrase ul element
        //     ulPhrase.removeChild(liChar[char]);
        // }

        // Re-enable all keybuttons
        // Use for loop to loop through all key buttons
        for (let i = 0; i < keyButtons.length; i++)
        {
            keyButtons[i].disabled = false;
            keyButtons[i].classList.remove('chosen');
            keyButtons[i].classList.remove('wrong');
            keyButtons[i].classList.add('key');
        }

        // Iterate through array Change src for img
        for (let i = 0; i < lives.length; i++)
        {
            lives[i].src = "images/liveHeart.png";
        }
    }
}