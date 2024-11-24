/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length==0){
            return x; 
        }
        let result=x; 
        for(let i=functions.length-1; i>-1; i--){            
             result= functions[i](result); 
        }
        return result; 
    }
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x])
const result= fn(4) // 9

console.log(result); 
