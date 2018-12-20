const nestedArray = [[1,2], [3,4], [5,6], [7,8,9]];

let flatten = function() {
    let flattenedResult = [];
    for(let i=0; i<nestedArray.length; i++){
        for(let j=0; j<nestedArray[i].length; j++){
            flattenedResult.push(nestedArray[i][j]);
            //console.log(nestedArray[i][j]);
        };
    };
    return flattenedResult;
};

// wrap this for loop in a function and return a flattened array

console.log(JSON.stringify(flatten(nestedArray)) === JSON.stringify([1,2,3,4,5,6,7,8,9]))
console.log(flatten(nestedArray));