const Letter = require("../lib/letter")

describe ("Letter Class", ()=>{
    it ("characters that are not digital or letters are instantly visible", ()=>{
        expect(new Letter("?").visible).toBe(true)
    })

    it("toString returns _ for letters", ()=>{
        expect(new Letter('a').toString()).toBe("_")
    })
    
    it ("returns guess correct as true", ()=>{
        expect(new Letter('g').guess('g')).toBe(true)
    })

    it("incorrect guess returns false", ()=>{
        expect(new Letter('g').guess('y')).toBe(false)
    })
    it("get solution",()=>{
       
            expect(new Letter("1").getSolution()).toBe("1")
        
    })
})