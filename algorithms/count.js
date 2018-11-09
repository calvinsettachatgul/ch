let countFrequency = (arr) => {
    freqHash = {}
    if(arr === null) {
        return null;
    }
    for(let i=0; i < arr.length; i++){
        if(freqHash[arr[i]]){
            freqHash[arr[i]]++;
        }
        else{
            freqHash[arr[i]] = 1;
        }
    }
    return freqHash;
}

module.exports = countFrequency;