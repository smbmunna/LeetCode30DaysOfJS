/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n= init; 
    function increment(){
        return n+=1; 
    }
    function decrement(){
       return n-=1; 
    }
    function reset(){
       return n=init; 
    }

    function getValue(){
        return n ; 
    }

    return{increment, decrement, reset, getValue}; 
};


 const counter = createCounter(-5)
 counter.decrement(); // 6
 console.log(counter.getValue()); 
 counter.decrement(); // 5
 console.log(counter.getValue()); 
 counter.decrement(); // 4
 console.log(counter.getValue()); 
 counter.decrement(); // 4
 console.log(counter.getValue()); 
