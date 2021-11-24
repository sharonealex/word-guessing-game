class Letter {
    constructor(char){
        this.visible = !/[a-z1-9]/i.test(char)
        this.char = char;
    }
    // constructor(char) {
    //     // If a character is not a number or a letter, make it visible right away
    //     // Save the underlying character
    //     this.visible = !/[a-z1-9]/i.test(char);
    //     this.char = char;
    //   }

    toString(){
       
        if(this.visible === true){
           
            return this.char
        }else {
          
            return "_"
        }
    }

    getSolution(){
        return this.char
    }

    guess(charGuess) {
        if(charGuess.toUpperCase() === this.char.toUpperCase()){
                this.visible = true;
                return true;
        }
        return false;
    }
}

module.exports = Letter;