import { expect } from 'chai';
import { sum } from './sumNumbers.js';

describe('Sum Numbers', function () {
    describe('Happy path:', function () {
        it('test if works with numbers', () => {
            expect(sum([1, 1])).to.equal(2);
        });
    });

    describe('Edge cases:', function () {
        it('test an empty array', () => {
            expect(sum([])).to.equal(0);
        });
    });

    describe('Validation:', function () {
        it('test with strings', () => {
            expect(sum(['edno', 1])).to.be.NaN;
            expect(sum([1, 'edno'])).to.be.NaN;
            // expect(sum(['1', 1])).to.be.undefined;
        });
    });

    describe('Test overload:', function () {
        it('test with more numbers', () => {
            expect(sum([1, 2, 3, 4, 5])).to.equal(15);
        });

        it('test if works with negative nums', () => {
            expect(sum([-1, -1])).to.equal(-2);
        });
    });
});
