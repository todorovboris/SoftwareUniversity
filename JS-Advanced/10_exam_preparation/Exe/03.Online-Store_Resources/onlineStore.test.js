import { onlineStore } from './onlineStore.js';
import { expect } from 'chai';

describe('Tests for onlineStore object', function () {
    describe('isProductAvailable', function () {
        it('should return out of stock when stockQuantity is 0 or less', function () {
            expect(onlineStore.isProductAvailable('Laptop', 0)).to.equal('Sorry, Laptop is currently out of stock.');
            expect(onlineStore.isProductAvailable('Phone', -5)).to.equal('Sorry, Phone is currently out of stock.');
        });

        it('should return available for purchase when stockQuantity is greater than 0', function () {
            expect(onlineStore.isProductAvailable('Laptop', 10)).to.equal('Great! Laptop is available for purchase.');
        });

        it('should throw an error for invalid input', function () {
            expect(() => onlineStore.isProductAvailable(123, 'ten')).to.throw('Invalid input.');
        });
    });

    describe('canAffordProduct', function () {
        it('should return insufficient funds if balance is less than price', function () {
            expect(onlineStore.canAffordProduct(100, 50)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it('should return successful purchase if balance is greater than or equal to price', function () {
            expect(onlineStore.canAffordProduct(50, 100)).to.equal('Product purchased. Your remaining balance is $50.');
            expect(onlineStore.canAffordProduct(100, 100)).to.equal('Product purchased. Your remaining balance is $0.');
        });

        it('should throw an error for invalid input', function () {
            expect(() => onlineStore.canAffordProduct('100', 50)).to.throw('Invalid input.');
        });
    });

    describe('getRecommendedProducts', function () {
        it('should return recommended products in a specific category', function () {
            const productList = [
                { name: 'Camera', category: 'Photography' },
                { name: 'Laptop', category: 'Electronics' },
                { name: 'Phone', category: 'Electronics' },
            ];
            expect(onlineStore.getRecommendedProducts(productList, 'Electronics')).to.equal('Recommended products in the Electronics category: Laptop, Phone');
        });

        it('should return no recommended products when none are found', function () {
            const productList = [{ name: 'Camera', category: 'Photography' }];
            expect(onlineStore.getRecommendedProducts(productList, 'Electronics')).to.equal(
                'Sorry, we currently have no recommended products in the Electronics category.'
            );
        });

        it('should throw an error for invalid input', function () {
            expect(() => onlineStore.getRecommendedProducts('notAnArray', 'Electronics')).to.throw('Invalid input.');
        });
    });
});
