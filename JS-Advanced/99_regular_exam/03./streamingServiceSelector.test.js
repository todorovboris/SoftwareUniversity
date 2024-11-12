import { streamingServiceSelector } from './streamingServiceSelector.js';
import { expect } from 'chai';

describe('Tests Final Exam', function () {
    describe('selectingContent', function () {
        it('test genre', function () {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'first')).to.throw(
                'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.'
            );
        });

        it('test type', function () {
            expect(() => streamingServiceSelector.selectingContent('first', 'Netflix', 'Action')).to.throw(
                `We currently only support 'Movie' or 'TV Show' types.`
            );
        });

        it('test all are valid', function () {
            expect(streamingServiceSelector.selectingContent('TV Show', 'Netflix', 'Action')).to.equal(
                `You can watch this Action TV Show on Netflix. Enjoy your Action-filled experience!`
            );
        });
    });

    describe('availablePlatforms', function () {
        it('test availability', function () {
            const platforms = ['Netflix', 'HBO', 'Disney+'];

            expect(streamingServiceSelector.availablePlatforms(platforms, 0)).to.equal('Other available platforms are: HBO, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 1)).to.equal('Other available platforms are: Netflix, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 2)).to.equal('Other available platforms are: Netflix, HBO.');
        });

        it('test validation', function () {
            const platforms = ['Netflix', 'HBO', 'Disney+'];

            expect(() => streamingServiceSelector.availablePlatforms('string', 0)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(0, 0)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, -1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 'string')).to.throw('Invalid platform selection.');
        });
    });

    describe('contentRating', function () {
        it('test high index', function () {
            expect(streamingServiceSelector.contentRating(60, 7)).to.equal(
                `This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!`
            );

            expect(streamingServiceSelector.contentRating(60, 8)).to.equal(
                `This content is highly rated (8/10) and has a runtime of 1.00 hours. Enjoy your watch!`
            );
        });

        it('test low index', function () {
            expect(streamingServiceSelector.contentRating(60, 6)).to.equal(
                `This content has a lower rating (6/10) and runs for 1.00 hours. You might want to check reviews first.`
            );
        });

        it('test validation', function () {
            expect(() => streamingServiceSelector.contentRating(0, 6)).to.throw(`Invalid runtime or rating.`);
            expect(() => streamingServiceSelector.contentRating('string', 6)).to.throw(`Invalid runtime or rating.`);
            expect(() => streamingServiceSelector.contentRating(120, -1)).to.throw(`Invalid runtime or rating.`);
            expect(() => streamingServiceSelector.contentRating(120, 11)).to.throw(`Invalid runtime or rating.`);
            expect(() => streamingServiceSelector.contentRating(120, 'string')).to.throw(`Invalid runtime or rating.`);
        });
    });

    //
});
