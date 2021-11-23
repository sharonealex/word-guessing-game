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
}

module.exports = Word;