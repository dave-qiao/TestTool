// var expect = require('chai').expect;
// var isNum = require('./../src/test.js');

import testTool from './../src/test.js';
import chai from 'chai';
let expect = chai.expect;

describe('test.js的测试', function () {
  it('1+1 = 2', function() {
      // expect(isNum(1)).to.be.ok
      // isNum(1).should.equal(true)
      expect(testTool.isNum(1,1)).to.be.equal(2);
  })
})
