/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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