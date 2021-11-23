class Letter {
    constructor(char){
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    toString(){
        if(this.visible === true){
            return this.char;
        }
        return "_";
    }

    guess(charGuess){
        if(charGuess.toUpperCase() === this.char.toUpperCase()){
            this.visible = true;
            return true;
        }
        return false
    }
}

module.exports = Letter