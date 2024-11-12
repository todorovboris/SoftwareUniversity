// импортираме библиотеката
import { expect } from 'chai';
// импортираме нашия код
import { addNumbers } from './demo.js';

// Wrote descibe, which contains 2 params: name of the group of tests AND function();
describe('Adding numbers', function () {
    // with "it" initialize THE FIRST TEST what we want to check. Each "it" also contains 2 params => name of the test AND lambda function
    it('works with numbers', () => {
        expect(addNumbers(1, 1)).to.equal(2);
    });

    // SECOND TEST
    it('doesnt work with strings', () => {
        expect(() => addNumbers('a', 'b').to.throw('...'));
    });
});
