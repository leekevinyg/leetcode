let assert = require('assert');
let { compressString } = require('../problems/compress-string');

describe('Compress String', function() {
    it('compress a string with repeat characters', function() {
      assert.equal(compressString(["a", "a", "a", "a"]), 2);
      assert.equal(compressString(["a", "b", "b", "b", "c"]), 4);
      assert.equal(compressString(["a","a","b","b","c","c","c"]), 6);
    });
});