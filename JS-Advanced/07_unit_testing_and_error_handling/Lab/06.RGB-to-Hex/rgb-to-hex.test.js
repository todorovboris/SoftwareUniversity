import { rgbToHexColor } from './rgb-to-hex.js';
import { expect } from 'chai';

describe('Check RGB to HEX color', function () {
    describe('Happy path:', function () {
        it('Test with valid numbers:', () => {
            expect(rgbToHexColor(1, 1, 1)).to.equal('#010101');
        });
    });

    describe('Edge cases:', function () {
        it('Test with 0s:', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('Test with 255s:', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
    });

    describe('Validation:', function () {
        it('Test if one of the params is not number', () => {
            expect(rgbToHexColor(1, 1, [])).to.be.undefined;
        });
        it('Test if params are not in the range', () => {
            expect(rgbToHexColor(1, 1, 256)).to.be.undefined;
            expect(rgbToHexColor(1, 1, -1)).to.be.undefined;
        });
    });

    describe('Test overload:', function () {
        it('Test if all of the params are strings', () => {
            expect(rgbToHexColor('one', 'one', 'one')).to.be.undefined;
        });
        it('Test if params are negative numbers', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });
    });
});
