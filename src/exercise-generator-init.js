
// helper functions

/*
    number getRand(min, max)
    getExpression(type)
    getExpressions(numberOfExpressions, type)
    boolean getCondition(difficulty)
    boolean getConditions(numberOfConditions, difficulty)
*/



/**
 * This object represents the possible variations of a JS drill.
 */
const drillOptions = {
    [
        {
            category: "boolean",
            types: [
                {
                    name: "boolean",
                    instructions: "Will the following condition evaluate to true or false?",
                    getProblem: difficulty => {
                        let drill = {
                            problem: null,
                            answer: null
                        };
                        let conditions = {
                            min: 0,
                            max: 0
                        };
                        switch(difficulty) {
                            case 1: 
                                conditions.min = 1;
                                conditions.max = 2;      
                            case 2:
                                conditions.min = 2;
                                conditions.max = 3;
                            case 3:
                                conditions.min = 3;
                                conditions.max = 5;
                        }
                        drill.problem = getConditions(getRand(conditions.min, conditions.max), difficulty);
                        drill.answer = eval(problem);
                        return drill;
                    }
                }
            ]
        },
        {
            category: "conditional",
            types: [
                "if",
                "if/else",
                "if/else if/else"
                "ternary",
                "switch"    
            ]
        },

    ]
};

const drillConfig = {
    category: ,
    difficulty: ,
};

const drillObject = {
    type: ,
    instructions: ,
    problem: ,
    solution: 
};

/**
 * Generates a complete drill object
 */
const generateDrill = (configObject) => {
    
}