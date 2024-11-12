// import { expect } from 'chai';
const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage Class Tests', function () {
    describe('Constructor and property validation', function () {
        it('should throw an error if only one parameter is provided', function () {
            expect(() => new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
        });

        it('should correctly initialize with valid parameters', function () {
            const package = new PaymentPackage('HR Services', 1500);
            expect(package.name).to.equal('HR Services');
            expect(package.value).to.equal(1500);
            expect(package.VAT).to.equal(20); // Default VAT
            expect(package.active).to.equal(true); // Default active status
        });

        it('should throw an error if name is not a non-empty string', function () {
            expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(123, 1500)).to.throw('Name must be a non-empty string');
        });

        it('should throw an error if value is not a non-negative number', function () {
            expect(() => new PaymentPackage('HR Services', -100)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('HR Services', 'invalid')).to.throw('Value must be a non-negative number');
        });
    });

    describe('VAT property tests', function () {
        it('should throw an error if VAT is not a non-negative number', function () {
            const package = new PaymentPackage('HR Services', 1500);
            expect(() => (package.VAT = -1)).to.throw('VAT must be a non-negative number');
            expect(() => (package.VAT = 'invalid')).to.throw('VAT must be a non-negative number');
        });

        it('should correctly set and get VAT', function () {
            const package = new PaymentPackage('HR Services', 1500);
            package.VAT = 25;
            expect(package.VAT).to.equal(25);
        });
    });

    describe('Active property tests', function () {
        it('should throw an error if active is not a boolean', function () {
            const package = new PaymentPackage('HR Services', 1500);
            expect(() => (package.active = 'invalid')).to.throw('Active status must be a boolean');
            expect(() => (package.active = null)).to.throw('Active status must be a boolean');
        });

        it('should correctly set and get active status', function () {
            const package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            expect(package.active).to.equal(false);
        });
    });

    describe('toString method tests', function () {
        it('should return correct string output when active is true', function () {
            const package = new PaymentPackage('HR Services', 1500);
            const expectedOutput = ['Package: HR Services', '- Value (excl. VAT): 1500', '- Value (VAT 20%): 1800'].join('\n');
            expect(package.toString()).to.equal(expectedOutput);
        });

        it('should return correct string output when active is false', function () {
            const package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            const expectedOutput = ['Package: HR Services (inactive)', '- Value (excl. VAT): 1500', '- Value (VAT 20%): 1800'].join('\n');
            expect(package.toString()).to.equal(expectedOutput);
        });
    });

    describe('Additional edge cases', function () {
        it('should allow value to be 0', function () {
            const package = new PaymentPackage('Free Service', 0);
            expect(package.value).to.equal(0);
        });

        it('should allow VAT to be set to 0', function () {
            const package = new PaymentPackage('HR Services', 1500);
            package.VAT = 0;
            const expectedOutput = ['Package: HR Services', '- Value (excl. VAT): 1500', '- Value (VAT 0%): 1500'].join('\n');
            expect(package.toString()).to.equal(expectedOutput);
        });
    });
});
