// var expect = require('chai').expect;
// var isNum = require('./../src/test.js');

import testTool from './../src/test.js';
import chai from 'chai';
let expect = chai.expect;

describe('test.js的测试', function() {
    const box = testTool.isNum(1);
    it('1 应该是数字', function() {
        // expect(isNum(1)).to.be.ok
        // isNum(1).should.equal(true)
        expect(box).to.be.ok;
    });
})

describe('生成时间函数', function() {
    it('-1 应该获取昨天的时间', function() {
        expect(testTool.getTime(-1)).to.be.equal('2017-05-24');
    });
})
