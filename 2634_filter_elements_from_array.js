/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let returnedArray= []; 
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            returnedArray.push(arr[i]); 
        }
    }
    return returnedArray; 
};


const result= filter([5,1,12],  function firstIndex(n, i) { return i === 0; }); 
console.log(result); 