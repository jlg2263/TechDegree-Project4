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
        document.getElementById('overlay').style.display = 'none';

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
     * removeLife method
     * Removes a life from the scoreboard. Replaces one img with anothe img
     * and increments the missed property
     */
    removeLife()
    {


    };

    /**
     * checkForWin method
     * Checks to see if player has revealed all letters in active phrase
     */
    checkForWin()
    {


    };

    /**
     * gameOver method
     * Displays original start screen overlay, and updates the overlay h1 element
     * with winning/ossing message
     */
    gameOver()
    {


    };
}