import { expect } from 'chai';
import { lookupChar } from './main.js';

describe('Test Lookup Char', function () {
    it('Test if the first param is not a string OR second param is not a number', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('test', 2.3)).to.be.undefined;
    });

    it('Test if the index is incorrect', () => {
        expect(lookupChar('pe6o', -1)).to.equal('Incorrect index');
        expect(lookupChar('SoftUni', 10)).to.equal('Incorrect index');
    });

    it('Test if both params have correct types and values', () => {
        expect(lookupChar('Pe6o', 3)).to.equal('o');
        expect(lookupChar('SoftUni', 0)).to.equal('S');
    });
});
