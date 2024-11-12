import { createCalculator } from './addSubtract.js';
import { expect } from 'chai';

describe('Add/Subtract', function () {
    let calc = 0;

    beforeEach(() => {
        calc = createCalculator();
    });

    describe('Happy path', function () {
        it('has correct initial value', () => {
            expect(calc.get()).to.equal(0);
        });

        it('can add', () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });

        it('can subtract', () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });
    });

    describe('Edge case', function () {
        it('can add strings', () => {
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });

        it('can subtract strings', () => {
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });
    });

    describe('Validation', function () {
        it('can not receive text', () => {
            calc.add('text');
            expect(calc.get()).to.be.NaN;
            calc.subtract('text');
            expect(calc.get()).to.be.NaN;
        });
    });
});
