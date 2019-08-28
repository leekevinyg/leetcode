let assert = require('assert');
let { LongestCommonPrefix, LongestCommonPrefix_DC } = require('../problems/largest-common-prefix');

xdescribe('LargestCommonPrefix', function() {
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

describe('LargestCommonPrefix - Divide and Conquer Method', function() {
    xit('should return empty if no common prefix', function() {
        assert.equal(LongestCommonPrefix_DC(["dog", "racecar", "car"]), "");
    });
    xit('should return the word if strArray is of length 1', function() {
        assert.equal(LongestCommonPrefix_DC(["dog"]), "dog");
    });
    it('should return the largest common prefix', function() {
        assert.equal(LongestCommonPrefix_DC(["a", "ab", "abc"]), "a");
        assert.equal(LongestCommonPrefix_DC(["flower", "flow", "flight"]), "fl");
    });
});