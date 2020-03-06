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
        // Create local variable for DOM object
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
        // Traverse through array to find a match on user selection
        for (let char of this.phrase)
        {
            if (char === letter)
            {
                // Call showMatchedLetter
                this.letter.showMatchedLetter();
            }
        }
    };

    /**
     * showMatchedLetter method
     * Reveals the letter(s) on the board that matches the player's selection
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter)
    {
        this.letter.style.display = '';

    };

}