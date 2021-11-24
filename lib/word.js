const Letter = require("./letter")

class Word {
    constructor(word){
        this.letters = word.split("").map((char)=>{
            return new Letter(char)
        })
    }

    toString(){
        return this.letters.join(" ")
    }

    guessLetter(char){
        let foundLetter = false;
        this.letters.forEach(letter => {
            if(letter.guess(char)){
                foundLetter = true
            }
        })
        return foundLetter;
    }

    isGuessCorrect(){
        return this.letters.every(letter => letter.visible)
    }
}

module.exports = Word;