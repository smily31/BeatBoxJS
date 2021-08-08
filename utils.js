/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */

//We have Audio class by js to initialise and play audio 
//We will use this to initialise in our Beat class
class Beat {
    constructor (audioSrc)
    {
        this.audio = new Audio(audioSrc);
    }

    play = () =>{
        this.audio.currentTime = 0;    // this will reset the audio and replay;
        this.audio.play();
    } 
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setATransitionendListener();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }

    /*
     * Problem : When to call this deselect function? 
     */
    // Solution 1: Remove style on keyup
    // Solution 2: Wait a certain amount of time to remove style
    // Solution 3: React on transitionend event     {best approach for this problem}
    setATransitionendListener = () => {
        document.addEventListener('transitionend',() => {
            this.deselect();
        })
    }
}