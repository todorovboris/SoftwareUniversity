import { recipeSelection } from './recipeSelection.js';
import { expect } from 'chai';

describe('Tests Exam', function () {
    describe('Test isTypeSuitable', function () {
        //
        it('Test if suitable for vegetarians', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });

        it('Test if suitable for vegans', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('Test if suitable', () => {
            expect(recipeSelection.isTypeSuitable('Milk', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Eggs', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Other', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
        });

        it('Test for validation', () => {
            expect(() => recipeSelection.isTypeSuitable(1, 'vegan')).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable([1], 1)).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable('s', 1)).to.throw('Invalid input');
        });
    });

    describe('Test isItAffordable', function () {
        //
        it('Test if remaining budget is less than 0', () => {
            expect(recipeSelection.isItAffordable(1, 10)).to.equal(`Recipe ingredients bought. You have 9$ left`);
        });

        it('Test if remaining budget is less than 0', () => {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal(`You don't have enough budget to afford this recipe`);
        });

        it('Test happy path', () => {
            expect(recipeSelection.isItAffordable(1, 2)).to.equal(`Recipe ingredients bought. You have 1$ left`);
        });

        it('Test validation', () => {
            expect(() => recipeSelection.isItAffordable('1', 1)).to.throw('Invalid input');
            expect(() => recipeSelection.isItAffordable(1, '1')).to.throw('Invalid input');
        });
    });

    describe('Test getRecipesByCategory', function () {
        //
        it('Test filters recipes', () => {
            const input = [
                { title: 'Tofu', category: 'Asian' },
                { title: 'Trout', category: 'Seafood' },
            ];
            const result = recipeSelection.getRecipesByCategory(input, 'Seafood');

            expect(result.length).to.equal(1);
            expect(result).to.contain('Trout');
        });

        it('test for returns empty array', () => {
            const input = [
                { title: 'Tofu', category: 'Asian' },
                { title: 'Trout', category: 'Seafood' },
            ];
            const result = recipeSelection.getRecipesByCategory(input, 'Keto');

            expect(result.length).to.equal(0);
        });

        it('Test empty result', () => {
            const input = [];
            const result = recipeSelection.getRecipesByCategory(input, 'Seafood');

            expect(result.length).to.equal(0);
        });

        it('Test validation', () => {
            expect(() => recipeSelection.getRecipesByCategory(1, 'string')).to.throw('Invalid input');
            expect(() => recipeSelection.getRecipesByCategory([], 1)).to.throw('Invalid input');
        });
    });
    // TODO: …
});
