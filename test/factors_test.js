// const expect = require('chai');
const expect = require('chai').expect;
const factors = require('./factors');

describe('Prime Factors calculator', function() {
    it('returns the prime factors of a given integer', function() {
        expect(factors(1)).to.eql([]);
    });
});