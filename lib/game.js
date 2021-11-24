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
    this.currentWord = new Word(randWord) //split into array of chars.
    console.log("\n" + this.currentWord.toString() + "\n")
    this.makeGuess()
    }

    makeGuess(){
        this.promptForLetter().then(()=>{
        })
    }

    promptForLetter(){
        return inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "guess a letter",
                validate: val => /[a-z1-9]/gi.test(val),
            }
        ])
        .then((val)=>{
            console.log(val.choice)
            const isGuessCorrect = this.currentWord.guessLetter(val.choice)
            console.log(isGuessCorrect)
            if(isGuessCorrect){
                console.log(chalk.green("\nCORRECT\n"))
                console.log(this.guessLeft + " giuesses remaining")
            }else{
                this.guessLeft --;
                console.log(chalk.red("\nINCORRECT\n"))
                console.log(this.guessLeft + " guesses remaining")
            }
        })
    }

    promptToPlayAgain(){

    }

    quitPlay(){

    }

    
}

module.exports = Game