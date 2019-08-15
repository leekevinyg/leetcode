/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const HashTable = {};
    let sums = [];
    
    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if (HashTable[complement] !== undefined) {
            return [HashTable[complement], i];
        }
        HashTable[nums[i]] = i; 
    }
};
