
const Letter = require("../lib/letter");

describe("Letter class", ()=>{
    it("characters that are not digits or letters are isntantly visible",()=>{
        expect(new Letter("@").visible).toBe(true)
    })

    it("toString returns _ for letters", ()=>{
        expect (new Letter("a").toString()).toBe("_")
    })

    it("correct guess returns true", ()=>{
        expect(new Letter("j").guess("j")).toBe(true)
    })
})



