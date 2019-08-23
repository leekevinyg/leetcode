/**
 * 
 * Given an array of strings, this function will return the largest common prefix
 * 
 * Time Complexity: O(mn)
 * 
 * Where m is the length of the longest string and n is the total number of strings in the strs array
 * @param {string[]} strArray
 * @return {string}
 */
const LongestCommonPrefix = function(strs) {
    if (strs.length === 0 || strs === null) {
        return '';
    }

    if (strs.length === 1) {
        return strs[0];
    }

    let prefix = '';
    let firstString = strs[0];

    for (let k=0; k<firstString.length; k++) {
        var currentCharater = firstString[k];
        for (let i=1; i<strs.length;i++) {
            currentString = strs[i];
            if (currentString[k] !== currentCharater) {
                return prefix;
            }
        }
        prefix = prefix + currentCharater;
    }
    return prefix;
};

module.exports = {
    LongestCommonPrefix,
}