const Letter = require("./letter")

class Word {
    constructor(word){
        this.letters = word.split("").map((char)=>{
           return new Letter(char)
        })
    }

    getSolution(){
        return this.letters.map((letter)=>{
            letter.getSolution();  //returns each letter - could be a dash or a letter.
        }).join("") //creates a string from an array of solved letters.
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

    guessedCorrectly(){
        return this.letters.every(letter => {
            return letter.visible;
        })
    }
}

module.exports = Word;