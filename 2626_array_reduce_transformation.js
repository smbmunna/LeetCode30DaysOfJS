/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.lenght == 0) {
        return init;
    } else {
        let accum = init;
        let val = accum;
        for (let i = 0; i < nums.length; i++) {
            val = fn(accum, nums[i]);
            accum = val;
        }
        return val;
    }

};


nums = []
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100;

const result = reduce(nums, fn, init);
console.log(result); 