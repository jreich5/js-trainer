const faker = require('faker');

/*
    number getRand(min, max)
    mixed getRandArrayValue(array)
    string getRandOperator(type)
    mixed getRandValue(type)
    array getRandValues(type, numberOfValues)
    mixed getRandExpression(difficulty, type)
    array getRandExpressions(difficulty, numberOfExpressions)
    boolean getRandCondition(difficulty)
    array getRandConditions(difficulty, numberOfConditions)
*/

const operators = {
    simpleMath: ['+', '-'],
    math: ['+', '-', '*', '/', '%'],
    simpleComparison: ['===', '!=='],
    comparison: ['===', '!==', '>', '<', '>=', '<='],
    logical: ['||', '&&'],
    not: ['!', '']
};

const values = {
    simpleNumber: [...Array(11).keys()].map(n => n - 5), 
    number: [...Array(101).keys()].map(n => n - 50),
    boolean: [true, false]
}

export default class DrillHelper {

    /** @function
     * Returns a random number between a range min (inclusive) and max (inclusive)
     * @name getRand
     * @static
     * @param {number=} max 
     * @param {number=} min 
     * @returns {number}
     */
    static getRand(max = 0, min = 0) {
        if (+max < +min) {
            throw new Error("Max value cannot be more than min value");
        }
        if (!isNaN(parseFloat(min)) && isFinite(min) && !isNaN(parseFloat(max)) && isFinite(max)) {
            return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
        }
        throw new Error("Arguments must be numeric");
    }

    /** @function
     * Returns a random mathmatical expression
     * @name getExpression
     * @static
     * @param {number=} max 
     * @param {number=} min 
     * @returns {number}
     */
    static getRand(max = 0, min = 0) {
        if (+max < +min) {
            throw new Error("Max value cannot be more than min value");
        }
        if (!isNaN(parseFloat(min)) && isFinite(min) && !isNaN(parseFloat(max)) && isFinite(max)) {
            return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
        }
        throw new Error("Arguments must be numeric");
    }
    
}