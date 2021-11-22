
const Letter = require("../lib/letter");

describe("Letter class", ()=>{
    it("characters that are not digits or letters are isntantly visible",()=>{
        expect(new Letter("?").visible).toBe(true)
    })
})