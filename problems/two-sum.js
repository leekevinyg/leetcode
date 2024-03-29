/**
 * 
 * Given an array of nums and a target, this function will return the indicies that add
 * up to the target.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 */

const TwoSum = (nums, target) => {
    let HashTable = {};
    
    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if (HashTable[complement] !== undefined) {
            return [HashTable[complement], i];
        }
        HashTable[nums[i]] = i
    }
};

module.exports = {
    TwoSum,
}