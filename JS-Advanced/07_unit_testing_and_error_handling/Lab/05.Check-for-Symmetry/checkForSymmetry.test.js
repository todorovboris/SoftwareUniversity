import { expect } from 'chai';
import { isSymmetric } from './checkForSymmetry.js';

describe('Check Symmetry of array', function () {
    describe('Happy path:', function () {
        it('Test symmetry array:', () => {
            expect(isSymmetric([1, 2, 1])).to.be.true;
            expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
        });
    });

    describe('Edge cases:', function () {
        it('Test empty array:', () => {
            expect(isSymmetric([])).to.be.true;
        });
        it('Test array with 1 element:', () => {
            expect(isSymmetric([1])).to.be.true;
        });
    });

    describe('Validation:', function () {
        it('Test non-array:', () => {
            expect(isSymmetric('array')).to.be.false;
            expect(isSymmetric(123)).to.be.false;
            expect(isSymmetric({})).to.be.false;
            expect(isSymmetric(null)).to.be.false;
            expect(isSymmetric(undefined)).to.be.false;
        });
        it('Test non-symmetric arrays:', () => {
            expect(isSymmetric([1, 2, 3, 4])).to.be.false;
            expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.false;
        });
    });

    describe('Test overload:', function () {
        it('Test mixed symmetry array:', () => {
            expect(isSymmetric([1, 'a', 'a', 1])).to.be.true;
        });
        it('Test for symmetric arrays with nested arrays', function () {
            expect(isSymmetric([[1, 2], [3], [1, 2]])).to.be.true;
        });

        it('Test for non-symmetric arrays with nested arrays', function () {
            expect(isSymmetric([[1, 2], [3], [4], [1, 2]])).to.be.false;
        });
    });
});
