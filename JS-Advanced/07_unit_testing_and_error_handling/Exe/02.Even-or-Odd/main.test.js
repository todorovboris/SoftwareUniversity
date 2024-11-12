import { expect } from 'chai';
import { isOddOrEven } from './main.js';

describe('Test Odd or Even', function () {
    it('Test if it is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({ name: 'pe6o' })).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Test if the input is with even length', () => {
        expect(isOddOrEven('11')).to.equal('even');
        expect(isOddOrEven('test')).to.equal('even');
    });

    it('Test if the input is with odd length', () => {
        expect(isOddOrEven('1')).to.equal('odd');
    });

    it('Test if works with properly with different strings', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
        expect(isOddOrEven('ok')).to.equal('even');
        expect(isOddOrEven('Bulgaria')).to.equal('even');
    });
});
