let assert = require('assert');
let { TwoSum } = require('../problems/two-sum');

describe('TwoSum', function() {
    it('should return the indicies of the 2 numbers that sum to the passed target', function() {
      assert.equal(TwoSum([1, 9, 3, 2, 8], 17).toString(), [1,4].toString());
      assert.equal(TwoSum([2, 7, 3, 2, 8], 9).toString(), [0,1].toString());
    });
});