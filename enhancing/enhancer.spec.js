const { succeed, fail, repair, get } = require('./enhancer.js');

const goodItem = {
    name: "Shield",
    enhancement: 10, // must be number between 0 and 20 inclusive
    durability: 50 // must be a number between 0 and 100 inclusive
}
const stringItem = {
    name: "Sword",
    enhancement: "10", // must be number between 0 and 20 inclusive
    durability: "50" // must be a number between 0 and 100 inclusive
}
const numItem = {
    name: 541316,
    enhancement: 20, // must be number between 0 and 20 inclusive
    durability: 90 // must be a number between 0 and 100 inclusive
}

describe('enhancer', () => {
    describe('repair', () => {
        // it.todo("repairs durrability to 100")
        it('repairs durability to 100', () => {
            expect(repair(goodItem).durability).toBe(100)
        })
        it("repairs durability to 100 even if it's a string", () => {
            expect(repair(stringItem).durability).toBe(100)
        })
        it('returns a number for durability', () => {
            expect(typeof repair(goodItem).durability).toBe("number")
            expect(typeof repair(stringItem).durability).toBe("number")
        })
        it('returns all three key:value pairs', () => {
            expect(Object.keys(repair(goodItem))).toStrictEqual(["name", "enhancement", "durability"])
        })
    })
    describe('success', () => {
        it("item enhancement increased by 1", () => {
            expect(succeed(goodItem).enhancement).toBe(11);
            expect(succeed(stringItem).enhancement).toBe(11);

        });
        it("when e-level is 20, it is unchanged", () => {
            expect(succeed(numItem).enhancement).toBe(20);

        });
        it("The durability of the item is not changed", () => {
            expect(succeed(goodItem).durability).toBe(50);
        })
        it('returns a number for enhamcement', () => {
            expect(typeof succeed(goodItem).enhancement).toBe("number")
            expect(typeof succeed(stringItem).enhancement).toBe("number")
        })
        it('returns all three key:value pairs', () => {
            expect(Object.keys(succeed(goodItem))).toStrictEqual(["name", "enhancement", "durability"])
        })

    })
    describe('fail', () => {
        it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
            expect(fail(goodItem).durability).toBe(45);
            expect(fail(stringItem).durability).toBe(45);

        })

        it.todo("If the item's enhancement is 15 or more, the durability of the item is decreased by 10.")

        it.todo("If the item's enhancement level is greater than 16, the enhancement level decreases by 1")

    })
    describe('get', () => {
        it.todo("test some stuff")
    })
})