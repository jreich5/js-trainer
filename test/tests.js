const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
import DrillHelper from '../src/DrillHelper.js';

describe('DrillHelper', () => {
    describe('getRand', () => {
        it ('should return 0 when passed no arguments', () => {
            assert.equal(DrillHelper.getRand(), 0, 'returns 0 when passed no arguments');
        })
        it ('should return a random number within the range of a passed max value if a single number argument. The min should be zero.', () =>{
            for (let i = 0; i < 100; i += 1) {
                assert.isAtLeast(DrillHelper.getRand(3), 0, 'is at least 0 when passed 1 argument');
                assert.isAtMost(DrillHelper.getRand(3), 3, 'is at most the max when passed a single argument');
            }
        })
        it ('should throw an error if passed a non-number', () => {
            expect(() => DrillHelper.getRand('bob')).to.throw();
            expect(() => DrillHelper.getRand('bob', 0)).to.throw();
            expect(() => DrillHelper.getRand(0, 'bob')).to.throw();
            expect(() => DrillHelper.getRand('10')).to.not.throw();
        })
        it ('should throw an error if max is less than min', () => {
            expect(() => DrillHelper.getRand(0, 1)).to.throw();
        })
    })
})