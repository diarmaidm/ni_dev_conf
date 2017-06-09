const expect = require('chai').expect;
const factors = require('./factors');

describe('Prime Factors calculator', function() {
    it('returns the prime factors of a given integer', function() {
        expect(factors(1)).to.eql([]);

        expect(factors(2)).to.eql([2]);

        expect(factors(3)).to.eql([3]);

        expect(factors(4)).to.eql([2, 2]);

        expect(factors(5)).to.eql([5]);

        expect(factors(6)).to.eql([2, 3]);

        expect(factors(7)).to.eql([7]);

        expect(factors(8)).to.eql([2, 2, 2]);

        expect(factors(9)).to.eql([3, 3]);

        expect(factors(10)).to.eql([2, 5]);
        expect(factors(11)).to.eql([11]);
        expect(factors(12)).to.eql([2, 2, 3]);
        expect(factors(13)).to.eql([13]);
        expect(factors(14)).to.eql([2, 7]);
        expect(factors(15)).to.eql([3, 5]);
        expect(factors(16)).to.eql([2, 2, 2, 2]);
        expect(factors(17)).to.eql([17]);
        expect(factors(18)).to.eql([2, 3, 3]);
        expect(factors(19)).to.eql([19]);
        expect(factors(21)).to.eql([3, 7]);

        expect(factors(22)).to.eql([2, 11]);
        expect(factors(23)).to.eql([23]);
        expect(factors(24)).to.eql([2, 2, 2, 3]);

        expect(factors(25)).to.eql([5, 5]);

        // expect(factors(26)).to.eql([2, 13]);

        // expect(factors(27)).to.eql([3, 3, 3]);

        // expect(factors(35)).to.eql([5, 7]);
        // expect(factors(49)).to.eql([7, 7]);
        // expect(factors(55)).to.eql([5, 11]);
        // expect(factors(65)).to.eql([5, 13]);
        // expect(factors(77)).to.eql([7, 11]);
        // expect(factors(91)).to.eql([7, 13]);
        // expect(factors(121)).to.eql([11, 11]);

    });
});