/**
 * 
 * Given an array of characters, compress it. The length after compression must always be 
 * smaller than or equal to the original array. Every element of the array should 
 * be a character (not int) of length 1. After you are done modifying the input array in-place, 
 * return the new length of the array.
 * 
 * @param {character[]} chars
 * @return {number}
 * 
 */
const compressString = (chars) => {
    let count = 0;
    let output = [];
    for (let i=0; i<chars.length; i++) {
        if (chars[i] !== chars[i+1]) {
            output.push(chars[i]);
            if (count > 1) {
                output.push(count);
            }
            count = 0;
        }
        count++;
    }
    return output.length;
}

module.exports = {
    compressString,
}