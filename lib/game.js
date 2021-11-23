const inquirer = require("inquirer")
const chalk = require("chalk")
const words = require("./words")
const Word = require("./word")

class Game{
    constructor(){
        this.guessLeft = 0;
        this.currentWord = "";
    }

    startPlay(){
        this.guessLeft = 10;
        this.getNextWord()
    }

    getNextWord(){
       // const randWord = words[Math.floor(Math.random() * words.length)]
    const randWord = words[0]
    this.currentWord = new Words(randWord)
    console.log("\n" + this.currentWord.toString() + "\n")
    }

    makeGuess(){

    }

    promptForLetter(){

    }

    promptToPlayAgain(){

    }

    quitPlay(){

    }

    
}

module.exports = Game