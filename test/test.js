// test/test.js
const add = require('../src/app');
const assert = require('assert');

describe('Addition', function() {
  it('should return 3 when adding 1 and 2', function() {
    assert.strictEqual(add(1, 2), 3);
  });
});

