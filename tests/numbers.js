const assert = require('assert')
const numbers = require('../index').numbers

module.exports = () => {
  describe('numbers', () => {
    describe('addCommas', () => {
      it('should add commas in the right places', () => {
        assert.equal('1,000,000', numbers.addCommas(1000000))
        assert.equal('1,000,000,000', numbers.addCommas(1000000000))
        assert.equal('1,000', numbers.addCommas(1000))
        assert.equal('1,000.123123', numbers.addCommas(1000.123123))
        assert.equal('1,000,000', numbers.addCommas('1000000'))
        assert.equal('0', numbers.addCommas(0))
        assert.equal('0.1234123423', numbers.addCommas(0.1234123423))
      })
      it('should output a string', () => {
        assert.equal('string', typeof(numbers.addCommas(1000000)))
      })
      it('should return an error if NaN', () => {
        assert.equal(true, numbers.addCommas('not a number') instanceof Error)
        assert.equal(false, numbers.addCommas(123) instanceof Error)
      })
    })
    describe('readable', () => {
      it('should follow the default guidelines', () => {
        assert.equal('0.00123', numbers.readable(.00123))
        assert.equal('0.0123', numbers.readable(.0123))
        assert.equal('0.123', numbers.readable(.123))
        assert.equal('8.12', numbers.readable(8.123))
        assert.equal('98.1', numbers.readable(98.123))
        assert.equal('998', numbers.readable(998.123))
        assert.equal('9,988', numbers.readable(9988.123))
        assert.equal('9,988', numbers.readable(9987.923))
        assert.equal('12,345', numbers.readable(12345.123412))
        assert.equal('123,456', numbers.readable(123456.123412))
        assert.equal('1.23M', numbers.readable(1234567.123412))
        assert.equal('12.3M', numbers.readable(12345678.123412))
        assert.equal('123M', numbers.readable(123456789.123412))
        assert.equal('1.23B', numbers.readable(1234567890.123412))
        assert.equal('12.3B', numbers.readable(12345678901.123412))
        assert.equal('123B', numbers.readable(123456789012.123412))
        assert.equal('1.23T', numbers.readable(1234567890123.123412))
      })
    })
  })
}