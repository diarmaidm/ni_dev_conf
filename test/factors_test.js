const expect = require('chai').expect;
const factors = require('./factors');

describe('Prime Factors calculator', function() {
    it('returns the prime factors of a given integer', function() {
        expect(factors(1)).to.eql([]);

        expect(factors(2)).to.eql([2]);

        expect(factors(3)).to.eql([3]);

        expect(factors(4)).to.eql([2, 2]);
    });
});