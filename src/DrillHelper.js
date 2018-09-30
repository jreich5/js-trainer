/*
    number getRand(min, max)
    getExpression(type)
    getExpressions(numberOfExpressions, type)
    boolean getCondition(difficulty)
    boolean getConditions(numberOfConditions, difficulty)
*/

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
    
}