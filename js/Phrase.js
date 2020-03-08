/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * Phrase Class
 */
class Phrase
{
    constructor(phrase)
    {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * addPhraseToDisplay method 
     * Adds letter placeholders to the display when game starts
     */
    addPhraseToDisplay()
    {   
        // Create variable for ul DOM element
        const ulPhrase = document.querySelector('ul');

        // Use for of loop to traverse array
        for (let char of this.phrase)
        {
            // Create element to append to DOM ul object
            const liChar = document.createElement('li');

            // If character is a space create space element 
            // Else create letter element 
            if (char === ' ')
            {
                liChar.setAttribute('class', `space`);
                liChar.innerHTML = `${char}`;
                ulPhrase.appendChild(liChar);
            }
            else
            {
                liChar.setAttribute('class', `hide letter ${char}`);
                liChar.innerHTML = `${char}`;
                ulPhrase.appendChild(liChar);
            }
        }
    };

    /**
     * checkLetter method
     * Checks to see if the letter selected by player matches letter in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter)
    {   
        // returns boolean value for letter that was selected
        return this.phrase.includes(letter);     
    };

    /**
     * showMatchedLetter method
     * Reveals the letter(s) on the board that matches the player's selection
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter)
    {
        // Create variable for all letter DOM elements
        const lettersInDom = document.querySelectorAll('ul li');

        // For of loop to traverse array of elements
        for (let char of lettersInDom)
        {
            // If event.target (letter) matches show letter
            if (char.textContent === letter)
            {
                char.classList.remove('hide');
                char.classList.add('show');   
            }
        }
    };

}