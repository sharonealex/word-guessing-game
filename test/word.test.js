const Word = require("../lib/word")
const Letter = require("../lib/letter")

describe("Word Class", ()=>{
    it ("creates an array of letter objects", ()=>{
        const word = new Word("hi");
        expect(word.letters).toEqual(
            expect.arrayContaining([expect.objectContaining({char: "h"})])
        )
        expect(word.letters[0]).toBeInstanceOf(Letter)
    })

    it("guess correct returns true", ()=>{
        expect (new Word("fish").guessLetter("f")).toBe(true)
    })
    it("incorrect guess return false", ()=>{
        expect(new Word("fish").guessLetter("x")).toBe(false)
    })
    it("returns true if all letters are correct", () => {
        const word = new Word("hi");
        word.guessLetter("h");
        word.guessLetter("i");
        expect(word.guessedCorrectly()).toBe(true);
      });
})