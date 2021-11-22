class Letter {
    constructor(char){
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }
}

module.exports = Letter