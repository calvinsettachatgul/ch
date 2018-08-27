function counter(counterStart){
    let counter = counterStart;
    function viewCounter(){
       console.log(counter); 
    }
    function incrementCounter(){
        counter++;
    }
    return {
                viewCounter, 
                incrementCounter
            };
}

let counter1 = counter(0);

// console.log(counter1);
counter1.incrementCounter();
counter1.viewCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.viewCounter();

let counter2 = counter(100);
console.log("this is counter2");
counter2.viewCounter();
counter2.incrementCounter();
counter2.viewCounter();