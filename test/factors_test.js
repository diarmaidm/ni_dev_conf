/*
  To see example of how tests can document code,
  Comment out this block ane un-comment the block below.
*/

const expect = require('chai').expect;
const factorsOf = require('./factors');

describe('Prime Factors calculator', function () {
  it('returns the prime factors of a given integer', function () {

    expect(factorsOf(1)).to.eql([]);
    expect(factorsOf(2)).to.eql([2]);
    expect(factorsOf(3)).to.eql([3]);
    expect(factorsOf(4)).to.eql([2, 2]);
    expect(factorsOf(5)).to.eql([5]);
    expect(factorsOf(6)).to.eql([2, 3]);
    expect(factorsOf(7)).to.eql([7]);
    expect(factorsOf(8)).to.eql([2, 2, 2]);
    expect(factorsOf(9)).to.eql([3, 3]);

    expect(factorsOf(10)).to.eql([2, 5]);
    expect(factorsOf(11)).to.eql([11]);
    expect(factorsOf(12)).to.eql([2, 2, 3]);
    expect(factorsOf(13)).to.eql([13]);
    expect(factorsOf(14)).to.eql([2, 7]);
    expect(factorsOf(15)).to.eql([3, 5]);
    expect(factorsOf(16)).to.eql([2, 2, 2, 2]);
    expect(factorsOf(17)).to.eql([17]);
    expect(factorsOf(18)).to.eql([2, 3, 3]);
    expect(factorsOf(19)).to.eql([19]);
    expect(factorsOf(21)).to.eql([3, 7]);
    expect(factorsOf(22)).to.eql([2, 11]);
    expect(factorsOf(23)).to.eql([23]);
    expect(factorsOf(24)).to.eql([2, 2, 2, 3]);
    expect(factorsOf(25)).to.eql([5, 5]);
    expect(factorsOf(26)).to.eql([2, 13]);
    expect(factorsOf(27)).to.eql([3, 3, 3]);

    expect(factorsOf(35)).to.eql([5, 7]);
    expect(factorsOf(49)).to.eql([7, 7]);
    expect(factorsOf(55)).to.eql([5, 11]);
    expect(factorsOf(65)).to.eql([5, 13]);
    expect(factorsOf(77)).to.eql([7, 11]);
    expect(factorsOf(91)).to.eql([7, 13]);

    expect(factorsOf(121)).to.eql([11, 11]);
    expect(factorsOf(125)).to.eql([5, 5, 5]);

    expect(factorsOf(2 * 2 * 3 * 5 * 7 * 7 * 11)).to.eql([2, 2, 3, 5, 7, 7, 11]);

  });
});


/*
  To see example of how tests can document code,
  Comment out above code block and un-comment this code.
*/

/*
const expect = require('chai').expect;
const factorsOf = require('./factors');

describe('Prime Factors calculator', function () {
  describe('returns the prime factors of a given integer', function () {

    it('factors of 2 is [2]', function () {
      expect(factorsOf(2)).to.be.eql([2]);
    });
    it('factors of 3 is [3]', function () {
      expect(factorsOf(3)).to.be.eql([3]);
    });
    it('factors of 4 are [2, 2]', function () {
      expect(factorsOf(4)).to.be.eql([2, 2]);
    });
    it('factors of 5 is [3]', function () {
      expect(factorsOf(5)).to.be.eql([5]);
    });
    it('factors of 6 are [2, 3]', function () {
      expect(factorsOf(6)).to.be.eql([2, 3]);
    });
    it('factors of 7 is [7]', function () {
      expect(factorsOf(7)).to.be.eql([7]);
    });
    it('factors of 8 are [2, 2, 2]', function () {
      expect(factorsOf(8)).to.be.eql([2, 2, 2]);
    });
    it('factors of 9 are [3, 2]', function () {
      expect(factorsOf(9)).to.be.eql([3, 3]);
    });
    it('factors of 10 are [2, 5]', function () {
      expect(factorsOf(10)).to.eql([2, 5]);
    });
    it('factors of 11 is [11]', function () {
      expect(factorsOf(11)).to.eql([11]);
    });
    it('factors of 12 are [2, 2, 3]', function () {
      expect(factorsOf(12)).to.eql([2, 2, 3]);
    });
    it('factors of 13 is [13]', function () {
      expect(factorsOf(13)).to.eql([13]);
    });
    it('factors of 14 are [2, 7]', function () {
      expect(factorsOf(14)).to.eql([2, 7]);
    });
    it('factors of 15 are [3, 5]', function () {
      expect(factorsOf(15)).to.eql([3, 5]);
    });
    it('factors of 16 are [2, 2, 2, 2]', function () {
      expect(factorsOf(16)).to.eql([2, 2, 2, 2]);
    });
    it('factors of 17 is [17]', function () {
      expect(factorsOf(17)).to.eql([17]);
    });
    it('factors of 18 are [2, 3, 3]', function () {
      expect(factorsOf(18)).to.eql([2, 3, 3]);
    });
    it('factors of 19 is [19]', function () {
      expect(factorsOf(19)).to.eql([19]);
    });
    it('factors of 21 are [3, 7]', function () {
      expect(factorsOf(21)).to.eql([3, 7]);
    });
    it('factors of 22 are [2, 11]', function () {
      expect(factorsOf(22)).to.eql([2, 11]);
    });
    it('factors of 23 is [23]', function () {
      expect(factorsOf(23)).to.eql([23]);
    });
    it('factors of 24 are [2, 2, 2, 3]', function () {
      expect(factorsOf(24)).to.eql([2, 2, 2, 3]);
    });
    it('factors of 25 are [5, 5]', function () {
      expect(factorsOf(25)).to.eql([5, 5]);
    });
    it('factors of 26 are [2, 13]', function () {
      expect(factorsOf(26)).to.eql([2, 13]);
    });
    it('factors of 27 are [3, 3, 3]', function () {
      expect(factorsOf(27)).to.eql([3, 3, 3]);
    });
    it('factors of 35 are [5, 7]', function () {
      expect(factorsOf(35)).to.eql([5, 7]);
    });
    it('factors of 49 are [7, 7]', function () {
      expect(factorsOf(49)).to.eql([7, 7]);
    });
    it('factors of 55 are [5, 11]', function () {
      expect(factorsOf(55)).to.eql([5, 11]);
    });
    it('factors of 65 are [5, 13]', function () {
      expect(factorsOf(65)).to.eql([5, 13]);
    });
    it('factors of 77 are [7, 11]', function () {
      expect(factorsOf(77)).to.eql([7, 11]);
    });
    it('factors of 91 are [7, 13]', function () {
      expect(factorsOf(91)).to.eql([7, 13]);
    });
    it('factors of 121 are [11, 11]', function () {
      expect(factorsOf(121)).to.eql([11, 11]);
    });
    it('factors of 125 are [5, 5, 5]', function () {
      expect(factorsOf(125)).to.eql([5, 5, 5]);
    });

  });
});
*/