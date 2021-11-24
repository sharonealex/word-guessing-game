const Word = require("./word")
const Letter = require("./letter")
const inquirer = require("inquirer")
const chalk = require("chalk")
const words = require("./words")

class Game {
    constructor(){
        this.guessLeft = 0;
    }

    play(){
        this.guessLeft = 10;
        this.nextWord();
    }

    nextWord(){
      //  const randomWord =  words[Math.floor(Math.random() * words.length)];
        const randomWord = words[0]
        this.currentWord = new Word(randomWord);
        console.log("\n" + this.currentWord.toString() + "\n")
        this.makeGuess();
    }

    makeGuess(){
        this.askForLetter().then(()=>{
            if(this.guessLeft < 1){
                console.log("you lost the game" + this.currentWord.getSolution())
                this.askToPlayAgain()
            }else if(this.currentWord.guessedCorrectly()){
                console.log("you guessed it right");
                this.guessLeft = 10;
                this.nextWord();
            } else {
                this.makeGuess();
            }
        })
    }

    askForLetter(){
        return inquirer.prompt([
            {
                type: "input", 
                name: "choice",
                message: "guess a letter",
                validate: val=> /[a-z1-9]/.test(val)    
            }
        ]).then((val)=>{
            const didGuessCorrectly = this.currentWord.guessLetter(val.choice)
            if(didGuessCorrectly){
                console.log(chalk.green("\n CORRECT"))
            }else {
                this.guessLeft --;
                console.log(chalk.green("\n INCORRECT \n"))
                console.log(this.guessLeft + " guesses remaining!!!\n");
            }

            console.log(this.currentWord.toString() + "\n")
        })
    }

    askToPlayAgain(){
inquirer.prompt([
    {
        type: "confirm",
        name: "choice",
        message: "playAgain??"
    }
]).then((val)=>{
    if(val.choice){
        this.play();
    } else {
        this.quit();
    }
})
    }


    quit(){
        console.log("GAME OVER")
        process.exit(0)
    }

}

module.exports = Game;