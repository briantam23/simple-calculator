const expect = require('chai').expect;
const {calculator, add} = require('../calc');


describe('calc', () => {
    it('adds', () => {
        expect(calculator.add(2, 3)).to.be.eql(5);
    })
    it('multiplies', () => {
        expect(calculator.multiply(2, 3)).to.be.eql(6);
    })
    it('divides', () => {
        expect(calculator.divide(6, 2)).to.be.eql(3);
    })
})