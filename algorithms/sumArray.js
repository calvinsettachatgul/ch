function sumArray(arr){
    if (arr === null || arr.length === 0){
        return 0;
    }
    let sum = 0;
    // else{
    //     return arr[0]
    // }
    // return "nothing";
    arr.forEach(function(ele){
        sum += ele;
    })
    // return sum;
    // for(let i = 0; i < arr.length; i++){
    //     sum += arr[i];
    // }
    return sum;
}

module.exports = sumArray;