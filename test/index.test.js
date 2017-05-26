
import testTool from './../src/test.js';
import chai from 'chai';
let expect = chai.expect;

describe('加法函数测试', function() {
    it('1 + 1 = 2', function() {
        // expect(isNum(1)).to.be.ok
        // isNum(1).should.equal(true)
        expect(testTool.add(1, 1)).to.be.equal(2);
    });
})
