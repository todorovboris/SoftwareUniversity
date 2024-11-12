import { expect } from 'chai';
import { mathEnforcer } from './main.js';

describe('Test addFive', function () {
    it('Test if the parameter is NOT a number', () => {
        expect(mathEnforcer.addFive('1')).to.be.undefined;
        expect(mathEnforcer.addFive('edno')).to.be.undefined;
        expect(mathEnforcer.addFive([0, 1])).to.be.undefined;
    });

    it('Test if adding 5 is correct', () => {
        expect(mathEnforcer.addFive(1)).to.equal(6);
        expect(mathEnforcer.addFive(-1)).to.equal(4);
        expect(mathEnforcer.addFive(1.1)).be.closeTo(6.1, 0.01);
    });
});

describe('Test subtractTen', function () {
    it('Test if the parameter is NOT a number', () => {
        expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        expect(mathEnforcer.subtractTen('edno')).to.be.undefined;
        expect(mathEnforcer.subtractTen([0, 1])).to.be.undefined;
    });

    it('Test if subtracting 10 is correct', () => {
        expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        expect(mathEnforcer.subtractTen(20.1)).be.closeTo(10.1, 0.01);
    });
});

describe('Test sum', function () {
    it('Test if one of the parameters is NOT a number', () => {
        expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        expect(mathEnforcer.sum('0', 1)).to.be.undefined;
        expect(mathEnforcer.sum('1', '1')).to.be.undefined;
        expect(mathEnforcer.sum(0.1, '1')).to.be.undefined;
    });

    it('Test if sum of both params is correct', () => {
        expect(mathEnforcer.sum(1, 1)).to.equal(2);
        expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        expect(mathEnforcer.sum(0.1, 1.5)).be.closeTo(1.6, 0.01);
    });
});
