let assert = require('assert');
let { LongestCommonPrefix } = require('../problems/largest-common-prefix');

describe('LargestCommonPrefix', function() {
    it('should return empty if no common prefix', function() {
        assert.equal(LongestCommonPrefix(["dog", "racecar", "car"]), "");
    });
    it('should return the word if strArray is of length 1', function() {
        assert.equal(LongestCommonPrefix(["dog"]), "dog");
    });
    it('should return the largest common prefix', function() {
        assert.equal(LongestCommonPrefix(["a", "ab", "abc"]), "a");
        assert.equal(LongestCommonPrefix(["flower", "flow", "flight"]), "fl");
    });
});