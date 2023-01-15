let uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let arrNew = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1] && arrNew[arrNew.length - 1] !== iterable[i]) {
            arrNew.push(iterable[i])
        }
    }
    return arrNew
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
    });
});