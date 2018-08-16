let num_arr = [1,1,3,2, 2, 2, 3, 4, 5,5 ,5, 6];

let countFrequency = (arr) => {
    console.log("did something");
    
    freqHash = {}
    
    // key will be the number
    // value will be the frequency of those numbers from the array
    
    
    for(let i=0; i < arr.length; i++){
        // console.log(arr[i]);
        
        //the key is there 
        if(freqHash[arr[i]]){
            // increment the value because we have come across another number
            freqHash[arr[i]]++;
        }
        else{
            // the key and value are not there
            // assign the key the number and value to 1
            freqHash[arr[i]] = 1;
        }
    }
    
    return freqHash;
}


console.log(countFrequency(num_arr));