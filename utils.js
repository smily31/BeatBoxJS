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
        // console.log(this.audio);     //to test 
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
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
    }
}