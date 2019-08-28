/**
 * 
 * Given an array of strings, this function will return the largest common prefix
 * 
 * Time Complexity: O(mn)
 * 
 * Where m is the length of the longest string and n is the total number of strings in the strs array
 * 
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

/**
 * 
 * Given an array of strings, the below functions will return the largest common prefix using a 
 * Divide and Conquer approach.
 * 
 * The recurrence relation for this Divide and Conquer method is:
 * 
 * T(n) = 2 * T(n/2) + O(m)
 * 
 * Time Complexity: O(mn)
 * Space Complexity: O(m * log n)
 * 
 */

const LCP = (string1, string2) => {
    let i = 0;
    let j = 0;

    while (i < string1.length && j < string2.length) {
        if (string1[i] !== string2[j]) break;
        i++;
        j++;
    }

    return string1.substr(0, i);
}

const DCHelper = (strArray, low, high) => {
    if (low > high) {
        return '';
    }

    if (low === high) {
        return strArray[low];
    }

    let mid = Math.floor((low + high) / 2);
    let string1 = DCHelper(strArray, low, mid);
    let string2 = DCHelper(strArray, mid+1, high);

    return LCP(string1, string2);
}

const LongestCommonPrefix_DC = (strArray) => {
    return DCHelper(strArray, 0, strArray.length - 1);
}


module.exports = {
    LongestCommonPrefix,
    LongestCommonPrefix_DC,
}