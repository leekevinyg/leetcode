/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedSoFar = [];
    let numberAsChars = x.toString();
    let counter = numberAsChars.length - 1;
    
    while (counter >= 0) {
        reversedSoFar.push(numberAsChars[counter]);
        console.log(reversedSoFar);
        counter--;
    }
    
    const output = parseInt(reversedSoFar.join(['']));
    
    // maximum of 32 bit signed integer
    if (output > Math.pow(2, 31)) {
        return 0;
    }
    
    return Math.sign(x) * output;
};
